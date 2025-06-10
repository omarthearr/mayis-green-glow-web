
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
      image: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/500068239_1334211642041465_290289362677499474_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=6IWz1Mw2C4gQ7kNvwFMu1cG&_nc_oc=AdnwnrdaKkkxhAI0rkRDChZeOI9S8rWs4Zh0e4z_Zun1e0f0VVvCFok5Y3xTlIP_C3JbD8XYvbTgr9jHwba2DhPJ&_nc_zt=23&_nc_ht=scontent-sin6-3.xx&_nc_gid=SfzVejoaq7vphwa_BG1n7w&oh=00_AfL_uRmjDJ0-6IxdVi9SMaz7snVUHe7zQVGjKiWY_xBWMg&oe=684467F0",
      category: 'cejas',
      title: 'Microblading Cejas',
      description: 'Cejas perfectamente definidas con técnica 3D'
    },
    {
      id: 2,
      image: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/498985845_1332537605208869_2589644776503928134_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=aHGPvSQZYroQ7kNvwF8Hpe1&_nc_oc=Adl8FJIzZcnmcAJOmnP8kBMowT7q3vSQdwO4zl98bfxCG1n_pFBZkqCGILrOOr-V72Pns7Vp2oFj4FejGZWbMG_r&_nc_zt=23&_nc_ht=scontent-sin6-3.xx&_nc_gid=g96gLBVRH0r4xgCgkYE1Xg&oh=00_AfJ_UQhMjD6XAa5cOb7khfxbSY-sjkKtBJFFbOi7wYNg5Q&oe=68446E1E",
      category: 'unas',
      title: 'Nail Art Flores',
      description: 'Diseño floral delicado en uñas acrílicas'
    },
    {
      id: 3,
      image: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/498938607_1332537681875528_3159096095169076816_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=QjKZ5dE9ZOsQ7kNvwGTaRQF&_nc_oc=Adhp_M54F0Jw0SkGJ8N3S-VF4WEXCsq3H5ShtJp1hWYMkD8djj3UhZKmM5KjkYpOULQkiZf4SGEI7xdQ7uUWsK8p&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=g96gLBVRH0r4xgCgkYE1Xg&oh=00_AfJJfJ4s_8ZCmZ6L4l9W4jcrlzEMPRX3PqZCJJ0L50dSQA&oe=6844618F",
      category: 'unas',
      title: 'Uñas Acrílicas',
      description: 'Diseño elegante con acabado perfecto'
    },
    {
      id: 4,
      image: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/498951426_1332537718542191_8830583451063764879_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=SfJZa4mQI4cQ7kNvwFp9xhE&_nc_oc=AdkuGD6b16LNjshKYdGevWMqRPFpOdpYr9G-fJjNKzjNhJqhf6XDa8v7A3lKhEo6LjQhvhVTdvMwCJOyepXTM6Zr&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=g96gLBVRH0r4xgCgkYE1Xg&oh=00_AfKMpCkqsKK_P2iMjZxGTR2aWF8Kb0ngjXQO6SdFXZdUtA&oe=68444E36",
      category: 'unas',
      title: 'Nail Art Estampado',
      description: 'Diseño con patrones únicos y coloridos'
    },
    {
      id: 5,
      image: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/498962113_1332537755208854_7433781610851659829_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=EiOEIlBiXyUQ7kNvwH7BgMU&_nc_oc=AdjX3OrmOKYIrGDyO7-nWnLkGh5l4VcW7k7rH3l37aHY3wVFaWi-N9K5S5Ue7Vz7Y-vNGcMTy8HKfmfhxBfZCXdV&_nc_zt=23&_nc_ht=scontent-sin6-4.xx&_nc_gid=g96gLBVRH0r4xgCgkYE1Xg&oh=00_AfIgLNZJZb0e7mWqeVjF6_e99qLy8HvIXFAW9OIqsYc1fw&oe=68447E0C",
      category: 'unas',
      title: 'Uñas Francesas',
      description: 'Manicure francesa clásica con toque moderno'
    },
    {
      id: 6,
      image: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/498990426_1332537791875517_2066850421842093134_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hJtjMYJNk3AQ7kNvwFSz0Uh&_nc_oc=AdlWMM_T-SyV5H7ZpDfElPi6-cxGMW_9o_HKGIIDadX5HUEb1YdJPdInQo1wWtQJxYGuvIFhk3X_lH7wDqWJTZy5&_nc_zt=23&_nc_ht=scontent-sin6-4.xx&_nc_gid=g96gLBVRH0r4xgCgkYE1Xg&oh=00_AfJuJqZDBqB0BtMKCE11r4z6b3XokYk7LBgA1qT5-pRiJQ&oe=684457A5",
      category: 'unas',
      title: 'Nail Art Geométrico',
      description: 'Diseños geométricos modernos y elegantes'
    },
    {
      id: 7,
      image: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/498938827_1332537825208847_3533013772742756624_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ukmfVbvDJOQQ7kNvwGJRdOW&_nc_oc=AdhzGhCmT2d6iqpN9DQdmFxGPGa0I_4q9ixBtGEZq1Hg5WI2bKTZ8D9NJDEr8BBdtHi1qY4o8jdXQOBjMKP-_bhZ&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=g96gLBVRH0r4xgCgkYE1Xg&oh=00_AfJq78T1f7K4VdDKMYTzNnhQ8FLDJhRSYJv2J0DyGjqHHw&oe=68444B6A",
      category: 'cejas',
      title: 'Delineado de Cejas',
      description: 'Cejas delineadas con precisión profesional'
    },
    {
      id: 8,
      image: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/498987106_1332537865208843_6157829203325439976_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=VY2jA1Dv3oYQ7kNvwH3GhS1&_nc_oc=Adkj1mAcHBtK0d5QWIHSJbw5OEYTa7hxI-UQ6tpABKbSI8WNqZhAGFW7KPp1Cb3hwIj__bC3QOlxHb5o0MYqcJOq&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=g96gLBVRH0r4xgCgkYE1Xg&oh=00_AfISq8Qz_MJFeSzJ9U0dBQxjDq5qF3Bh1GkIWkgvMdADIQ&oe=68445E44",
      category: 'unas',
      title: 'Uñas Minimalistas',
      description: 'Diseño simple y elegante con detalles sutiles'
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
              ¡Síguenos en Facebook!
            </h3>
            <p className="font-inter text-primary-100 mb-6">
              Descubre más trabajos, tips de belleza y promociones exclusivas en nuestro Facebook oficial.
            </p>
            <Button
              onClick={() => window.open('https://www.facebook.com/mayisdelineadopermanente', '_blank')}
              className="bg-white text-primary-600 hover:bg-gray-100 font-inter font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5 mr-3" />
              Mayis Delineado Permanente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
