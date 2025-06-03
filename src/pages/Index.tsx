import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="font-playfair font-bold text-xl text-gray-800">Forma & Belleza</h1>
                <p className="font-inter text-sm text-primary-600 font-medium">Mayis</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contacto
              </button>
              <Button
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-inter font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Reservar
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary-600" />
              ) : (
                <Menu className="w-6 h-6 text-primary-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-primary-100 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('galeria')}
                  className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors text-left"
                >
                  Galería
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="font-inter font-medium text-gray-700 hover:text-primary-600 transition-colors text-left"
                >
                  Contacto
                </button>
                <Button
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-inter font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Reservar
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="servicios">
          <Services />
        </section>
        
        <section id="galeria">
          <Gallery />
        </section>
        
        <section id="contacto">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-playfair font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg">Forma & Belleza Mayis</h3>
                </div>
              </div>
              <p className="font-inter text-gray-300 text-sm leading-relaxed">
                Especialistas en delineado permanente y diseño de uñas. Resalta tu belleza con arte y precisión.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-playfair font-semibold text-lg">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="font-inter text-sm text-gray-300">+57 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="font-inter text-sm text-gray-300">Calle Principal #123, Ciudad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span className="font-inter text-sm text-gray-300">Lun - Sáb: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-playfair font-semibold text-lg">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-inter text-sm text-gray-400">
              © 2024 Forma & Belleza Mayis. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-40 animate-float"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default Index;
