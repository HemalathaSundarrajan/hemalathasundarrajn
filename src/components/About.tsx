import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "B.E CSE",
      description: "Kongunadu College of Engineering and Technology",
      detail: "CGPA: 9.4 (till 6th sem)"
    },
    {
      icon: Award,
      title: "Certification", 
      subtitle: "AWS Certified",
      description: "Cloud Practitioner",
      detail: "Amazon Web Services"
    },
    {
      icon: Briefcase,
      title: "Experience",
      subtitle: "Internships",
      description: "Cloud Computing & Full Stack Development",
      detail: "Multiple projects completed"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a strong foundation in computer science and 
            a drive to create innovative web solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm Hemalatha S, an aspiring Front-End Developer currently pursuing my B.E in Computer Science 
              and Engineering at Kongunadu College of Engineering and Technology. With a CGPA of 9.4, 
              I've maintained academic excellence while actively exploring the world of web development.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              My journey in technology has been enriched by hands-on experience through internships in 
              Cloud Computing and Full Stack Development. I'm AWS Certified Cloud Practitioner and have 
              a strong foundation in Java, HTML, CSS, and JavaScript.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm passionate about creating user-friendly interfaces and exploring emerging technologies 
              like AI and Machine Learning. My goal is to contribute to innovative projects that make 
              a positive impact on society.
            </p>

            <div className="flex items-center gap-2 text-primary">
              <MapPin size={20} />
              <span className="font-medium">Tamil Nadu, India</span>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="project-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-1">{item.subtitle}</p>
                    <p className="text-foreground/80 mb-2">{item.description}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;