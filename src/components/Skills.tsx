import { Card } from '@/components/ui/card';
import { Code, Palette, Database, Coffee, FileCode, Paintbrush, Layers, Server } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: Coffee },
        { name: "HTML", icon: FileCode },
        { name: "CSS", icon: Paintbrush }
      ]
    },
    {
      icon: Palette,
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", icon: Layers },
        { name: "UI/UX Design", icon: Paintbrush }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Django", icon: Server },
        { name: "MySQL", icon: Database }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-background-secondary/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon className="text-primary" size={20} />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;