
import { Button } from '@/components/ui/button';
import { Category } from '@/types/gallery';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  isVisible: boolean;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, isVisible }: CategoryFilterProps) => {
  return (
    <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={`font-inter font-medium px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
              : 'border-primary-200 text-primary-700 hover:bg-primary-50'
          }`}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
