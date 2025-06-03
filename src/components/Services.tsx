
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Palette, Sparkles, Clock, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('servicios');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Eye,
      title: "Delineado Permanente",
      description: "Técnicas avanzadas para realzar tu mirada naturalmente",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      treatments: [
        { name: "Cejas con microblading", price: "$180.000", duration: "2-3 horas" },
        { name: "Delineado de ojos", price: "$150.000", duration: "1.5-2 horas" },
        { name: "Perfilado de labios", price: "$160.000", duration: "2 horas" }
      ],
      features: ["Pigmentos importados", "Técnica 3D", "Retoque incluido", "Duración 1-2 años"]
    },
    {
      icon: Palette,
      title: "Diseño de Uñas",
      description: "Arte en tus manos con las mejores técnicas y materiales",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      treatments: [
        { name: "Uñas acrílicas", price: "$45.000", duration: "1.5 horas" },
        { name: "Uñas en gel", price: "$40.000", duration: "1 hora" },
        { name: "Nail Art personalizado", price: "$55.000", duration: "2 horas" }
      ],
      features: ["Diseños únicos", "Materiales premium", "Larga duración", "Mantenimiento incluido"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary-500" />
            <span className="font-inter text-primary-600 font-medium text-sm uppercase tracking-wide">
              Nuestros Servicios
            </span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Servicios de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Alta Calidad
            </span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios especializados con técnicas de vanguardia y los mejores materiales 
            para garantizar resultados excepcionales que realcen tu belleza natural.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair font-bold text-2xl text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="font-inter text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Treatments */}
                  <div className="space-y-4">
                    <h4 className="font-inter font-semibold text-lg text-gray-800 flex items-center">
                      <Star className="w-5 h-5 text-accent-500 mr-2" />
                      Tratamientos Disponibles
                    </h4>
                    <div className="space-y-3">
                      {service.treatments.map((treatment, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-primary-50/50 rounded-lg">
                          <div>
                            <p className="font-inter font-medium text-gray-800">{treatment.name}</p>
                            <div className="flex items-center space-x-3 mt-1">
                              <Badge variant="outline" className="text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {treatment.duration}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-inter font-bold text-lg text-primary-600">
                              {treatment.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-inter font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Agendar {service.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair font-bold text-2xl text-gray-800 mb-4">
              ¿No sabes qué servicio elegir?
            </h3>
            <p className="font-inter text-gray-600 mb-6">
              Nuestros especialistas te asesorarán para encontrar el tratamiento perfecto para ti.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white font-inter font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
