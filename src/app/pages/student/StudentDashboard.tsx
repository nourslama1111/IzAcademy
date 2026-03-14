import { StudentLayout } from '../../components/StudentLayout';
import { Link } from 'react-router';
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export function StudentDashboard() {
  const stats = [
    { label: 'Cours en cours', value: '3', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Heures d\'apprentissage', value: '47h', icon: Clock, color: 'text-green-600' },
    { label: 'Certificats obtenus', value: '2', icon: Award, color: 'text-yellow-600' },
    { label: 'Progression moyenne', value: '68%', icon: TrendingUp, color: 'text-purple-600' },
  ];

  const currentCourses = [
    {
      id: 1,
      title: 'Développement Web Full Stack',
      progress: 65,
      lastLesson: 'React Hooks avancés',
      nextLesson: 'State Management avec Redux',
      instructor: 'Marie Dubois',
    },
    {
      id: 2,
      title: 'Data Science avec Python',
      progress: 45,
      lastLesson: 'Pandas - Manipulation de données',
      nextLesson: 'Data Visualization avec Matplotlib',
      instructor: 'Thomas Martin',
    },
    {
      id: 3,
      title: 'Design UX/UI Moderne',
      progress: 80,
      lastLesson: 'Prototypage avec Figma',
      nextLesson: 'Tests utilisateurs',
      instructor: 'Sophie Laurent',
    },
  ];

  const recentActivities = [
    {
      type: 'completed',
      title: 'Leçon terminée',
      description: 'React Hooks avancés',
      time: 'Il y a 2 heures',
    },
    {
      type: 'comment',
      title: 'Nouveau commentaire',
      description: 'Le formateur a répondu à votre question',
      time: 'Il y a 5 heures',
    },
    {
      type: 'certificate',
      title: 'Certificat obtenu',
      description: 'Introduction à JavaScript',
      time: 'Il y a 2 jours',
    },
  ];

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="mb-2">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Bienvenue, Jean ! Continuez votre apprentissage.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-accent ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2>Mes cours en cours</h2>
              <Link
                to="/student/courses"
                className="text-primary hover:underline flex items-center gap-1"
              >
                Voir tout
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Par {course.instructor}
                      </p>
                    </div>
                    <Link
                      to={`/student/course/${course.id}`}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Continuer
                    </Link>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Dernière leçon
                      </div>
                      <div className="text-sm font-medium">{course.lastLesson}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Prochaine leçon</div>
                      <div className="text-sm font-medium">{course.nextLesson}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            <h2>Activité récente</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-4"
                >
                  <div className="flex gap-3">
                    <div
                      className={`
                      p-2 rounded-lg h-fit
                      ${activity.type === 'completed' ? 'bg-green-100 text-green-600' : ''}
                      ${activity.type === 'comment' ? 'bg-blue-100 text-blue-600' : ''}
                      ${activity.type === 'certificate' ? 'bg-yellow-100 text-yellow-600' : ''}
                    `}
                    >
                      {activity.type === 'completed' && <CheckCircle className="w-5 h-5" />}
                      {activity.type === 'comment' && <BookOpen className="w-5 h-5" />}
                      {activity.type === 'certificate' && <Award className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">{activity.title}</div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {activity.description}
                      </div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
