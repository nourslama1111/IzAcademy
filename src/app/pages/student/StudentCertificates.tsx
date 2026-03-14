import { StudentLayout } from '../../components/StudentLayout';
import { Award, Download, Share2, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export function StudentCertificates() {
  // Certificats obtenus
  const earnedCertificates = [
    {
      id: 1,
      courseTitle: 'Introduction à JavaScript',
      completionDate: '15 Février 2026',
      instructor: 'Marie Dubois',
      hours: 30,
      grade: 'Excellent',
      certificateNumber: 'IZ-2026-JS-001234',
    },
    {
      id: 2,
      courseTitle: 'Bases de données SQL',
      completionDate: '28 Janvier 2026',
      instructor: 'Thomas Martin',
      hours: 25,
      grade: 'Très bien',
      certificateNumber: 'IZ-2026-SQL-001189',
    },
  ];

  // Cours en progression (presque terminés)
  const inProgressCourses = [
    {
      id: 3,
      courseTitle: 'Design UX/UI Moderne',
      progress: 80,
      remainingLessons: 4,
      estimatedCompletion: '25 Mars 2026',
    },
    {
      id: 1,
      courseTitle: 'Développement Web Full Stack',
      progress: 65,
      remainingLessons: 12,
      estimatedCompletion: '15 Avril 2026',
    },
  ];

  const downloadCertificate = (certificateId: number) => {
    // Simulation du téléchargement
    console.log(`Téléchargement du certificat ${certificateId}`);
    alert('Le certificat sera téléchargé au format PDF');
  };

  const shareCertificate = (certificateId: number) => {
    // Simulation du partage
    console.log(`Partage du certificat ${certificateId}`);
    alert('Lien de partage copié dans le presse-papiers');
  };

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="mb-2">Mes certificats</h1>
          <p className="text-muted-foreground">
            Consultez et téléchargez vos certificats de formation
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {earnedCertificates.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Certificats obtenus
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {inProgressCourses.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    En cours de validation
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {earnedCertificates.reduce((acc, cert) => acc + cert.hours, 0)}h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Heures certifiées
                  </div>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certificats obtenus */}
        <div className="space-y-6">
          <h2>Certificats obtenus</h2>
          {earnedCertificates.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {earnedCertificates.map((cert) => (
                <Card key={cert.id} className="overflow-hidden">
                  <div className="bg-gradient-to-br from-primary via-primary to-[#1a1a2e] p-6 text-primary-foreground">
                    <div className="flex items-start justify-between mb-4">
                      <Award className="w-12 h-12" />
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {cert.grade}
                      </Badge>
                    </div>
                    <h3 className="text-xl mb-2">{cert.courseTitle}</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      Formateur: {cert.instructor}
                    </p>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground mb-1">Date d'obtention</div>
                          <div className="font-medium">{cert.completionDate}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground mb-1">Durée</div>
                          <div className="font-medium">{cert.hours} heures</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground pt-4 border-t border-border">
                        N° {cert.certificateNumber}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          className="flex-1"
                          onClick={() => downloadCertificate(cert.id)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => shareCertificate(cert.id)}
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl mb-2">Aucun certificat pour le moment</h3>
                <p className="text-muted-foreground">
                  Terminez vos cours pour obtenir vos premiers certificats
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Cours en progression */}
        <div className="space-y-6">
          <h2>Formations en cours</h2>
          <div className="space-y-4">
            {inProgressCourses.map((course) => (
              <Card key={course.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="mb-2">{course.courseTitle}</h3>
                      <p className="text-sm text-muted-foreground">
                        Plus que {course.remainingLessons} leçons pour obtenir votre certificat
                      </p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {course.progress}%
                    </Badge>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Date d'obtention estimée: {course.estimatedCompletion}</span>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info supplémentaire */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="p-3 bg-blue-100 rounded-lg h-fit">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-2 text-blue-900">Comment obtenir un certificat ?</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• Complétez toutes les leçons du cours (100%)</li>
                  <li>• Réussissez les quiz avec un score minimum de 70%</li>
                  <li>• Soumettez et validez tous les projets pratiques</li>
                  <li>• Le certificat sera automatiquement généré une fois tous les critères validés</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
