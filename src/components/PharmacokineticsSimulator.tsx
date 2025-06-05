
import { useState } from 'react';
import { Activity, Search, TrendingUp, Clock } from 'lucide-react';
import { usePharmacokineticsData, useGetPharmacokinetics } from '../hooks/usePharmacyFeatures';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PharmacokineticsSimulatorProps {
  onBackToMenu: () => void;
}

const PharmacokineticsSimulator = ({ onBackToMenu }: PharmacokineticsSimulatorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrug, setSelectedDrug] = useState<any>(null);
  const [dose, setDose] = useState('');
  const [timePoints, setTimePoints] = useState<number[]>([]);

  const { data: pkData, isLoading } = usePharmacokineticsData();
  const getPkMutation = useGetPharmacokinetics();

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    const data = await getPkMutation.mutateAsync(searchTerm);
    setSelectedDrug(data);
    if (data) {
      generateTimePoints(data);
    }
  };

  const generateTimePoints = (drug: any) => {
    const halfLife = drug.elimination_half_life || 24;
    const points = [];
    
    // Generate points from 0 to 5 half-lives
    for (let i = 0; i <= 5 * halfLife; i += halfLife / 4) {
      points.push(i);
    }
    setTimePoints(points);
  };

  const calculateConcentration = (time: number, drug: any, doseAmount: number) => {
    if (!drug.elimination_half_life || !drug.bioavailability) return 0;
    
    const ka = drug.absorption_rate || 1.5; // absorption rate constant
    const ke = 0.693 / drug.elimination_half_life; // elimination rate constant
    const F = drug.bioavailability; // bioavailability
    const Vd = drug.distribution_volume || 70; // volume of distribution
    
    // One-compartment model with first-order absorption
    const concentration = (F * doseAmount * ka) / (Vd * (ka - ke)) * 
                         (Math.exp(-ke * time) - Math.exp(-ka * time));
    
    return Math.max(0, concentration);
  };

  const uniqueDrugs = Array.from(new Set(pkData?.map(d => d.drug_name) || []));

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <Activity className="h-5 w-5" />
          <span className="font-bold">Pharmacokinetics Simulator</span>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-6 w-6" />
            <span>Drug Pharmacokinetics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Drug Name</label>
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter drug name..."
                list="pk-drugs"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <datalist id="pk-drugs">
                {uniqueDrugs.map(drug => (
                  <option key={drug} value={drug} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Dose (mg)</label>
              <Input
                type="number"
                value={dose}
                onChange={(e) => setDose(e.target.value)}
                placeholder="Enter dose..."
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={!searchTerm.trim() || getPkMutation.isPending}
            >
              {getPkMutation.isPending ? 'Loading...' : 'Simulate'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedDrug && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Pharmacokinetic Parameters</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-teal-800">Drug Name</h4>
                    <p className="text-teal-700">{selectedDrug.drug_name}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-800">Route</h4>
                    <p className="text-teal-700">{selectedDrug.route_of_administration}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {selectedDrug.bioavailability && (
                    <div>
                      <h4 className="font-semibold text-teal-800">Bioavailability (F)</h4>
                      <p className="text-teal-700">{(selectedDrug.bioavailability * 100).toFixed(1)}%</p>
                    </div>
                  )}
                  {selectedDrug.elimination_half_life && (
                    <div>
                      <h4 className="font-semibold text-teal-800">Half-life (t½)</h4>
                      <p className="text-teal-700">{selectedDrug.elimination_half_life} hours</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {selectedDrug.distribution_volume && (
                    <div>
                      <h4 className="font-semibold text-teal-800">Volume of Distribution (Vd)</h4>
                      <p className="text-teal-700">{selectedDrug.distribution_volume} L</p>
                    </div>
                  )}
                  {selectedDrug.clearance && (
                    <div>
                      <h4 className="font-semibold text-teal-800">Clearance (CL)</h4>
                      <p className="text-teal-700">{selectedDrug.clearance} L/h</p>
                    </div>
                  )}
                </div>

                {selectedDrug.protein_binding && (
                  <div>
                    <h4 className="font-semibold text-teal-800">Protein Binding</h4>
                    <p className="text-teal-700">{selectedDrug.protein_binding}%</p>
                  </div>
                )}

                {selectedDrug.peak_time && (
                  <div>
                    <h4 className="font-semibold text-teal-800">Time to Peak (Tmax)</h4>
                    <p className="text-teal-700">{selectedDrug.peak_time} hours</p>
                  </div>
                )}

                {selectedDrug.dosing_frequency && (
                  <div>
                    <h4 className="font-semibold text-teal-800">Dosing Frequency</h4>
                    <p className="text-teal-700">{selectedDrug.dosing_frequency}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Concentration-Time Profile</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dose && timePoints.length > 0 ? (
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-3">
                      Simulated for {dose} mg dose
                    </h4>
                    <div className="space-y-2">
                      {timePoints.slice(0, 8).map((time, index) => {
                        const concentration = calculateConcentration(time, selectedDrug, parseFloat(dose));
                        return (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-teal-700">
                              {time.toFixed(1)} hours:
                            </span>
                            <span className="font-medium text-teal-800">
                              {concentration.toFixed(2)} mg/L
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {selectedDrug.metabolism_pathway && (
                    <div>
                      <h4 className="font-semibold text-teal-800 mb-2">Metabolism</h4>
                      <div className="text-sm text-teal-700">
                        {Object.entries(JSON.parse(selectedDrug.metabolism_pathway)).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="capitalize">{key}:</span>
                            <span>{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedDrug.excretion_route && (
                    <div>
                      <h4 className="font-semibold text-teal-800 mb-2">Excretion</h4>
                      <div className="text-sm text-teal-700">
                        {Object.entries(JSON.parse(selectedDrug.excretion_route)).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="capitalize">{key}:</span>
                            <span>{String(value)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Enter a dose to simulate concentration-time profile</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {pkData && pkData.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Available Drugs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {uniqueDrugs.map((drug) => (
                <button
                  key={drug}
                  onClick={() => setSearchTerm(drug)}
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

export default PharmacokineticsSimulator;
