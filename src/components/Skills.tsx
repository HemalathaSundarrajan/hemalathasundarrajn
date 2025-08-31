import { Card } from '@/components/ui/card';
import { Code, Palette, Database, Cloud, Brain, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 75 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 }
      ]
    },
    {
      icon: Palette,
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 65 },
        { name: "UI/UX Design", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Django", level: 70 },
        { name: "MySQL", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background-secondary/30">
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
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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