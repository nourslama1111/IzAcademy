import { AdminLayout } from '../../components/AdminLayout';
import { Link } from 'react-router';
import { Users, BookOpen, DollarSign, TrendingUp, ArrowUp, ArrowDown, Bell, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminDashboard() {
  const stats = [
    {
      label: 'Utilisateurs totaux',
      value: '2,547',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      label: 'Cours actifs',
      value: '156',
      change: '+8.2%',
      trend: 'up',
      icon: BookOpen,
      color: 'text-green-600',
    },
    {
      label: 'Revenus mensuels',
      value: '45,890€',
      change: '+23.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-yellow-600',
    },
    {
      label: 'Taux de conversion',
      value: '3.2%',
      change: '-2.4%',
      trend: 'down',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
  ];

  const recentUsers = [
    { name: 'Sophie Martin', email: 'sophie.m@email.com', role: 'Étudiant', date: 'Aujourd\'hui' },
    { name: 'Thomas Dubois', email: 'thomas.d@email.com', role: 'Étudiant', date: 'Hier' },
    { name: 'Pierre Laurent', email: 'pierre.l@email.com', role: 'Formateur', date: 'Il y a 2 jours' },
  ];

  const popularCourses = [
    { title: 'Développement Web Full Stack', students: 1234, revenue: '12,340€' },
    { title: 'Data Science avec Python', students: 892, revenue: '11,500€' },
    { title: 'Design UX/UI Moderne', students: 756, revenue: '6,700€' },
  ];

  // Données pour les graphiques
  const revenueData = [
    { month: 'Jan', revenue: 35000 },
    { month: 'Fév', revenue: 38000 },
    { month: 'Mar', revenue: 42000 },
    { month: 'Avr', revenue: 39000 },
    { month: 'Mai', revenue: 43000 },
    { month: 'Juin', revenue: 45890 },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 320 },
    { month: 'Fév', students: 380 },
    { month: 'Mar', students: 450 },
    { month: 'Avr', students: 420 },
    { month: 'Mai', students: 480 },
    { month: 'Juin', students: 547 },
  ];

  const pendingRequests = 5; // Nombre de demandes en attente

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Tableau de bord administrateur</h1>
            <p className="text-muted-foreground">
              Vue d'ensemble de la plateforme Iz Academy
            </p>
          </div>
          <Link to="/admin/enrollment-requests">
            <Button variant="outline" className="relative">
              <Bell className="w-5 h-5 mr-2" />
              Demandes d'inscription
              {pendingRequests > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {pendingRequests}
                </span>
              )}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-accent ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Graphiques */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Revenus mensuels</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nouvelles inscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-border rounded-xl p-6">
            <h2 className="mb-6">Utilisateurs récents</h2>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-accent/50 rounded-lg"
                >
                  <div>
                    <div className="font-medium mb-1">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium mb-1">{user.role}</div>
                    <div className="text-xs text-muted-foreground">{user.date}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/admin/users" className="block mt-4">
              <Button variant="outline" className="w-full">
                <Eye className="w-4 h-4 mr-2" />
                Voir tous les utilisateurs
              </Button>
            </Link>
          </div>

          <div className="bg-white border border-border rounded-xl p-6">
            <h2 className="mb-6">Cours populaires</h2>
            <div className="space-y-4">
              {popularCourses.map((course, index) => (
                <div key={index} className="p-4 bg-accent/50 rounded-lg">
                  <div className="font-medium mb-3">{course.title}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {course.students} étudiants
                    </span>
                    <span className="font-semibold text-green-600">{course.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/admin/courses" className="block mt-4">
              <Button variant="outline" className="w-full">
                <Eye className="w-4 h-4 mr-2" />
                Voir tous les cours
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}