import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';
const profileImageUrl = '/lovable-uploads/5f6849fb-fa8b-4905-b5c2-5559b49d5fc4.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative animated-bg">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-primary font-semibold text-lg mb-4 font-mono">
              Hello, I'm
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Hemalatha S</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-semibold">
              Aspiring Front-End Developer
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl">
              Crafting elegant web experiences with creativity and code. 
              Passionate about building innovative solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="https://drive.google.com/file/d/1SdMYDvSbLlF8N1e75j1CS5jaYQiwbI9L/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="neon" size="lg" className="group">
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  Download Resume
                </Button>
              </a>
              <Button variant="glass" size="lg">
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/HemalathaSundarrajan"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Github className="group-hover:text-primary transition-colors" size={24} />
                </Button>
              </a>
              <a
                href="#contact"
                className="group"
              >
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Linkedin className="group-hover:text-primary transition-colors" size={24} />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image with Enhanced Decorative Elements */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative animate-float">
              {/* Main profile image */}
              <div className="w-96 h-96 rounded-full overflow-hidden glass-card p-2 glow-button relative z-10">
                <img
                  src={profileImageUrl}
                  alt="Hemalatha S - Front-End Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-10 h-10 bg-primary rounded-full animate-pulse opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary-glow rounded-full animate-pulse opacity-40" />
              <div className="absolute top-1/4 -right-12 w-4 h-4 bg-accent rounded-full animate-ping opacity-30" />
              <div className="absolute bottom-1/4 -left-12 w-6 h-6 bg-primary/30 rounded-full animate-bounce opacity-50" />
              
              {/* Code-themed floating elements */}
              <div className="absolute -top-8 left-1/3 text-primary/40 animate-pulse">
                <div className="text-2xl font-mono">&lt;/&gt;</div>
              </div>
              <div className="absolute -bottom-8 right-1/3 text-secondary-glow/40 animate-pulse delay-1000">
                <div className="text-xl font-mono">{}</div>
              </div>
            </div>
            
            {/* Background decorative circles */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary-glow/5 rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;