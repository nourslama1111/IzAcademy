import { StudentLayout } from '../../components/StudentLayout';
import { useParams, Link, useNavigate } from 'react-router';
import { CheckCircle, XCircle, Award, Lock, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StudentQuiz() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [canAccessQuiz, setCanAccessQuiz] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Vérifier si l'étudiant a terminé toutes les leçons
  useEffect(() => {
    const checkAccess = () => {
      const savedCompleted = localStorage.getItem(`course_${courseId}_completed`);
      const totalLessons = 9; // Total des leçons du cours

      if (savedCompleted) {
        const completedLessons = JSON.parse(savedCompleted);
        if (completedLessons.length >= totalLessons) {
          setCanAccessQuiz(true);
        }
      }
      setIsChecking(false);
    };

    checkAccess();
  }, [courseId]);

  const quiz = {
    courseTitle: 'Développement Web Full Stack',
    questions: [
      {
        id: 0,
        question: 'Qu\'est-ce que React ?',
        answers: [
          'Un langage de programmation',
          'Une bibliothèque JavaScript pour construire des interfaces utilisateur',
          'Un framework CSS',
          'Un système de base de données',
        ],
        correctAnswer: 1,
      },
      {
        id: 1,
        question: 'Quelle méthode HTTP est utilisée pour récupérer des données ?',
        answers: ['POST', 'PUT', 'GET', 'DELETE'],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: 'Qu\'est-ce qu\'un hook en React ?',
        answers: [
          'Une fonction qui permet d\'utiliser les fonctionnalités de React dans les composants fonctionnels',
          'Un type de variable',
          'Un composant React',
          'Une méthode de style CSS',
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: 'Que signifie API ?',
        answers: [
          'Application Programming Internet',
          'Advanced Programming Interface',
          'Application Programming Interface',
          'Automated Program Integration',
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: 'Quel est le rôle de MongoDB ?',
        answers: [
          'Gérer le frontend',
          'Stocker et gérer les données',
          'Créer des interfaces utilisateur',
          'Compiler le code',
        ],
        correctAnswer: 1,
      },
    ],
  };

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answerId });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: quiz.questions.length,
      percentage: Math.round((correct / quiz.questions.length) * 100),
    };
  };

  const score = calculateScore();
  const passed = score.percentage >= 70;

  // Affichage pendant la vérification
  if (isChecking) {
    return (
      <StudentLayout>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-xl p-8 text-center">
            <div className="animate-pulse">
              <p className="text-muted-foreground">Vérification de l'accès...</p>
            </div>
          </div>
        </div>
      </StudentLayout>
    );
  }

  // Bloquer l'accès si toutes les leçons ne sont pas terminées
  if (!canAccessQuiz) {
    return (
      <StudentLayout>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-yellow-100 mx-auto mb-6 flex items-center justify-center">
                <Lock className="w-12 h-12 text-yellow-600" />
              </div>
              <h1 className="mb-4">Quiz verrouillé</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Vous devez terminer toutes les leçons du cours avant d'accéder au quiz final.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2 text-yellow-900">Conditions pour passer le quiz :</h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                      Visionner toutes les vidéos du cours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                      Marquer chaque leçon comme terminée
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                      Atteindre 100% de progression dans le cours
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link
                to={`/student/course/${courseId}`}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
              >
                Retour au cours
              </Link>
              <Link
                to="/student/courses"
                className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition"
              >
                Mes cours
              </Link>
            </div>
          </div>
        </div>
      </StudentLayout>
    );
  }

  if (showResults) {
    return (
      <StudentLayout>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-xl p-8 text-center">
            <div
              className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
                passed ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              {passed ? (
                <CheckCircle className="w-12 h-12 text-green-600" />
              ) : (
                <XCircle className="w-12 h-12 text-red-600" />
              )}
            </div>

            <h1 className="mb-4">
              {passed ? 'Félicitations !' : 'Quiz non réussi'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Vous avez obtenu {score.correct} / {score.total} ({score.percentage}%)
            </p>

            {passed ? (
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Vous avez validé le quiz ! Vous pouvez maintenant choisir un projet à réaliser.
                </p>
                <Link
                  to="/student/projects"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                >
                  <Award className="w-5 h-5" />
                  Choisir un projet
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Score minimum requis : 70%. Révisez le cours et réessayez.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    to={`/student/course/${courseId}`}
                    className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition"
                  >
                    Revoir le cours
                  </Link>
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setSelectedAnswers({});
                      setShowResults(false);
                    }}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                  >
                    Réessayer
                  </button>
                </div>
              </div>
            )}

            {/* Detailed Results */}
            <div className="mt-12 pt-8 border-t border-border text-left">
              <h3 className="mb-6">Résultats détaillés</h3>
              <div className="space-y-4">
                {quiz.questions.map((question) => {
                  const isCorrect =
                    selectedAnswers[question.id] === question.correctAnswer;
                  return (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg ${
                        isCorrect ? 'bg-green-50' : 'bg-red-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium mb-2">{question.question}</p>
                          <p className="text-sm text-muted-foreground">
                            Votre réponse :{' '}
                            {selectedAnswers[question.id] !== undefined
                              ? question.answers[selectedAnswers[question.id]]
                              : 'Aucune réponse'}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-700 mt-1">
                              Bonne réponse : {question.answers[question.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </StudentLayout>
    );
  }

  const question = quiz.questions[currentQuestion];
  const answeredQuestions = Object.keys(selectedAnswers).length;
  const allAnswered = answeredQuestions === quiz.questions.length;

  return (
    <StudentLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <Link
            to={`/student/course/${courseId}`}
            className="text-primary hover:underline mb-2 inline-block"
          >
            ← Retour au cours
          </Link>
          <h1 className="mb-2">Quiz Final</h1>
          <p className="text-muted-foreground">{quiz.courseTitle}</p>
        </div>

        {/* Progress */}
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">
              Question {currentQuestion + 1} sur {quiz.questions.length}
            </span>
            <span className="text-muted-foreground">
              {answeredQuestions} / {quiz.questions.length} répondues
            </span>
          </div>
          <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{
                width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white border border-border rounded-xl p-8">
          <h2 className="mb-8">{question.question}</h2>

          <div className="space-y-3">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`
                  w-full p-4 text-left rounded-lg border-2 transition
                  ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-accent'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary'
                        : 'border-border'
                    }
                  `}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span>{answer}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>

          <div className="flex gap-2">
            {quiz.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition
                  ${
                    index === currentQuestion
                      ? 'bg-primary text-primary-foreground'
                      : selectedAnswers[index] !== undefined
                      ? 'bg-green-100 text-green-700'
                      : 'bg-accent text-muted-foreground'
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestion === quiz.questions.length - 1 && allAnswered ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Soumettre le quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentQuestion === quiz.questions.length - 1}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Suivant
            </button>
          )}
        </div>
      </div>
    </StudentLayout>
  );
}
