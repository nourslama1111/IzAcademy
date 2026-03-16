import { StudentLayout } from '../../components/StudentLayout';
import { Github, CheckCircle, Clock, Download } from 'lucide-react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';


export function StudentProjects() {
  const { courseId } = useParams();

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [githubLink, setGithubLink] = useState('');
  const [canAccessProjects, setCanAccessProjects] = useState(false);
  const [description, setDescription] = useState('');
    const [isChecking, setIsChecking] = useState(true);

  const projectCatalog = [
    {
      id: 1,
      courseId: '1',
      title: 'Créer une application Todo List',
      description: 'Développez une application de gestion de tâches avec React',
      difficulty: 'Débutant',
      estimatedTime: '3-5 heures',
      requirements: [
        'Ajouter, modifier et supprimer des tâches',
        'Marquer les tâches comme complètes',
        'Filtrer par statut',
        'Persister les données localement',
      ],
    },
    {
      id: 2,
      courseId: '1',
      title: 'Application de gestion de budget',
      description: 'Créez une application pour suivre vos dépenses et revenus',
      difficulty: 'Intermédiaire',
      estimatedTime: '6-8 heures',
      requirements: [
        'Ajouter des transactions',
        'Catégoriser les dépenses',
        'Visualiser avec des graphiques',
        'Calculer le solde automatiquement',
      ],
    },
    {
      id: 3,
      courseId: '1',
      title: 'Plateforme de blog personnel',
      description: "Développez un blog avec système d'articles et commentaires",
      difficulty: 'Avancé',
      estimatedTime: '10-15 heures',
      requirements: [
        'CRUD complet pour les articles',
        'Système de commentaires',
        'Recherche et filtres',
        'Authentification utilisateur',
      ],
    },
    {
      id: 4,
      courseId: '2',
      title: 'Calculatrice Interactive',
      description: 'Créez une calculatrice en JavaScript',
      difficulty: 'Débutant',
      estimatedTime: '2-4 heures',
      requirements: [
        'Effectuer les opérations de base',
        'Interface claire',
        'Gestion des erreurs',
      ],
    },
    {
      id: 5,
      courseId: '2',
      title: 'Jeu de devinette',
      description: 'Développez un mini-jeu en JavaScript',
      difficulty: 'Débutant',
      estimatedTime: '3-4 heures',
      requirements: [
        'Génération aléatoire',
        'Gestion des essais',
        'Messages de feedback',
      ],
    },
    {
      id: 6,
      courseId: '3',
      title: 'Application Météo',
      description: 'Construisez une application météo avec React',
      difficulty: 'Intermédiaire',
      estimatedTime: '5-7 heures',
      requirements: [
        'Appel API météo',
        'Recherche par ville',
        'Affichage dynamique',
      ],
    },
  ];

  const submittedProjects = [
    {
      id: 1,
      courseId: '2',
      courseTitle: 'Introduction à JavaScript',
      projectTitle: 'Calculatrice Interactive',
      submittedAt: '2026-02-15',
      status: 'validated',
      feedback: 'Excellent travail ! Le code est propre et bien structuré.',
      certificateUrl: '#',
    },
    {
      id: 2,
      courseId: '3',
      courseTitle: 'React Fondamentaux',
      projectTitle: 'Application Météo',
      submittedAt: '2026-03-05',
      status: 'pending',
      feedback: null,
      certificateUrl: null,
    },
  ];

  useEffect(() => {
      const checkAccess = () => {
        const savedCompleted = localStorage.getItem(`course_${courseId}_completed`);
        const totalLessons = 9; // Total des leçons du cours
  
        if (savedCompleted) {
          const completedLessons = JSON.parse(savedCompleted);
          if (completedLessons.length >= totalLessons) {
            setCanAccessProjects(true);
          }
        }
        setIsChecking(false);
      };
  
      checkAccess();
    }, [courseId]);

  const courseProjects = projectCatalog.filter((project) => project.courseId === courseId);
  const courseSubmittedProjects = submittedProjects.filter(
    (project) => project.courseId === courseId
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAccessProjects) {
      alert('Veuillez compléter toutes les leçons avant de soumettre le projet.');
      return;
    }
    alert('Projet soumis avec succès ! Vous recevrez une notification lors de la validation.');
    setSelectedProject(null);
    setGithubLink('');
    setDescription('');
  };

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="mb-2">Projets</h1>
          <p className="text-muted-foreground">
            Choisissez un projet à réaliser pour valider vos compétences
          </p>
        </div>

        {/* Project Catalog */}
        <div>
          <h2 className="mb-6">Catalogue de projets</h2>

          {courseProjects.length === 0 ? (
            <div className="bg-white border border-border rounded-xl p-6 text-muted-foreground">
              Aucun projet disponible pour ce cours.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition"
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${project.difficulty === 'Débutant' ? 'bg-green-100 text-green-700' : ''}
                          ${project.difficulty === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-700' : ''}
                          ${project.difficulty === 'Avancé' ? 'bg-red-100 text-red-700' : ''}
                        `}
                      >
                        {project.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {project.estimatedTime}
                      </span>
                    </div>
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="font-medium mb-2">Exigences :</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                  >
                    Choisir ce projet
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-border">
                <h2>Soumettre votre projet</h2>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <h3 className="mb-2">
                    {courseProjects.find((p) => p.id === selectedProject)?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {courseProjects.find((p) => p.id === selectedProject)?.description}
                  </p>
                </div>

                <div>
                  <label htmlFor="github" className="block mb-2">
                    Lien GitHub du projet
                  </label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      id="github"
                      type="url"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                      placeholder="https://github.com/username/project"
                      className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block mb-2">
                    Description de votre projet
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Décrivez votre projet, les fonctionnalités implémentées, les défis rencontrés..."
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={6}
                    required
                  />
                </div>

                {!canAccessProjects && (
                  <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
                    Veuillez compléter toutes les leçons d'abord pour pouvoir soumettre ce projet.
                  </div>
                )}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(null);
                      setGithubLink('');
                      setDescription('');
                    }}
                    className="flex-1 px-6 py-3 border border-border rounded-lg hover:bg-accent transition"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={!canAccessProjects}
                    className={`flex-1 px-6 py-3 rounded-lg transition ${
                      canAccessProjects
                        ? 'bg-primary text-primary-foreground hover:opacity-90'
                        : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                    }`}
                  >
                    Soumettre
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Submitted Projects */}
        <div>
          <h2 className="mb-6">Mes projets soumis</h2>

          {courseSubmittedProjects.length === 0 ? (
            <div className="bg-white border border-border rounded-xl p-6 text-muted-foreground">
              Aucun projet soumis pour ce cours.
            </div>
          ) : (
            <div className="space-y-4">
              {courseSubmittedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="mb-1">{project.projectTitle}</h3>
                      <p className="text-muted-foreground">{project.courseTitle}</p>
                    </div>
                    <div
                      className={`
                        px-4 py-2 rounded-lg flex items-center gap-2
                        ${
                          project.status === 'validated'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }
                      `}
                    >
                      {project.status === 'validated' ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Validé
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4" />
                          En attente
                        </>
                      )}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground mb-4">
                    Soumis le {new Date(project.submittedAt).toLocaleDateString('fr-FR')}
                  </div>

                  {project.feedback && (
                    <div className="bg-accent rounded-lg p-4 mb-4">
                      <div className="font-medium mb-2">Feedback du formateur :</div>
                      <p className="text-muted-foreground">{project.feedback}</p>
                    </div>
                  )}

                  {project.status === 'validated' && project.certificateUrl && (
                    <a
                      href={project.certificateUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                    >
                      <Download className="w-4 h-4" />
                      Télécharger le certificat
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </StudentLayout>
  );
}