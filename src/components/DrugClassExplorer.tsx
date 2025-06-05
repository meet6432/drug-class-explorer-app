import { useState, useEffect } from 'react';
import { Network, Info, Search, Plus, Edit, Trash2 } from 'lucide-react';
import { useDrugClassRelationships, useAddDrugClassRelationship } from '../hooks/usePharmacyFeatures';
import { useDrugClasses, useAddDrugClass, useUpdateDrugClass, useDeleteDrugClass } from '../hooks/useDrugClasses';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface DrugClassExplorerProps {
  onBackToMenu: () => void;
}

const DrugClassExplorer = ({ onBackToMenu }: DrugClassExplorerProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [newRelationship, setNewRelationship] = useState({
    parent_class: '',
    child_class: '',
    relationship_type: '',
    connection_strength: 1,
    description: ''
  });
  const [newDrugClass, setNewDrugClass] = useState({
    name: '',
    category: '',
    description: '',
    mechanism: '',
    uses: '',
    side_effects: '',
    examples: [] as string[]
  });
  const [editingDrugClass, setEditingDrugClass] = useState<any>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const { data: relationships, isLoading: relationshipsLoading } = useDrugClassRelationships();
  const { data: drugClasses, isLoading: drugClassesLoading } = useDrugClasses();
  const addRelationshipMutation = useAddDrugClassRelationship();
  const addDrugClassMutation = useAddDrugClass();
  const updateDrugClassMutation = useUpdateDrugClass();
  const deleteDrugClassMutation = useDeleteDrugClass();

  const filteredRelationships = relationships?.filter(rel =>
    rel.parent_class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rel.child_class.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const uniqueClasses = Array.from(new Set([
    ...(relationships?.map(r => r.parent_class) || []),
    ...(relationships?.map(r => r.child_class) || [])
  ]));

  const filteredDrugClasses = drugClasses?.filter(drugClass =>
    drugClass.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drugClass.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleAddDrugClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDrugClass.name || !newDrugClass.category) return;
    
    await addDrugClassMutation.mutateAsync(newDrugClass);
    setNewDrugClass({
      name: '',
      category: '',
      description: '',
      mechanism: '',
      uses: '',
      side_effects: '',
      examples: []
    });
    setIsAddDialogOpen(false);
  };

  const handleUpdateDrugClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDrugClass?.id) return;
    
    await updateDrugClassMutation.mutateAsync(editingDrugClass);
    setEditingDrugClass(null);
    setIsEditDialogOpen(false);
  };

  const handleDeleteDrugClass = async (id: string) => {
    if (confirm('Are you sure you want to delete this drug class?')) {
      await deleteDrugClassMutation.mutateAsync(id);
    }
  };

  const handleAddRelationship = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRelationship.parent_class || !newRelationship.child_class || !newRelationship.relationship_type) {
      return;
    }
    
    await addRelationshipMutation.mutateAsync(newRelationship);
    setNewRelationship({
      parent_class: '',
      child_class: '',
      relationship_type: '',
      connection_strength: 1,
      description: ''
    });
  };

  const getRelationshipColor = (type: string) => {
    switch (type) {
      case 'subclass': return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'related': return 'bg-green-100 border-green-300 text-green-800';
      case 'antagonist': return 'bg-red-100 border-red-300 text-red-800';
      case 'synergist': return 'bg-purple-100 border-purple-300 text-purple-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getConnectionStrengthWidth = (strength: number) => {
    return `${strength * 2 + 2}px`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <Network className="h-5 w-5" />
          <span className="font-bold">Drug Class Explorer</span>
        </div>
      </div>

      <Tabs defaultValue="drug-classes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="drug-classes">Drug Classes</TabsTrigger>
          <TabsTrigger value="relationships">Relationships</TabsTrigger>
          <TabsTrigger value="manage">Manage</TabsTrigger>
        </TabsList>

        <TabsContent value="drug-classes" className="space-y-6">
          <div className="flex justify-between items-center">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search drug classes..."
              className="max-w-md"
            />
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Drug Class
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Drug Class</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddDrugClass} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      value={newDrugClass.name}
                      onChange={(e) => setNewDrugClass(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Drug class name"
                      required
                    />
                    <Input
                      value={newDrugClass.category}
                      onChange={(e) => setNewDrugClass(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="Category"
                      required
                    />
                  </div>
                  <Textarea
                    value={newDrugClass.description}
                    onChange={(e) => setNewDrugClass(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Description"
                    required
                  />
                  <Textarea
                    value={newDrugClass.mechanism}
                    onChange={(e) => setNewDrugClass(prev => ({ ...prev, mechanism: e.target.value }))}
                    placeholder="Mechanism of action"
                    required
                  />
                  <Textarea
                    value={newDrugClass.uses}
                    onChange={(e) => setNewDrugClass(prev => ({ ...prev, uses: e.target.value }))}
                    placeholder="Clinical uses"
                    required
                  />
                  <Textarea
                    value={newDrugClass.side_effects}
                    onChange={(e) => setNewDrugClass(prev => ({ ...prev, side_effects: e.target.value }))}
                    placeholder="Side effects"
                    required
                  />
                  <Button type="submit" disabled={addDrugClassMutation.isPending}>
                    {addDrugClassMutation.isPending ? 'Adding...' : 'Add Drug Class'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drugClassesLoading ? (
              <div className="col-span-full text-center py-8">Loading drug classes...</div>
            ) : (
              filteredDrugClasses.map((drugClass) => (
                <Card key={drugClass.id} className="relative">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{drugClass.name}</CardTitle>
                        <p className="text-sm text-gray-600">{drugClass.category}</p>
                      </div>
                      <div className="flex space-x-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingDrugClass(drugClass);
                            setIsEditDialogOpen(true);
                          }}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteDrugClass(drugClass.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-2">{drugClass.description}</p>
                    <div className="text-xs space-y-1">
                      <p><strong>Uses:</strong> {drugClass.uses}</p>
                      <p><strong>Side Effects:</strong> {drugClass.side_effects}</p>
                      {drugClass.examples && drugClass.examples.length > 0 && (
                        <div>
                          <strong>Examples:</strong>
                          <ul className="list-disc list-inside ml-2">
                            {drugClass.examples.map((example, index) => (
                              <li key={index} className="text-xs">{example}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Edit Drug Class</DialogTitle>
              </DialogHeader>
              {editingDrugClass && (
                <form onSubmit={handleUpdateDrugClass} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      value={editingDrugClass.name}
                      onChange={(e) => setEditingDrugClass(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Drug class name"
                      required
                    />
                    <Input
                      value={editingDrugClass.category}
                      onChange={(e) => setEditingDrugClass(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="Category"
                      required
                    />
                  </div>
                  <Textarea
                    value={editingDrugClass.description}
                    onChange={(e) => setEditingDrugClass(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Description"
                    required
                  />
                  <Textarea
                    value={editingDrugClass.mechanism}
                    onChange={(e) => setEditingDrugClass(prev => ({ ...prev, mechanism: e.target.value }))}
                    placeholder="Mechanism of action"
                    required
                  />
                  <Textarea
                    value={editingDrugClass.uses}
                    onChange={(e) => setEditingDrugClass(prev => ({ ...prev, uses: e.target.value }))}
                    placeholder="Clinical uses"
                    required
                  />
                  <Textarea
                    value={editingDrugClass.side_effects}
                    onChange={(e) => setEditingDrugClass(prev => ({ ...prev, side_effects: e.target.value }))}
                    placeholder="Side effects"
                    required
                  />
                  <Button type="submit" disabled={updateDrugClassMutation.isPending}>
                    {updateDrugClassMutation.isPending ? 'Updating...' : 'Update Drug Class'}
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="relationships">
          <div className="text-center py-8">
            <p className="text-gray-500">Relationships visualization coming soon...</p>
          </div>
        </TabsContent>

        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add New Drug Class Relationship</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddRelationship} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Parent Class</label>
                    <Input
                      value={newRelationship.parent_class}
                      onChange={(e) => setNewRelationship(prev => ({ ...prev, parent_class: e.target.value }))}
                      placeholder="e.g., Antibiotics"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Child Class</label>
                    <Input
                      value={newRelationship.child_class}
                      onChange={(e) => setNewRelationship(prev => ({ ...prev, child_class: e.target.value }))}
                      placeholder="e.g., Beta-lactams"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Relationship Type</label>
                    <Select 
                      value={newRelationship.relationship_type} 
                      onValueChange={(value) => setNewRelationship(prev => ({ ...prev, relationship_type: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="subclass">Subclass</SelectItem>
                        <SelectItem value="related">Related</SelectItem>
                        <SelectItem value="antagonist">Antagonist</SelectItem>
                        <SelectItem value="synergist">Synergist</SelectItem>
                        <SelectItem value="alternative">Alternative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Connection Strength (1-5)</label>
                    <Input
                      type="number"
                      min="1"
                      max="5"
                      value={newRelationship.connection_strength}
                      onChange={(e) => setNewRelationship(prev => ({ ...prev, connection_strength: parseInt(e.target.value) }))}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Description (Optional)</label>
                  <Textarea
                    value={newRelationship.description}
                    onChange={(e) => setNewRelationship(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe the relationship between these drug classes..."
                    rows={3}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={addRelationshipMutation.isPending}
                  className="w-full"
                >
                  {addRelationshipMutation.isPending ? 'Adding...' : 'Add Relationship'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DrugClassExplorer;
