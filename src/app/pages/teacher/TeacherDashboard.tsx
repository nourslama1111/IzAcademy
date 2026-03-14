import { TeacherLayout } from '../../components/TeacherLayout';
import { Users, MessageSquare, CheckCircle, TrendingUp, Award } from 'lucide-react';

export function TeacherDashboard() {
  const stats = [
    { label: 'Étudiants actifs', value: '156', icon: Users, color: 'text-blue-600' },
    { label: 'Messages non lus', value: '12', icon: MessageSquare, color: 'text-green-600' },
    { label: 'Projets à valider', value: '8', icon: CheckCircle, color: 'text-yellow-600' },
    { label: 'Taux de réussite', value: '87%', icon: TrendingUp, color: 'text-purple-600' },
  ];

  const recentActivities = [
    {
      type: 'comment',
      student: 'Jean Dupont',
      action: 'a posté un commentaire sur',
      lesson: 'React Hooks avancés',
      time: 'Il y a 30 minutes',
    },
    {
      type: 'project',
      student: 'Sophie Martin',
      action: 'a soumis un projet pour',
      lesson: 'Application Todo List',
      time: 'Il y a 1 heure',
    },
    {
      type: 'message',
      student: 'Thomas Dubois',
      action: 'vous a envoyé un message',
      lesson: '',
      time: 'Il y a 2 heures',
    },
    {
      type: 'completed',
      student: 'Marie Laurent',
      action: 'a terminé le cours',
      lesson: 'Développement Web Full Stack',
      time: 'Il y a 3 heures',
    },
  ];

  const topStudents = [
    { name: 'Sophie Martin', progress: 95, completedLessons: 45, avatar: 'SM' },
    { name: 'Thomas Dubois', progress: 89, completedLessons: 42, avatar: 'TD' },
    { name: 'Marie Laurent', progress: 85, completedLessons: 40, avatar: 'ML' },
    { name: 'Jean Dupont', progress: 82, completedLessons: 38, avatar: 'JD' },
  ];

  return (
    <TeacherLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="mb-2">Tableau de bord formateur</h1>
          <p className="text-muted-foreground">
            Bienvenue, Marie ! Voici un aperçu de votre activité.
          </p>
        </div>

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
          <div className="lg:col-span-2 space-y-6">
            <h2>Activité récente</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                      p-3 rounded-lg
                      ${activity.type === 'comment' ? 'bg-blue-100 text-blue-600' : ''}
                      ${activity.type === 'project' ? 'bg-yellow-100 text-yellow-600' : ''}
                      ${activity.type === 'message' ? 'bg-green-100 text-green-600' : ''}
                      ${activity.type === 'completed' ? 'bg-purple-100 text-purple-600' : ''}
                    `}
                    >
                      {activity.type === 'comment' && <MessageSquare className="w-5 h-5" />}
                      {activity.type === 'project' && <CheckCircle className="w-5 h-5" />}
                      {activity.type === 'message' && <MessageSquare className="w-5 h-5" />}
                      {activity.type === 'completed' && <Award className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="mb-1">
                        <span className="font-semibold">{activity.student}</span>{' '}
                        {activity.action}{' '}
                        {activity.lesson && (
                          <span className="font-semibold">{activity.lesson}</span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2>Meilleurs étudiants</h2>
            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {student.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {student.completedLessons} leçons terminées
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-semibold">{student.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
