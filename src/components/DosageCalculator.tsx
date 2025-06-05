
import { useState } from 'react';
import { Calculator, Search, User, Weight } from 'lucide-react';
import { useDosageFormulas, useCalculateDosage } from '../hooks/usePharmacyFeatures';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface DosageCalculatorProps {
  onBackToMenu: () => void;
}

const DosageCalculator = ({ onBackToMenu }: DosageCalculatorProps) => {
  const [selectedDrug, setSelectedDrug] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [calculationResults, setCalculationResults] = useState<any[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const { data: formulas, isLoading } = useDosageFormulas();
  const calculateMutation = useCalculateDosage();

  // Helper function to safely parse JSON data
  const safeParseJson = (data: any) => {
    if (!data) return {};
    
    // If it's already an object, return it
    if (typeof data === 'object' && !Array.isArray(data)) return data;
    
    // If it's a string, try to parse as JSON
    if (typeof data === 'string') {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.warn('Failed to parse JSON:', data);
        return {};
      }
    }
    
    return {};
  };

  // Helper function to safely parse contraindications array
  const safeParseContraindications = (data: any) => {
    if (!data) return [];
    
    // If it's already an array, return it
    if (Array.isArray(data)) return data;
    
    // If it's a string, try to parse as JSON
    if (typeof data === 'string') {
      try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [data];
      } catch (e) {
        console.warn('Failed to parse contraindications:', data);
        return [data];
      }
    }
    
    return [];
  };

  const handleCalculate = async () => {
    if (!selectedDrug.trim()) return;
    
    setHasCalculated(true);
    const data = await calculateMutation.mutateAsync({
      drugName: selectedDrug,
      weight: weight ? parseFloat(weight) : undefined,
      age: age ? parseInt(age) : undefined
    });
    setCalculationResults(data || []);
  };

  const calculateDose = (formula: any) => {
    const weightKg = parseFloat(weight);
    const ageYears = parseInt(age);
    
    if (formula.formula_type === 'weight_based' && weightKg) {
      const formulaText = formula.formula.toLowerCase();
      if (formulaText.includes('mg/kg')) {
        const match = formulaText.match(/(\d+(?:-\d+)?)\s*mg\/kg/);
        if (match) {
          const doseRange = match[1];
          if (doseRange.includes('-')) {
            const [min, max] = doseRange.split('-').map(Number);
            return `${min * weightKg}-${max * weightKg} mg`;
          } else {
            return `${parseInt(doseRange) * weightKg} mg`;
          }
        }
      }
    }
    
    return 'Calculation requires specific parameters';
  };

  const uniqueDrugs = Array.from(new Set(formulas?.map(f => f.drug_name) || []));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <Calculator className="h-5 w-5" />
          <span className="font-bold">Dosage Calculator</span>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-6 w-6" />
            <span>Calculate Drug Dosage</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Drug Name</label>
              <Input
                value={selectedDrug}
                onChange={(e) => setSelectedDrug(e.target.value)}
                placeholder="Enter drug name..."
                list="drugs"
              />
              <datalist id="drugs">
                {uniqueDrugs.map(drug => (
                  <option key={drug} value={drug} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center space-x-1">
                <Weight className="h-4 w-4" />
                <span>Weight (kg)</span>
              </label>
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Age (years)</span>
              </label>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age..."
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleCalculate}
                disabled={!selectedDrug.trim() || calculateMutation.isPending}
                className="w-full"
              >
                {calculateMutation.isPending ? 'Calculating...' : 'Calculate'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {hasCalculated && (
        <div className="space-y-4">
          {calculationResults.length > 0 ? (
            calculationResults.map((formula) => (
              <Card key={formula.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{formula.drug_name}</span>
                    <span className="text-sm font-normal text-gray-600">
                      {formula.indication}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Dosage Formula</h4>
                      <p className="text-gray-700 mb-4">{formula.formula}</p>
                      
                      {weight && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h5 className="font-semibold text-green-800 mb-2">Calculated Dose</h5>
                          <p className="text-green-700 text-lg font-medium">
                            {calculateDose(formula)}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      {formula.safety_limits && (
                        <div>
                          <h5 className="font-semibold mb-2">Safety Limits</h5>
                          <div className="text-sm space-y-1">
                            {Object.entries(safeParseJson(formula.safety_limits)).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="capitalize">{key.replace('_', ' ')}:</span>
                                <span className="font-medium">{value as string}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {formula.special_populations && (
                        <div>
                          <h5 className="font-semibold mb-2">Special Populations</h5>
                          <div className="text-sm space-y-1">
                            {Object.entries(safeParseJson(formula.special_populations)).map(([key, value]) => (
                              <div key={key}>
                                <span className="capitalize font-medium">{key}: </span>
                                <span>{value as string}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {formula.contraindications && (
                        <div>
                          <h5 className="font-semibold mb-2 text-red-800">Contraindications</h5>
                          <div className="text-sm text-red-700">
                            {safeParseContraindications(formula.contraindications).map((item: string, index: number) => (
                              <div key={index}>• {item}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No dosage formulas found for "{selectedDrug}"</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {formulas && formulas.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Available Drugs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {uniqueDrugs.map((drug) => (
                <button
                  key={drug}
                  onClick={() => setSelectedDrug(drug)}
                  className="text-left p-2 text-sm bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  {drug}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DosageCalculator;
