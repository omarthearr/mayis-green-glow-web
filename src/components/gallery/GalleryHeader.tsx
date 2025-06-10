
import { Sparkles } from 'lucide-react';

interface GalleryHeaderProps {
  isVisible: boolean;
}

const GalleryHeader = ({ isVisible }: GalleryHeaderProps) => {
  return (
    <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Sparkles className="w-6 h-6 text-primary-500" />
        <span className="font-inter text-primary-600 font-medium text-sm uppercase tracking-wide">
          Nuestra Galería
        </span>
      </div>
      
      <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
        Trabajos{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
          Realizados
        </span>
      </h2>
      
      <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Cada trabajo es una obra de arte única. Conoce algunos de nuestros proyectos más destacados 
        y la transformación que hemos logrado en nuestras clientas.
      </p>
    </div>
  );
};

export default GalleryHeader;
