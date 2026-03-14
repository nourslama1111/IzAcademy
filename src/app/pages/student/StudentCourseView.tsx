import { StudentLayout } from '../../components/StudentLayout';
import { useParams, Link } from 'react-router';
import {
  Play,
  CheckCircle,
  Lock,
  ChevronDown,
  ChevronUp,
  FileText,
  Video,
  MessageSquare,
  Send,
  ThumbsUp,
  Award,
} from 'lucide-react';
import { useState, useEffect } from 'react';

export function StudentCourseView() {
  const { courseId } = useParams();
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [comment, setComment] = useState('');
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  // Charger les leçons complétées depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`course_${courseId}_completed`);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, [courseId]);

  // Sauvegarder les leçons complétées dans localStorage
  useEffect(() => {
    if (completedLessons.length > 0) {
      localStorage.setItem(`course_${courseId}_completed`, JSON.stringify(completedLessons));
    }
  }, [completedLessons, courseId]);

  const course = {
    id: courseId,
    title: 'Développement Web Full Stack',
    instructor: 'Marie Dubois',
    sections: [
      {
        id: 0,
        title: 'Introduction au développement web',
        lessons: [
          { id: 0, title: 'Présentation du cours', type: 'video', duration: '10:23' },
          { id: 1, title: 'Configuration de l\'environnement', type: 'video', duration: '15:45' },
          { id: 2, title: 'HTML et CSS de base', type: 'video', duration: '25:30' },
        ],
      },
      {
        id: 1,
        title: 'JavaScript moderne',
        lessons: [
          { id: 3, title: 'Variables et types de données', type: 'video', duration: '18:20' },
          { id: 4, title: 'Fonctions et scope', type: 'video', duration: '22:15' },
          { id: 5, title: 'Programmation orientée objet', type: 'video', duration: '30:45' },
        ],
      },
      {
        id: 2,
        title: 'React Fondamentaux',
        lessons: [
          { id: 6, title: 'Introduction à React', type: 'video', duration: '20:10' },
          { id: 7, title: 'Composants et Props', type: 'video', duration: '25:35' },
          { id: 8, title: 'State et Lifecycle', type: 'video', duration: '28:50' },
        ],
      },
    ],
  };

  const currentLesson = course.sections
    .flatMap((s) => s.lessons)
    .find((l) => l.id === selectedLesson) || course.sections[0].lessons[0];

  const comments = [
    {
      id: 1,
      author: 'Sophie Martin',
      avatar: 'SM',
      content: 'Excellente explication sur les hooks ! Merci beaucoup.',
      time: 'Il y a 2 heures',
      likes: 5,
    },
    {
      id: 2,
      author: 'Thomas Dubois',
      avatar: 'TD',
      content: 'J\'ai une question sur l\'utilisation de useEffect...',
      time: 'Il y a 5 heures',
      likes: 2,
      reply: {
        author: 'Marie Dubois (Formateur)',
        content: 'Excellente question ! useEffect est utilisé pour...',
        time: 'Il y a 4 heures',
      },
    },
  ];

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const markLessonAsCompleted = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);
    }
  };

  const isLessonCompleted = (lessonId: number) => completedLessons.includes(lessonId);

  const totalLessons = course.sections.flatMap((s) => s.lessons).length;
  const completedCount = completedLessons.length;
  const progress = Math.round((completedCount / totalLessons) * 100);
  const allLessonsCompleted = completedCount === totalLessons;

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/student/courses" className="text-primary hover:underline mb-2 inline-block">
            ← Retour à mes cours
          </Link>
          <h1 className="mb-2">{course.title}</h1>
          <p className="text-muted-foreground">Par {course.instructor}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video Player and Comments */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="aspect-video bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p>Lecteur vidéo - {currentLesson.title}</p>
                  <p className="text-sm text-white/70 mt-2">{currentLesson.duration}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="mb-2">{currentLesson.title}</h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      {currentLesson.duration}
                    </span>
                    {isLessonCompleted(currentLesson.id) && (
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        Terminée
                      </span>
                    )}
                  </div>
                  {!isLessonCompleted(currentLesson.id) && (
                    <button
                      onClick={() => markLessonAsCompleted(currentLesson.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Marquer comme terminée
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="mb-4">Ressources de la leçon</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition"
                >
                  <FileText className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="font-medium">Support de cours.pdf</div>
                    <div className="text-sm text-muted-foreground">2.4 MB</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition"
                >
                  <FileText className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="font-medium">Code source.zip</div>
                    <div className="text-sm text-muted-foreground">1.2 MB</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="mb-6">Commentaires ({comments.length})</h3>

              {/* Add Comment */}
              <div className="mb-6">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Posez votre question ou partagez votre avis..."
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Publier
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id}>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="bg-accent rounded-lg p-4">
                          <div className="font-medium mb-1">{comment.author}</div>
                          <p className="text-muted-foreground">{comment.content}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary">
                            <ThumbsUp className="w-4 h-4" />
                            {comment.likes}
                          </button>
                          <button className="hover:text-primary">Répondre</button>
                          <span>{comment.time}</span>
                        </div>

                        {/* Reply */}
                        {comment.reply && (
                          <div className="flex gap-3 mt-4 ml-8">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                              MD
                            </div>
                            <div className="flex-1">
                              <div className="bg-blue-50 rounded-lg p-4">
                                <div className="font-medium mb-1 text-blue-900">
                                  {comment.reply.author}
                                </div>
                                <p className="text-muted-foreground">{comment.reply.content}</p>
                              </div>
                              <div className="text-xs text-muted-foreground mt-2">
                                {comment.reply.time}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Content Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="mb-4">Progression du cours</h3>
              <div className="mb-2">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">
                    {completedCount} / {totalLessons} leçons
                  </span>
                  <span className="font-semibold">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {allLessonsCompleted ? (
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-green-800">
                      <p className="font-medium mb-1">Félicitations !</p>
                      <p>Vous avez terminé toutes les leçons. Vous pouvez maintenant passer le quiz final.</p>
                    </div>
                  </div>
                  <Link
                    to={`/student/quiz/${courseId}`}
                    className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center flex items-center justify-center gap-2"
                  >
                    <Award className="w-5 h-5" />
                    Passer le quiz final
                  </Link>
                </div>
              ) : (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium mb-1">Quiz verrouillé</p>
                      <p>Terminez toutes les leçons pour débloquer le quiz final.</p>
                      <p className="mt-2 text-xs">
                        Il vous reste <span className="font-semibold">{totalLessons - completedCount}</span> leçon{totalLessons - completedCount > 1 ? 's' : ''} à terminer.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sections and Lessons */}
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3>Contenu du cours</h3>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {course.sections.map((section) => (
                  <div key={section.id} className="border-b border-border last:border-b-0">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-4 flex items-center justify-between hover:bg-accent transition"
                    >
                      <span className="font-medium">{section.title}</span>
                      {expandedSections.includes(section.id) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    {expandedSections.includes(section.id) && (
                      <div className="bg-accent/30">
                        {section.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setSelectedLesson(lesson.id)}
                            className={`
                              w-full p-4 flex items-center gap-3 hover:bg-accent transition text-left
                              ${selectedLesson === lesson.id ? 'bg-accent' : ''}
                            `}
                          >
                            {isLessonCompleted(lesson.id) ? (
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <Play className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{lesson.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
