
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Mail,
  Calendar,
  User,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contacto');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `¡Hola! Me interesa agendar una cita.%0A%0ANombre: ${formData.name}%0ATeléfono: ${formData.phone}%0AServicio: ${formData.service}%0AMensaje: ${formData.message}`;
    
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto para confirmar tu cita.",
    });
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+57 123 456 7890",
      action: () => window.open('tel:+571234567890')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "Envíanos un mensaje",
      action: () => window.open('https://wa.me/1234567890')
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Calle Principal #123, Ciudad",
      action: () => window.open('https://maps.google.com')
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Sáb: 9:00 AM - 6:00 PM",
      action: null
    }
  ];

  const services = [
    "Microblading de cejas",
    "Delineado de ojos",
    "Perfilado de labios",
    "Uñas acrílicas",
    "Uñas en gel",
    "Nail Art",
    "Consulta general"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary-500" />
            <span className="font-inter text-primary-600 font-medium text-sm uppercase tracking-wide">
              Contacto
            </span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-gray-800 mb-6">
            Agenda tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Cita
            </span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a realzar tu belleza. Contáctanos y agenda tu cita 
            para recibir el mejor servicio personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="font-playfair font-bold text-2xl text-gray-800 mb-6">
              Información de Contacto
            </h3>
            
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 ${
                  item.action ? 'cursor-pointer hover:scale-105' : ''
                }`}
                onClick={item.action || undefined}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-800">{item.title}</h4>
                      <p className="font-inter text-gray-600">{item.info}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-playfair font-semibold text-lg mb-4">Síguenos en redes sociales</h4>
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-0"
                    onClick={() => window.open('https://instagram.com/formabellezamayis')}
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-0"
                    onClick={() => window.open('https://facebook.com/formabellezamayis')}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-0"
                    onClick={() => window.open('https://wa.me/1234567890')}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  <h3 className="font-playfair font-bold text-2xl text-gray-800">
                    Solicitar Cita
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-inter font-medium text-gray-700">
                        Nombre completo
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Tu nombre completo"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="pl-10 font-inter border-gray-200 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-inter font-medium text-gray-700">
                        Correo electrónico
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10 font-inter border-gray-200 focus:border-primary-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-inter font-medium text-gray-700">
                        Teléfono
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+57 123 456 7890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10 font-inter border-gray-200 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-inter font-medium text-gray-700">
                        Servicio de interés
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="font-inter border-gray-200 focus:border-primary-500">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="font-inter">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-inter font-medium text-gray-700">
                      Mensaje adicional
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos más sobre lo que necesitas..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="pl-10 pt-3 min-h-32 font-inter border-gray-200 focus:border-primary-500 resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-inter font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex-1"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      Enviar por WhatsApp
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => window.open('tel:+571234567890')}
                      className="border-primary-300 text-primary-700 hover:bg-primary-50 font-inter font-semibold px-8 py-3 rounded-full transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      Llamar Ahora
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <div className="h-64 md:h-80 bg-gradient-to-r from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h4 className="font-playfair font-bold text-xl text-gray-800 mb-2">
                  Nos ubicamos en el corazón de la ciudad
                </h4>
                <p className="font-inter text-gray-600 mb-4">
                  Calle Principal #123, Ciudad
                </p>
                <Button
                  onClick={() => window.open('https://maps.google.com')}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-inter font-medium px-6 py-2 rounded-full"
                >
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
