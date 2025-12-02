import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, Vote, Eye } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      icon: Brain,
      title: "EduAI Assist",
      description: "An AI-based educational assistive tool that helps students with personalized learning experiences. Features include intelligent tutoring, progress tracking, and adaptive content delivery.",
      tech: ["Python", "Machine Learning", "React", "Django", "TensorFlow"],
      category: "AI/ML",
      status: "Completed"
    },
    {
      icon: Vote,
      title: "Online Voting System",
      description: "Secure online voting platform with Django backend featuring face recognition authentication and OTP verification for enhanced security and voter verification.",
      tech: ["Django", "Python", "OpenCV", "Face Recognition", "MySQL"],
      category: "Web Development",
      status: "Completed"
    },
    {
      icon: Eye,
      title: "Smart Glasses for Visually Impaired",
      description: "IoT-based assistive device using AI and ultrasonic sensors to help visually impaired individuals navigate safely. Features object detection and audio feedback.",
      tech: ["Arduino", "Python", "Computer Vision", "IoT", "Ultrasonic Sensors"],
      category: "IoT/Hardware",
      status: "In Progress"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, ranging from AI-powered applications 
            to IoT devices that make a real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group h-full flex flex-col">
              {/* Project Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-warning/20 text-warning'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button variant="neon" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </Button>
                  <Button variant="glass" size="sm">
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="glass" size="lg">
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;