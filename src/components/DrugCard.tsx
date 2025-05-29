
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DrugClass {
  name: string;
  category: string;
  description: string;
  mechanism: string;
  uses: string;
  side_effects: string;
  examples: string[];
}

interface DrugCardProps {
  drug: DrugClass;
}

const DrugCard = ({ drug }: DrugCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Cardiovascular': 'bg-red-100 text-red-800 border-red-200',
      'Antimicrobial': 'bg-green-100 text-green-800 border-green-200',
      'Central Nervous System': 'bg-purple-100 text-purple-800 border-purple-200',
      'Gastrointestinal': 'bg-orange-100 text-orange-800 border-orange-200',
      'Endocrine': 'bg-blue-100 text-blue-800 border-blue-200',
      'Respiratory': 'bg-teal-100 text-teal-800 border-teal-200',
      'Oncology': 'bg-pink-100 text-pink-800 border-pink-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="relative h-80 group">
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 group-hover:scale-105"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border mb-4 ${getCategoryColor(drug.category)}`}>
                {drug.category}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                {drug.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {drug.description}
              </p>
            </div>
            <div className="flex items-center justify-center mt-4 text-blue-500">
              <span className="text-sm font-medium mr-2">Click to flip</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg text-white transform rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">{drug.name}</h3>
              <ChevronUp className="h-4 w-4" />
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-1 text-blue-100">Mechanism:</h4>
                <p className="text-white/90">{drug.mechanism}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1 text-blue-100">Uses:</h4>
                <p className="text-white/90">{drug.uses}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1 text-blue-100">Side Effects:</h4>
                <p className="text-white/90">{drug.side_effects}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-1 text-blue-100">Indian Examples:</h4>
                <ul className="space-y-1">
                  {drug.examples.map((example, index) => (
                    <li key={index} className="text-white/90 text-xs bg-white/10 rounded px-2 py-1">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
