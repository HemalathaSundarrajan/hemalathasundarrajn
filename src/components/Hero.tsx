import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/hemalatha-profile.jpg';

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
              <Button variant="neon" size="lg" className="group">
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download Resume
              </Button>
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

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative animate-float">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-2 glow-button">
                <img
                  src={profileImage}
                  alt="Hemalatha S - Front-End Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-glow rounded-full animate-pulse opacity-40" />
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