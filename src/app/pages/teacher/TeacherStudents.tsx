import { TeacherLayout } from '../../components/TeacherLayout';
import { Search, TrendingUp, Mail, Eye } from 'lucide-react';
import { useState } from 'react';

export function TeacherStudents() {
  const [searchQuery, setSearchQuery] = useState('');

  const students = [
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      progress: 65,
      completedLessons: 31,
      totalLessons: 48,
      lastActive: '2 heures',
      avatar: 'JD',
    },
    {
      id: 2,
      name: 'Sophie Martin',
      email: 'sophie.martin@email.com',
      progress: 95,
      completedLessons: 45,
      totalLessons: 48,
      lastActive: '1 heure',
      avatar: 'SM',
    },
    {
      id: 3,
      name: 'Thomas Dubois',
      email: 'thomas.dubois@email.com',
      progress: 45,
      completedLessons: 18,
      totalLessons: 40,
      lastActive: '5 heures',
      avatar: 'TD',
    },
    {
      id: 4,
      name: 'Marie Laurent',
      email: 'marie.laurent@email.com',
      progress: 80,
      completedLessons: 26,
      totalLessons: 32,
      lastActive: '3 heures',
      avatar: 'ML',
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TeacherLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Mes étudiants</h1>
            <p className="text-muted-foreground">
              Suivez la progression de vos étudiants
            </p>
          </div>
          <div className="text-3xl font-bold">{students.length}</div>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un étudiant..."
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {student.avatar}
                  </div>
                  <div>
                    <h3 className="mb-1">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
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

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {student.completedLessons}/{student.totalLessons} leçons
                  </span>
                </div>
                <div className="text-muted-foreground">
                  Actif il y a {student.lastActive}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-accent transition flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Détails
                </button>
                <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TeacherLayout>
  );
}
