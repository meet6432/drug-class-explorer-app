
import { useState, useEffect } from 'react';
import { BookOpen, Award } from 'lucide-react';
import DrugCard from '../components/DrugCard';
import Quiz from '../components/Quiz';
import SearchAndFilter from '../components/SearchAndFilter';
import Pagination from '../components/Pagination';
import { comprehensiveDrugClasses, drugCategories } from '../data/comprehensiveDrugClasses';

const ITEMS_PER_PAGE = 12;

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories
  const categories = ['All', ...drugCategories];

  // Filter drug classes based on search and category
  const filteredDrugs = comprehensiveDrugClasses.filter(drug => {
    const matchesSearch = drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         drug.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         drug.mechanism.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         drug.uses.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || drug.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredDrugs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDrugs = filteredDrugs.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            Master 400+ Drug Classes with Interactive Cards, Multi-Level Quizzes & Clinical Cases
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
            Drug Classes ({comprehensiveDrugClasses.length})
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
            Interactive Quizzes & Cases
          </button>
        </div>

        {!showQuiz ? (
          <>
            {/* Search and Filter Controls */}
            <SearchAndFilter
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onSearchChange={setSearchTerm}
              onCategoryChange={setSelectedCategory}
              categories={categories}
              totalResults={filteredDrugs.length}
              totalDrugs={comprehensiveDrugClasses.length}
            />

            {/* Drug Cards Grid */}
            {currentDrugs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {currentDrugs.map((drug) => (
                    <DrugCard key={drug.id} drug={drug} />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  itemsPerPage={ITEMS_PER_PAGE}
                  totalItems={filteredDrugs.length}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Results Found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </>
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  );
};

export default Index;
