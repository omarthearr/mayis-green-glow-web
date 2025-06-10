
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

interface SocialCTAProps {
  isVisible: boolean;
}

const SocialCTA = ({ isVisible }: SocialCTAProps) => {
  return (
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
  );
};

export default SocialCTA;
