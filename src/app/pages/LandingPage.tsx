import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
} from 'lucide-react';

export function LandingPage() {
  const courses = [
    {
      id: 1,
      title: 'Développement Web Full Stack',
      description:
        'Apprenez à créer des applications web complètes avec React, Node.js et MongoDB',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      category: 'Développement',
      students: 1234,
      rating: 4.8,
      price: '99€',
    },
    {
      id: 2,
      title: 'Data Science avec Python',
      description:
        "Maîtrisez l'analyse de données et le machine learning avec Python",
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      category: 'Data Science',
      students: 892,
      rating: 4.9,
      price: '129€',
    },
    {
      id: 3,
      title: 'Design UX/UI Moderne',
      description:
        'Créez des interfaces utilisateur élégantes et intuitives',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      category: 'Design',
      students: 756,
      rating: 4.7,
      price: '89€',
    },
    {
      id: 4,
      title: 'Marketing Digital',
      description:
        'Développez vos compétences en marketing digital et réseaux sociaux',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      category: 'Marketing',
      students: 1045,
      rating: 4.6,
      price: '79€',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Martin',
      role: 'Développeuse Web',
      content:
        "Iz Academy m'a permis de changer de carrière. Les cours sont excellents et les formateurs très disponibles.",
      rating: 5,
    },
    {
      name: 'Thomas Dubois',
      role: 'Data Analyst',
      content:
        "Une plateforme intuitive avec des cours de qualité. J'ai pu progresser à mon rythme.",
      rating: 5,
    },
    {
      name: 'Marie Laurent',
      role: 'Designer UX',
      content:
        "Les projets pratiques sont vraiment enrichissants. J'ai obtenu mon certificat en 3 mois.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-pink-100" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-primary">
                Apprenez à votre rythme avec Iz Academy
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Développez vos compétences avec nos cours en ligne de qualité.
                Formateurs experts, projets pratiques et certification garantie.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#demo"
                  className="px-8 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,82,233,0.5)] inline-flex items-center gap-2"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #000000, #000000)',
                  }}
                >
                  Voir démonstration
                  <ArrowRight className="w-5 h-5" />
                </a>

                <Link
                  to="/courses"
                  className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_25px_rgba(105,63,203,0.3)]"
                >
                  Découvrir les cours
                </Link>
              </div>
            </div>

            {/* Right stats card */}
            <div className="hidden md:flex justify-end">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,98,160,0.4)]">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">5000+</div>
                    <div className="text-gray-600">Étudiants</div>
                  </div>

                  <div>
                    <div className="text-4xl font-bold mb-2">150+</div>
                    <div className="text-gray-600">Cours</div>
                  </div>

                  <div>
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-gray-600">Formateurs</div>
                  </div>

                  <div>
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Pourquoi choisir Iz Academy ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour votre apprentissage en ligne
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Cours de qualité</h3>
              <p className="text-muted-foreground">
                Des contenus créés par des experts du domaine
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Communauté active</h3>
              <p className="text-muted-foreground">
                Échangez avec les formateurs et autres étudiants
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Certification</h3>
              <p className="text-muted-foreground">
                Obtenez un certificat reconnu après validation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Suivi personnalisé</h3>
              <p className="text-muted-foreground">
                Suivez votre progression en temps réel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Nos cours populaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos formations les plus demandées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(56,82,233,0.4)] group"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">
                    {course.category}
                  </div>
                  <h3 className="mb-2 line-clamp-1">{course.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {course.students} étudiants
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{course.price}</span>
                    <Link
                      to="/register"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,82,233,0.5)] inline-block"
            >
              Voir tous les cours
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des milliers d'étudiants nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(105,63,203,0.3)]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Découvrez Iz Academy en action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez notre plateforme et voyez comment elle facilite
              l'apprentissage pour tous
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
<div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,82,233,0.45),0_0_60px_rgba(105,63,203,0.35),0_0_90px_rgba(223,98,160,0.3)] group"
            >
              <img   src="https://images.unsplash.com/photo-1771054244019-96f9db9720b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHZpZGVvJTIwY29uZmVyZW5jZSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzM1MTI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Démo de la plateforme Iz Academy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition">
                <button
                  type="button"
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                >
                  <Play className="w-10 h-10 text-primary ml-1" />
                </button>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interface intuitive</h3>
                  <p className="text-muted-foreground text-sm">
                    Navigation simple et claire pour étudiants, formateurs et
                    administrateurs
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Progression en temps réel
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Suivez votre avancement et débloquez les quiz après avoir
                    complété les leçons
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Validation par des experts
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Vos projets sont évalués par des formateurs professionnels
                    avec feedback détaillé
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Certification reconnue
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Obtenez votre certificat automatiquement en remplissant les
                    critères de réussite
                  </p>
                </div>
              </div>

              {/*<div className="pt-4">
                <Link
                  to="/register"
                  className="px-8 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,82,233,0.5)] inline-flex items-center gap-2"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #3852e9, #693fcb)',
                  }}
                >
                  Commencer gratuitement
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Restez informé</h2>
          <p className="text-muted-foreground mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières
            actualités
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,82,233,0.5)]"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}