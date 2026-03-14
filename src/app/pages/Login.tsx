import { Link, useNavigate } from 'react-router';
import { GraduationCap, Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion
    localStorage.setItem('isLoggedIn', 'true');
    toast.success('Connexion réussie !');
    navigate('/student');
  };

  const quickLogin = (role: 'student' | 'teacher' | 'admin') => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
    toast.success('Connexion rapide réussie !');
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center p-8 bg-accent/30">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <GraduationCap className="w-10 h-10 text-primary" />
              <span className="font-semibold text-2xl">Iz Academy</span>
            </Link>
            <h1 className="mb-2">Connexion</h1>
            <p className="text-muted-foreground">
              Accédez à votre espace d'apprentissage
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
              >
                Se connecter
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Pas encore de compte ? </span>
              <Link to="/register" className="text-primary hover:underline">
                Créer un compte
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-center text-muted-foreground mb-4">
                Connexion rapide pour démo :
              </p>
              <div className="space-y-2 text-sm">
                <Link
                  to="/student"
                  className="block w-full px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition text-center"
                  onClick={() => quickLogin('student')}
                >
                  Étudiant
                </Link>
                <Link
                  to="/teacher"
                  className="block w-full px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition text-center"
                  onClick={() => quickLogin('teacher')}
                >
                  Formateur
                </Link>
                <Link
                  to="/admin"
                  className="block w-full px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition text-center"
                  onClick={() => quickLogin('admin')}
                >
                  Administrateur
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block flex-1 bg-gradient-to-br from-primary via-primary to-[#1a1a2e] text-primary-foreground p-12">
        <div className="h-full flex flex-col justify-center max-w-lg mx-auto">
          <h2 className="text-4xl mb-6">Développez vos compétences avec Iz Academy</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Accédez à plus de 150 cours en ligne créés par des experts.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Cours de qualité</div>
                <div className="text-primary-foreground/80">
                  Contenus créés par des professionnels
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Certification</div>
                <div className="text-primary-foreground/80">
                  Certificats reconnus à la fin de chaque cours
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <div className="font-semibold mb-1">Support formateur</div>
                <div className="text-primary-foreground/80">
                  Communiquez directement avec vos formateurs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}