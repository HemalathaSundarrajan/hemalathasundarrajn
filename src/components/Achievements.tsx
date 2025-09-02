import { Card } from '@/components/ui/card';
import { Trophy, Users, Presentation, Award, Code, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "DAKSH'S AI Hackathon",
      description: "Participated in the DAKSH AI Hackathon at SASTRA University, contributing to innovative AI-based solutions and collaborating effectively in a competitive environment.",
      category: "Competition",
      highlight: "SASTRA University"
    },
    {
      icon: Presentation,
      title: "Paper Presentations",
      description: "Presented research papers on emerging technologies and innovative solutions at technical symposiums and conferences.",
      category: "Research", 
      highlight: "Technical Symposiums"
    },
    {
      icon: Users,
      title: "Tech Arena Event Lead",
      description: "Led and organized Tech Arena events, coordinating with teams, managing logistics, and ensuring successful execution of technical competitions.",
      category: "Leadership",
      highlight: "Event Management"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintained consistent academic performance with CGPA of 9.4, demonstrating strong foundation in computer science fundamentals.",
      category: "Academic",
      highlight: "CGPA 9.4"
    },
    {
      icon: Trophy,
      title: "Innovation Spotlight",
      description: "Secured Top Rank in 12th Standard (TINPEITA, Namakkal) and won 3rd Prize for Paper Presentation on \"Detection of Parkinson's Disease Using ML\" at a National Level Symposium, Sengunthar Engineering College.",
      category: "Innovation",
      highlight: "Multiple Projects"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapted to new technologies and frameworks, successfully completing internships in Cloud Computing and Full Stack Development.",
      category: "Professional",
      highlight: "Continuous Growth"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition and leadership experiences that have shaped my journey as a developer 
            and contributed to my professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="project-card group p-6 h-full">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="text-primary" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full font-medium">
                    {achievement.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                </div>

                {/* Highlight */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-primary font-medium text-sm">
                      {achievement.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Leadership Quote */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto p-8">
            <blockquote className="text-2xl font-light italic text-foreground/90 mb-4">
              "Leadership is not about being in charge. It's about taking care of those in your charge 
              and inspiring others to achieve greatness together."
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-primary">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span className="font-medium">My Leadership Philosophy</span>
              <div className="w-1 h-1 bg-primary rounded-full" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;