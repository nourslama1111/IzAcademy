import { AdminLayout } from '../../components/AdminLayout';
import { Search, Plus, Edit, Trash2, Eye, DollarSign } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import { Badge } from '../../components/ui/badge';

export function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const users = [
    { 
      id: 1, 
      name: 'Jean Dupont', 
      email: 'jean.dupont@email.com', 
      role: 'student', 
      status: 'active', 
      enrolledCourses: [
        { name: 'Développement Web Full Stack', progress: 65, status: 'in_progress' },
        { name: 'Data Science avec Python', progress: 45, status: 'in_progress' },
        { name: 'Introduction à JavaScript', progress: 100, status: 'completed' }
      ],
      currentCourse: 'Développement Web Full Stack',
      totalPaid: '257€'
    },
    { 
      id: 2, 
      name: 'Marie Dubois', 
      email: 'marie.dubois@email.com', 
      role: 'teacher', 
      status: 'active', 
      enrolledCourses: [],
      currentCourse: '-',
      totalPaid: '0€'
    },
    { 
      id: 3, 
      name: 'Sophie Martin', 
      email: 'sophie.m@email.com', 
      role: 'student', 
      status: 'active', 
      enrolledCourses: [
        { name: 'Design UX/UI Moderne', progress: 80, status: 'in_progress' },
        { name: 'Photographie Professionnelle', progress: 100, status: 'completed' },
        { name: 'Marketing Digital', progress: 30, status: 'in_progress' }
      ],
      currentCourse: 'Design UX/UI Moderne',
      totalPaid: '247€'
    },
    { 
      id: 4, 
      name: 'Thomas Martin', 
      email: 'thomas.m@email.com', 
      role: 'teacher', 
      status: 'active', 
      enrolledCourses: [],
      currentCourse: '-',
      totalPaid: '0€'
    },
  ];

  const user = selectedUser ? users.find(u => u.id === selectedUser) : null;

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1>Gestion des utilisateurs</h1>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Ajouter un utilisateur
          </button>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un utilisateur..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Tous les rôles</option>
              <option value="student">Étudiants</option>
              <option value="teacher">Formateurs</option>
              <option value="admin">Administrateurs</option>
            </select>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-accent/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left">Utilisateur</th>
                <th className="px-6 py-4 text-left">Rôle</th>
                <th className="px-6 py-4 text-left">Formation actuelle</th>
                <th className="px-6 py-4 text-left">Total payé</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-b-0 hover:bg-accent/30 transition">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      user.role === 'student' ? 'bg-blue-100 text-blue-700' :
                      user.role === 'teacher' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {user.role === 'student' ? 'Étudiant' : user.role === 'teacher' ? 'Formateur' : 'Admin'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">{user.currentCourse}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {user.totalPaid}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        className="p-2 hover:bg-accent rounded-lg transition"
                        onClick={() => setSelectedUser(user.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-accent rounded-lg transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dialog détails utilisateur */}
        <Dialog open={selectedUser !== null} onOpenChange={() => setSelectedUser(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Détails de l'utilisateur</DialogTitle>
              <DialogDescription>
                Informations complètes sur {user?.name}
              </DialogDescription>
            </DialogHeader>
            {user && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Nom</div>
                    <div className="font-medium">{user.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <div className="font-medium">{user.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Rôle</div>
                    <Badge>{user.role === 'student' ? 'Étudiant' : 'Formateur'}</Badge>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Total payé</div>
                    <div className="font-semibold text-green-600">{user.totalPaid}</div>
                  </div>
                </div>

                {user.enrolledCourses.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-3">Formations suivies ({user.enrolledCourses.length})</h3>
                    <div className="space-y-3">
                      {user.enrolledCourses.map((course, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <div className="font-medium">{course.name}</div>
                            <Badge variant={course.status === 'completed' ? 'default' : 'secondary'}>
                              {course.status === 'completed' ? 'Terminé' : 'En cours'}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Progression</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {user.enrolledCourses.length === 0 && user.role === 'student' && (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucune formation suivie pour le moment
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}