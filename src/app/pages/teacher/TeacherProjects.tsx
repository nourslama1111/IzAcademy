import { useState } from 'react';
import { TeacherLayout } from '../../components/TeacherLayout';
import { 
  FolderGit2, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Checkbox } from '../../components/ui/checkbox';

interface Project {
  id: number;
  studentName: string;
  courseName: string;
  projectTitle: string;
  submittedDate: string;
  githubUrl: string;
  status: 'pending' | 'validated' | 'needs_improvement';
  comment?: string;
}

export function TeacherProjects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      studentName: 'Jean Dupont',
      courseName: 'Développement Web Full Stack',
      projectTitle: 'Application e-commerce',
      submittedDate: '10 Mars 2026',
      githubUrl: 'https://github.com/jeandupont/ecommerce-app',
      status: 'pending',
    },
    {
      id: 2,
      studentName: 'Sophie Martin',
      courseName: 'Développement Web Full Stack',
      projectTitle: 'Blog personnel avec CMS',
      submittedDate: '9 Mars 2026',
      githubUrl: 'https://github.com/sophiemartin/blog-cms',
      status: 'validated',
      comment: 'Excellent travail ! Code bien structuré et documentation complète.',
    },
    {
      id: 3,
      studentName: 'Pierre Leroy',
      courseName: 'Data Science avec Python',
      projectTitle: 'Analyse de données COVID-19',
      submittedDate: '8 Mars 2026',
      githubUrl: 'https://github.com/pierreleroy/covid-analysis',
      status: 'needs_improvement',
      comment: 'Bon travail mais manque de visualisations. Merci d\'ajouter des graphiques interactifs.',
    },
    {
      id: 4,
      studentName: 'Marie Laurent',
      courseName: 'Développement Web Full Stack',
      projectTitle: 'Application de gestion de tâches',
      submittedDate: '7 Mars 2026',
      githubUrl: 'https://github.com/marielaurent/todo-app',
      status: 'pending',
    },
  ]);

  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [validationStatus, setValidationStatus] = useState<'validated' | 'needs_improvement'>('validated');

  const handleSubmitReview = (projectId: number) => {
    setProjects(projects.map(p => 
      p.id === projectId 
        ? { ...p, status: validationStatus, comment } 
        : p
    ));
    setActiveProjectId(null);
    setComment('');
  };

  const pendingProjects = projects.filter(p => p.status === 'pending');
  const validatedProjects = projects.filter(p => p.status === 'validated');
  const needsImprovementProjects = projects.filter(p => p.status === 'needs_improvement');

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="mb-1">{project.projectTitle}</h3>
              <p className="text-sm text-muted-foreground">
                Par {project.studentName}
              </p>
            </div>
            <Badge
              variant={
                project.status === 'validated' 
                  ? 'default' 
                  : project.status === 'needs_improvement' 
                  ? 'destructive' 
                  : 'secondary'
              }
            >
              {project.status === 'validated' && <CheckCircle className="w-3 h-3 mr-1" />}
              {project.status === 'needs_improvement' && <AlertCircle className="w-3 h-3 mr-1" />}
              {project.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
              {project.status === 'validated' ? 'Validé' : 
               project.status === 'needs_improvement' ? 'À améliorer' : 
               'En attente'}
            </Badge>
          </div>

          <div className="text-sm text-muted-foreground">
            <div className="mb-1">Cours: {project.courseName}</div>
            <div>Soumis le: {project.submittedDate}</div>
          </div>

          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <FolderGit2 className="w-4 h-4" />
            Voir sur GitHub
            <ExternalLink className="w-3 h-3" />
          </a>

          {project.comment && (
            <div className="p-3 bg-accent rounded-lg">
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div className="text-sm">{project.comment}</div>
              </div>
            </div>
          )}

          {activeProjectId === project.id ? (
            <div className="space-y-4 pt-4 border-t border-border">
              <Textarea
                placeholder="Ajoutez un commentaire..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id={`validated-${project.id}`}
                    checked={validationStatus === 'validated'}
                    onCheckedChange={() => setValidationStatus('validated')}
                  />
                  <label 
                    htmlFor={`validated-${project.id}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    Projet validé
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id={`improve-${project.id}`}
                    checked={validationStatus === 'needs_improvement'}
                    onCheckedChange={() => setValidationStatus('needs_improvement')}
                  />
                  <label 
                    htmlFor={`improve-${project.id}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    Projet à améliorer
                  </label>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleSubmitReview(project.id)}>
                  Envoyer l'évaluation
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveProjectId(null);
                    setComment('');
                  }}
                >
                  Annuler
                </Button>
              </div>
            </div>
          ) : project.status === 'pending' && (
            <Button 
              className="w-full"
              onClick={() => setActiveProjectId(project.id)}
            >
              Évaluer le projet
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <TeacherLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="mb-2">Projets des étudiants</h1>
          <p className="text-muted-foreground">
            Évaluez les projets soumis par vos étudiants
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {pendingProjects.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    En attente d'évaluation
                  </div>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {validatedProjects.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projets validés
                  </div>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">
                    {needsImprovementProjects.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    À améliorer
                  </div>
                </div>
                <div className="p-3 bg-red-100 rounded-lg">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projets */}
        <Tabs defaultValue="pending" className="w-full">
          <TabsList>
            <TabsTrigger value="pending">
              En attente ({pendingProjects.length})
            </TabsTrigger>
            <TabsTrigger value="validated">
              Validés ({validatedProjects.length})
            </TabsTrigger>
            <TabsTrigger value="needs_improvement">
              À améliorer ({needsImprovementProjects.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4 mt-6">
            {pendingProjects.length > 0 ? (
              pendingProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl mb-2">Aucun projet en attente</h3>
                  <p className="text-muted-foreground">
                    Tous les projets ont été évalués
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="validated" className="space-y-4 mt-6">
            {validatedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="needs_improvement" className="space-y-4 mt-6">
            {needsImprovementProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </TeacherLayout>
  );
}
