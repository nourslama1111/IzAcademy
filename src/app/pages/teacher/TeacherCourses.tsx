import { TeacherLayout } from '../../components/TeacherLayout';
import { Link } from 'react-router';
import { 
  BookOpen, 
  Users, 
  Star,
  Upload,
  MessageSquare,
  Edit,
  PlusCircle,
  FileText
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useState } from 'react';

export function TeacherCourses() {
  const [isResourceDialogOpen, setIsResourceDialogOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [resourceTitle, setResourceTitle] = useState('');
  const [resourceFile, setResourceFile] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Développement Web Full Stack',
      category: 'Développement',
      students: 45,
      rating: 4.8,
      totalReviews: 32,
      status: 'active',
      modules: 5,
      resources: 12,
      pendingComments: 3,
    },
    {
      id: 2,
      title: 'React Native - Applications mobiles',
      category: 'Développement',
      students: 28,
      rating: 4.7,
      totalReviews: 18,
      status: 'active',
      modules: 4,
      resources: 8,
      pendingComments: 1,
    },
    {
      id: 3,
      title: 'Introduction à JavaScript',
      category: 'Développement',
      students: 67,
      rating: 4.9,
      totalReviews: 54,
      status: 'completed',
      modules: 3,
      resources: 15,
      pendingComments: 0,
    },
  ];

  const handleAddResource = () => {
    if (selectedCourseId && resourceTitle && resourceFile) {
      alert(`Ressource "${resourceTitle}" ajoutée au cours ${selectedCourseId}`);
      setIsResourceDialogOpen(false);
      setResourceTitle('');
      setResourceFile('');
      setSelectedCourseId(null);
    }
  };

  const activeCourses = courses.filter(c => c.status === 'active');
  const completedCourses = courses.filter(c => c.status === 'completed');

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3>{course.title}</h3>
                <Badge variant={course.status === 'active' ? 'default' : 'secondary'}>
                  {course.status === 'active' ? 'Actif' : 'Terminé'}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{course.category}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{course.students}</div>
              <div className="text-xs text-muted-foreground">Étudiants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{course.rating}</div>
              <div className="text-xs text-muted-foreground">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{course.modules}</div>
              <div className="text-xs text-muted-foreground">Modules</div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Ressources ajoutées</span>
              <span className="font-medium">{course.resources}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Commentaires en attente</span>
              <Badge variant={course.pendingComments > 0 ? 'destructive' : 'secondary'}>
                {course.pendingComments}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedCourseId(course.id);
                setIsResourceDialogOpen(true);
              }}
            >
              <Upload className="w-4 h-4 mr-2" />
              Ressource
            </Button>
            <Button variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Commentaires
            </Button>
          </div>

          <Button className="w-full" asChild>
            <Link to={`/teacher/course/${course.id}`}>
              <Edit className="w-4 h-4 mr-2" />
              Gérer le cours
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <TeacherLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Mes cours</h1>
            <p className="text-muted-foreground">
              Gérez vos cours et ajoutez des ressources
            </p>
          </div>
          <Button asChild>
            <Link to="/teacher/create-course">
              <PlusCircle className="w-5 h-5 mr-2" />
              Créer un cours
            </Link>
          </Button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {courses.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total cours
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {courses.reduce((acc, c) => acc + c.students, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Étudiants
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-1">
                    {(courses.reduce((acc, c) => acc + c.rating, 0) / courses.length).toFixed(1)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Note moyenne
                  </div>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {courses.reduce((acc, c) => acc + c.resources, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ressources
                  </div>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des cours */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList>
            <TabsTrigger value="active">
              Cours actifs ({activeCourses.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Cours terminés ({completedCourses.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {activeCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {completedCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Dialog pour ajouter une ressource */}
        <Dialog open={isResourceDialogOpen} onOpenChange={setIsResourceDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ajouter une ressource</DialogTitle>
              <DialogDescription>
                Ajoutez une nouvelle ressource pour vos étudiants
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="resource-title">Titre de la ressource</Label>
                <Input
                  id="resource-title"
                  value={resourceTitle}
                  onChange={(e) => setResourceTitle(e.target.value)}
                  placeholder="Ex: Guide des meilleures pratiques React"
                />
              </div>
              <div>
                <Label htmlFor="resource-file">Fichier ou lien</Label>
                <Input
                  id="resource-file"
                  value={resourceFile}
                  onChange={(e) => setResourceFile(e.target.value)}
                  placeholder="URL ou nom du fichier"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsResourceDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={handleAddResource}>
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TeacherLayout>
  );
}
