import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground/80 mb-2">
              © 2024 Hemalatha S. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="text-red-500" size={16} /> using React, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              Let's build something amazing together
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:scale-110 transition-transform glow-button"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;