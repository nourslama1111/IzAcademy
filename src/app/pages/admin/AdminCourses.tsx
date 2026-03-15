import { Link } from 'react-router';
import { AdminLayout } from '../../components/AdminLayout';
import { Search, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { useState } from 'react';

export function AdminCourses() {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { id: 1, title: 'Développement Web Full Stack', category: 'Développement', students: 1234, price: '99€', status: 'active', teacher: 'Marie Dubois' },
    { id: 2, title: 'Data Science avec Python', category: 'Data Science', students: 892, price: '129€', status: 'active', teacher: 'Thomas Martin' },
    { id: 3, title: 'Design UX/UI Moderne', category: 'Design', students: 756, price: '89€', status: 'active', teacher: 'Sophie Laurent' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1>Gestion des cours</h1>
          <Link to="/admin/create-course">
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2">
    <Plus className="w-4 h-4" />
    Créer un cours
  </button>
</Link>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un cours..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Formateur: {course.teacher}</span>
                    <span>•</span>
                    <span>{course.category}</span>
                    <span>•</span>
                    <span>{course.students} étudiants</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-accent rounded-lg transition" title="Voir">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-accent rounded-lg transition" title="Modifier">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition" title="Supprimer">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Actif
                </span>
                <span className="font-semibold text-green-600">{course.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
