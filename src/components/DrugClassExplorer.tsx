
import { useState, useEffect } from 'react';
import { Network, Info, Search, Plus } from 'lucide-react';
import { useDrugClassRelationships, useAddDrugClassRelationship } from '../hooks/usePharmacyFeatures';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

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

  const { data: relationships, isLoading } = useDrugClassRelationships();
  const addRelationshipMutation = useAddDrugClassRelationship();

  const filteredRelationships = relationships?.filter(rel =>
    rel.parent_class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rel.child_class.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const uniqueClasses = Array.from(new Set([
    ...(relationships?.map(r => r.parent_class) || []),
    ...(relationships?.map(r => r.child_class) || [])
  ]));

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

      <Tabs defaultValue="explorer" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="explorer">Explore Classes</TabsTrigger>
          <TabsTrigger value="manage">Manage Relationships</TabsTrigger>
        </TabsList>

        <TabsContent value="explorer" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span>Drug Classes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search drug classes..."
                    className="mb-4"
                  />
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {uniqueClasses
                      .filter(cls => cls.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((drugClass) => (
                        <button
                          key={drugClass}
                          onClick={() => setSelectedClass(drugClass)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            selectedClass === drugClass
                              ? 'bg-blue-50 border-blue-300 text-blue-800'
                              : 'bg-white border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {drugClass}
                        </button>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Network className="h-5 w-5" />
                    <span>Relationships Map</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="text-center py-8">Loading relationships...</div>
                  ) : selectedClass ? (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-center mb-4">{selectedClass}</h3>
                      
                      {/* Parent relationships */}
                      {relationships?.filter(r => r.child_class === selectedClass).map((rel) => (
                        <div key={rel.id} className={`p-4 rounded-lg border ${getRelationshipColor(rel.relationship_type)}`}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{rel.parent_class}</span>
                            <div className="flex items-center space-x-2">
                              <div 
                                className="bg-current h-1 rounded"
                                style={{ width: getConnectionStrengthWidth(rel.connection_strength) }}
                              />
                              <span className="text-xs">{rel.relationship_type}</span>
                            </div>
                            <span className="font-medium">{selectedClass}</span>
                          </div>
                          {rel.description && <p className="text-sm mt-2">{rel.description}</p>}
                        </div>
                      ))}

                      {/* Child relationships */}
                      {relationships?.filter(r => r.parent_class === selectedClass).map((rel) => (
                        <div key={rel.id} className={`p-4 rounded-lg border ${getRelationshipColor(rel.relationship_type)}`}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{selectedClass}</span>
                            <div className="flex items-center space-x-2">
                              <div 
                                className="bg-current h-1 rounded"
                                style={{ width: getConnectionStrengthWidth(rel.connection_strength) }}
                              />
                              <span className="text-xs">{rel.relationship_type}</span>
                            </div>
                            <span className="font-medium">{rel.child_class}</span>
                          </div>
                          {rel.description && <p className="text-sm mt-2">{rel.description}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Network className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Select a drug class to explore its relationships</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-5 w-5" />
                    <span>All Relationships</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {filteredRelationships.map((rel) => (
                      <div key={rel.id} className={`p-3 rounded-lg border ${getRelationshipColor(rel.relationship_type)}`}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{rel.parent_class}</span>
                          <span className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded">
                            {rel.relationship_type}
                          </span>
                          <span className="font-medium">{rel.child_class}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
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

          <Card>
            <CardHeader>
              <CardTitle>Current Relationships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {relationships?.map((rel) => (
                  <div key={rel.id} className={`p-3 rounded-lg border ${getRelationshipColor(rel.relationship_type)}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{rel.parent_class}</span>
                        <span className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded">
                          {rel.relationship_type}
                        </span>
                        <span className="font-medium">{rel.child_class}</span>
                      </div>
                      <span className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded">
                        Strength: {rel.connection_strength}
                      </span>
                    </div>
                    {rel.description && (
                      <p className="text-sm mt-2 text-gray-700">{rel.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DrugClassExplorer;
