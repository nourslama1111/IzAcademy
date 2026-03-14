import { AdminLayout } from '../../components/AdminLayout';
import { Plus, Edit, Trash2 } from 'lucide-react';

export function AdminSubscriptions() {
  const plans = [
    { id: 1, name: 'Gratuit', price: '0€', period: 'mois', features: ['3 cours gratuits', 'Support communautaire', 'Certificats basiques'], users: 1240, color: 'gray' },
    { id: 2, name: 'Mensuel', price: '29€', period: 'mois', features: ['Accès illimité', 'Support prioritaire', 'Tous les certificats', 'Projets pratiques'], users: 450, color: 'blue' },
    { id: 3, name: 'Annuel', price: '290€', period: 'an', features: ['Tout du Mensuel', '2 mois gratuits', 'Mentorat individuel', 'Accès anticipé'], users: 180, color: 'purple' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1>Gestion des abonnements</h1>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Créer un plan
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white border-2 border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
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

              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-3">{plan.users} utilisateurs actifs</div>
                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
