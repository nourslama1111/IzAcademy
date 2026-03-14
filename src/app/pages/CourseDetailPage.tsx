import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Star, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  BookOpen,
  Download,
  Play
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';

// Données mockées des cours
const coursesData = {
  1: {
    id: 1,
    title: 'Développement Web Full Stack',
    description: 'Apprenez à créer des applications web complètes avec React, Node.js et MongoDB',
    longDescription: 'Cette formation complète vous permettra de maîtriser l\'ensemble du développement web, du front-end au back-end. Vous apprendrez les technologies les plus demandées du marché et serez capable de créer des applications web professionnelles de A à Z.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Développement',
    level: 'Intermédiaire',
    instructor: 'Jean Dupont',
    students: 1234,
    rating: 4.8,
    reviews: 234,
    price: '99€',
    duration: '12 semaines',
    lessons: 48,
    objectives: [
      'Maîtriser React et ses concepts avancés (hooks, context, etc.)',
      'Créer des API RESTful avec Node.js et Express',
      'Gérer des bases de données MongoDB',
      'Déployer des applications en production',
      'Implémenter l\'authentification et la sécurité',
      'Utiliser Git et GitHub pour le versioning'
    ],
    modules: [
      {
        id: 1,
        title: 'Introduction au développement web',
        lessons: [
          'Les bases de HTML5 et CSS3',
          'Introduction à JavaScript moderne',
          'Environnement de développement'
        ]
      },
      {
        id: 2,
        title: 'React - Front-end moderne',
        lessons: [
          'Composants et Props',
          'State et Hooks',
          'Routing avec React Router',
          'Gestion d\'état avec Context API',
          'Projet pratique: Application de gestion'
        ]
      },
      {
        id: 3,
        title: 'Node.js et Express - Back-end',
        lessons: [
          'Introduction à Node.js',
          'Créer un serveur avec Express',
          'API RESTful',
          'Middleware et authentification',
          'Projet: API pour l\'application front-end'
        ]
      },
      {
        id: 4,
        title: 'MongoDB - Base de données',
        lessons: [
          'Introduction aux bases de données NoSQL',
          'CRUD avec MongoDB',
          'Mongoose ODM',
          'Relations et schémas',
          'Intégration avec Node.js'
        ]
      },
      {
        id: 5,
        title: 'Projet final et déploiement',
        lessons: [
          'Conception du projet final',
          'Développement de l\'application complète',
          'Tests et debugging',
          'Déploiement sur Heroku/Vercel',
          'Présentation du projet'
        ]
      }
    ],
    resources: [
      'Documentation officielle React',
      'Guide Node.js et Express',
      'Cheat sheets JavaScript ES6+',
      'Templates de code',
      'Accès à la communauté Discord'
    ]
  },
  2: {
    id: 2,
    title: 'Data Science avec Python',
    description: 'Maîtrisez l\'analyse de données et le machine learning avec Python',
    longDescription: 'Plongez dans le monde de la Data Science avec cette formation complète. Apprenez à manipuler, analyser et visualiser des données, puis créez vos propres modèles de machine learning.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Data Science',
    level: 'Avancé',
    instructor: 'Marie Martin',
    students: 892,
    rating: 4.9,
    reviews: 178,
    price: '129€',
    duration: '16 semaines',
    lessons: 64,
    objectives: [
      'Maîtriser Python pour l\'analyse de données',
      'Utiliser NumPy, Pandas et Matplotlib',
      'Créer des modèles de Machine Learning',
      'Comprendre les algorithmes d\'apprentissage',
      'Visualiser et interpréter les données',
      'Travailler sur des projets réels'
    ],
    modules: [
      {
        id: 1,
        title: 'Python pour la Data Science',
        lessons: [
          'Fondamentaux de Python',
          'NumPy et calcul scientifique',
          'Pandas pour la manipulation de données',
          'Visualisation avec Matplotlib et Seaborn'
        ]
      },
      {
        id: 2,
        title: 'Statistiques et probabilités',
        lessons: [
          'Statistiques descriptives',
          'Probabilités et distributions',
          'Tests d\'hypothèses',
          'Corrélation et régression'
        ]
      },
      {
        id: 3,
        title: 'Machine Learning',
        lessons: [
          'Introduction au ML',
          'Algorithmes supervisés',
          'Algorithmes non-supervisés',
          'Évaluation des modèles',
          'Feature engineering'
        ]
      }
    ],
    resources: [
      'Notebooks Jupyter interactifs',
      'Datasets pour la pratique',
      'Documentation scikit-learn',
      'Articles de recherche',
      'Projets de portfolio'
    ]
  }
};

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrollmentRequested, setEnrollmentRequested] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  // Récupérer le cours par ID
  const course = coursesData[Number(id) as keyof typeof coursesData];

  useEffect(() => {
    // Simuler la vérification de la connexion (à remplacer par votre logique d'auth)
    const logged = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(logged);

    // Vérifier si l'utilisateur a déjà demandé l'inscription
    const requests = JSON.parse(localStorage.getItem('enrollmentRequests') || '[]');
    setEnrollmentRequested(requests.includes(Number(id)));
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl mb-4">Cours non trouvé</h2>
            <Link to="/courses">
              <Button>Retour aux cours</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleEnrollment = () => {
    if (!isLoggedIn) {
      setShowLoginDialog(true);
      return;
    }

    // Enregistrer la demande d'inscription
    const requests = JSON.parse(localStorage.getItem('enrollmentRequests') || '[]');
    requests.push(Number(id));
    localStorage.setItem('enrollmentRequests', JSON.stringify(requests));
    setEnrollmentRequested(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-[#1a1a2e] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="border-white/40 text-white">
                  {course.level}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl mb-4">{course.title}</h1>
              <p className="text-xl text-primary-foreground/90 mb-6">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-primary-foreground/80">({course.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} étudiants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="text-sm text-primary-foreground/80">
                Formateur: {course.instructor}
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-xl overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                  <TabsTrigger value="curriculum">Programme</TabsTrigger>
                  <TabsTrigger value="resources">Ressources</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl mb-4">À propos de ce cours</h2>
                      <p className="text-muted-foreground mb-6">
                        {course.longDescription}
                      </p>

                      <h3 className="text-xl mb-4">Objectifs d'apprentissage</h3>
                      <ul className="space-y-3">
                        {course.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="curriculum" className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <Card key={module.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                            {moduleIndex + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl mb-2">{module.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {module.lessons.length} leçons
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2 ml-11">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center gap-3 py-2">
                              <Play className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="resources" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl mb-4">Ressources incluses</h2>
                      <ul className="space-y-3">
                        {course.resources.map((resource, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <Download className="w-5 h-5 text-primary" />
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {course.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Paiement unique
                    </div>
                  </div>

                  {enrollmentRequested ? (
                    <Button className="w-full" disabled>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Demande envoyée
                    </Button>
                  ) : (
                    <Button className="w-full" onClick={handleEnrollment}>
                      Demander à s'inscrire à la formation
                    </Button>
                  )}

                  <div className="mt-6 pt-6 border-t border-border space-y-4">
                    <h3 className="font-semibold mb-3">Ce cours inclut :</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <BookOpen className="w-5 h-5 text-muted-foreground" />
                      <span>{course.lessons} leçons</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span>{course.duration} de formation</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Award className="w-5 h-5 text-muted-foreground" />
                      <span>Certificat à l'issue</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <span>Accès à la communauté</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Login Dialog */}
      <AlertDialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Connexion requise</AlertDialogTitle>
            <AlertDialogDescription>
              Vous devez vous connecter ou vous inscrire pour demander l'accès à cette formation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={() => navigate('/login')}>
              Se connecter
            </AlertDialogAction>
            <AlertDialogAction onClick={() => navigate('/register')}>
              S'inscrire
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
}
