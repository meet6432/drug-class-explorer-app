
import { useState } from 'react';
import { AlertCircle, Search, Filter } from 'lucide-react';
import { useDrugSideEffects, useSearchSideEffects } from '../hooks/usePharmacyFeatures';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SideEffectsDatabaseProps {
  onBackToMenu: () => void;
}

const SideEffectsDatabase = ({ onBackToMenu }: SideEffectsDatabaseProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [frequencyFilter, setFrequencyFilter] = useState('all');
  const [bodySystemFilter, setBodySystemFilter] = useState('all');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const { data: allSideEffects, isLoading } = useDrugSideEffects();
  const searchMutation = useSearchSideEffects();

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setHasSearched(true);
    const data = await searchMutation.mutateAsync(searchTerm);
    setSearchResults(data || []);
  };

  const filteredData = (hasSearched ? searchResults : allSideEffects || []).filter(effect => {
    if (severityFilter !== 'all' && effect.severity !== severityFilter) return false;
    if (frequencyFilter !== 'all' && effect.frequency !== frequencyFilter) return false;
    if (bodySystemFilter !== 'all' && effect.body_system !== bodySystemFilter) return false;
    return true;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'life_threatening': return 'bg-red-100 border-red-300 text-red-800';
      case 'severe': return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'moderate': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'mild': return 'bg-green-100 border-green-300 text-green-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'very_common': return 'text-red-600';
      case 'common': return 'text-orange-600';
      case 'uncommon': return 'text-yellow-600';
      case 'rare': return 'text-blue-600';
      case 'very_rare': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const uniqueBodySystems = Array.from(new Set(allSideEffects?.map(e => e.body_system) || []));

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <AlertCircle className="h-5 w-5" />
          <span className="font-bold">Side Effects Database</span>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-6 w-6" />
            <span>Search Side Effects</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Drug Name</label>
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter drug name..."
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Severity</label>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="mild">Mild</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="severe">Severe</SelectItem>
                  <SelectItem value="life_threatening">Life Threatening</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Frequency</label>
              <Select value={frequencyFilter} onValueChange={setFrequencyFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Frequencies</SelectItem>
                  <SelectItem value="very_common">Very Common</SelectItem>
                  <SelectItem value="common">Common</SelectItem>
                  <SelectItem value="uncommon">Uncommon</SelectItem>
                  <SelectItem value="rare">Rare</SelectItem>
                  <SelectItem value="very_rare">Very Rare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Body System</label>
              <Select value={bodySystemFilter} onValueChange={setBodySystemFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Systems</SelectItem>
                  {uniqueBodySystems.map(system => (
                    <SelectItem key={system} value={system}>
                      {system.charAt(0).toUpperCase() + system.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <button
              onClick={handleSearch}
              disabled={!searchTerm.trim() || searchMutation.isPending}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
            >
              {searchMutation.isPending ? 'Searching...' : 'Search'}
            </button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full text-center py-8">Loading side effects...</div>
        ) : filteredData.length > 0 ? (
          filteredData.map((effect) => (
            <Card key={effect.id} className={`border-2 ${getSeverityColor(effect.severity)}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{effect.drug_name}</span>
                  <span className="text-xs font-normal">
                    {effect.body_system}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg">{effect.side_effect}</h4>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${getFrequencyColor(effect.frequency)}`}>
                      {effect.frequency.replace('_', ' ')}
                    </span>
                    {effect.frequency_percentage && (
                      <span className="text-sm text-gray-600">
                        {effect.frequency_percentage}
                      </span>
                    )}
                  </div>
                  
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getSeverityColor(effect.severity)}`}>
                    {effect.severity.replace('_', ' ')}
                  </span>
                  
                  {effect.onset_time && (
                    <div className="text-sm">
                      <span className="font-medium">Onset: </span>
                      {effect.onset_time}
                    </div>
                  )}
                  
                  {effect.description && (
                    <p className="text-sm text-gray-700">{effect.description}</p>
                  )}
                  
                  {effect.management && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-blue-800 text-sm mb-1">Management:</h5>
                      <p className="text-blue-700 text-sm">{effect.management}</p>
                    </div>
                  )}
                  
                  {effect.monitoring_required && (
                    <div className="flex items-center space-x-2 text-amber-700">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Monitoring Required</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : hasSearched ? (
          <div className="col-span-full text-center py-8">
            <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No side effects found for "{searchTerm}"</p>
          </div>
        ) : (
          <div className="col-span-full text-center py-8">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Search for a drug to see its side effects</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideEffectsDatabase;
