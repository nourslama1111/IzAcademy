import { StudentLayout } from '../../components/StudentLayout';
import { Link } from 'react-router';
import { Play, Clock, BookOpen, CheckCircle } from 'lucide-react';

export function StudentCourses() {
  const courses = [
    {
      id: 1,
      title: 'Développement Web Full Stack',
      description: 'Maîtrisez React, Node.js et MongoDB',
      progress: 65,
      totalSections: 12,
      completedSections: 8,
      totalLessons: 48,
      completedLessons: 31,
      duration: '45h',
      instructor: 'Marie Dubois',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    },
    {
      id: 2,
      title: 'Data Science avec Python',
      description: 'Analyse de données et Machine Learning',
      progress: 45,
      totalSections: 10,
      completedSections: 4,
      totalLessons: 40,
      completedLessons: 18,
      duration: '38h',
      instructor: 'Thomas Martin',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },
    {
      id: 3,
      title: 'Design UX/UI Moderne',
      description: 'Créez des interfaces élégantes',
      progress: 80,
      totalSections: 8,
      completedSections: 6,
      totalLessons: 32,
      completedLessons: 26,
      duration: '28h',
      instructor: 'Sophie Laurent',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    },
  ];

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="mb-2">Mes cours</h1>
          <p className="text-muted-foreground">
            Continuez votre apprentissage et progressez vers vos objectifs
          </p>
        </div>

        <div className="space-y-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1 aspect-video md:aspect-square bg-muted overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="mb-2">{course.title}</h2>
                      <p className="text-muted-foreground mb-2">{course.description}</p>
                      <p className="text-sm text-muted-foreground">
                        Par {course.instructor}
                      </p>
                    </div>
                    <Link
                      to={`/student/course/${course.id}`}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition flex items-center gap-2 whitespace-nowrap"
                    >
                      <Play className="w-4 h-4" />
                      Continuer
                    </Link>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progression globale</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-accent rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {course.completedSections}/{course.totalSections}
                        </div>
                        <div className="text-xs text-muted-foreground">Sections</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {course.completedLessons}/{course.totalLessons}
                        </div>
                        <div className="text-xs text-muted-foreground">Leçons</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{course.duration}</div>
                        <div className="text-xs text-muted-foreground">Durée totale</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {Math.round(
                            ((course.totalLessons - course.completedLessons) *
                              parseInt(course.duration)) /
                              course.totalLessons
                          )}
                          h
                        </div>
                        <div className="text-xs text-muted-foreground">Restant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
}
