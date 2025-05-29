
import { useState, useEffect } from 'react';
import { Search, Filter, Award, BookOpen } from 'lucide-react';
import DrugCard from '../components/DrugCard';
import Quiz from '../components/Quiz';
import { drugClassesData } from '../data/drugClasses';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showQuiz, setShowQuiz] = useState(false);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(drugClassesData.map(drug => drug.category)))];

  // Filter drug classes based on search and category
  const filteredDrugs = drugClassesData.filter(drug => {
    const matchesSearch = drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         drug.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || drug.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Pharmacy MasterApp
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Learn Drug Classes with Interactive Cards & Quizzes
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setShowQuiz(false)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              !showQuiz 
                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50'
            }`}
          >
            <BookOpen className="inline h-5 w-5 mr-2" />
            Drug Classes
          </button>
          <button
            onClick={() => setShowQuiz(true)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              showQuiz 
                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50'
            }`}
          >
            <Award className="inline h-5 w-5 mr-2" />
            Take Quiz
          </button>
        </div>

        {!showQuiz ? (
          <>
            {/* Search and Filter Controls */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search drug classes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600 text-center">
                Showing {filteredDrugs.length} of {drugClassesData.length} drug classes
              </p>
            </div>

            {/* Drug Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrugs.map((drug, index) => (
                <DrugCard key={index} drug={drug} />
              ))}
            </div>

            {filteredDrugs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Results Found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </>
        ) : (
          <Quiz drugClasses={drugClassesData} />
        )}
      </div>
    </div>
  );
};

export default Index;
