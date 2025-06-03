
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Star, Heart, WhatsApp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent-200 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-100 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-accent-500" />
                <span className="font-inter text-accent-600 font-medium text-sm uppercase tracking-wide">
                  Estética Profesional
                </span>
              </div>
              
              <h1 className="font-playfair font-bold text-5xl lg:text-6xl text-gray-800 leading-tight">
                Resalta tu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                  belleza
                </span>{' '}
                con arte y precisión
              </h1>
              
              <p className="font-inter text-xl text-gray-600 leading-relaxed max-w-lg">
                Especialistas en delineado permanente de cejas, ojos y labios. Diseño de uñas acrílicas, gel y nail art. 
                Tu belleza es nuestra pasión.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-800">Técnicas Avanzadas</p>
                  <p className="font-inter text-sm text-gray-600">Resultados duraderos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-800">Atención Personalizada</p>
                  <p className="font-inter text-sm text-gray-600">Cuidado profesional</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <WhatsApp className="w-5 h-5 mr-3" />
                Reservar Cita
              </Button>
              
              <Button
                variant="outline"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary-300 text-primary-700 hover:bg-primary-50 font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Ver Servicios
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0ad92c2f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Servicios de belleza profesional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-accent-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-xs font-semibold text-gray-800">5.0</p>
                  <p className="font-inter text-xs text-gray-600">Reviews</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-32 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <p className="font-inter text-lg font-bold text-primary-600">500+</p>
                  <p className="font-inter text-xs text-gray-600">Clientas felices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
