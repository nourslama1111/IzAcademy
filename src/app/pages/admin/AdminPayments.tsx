import { AdminLayout } from '../../components/AdminLayout';
import { Search, Download } from 'lucide-react';
import { useState } from 'react';

export function AdminPayments() {
  const [searchQuery, setSearchQuery] = useState('');

  const payments = [
    { id: 1, user: 'Jean Dupont', course: 'Développement Web Full Stack', amount: '99€', date: '2026-03-10', status: 'completed' },
    { id: 2, user: 'Sophie Martin', course: 'Data Science avec Python', amount: '129€', date: '2026-03-09', status: 'completed' },
    { id: 3, user: 'Thomas Dubois', course: 'Design UX/UI Moderne', amount: '89€', date: '2026-03-08', status: 'pending' },
    { id: 4, user: 'Marie Laurent', course: 'Marketing Digital', amount: '79€', date: '2026-03-07', status: 'completed' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1>Gestion des paiements</h1>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exporter
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="text-sm text-muted-foreground mb-2">Revenus totaux</div>
            <div className="text-3xl font-bold">45,890€</div>
          </div>
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="text-sm text-muted-foreground mb-2">Ce mois-ci</div>
            <div className="text-3xl font-bold">12,340€</div>
          </div>
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="text-sm text-muted-foreground mb-2">En attente</div>
            <div className="text-3xl font-bold">890€</div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un paiement..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-accent/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left">Utilisateur</th>
                <th className="px-6 py-4 text-left">Cours</th>
                <th className="px-6 py-4 text-left">Montant</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Statut</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-4 font-medium">{payment.user}</td>
                  <td className="px-6 py-4 text-muted-foreground">{payment.course}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">{payment.amount}</td>
                  <td className="px-6 py-4 text-muted-foreground">{new Date(payment.date).toLocaleDateString('fr-FR')}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      payment.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {payment.status === 'completed' ? 'Complété' : 'En attente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
