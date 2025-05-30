
import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  categories: string[];
  totalResults: number;
  totalDrugs: number;
}

const SearchAndFilter = ({
  searchTerm,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  categories,
  totalResults,
  totalDrugs
}: SearchAndFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const clearFilters = () => {
    onSearchChange('');
    onCategoryChange('All');
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'All';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search drug classes by name, category, or mechanism..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Filter Toggle for Mobile */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
        >
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </button>

        {/* Category Filter */}
        <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center px-4 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <X className="h-4 w-4 mr-2" />
            Clear
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <span>
          Showing {totalResults} of {totalDrugs} drug classes
        </span>
        
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Search: "{searchTerm}"
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                Category: {selectedCategory}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
