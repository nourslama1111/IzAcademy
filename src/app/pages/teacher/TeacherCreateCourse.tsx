import { useState } from 'react';
import { TeacherLayout } from '../../components/TeacherLayout';
import { useNavigate } from 'react-router';
import { PlusCircle, Trash2, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { toast } from 'sonner';

interface Module {
  id: string;
  title: string;
  lessons: string[];
}

export function TeacherCreateCourse() {
  const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [objectives, setObjectives] = useState(['']);
  const [modules, setModules] = useState<Module[]>([
    { id: '1', title: '', lessons: [''] }
  ]);

  const addObjective = () => {
    setObjectives([...objectives, '']);
  };

  const updateObjective = (index: number, value: string) => {
    const newObjectives = [...objectives];
    newObjectives[index] = value;
    setObjectives(newObjectives);
  };

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const addModule = () => {
    setModules([...modules, { 
      id: Date.now().toString(), 
      title: '', 
      lessons: [''] 
    }]);
  };

  const updateModuleTitle = (moduleId: string, title: string) => {
    setModules(modules.map(m => 
      m.id === moduleId ? { ...m, title } : m
    ));
  };

  const removeModule = (moduleId: string) => {
    setModules(modules.filter(m => m.id !== moduleId));
  };

  const addLesson = (moduleId: string) => {
    setModules(modules.map(m => 
      m.id === moduleId ? { ...m, lessons: [...m.lessons, ''] } : m
    ));
  };

  const updateLesson = (moduleId: string, lessonIndex: number, value: string) => {
    setModules(modules.map(m => 
      m.id === moduleId 
        ? { 
            ...m, 
            lessons: m.lessons.map((l, i) => i === lessonIndex ? value : l) 
          } 
        : m
    ));
  };

  const removeLesson = (moduleId: string, lessonIndex: number) => {
    setModules(modules.map(m => 
      m.id === moduleId 
        ? { ...m, lessons: m.lessons.filter((_, i) => i !== lessonIndex) } 
        : m
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!courseTitle || !category || !level) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Simulation de la création du cours
    toast.success('Cours créé avec succès !');
    setTimeout(() => {
      navigate('/teacher/courses');
    }, 1000);
  };

  return (
    <TeacherLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate('/teacher/courses')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="mb-2">Créer un nouveau cours</h1>
            <p className="text-muted-foreground">
              Remplissez les informations pour créer votre cours
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations générales */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-xl mb-4">Informations générales</h2>
              
              <div className="space-y-2">
                <Label htmlFor="title">Titre du cours *</Label>
                <Input
                  id="title"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="Ex: Développement Web Full Stack"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="short-description">Description courte *</Label>
                <Input
                  id="short-description"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="Une courte description pour la carte du cours"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="long-description">Description détaillée</Label>
                <Textarea
                  id="long-description"
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                  placeholder="Décrivez en détail le contenu de votre cours"
                  rows={5}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie *</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Développement">Développement</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Niveau *</Label>
                  <Select value={level} onValueChange={setLevel} required>
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Débutant">Débutant</SelectItem>
                      <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                      <SelectItem value="Avancé">Avancé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Durée</Label>
                  <Input
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Ex: 12 semaines"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Prix (€)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Ex: 99"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Objectifs d'apprentissage */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl">Objectifs d'apprentissage</h2>
                <Button type="button" variant="outline" size="sm" onClick={addObjective}>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Ajouter
                </Button>
              </div>

              {objectives.map((objective, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={objective}
                    onChange={(e) => updateObjective(index, e.target.value)}
                    placeholder={`Objectif ${index + 1}`}
                  />
                  {objectives.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeObjective(index)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Modules et leçons */}
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl">Modules et leçons</h2>
                <Button type="button" variant="outline" size="sm" onClick={addModule}>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Ajouter un module
                </Button>
              </div>

              {modules.map((module, moduleIndex) => (
                <div key={module.id} className="p-4 border border-border rounded-lg space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={module.title}
                      onChange={(e) => updateModuleTitle(module.id, e.target.value)}
                      placeholder={`Module ${moduleIndex + 1} - Titre`}
                    />
                    {modules.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeModule(module.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    )}
                  </div>

                  <div className="ml-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm text-muted-foreground">Leçons</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => addLesson(module.id)}
                      >
                        <PlusCircle className="w-3 h-3 mr-1" />
                        Ajouter une leçon
                      </Button>
                    </div>

                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex gap-2">
                        <Input
                          value={lesson}
                          onChange={(e) => updateLesson(module.id, lessonIndex, e.target.value)}
                          placeholder={`Leçon ${lessonIndex + 1}`}
                          className="text-sm"
                        />
                        {module.lessons.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeLesson(module.id, lessonIndex)}
                          >
                            <Trash2 className="w-3 h-3 text-destructive" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button type="submit" size="lg" className="flex-1">
              Créer le cours
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/teacher/courses')}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </TeacherLayout>
  );
}
