import { useState } from 'react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Search, Filter, Star, Users } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';

// Données mockées pour les cours
const allCourses = [
  {
    id: 1,
    title: 'Développement Web Full Stack',
    description: 'Apprenez à créer des applications web complètes avec React, Node.js et MongoDB',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Développement',
    level: 'Intermédiaire',
    instructor: 'Jean Dupont',
    students: 1234,
    rating: 4.8,
    price: '99€',
    duration: '12 semaines',
  },
  {
    id: 2,
    title: 'Data Science avec Python',
    description: 'Maîtrisez l\'analyse de données et le machine learning avec Python',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Data Science',
    level: 'Avancé',
    instructor: 'Marie Martin',
    students: 892,
    rating: 4.9,
    price: '129€',
    duration: '16 semaines',
  },
  {
    id: 3,
    title: 'Design UX/UI Moderne',
    description: 'Créez des interfaces utilisateur élégantes et intuitives',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    category: 'Design',
    level: 'Débutant',
    instructor: 'Sophie Laurent',
    students: 756,
    rating: 4.7,
    price: '89€',
    duration: '8 semaines',
  },
  {
    id: 4,
    title: 'Marketing Digital',
    description: 'Développez vos compétences en marketing digital et réseaux sociaux',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Marketing',
    level: 'Débutant',
    instructor: 'Thomas Dubois',
    students: 1045,
    rating: 4.6,
    price: '79€',
    duration: '10 semaines',
  },
  {
    id: 5,
    title: 'Intelligence Artificielle',
    description: 'Découvrez les fondamentaux de l\'IA et du Deep Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Data Science',
    level: 'Avancé',
    instructor: 'Paul Bernard',
    students: 654,
    rating: 4.8,
    price: '149€',
    duration: '20 semaines',
  },
  {
    id: 6,
    title: 'Développement Mobile React Native',
    description: 'Créez des applications mobiles multiplateformes avec React Native',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    category: 'Développement',
    level: 'Intermédiaire',
    instructor: 'Jean Dupont',
    students: 543,
    rating: 4.7,
    price: '109€',
    duration: '14 semaines',
  },
  {
    id: 7,
    title: 'Photographie Professionnelle',
    description: 'Maîtrisez les techniques de photographie professionnelle',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    category: 'Design',
    level: 'Débutant',
    instructor: 'Sophie Laurent',
    students: 432,
    rating: 4.5,
    price: '69€',
    duration: '6 semaines',
  },
  {
    id: 8,
    title: 'SEO et Référencement',
    description: 'Optimisez le référencement naturel de vos sites web',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293',
    category: 'Marketing',
    level: 'Intermédiaire',
    instructor: 'Thomas Dubois',
    students: 789,
    rating: 4.6,
    price: '85€',
    duration: '8 semaines',
  },
];

export function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Extraire les catégories uniques
  const categories = ['all', ...new Set(allCourses.map(c => c.category))];
  // Filtrer les cours
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
<div className="relative bg-gradient-to-br from-purple-100 via-sky-100 to-green-100 py-16 px-4 overflow-hidden">

  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Tous nos cours</h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Découvrez notre catalogue complet de formations et trouvez celle qui vous correspond
    </p>
  </div>

</div>
      {/* Filtres et Recherche */}
      <div className="bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Barre de recherche */}
            <div className="md:col-span-4 lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher un cours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filtre Catégorie */}
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat === 'all' ? 'Toutes les catégories' : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>
        </div>
      </div>

      {/* Résultats */}
      <div className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-muted-foreground">
            {filteredCourses.length} cours trouvé{filteredCourses.length > 1 ? 's' : ''}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition group"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <h3 className="mb-2 line-clamp-1">{course.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="text-sm text-muted-foreground mb-3">
                    Par {course.instructor}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-semibold text-lg">{course.price}</span>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl mb-2">Aucun cours trouvé</h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos filtres ou votre recherche
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
