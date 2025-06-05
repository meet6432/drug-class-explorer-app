
import { useState } from 'react';
import { AlertTriangle, Search, Shield, CheckCircle } from 'lucide-react';
import { useCheckDrugInteraction } from '../hooks/usePharmacyFeatures';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DrugInteractionCheckerProps {
  onBackToMenu: () => void;
}

const DrugInteractionChecker = ({ onBackToMenu }: DrugInteractionCheckerProps) => {
  const [drug1, setDrug1] = useState('');
  const [drug2, setDrug2] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const checkInteractionMutation = useCheckDrugInteraction();

  // Helper function to safely parse clinical effects
  const safeParseClinicalEffects = (effects: any) => {
    if (!effects) return [];
    
    // If it's already an array, return it
    if (Array.isArray(effects)) return effects;
    
    // If it's a string, try to parse as JSON first
    if (typeof effects === 'string') {
      try {
        const parsed = JSON.parse(effects);
        return Array.isArray(parsed) ? parsed : [effects];
      } catch (e) {
        // If parsing fails, treat as single string and return as array
        return [effects];
      }
    }
    
    // For any other type, convert to array
    return [String(effects)];
  };

  const handleCheck = async () => {
    if (!drug1.trim() || !drug2.trim()) return;
    
    setHasSearched(true);
    const data = await checkInteractionMutation.mutateAsync({ drug1, drug2 });
    setResults(data || []);
  };

  const getSeverityColor = (level: number) => {
    if (level >= 4) return 'text-red-600 bg-red-50 border-red-200';
    if (level >= 3) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  };

  const getSeverityIcon = (level: number) => {
    if (level >= 4) return <AlertTriangle className="h-5 w-5 text-red-600" />;
    if (level >= 3) return <AlertTriangle className="h-5 w-5 text-orange-600" />;
    return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-bold">Drug Interaction Checker</span>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-6 w-6" />
            <span>Check Drug Interactions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">First Drug</label>
              <Input
                value={drug1}
                onChange={(e) => setDrug1(e.target.value)}
                placeholder="Enter drug name..."
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Second Drug</label>
              <Input
                value={drug2}
                onChange={(e) => setDrug2(e.target.value)}
                placeholder="Enter drug name..."
                className="w-full"
              />
            </div>
            <Button
              onClick={handleCheck}
              disabled={!drug1.trim() || !drug2.trim() || checkInteractionMutation.isPending}
              className="w-full"
            >
              {checkInteractionMutation.isPending ? 'Checking...' : 'Check Interactions'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {hasSearched && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {results.length > 0 ? (
                <>
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <span>Interactions Found</span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>No Known Interactions</span>
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((interaction) => (
                  <div
                    key={interaction.id}
                    className={`border rounded-lg p-4 ${getSeverityColor(interaction.severity_level)}`}
                  >
                    <div className="flex items-start space-x-3">
                      {getSeverityIcon(interaction.severity_level)}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">
                            {interaction.drug1_name} + {interaction.drug2_name}
                          </h3>
                          <span className="text-sm font-medium px-2 py-1 rounded bg-white bg-opacity-50">
                            {interaction.interaction_type.charAt(0).toUpperCase() + interaction.interaction_type.slice(1)} Risk
                          </span>
                        </div>
                        <p className="mb-3">{interaction.description}</p>
                        {interaction.mechanism && (
                          <div className="mb-3">
                            <h4 className="font-semibold mb-1">Mechanism:</h4>
                            <p className="text-sm">{interaction.mechanism}</p>
                          </div>
                        )}
                        {interaction.clinical_effects && (
                          <div className="mb-3">
                            <h4 className="font-semibold mb-1">Clinical Effects:</h4>
                            <ul className="text-sm list-disc list-inside">
                              {safeParseClinicalEffects(interaction.clinical_effects).map((effect: string, index: number) => (
                                <li key={index}>{effect}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {interaction.management_recommendations && (
                          <div>
                            <h4 className="font-semibold mb-1">Management:</h4>
                            <p className="text-sm">{interaction.management_recommendations}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <p className="text-lg font-medium text-green-700">No known interactions found</p>
                <p className="text-sm text-gray-600 mt-2">
                  These drugs appear to be safe to use together based on our database.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DrugInteractionChecker;
