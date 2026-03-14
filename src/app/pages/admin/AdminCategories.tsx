import { AdminLayout } from '../../components/AdminLayout';
import { Plus, Edit, Trash2 } from 'lucide-react';

export function AdminCategories() {
  const categories = [
    { id: 1, name: 'Développement', courses: 45, color: 'blue' },
    { id: 2, name: 'Data Science', courses: 28, color: 'green' },
    { id: 3, name: 'Design', courses: 32, color: 'purple' },
    { id: 4, name: 'Marketing', courses: 19, color: 'yellow' },
    { id: 5, name: 'Business', courses: 24, color: 'red' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1>Gestion des catégories</h1>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Ajouter une catégorie
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center`}>
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.courses} cours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-accent rounded-lg transition">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
