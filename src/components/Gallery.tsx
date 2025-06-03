
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Instagram, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('galeria');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'cejas', name: 'Cejas' },
    { id: 'ojos', name: 'Ojos' },
    { id: 'labios', name: 'Labios' },
    { id: 'unas', name: 'Uñas' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'cejas',
      title: 'Microblading Natural',
      description: 'Cejas perfectamente definidas con técnica 3D'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560869713-7d0ad92c2f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'ojos',
      title: 'Delineado Permanente',
      description: 'Mirada realzada con delineado profesional'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'unas',
      title: 'Nail Art Elegante',
      description: 'Diseño personalizado en uñas acrílicas'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'labios',
      title: 'Perfilado de Labios',
      description: 'Labios naturalmente definidos'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'cejas',
      title: 'Cejas Powder Brows',
      description: 'Técnica de sombreado suave y natural'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'unas',
      title: 'Uñas en Gel',
      description: 'Manicure francesa con acabado perfecto'
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'ojos',
      title: 'Delineado Cat Eye',
      description: 'Efecto cat eye con delineado permanente'
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1609205799303-11b5b5c4cd90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: 'unas',
      title: 'Nail Art Flores',
      description: 'Diseño floral delicado y femenino'
    }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
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

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
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

        {/* Instagram CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-white">
            <Instagram className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="font-playfair font-bold text-2xl mb-4">
              ¡Síguenos en Instagram!
            </h3>
            <p className="font-inter text-primary-100 mb-6">
              Descubre más trabajos, tips de belleza y promociones exclusivas en nuestro Instagram oficial.
            </p>
            <Button
              onClick={() => window.open('https://instagram.com/formabellezamayis', '_blank')}
              className="bg-white text-primary-600 hover:bg-gray-100 font-inter font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5 mr-3" />
              @FormaBellezaMayis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
