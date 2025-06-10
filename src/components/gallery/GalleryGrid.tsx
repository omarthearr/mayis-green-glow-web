
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { GalleryItem, Category } from '@/types/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
  categories: Category[];
  isVisible: boolean;
}

const GalleryGrid = ({ items, categories, isVisible }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <Card
          key={item.id}
          className={`group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: `${(index + 2) * 100}ms` }}
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <Badge className="bg-white/90 text-primary-600 font-inter text-xs">
                {categories.find(cat => cat.id === item.category)?.name}
              </Badge>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                className="bg-white/90 text-primary-600 hover:bg-white font-inter font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Detalle
              </Button>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-playfair font-semibold text-lg text-white mb-1">
                {item.title}
              </h3>
              <p className="font-inter text-sm text-gray-200">
                {item.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GalleryGrid;
