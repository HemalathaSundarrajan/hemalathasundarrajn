import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trophy, Users, Presentation, Award, Code, Zap, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false);
  const [isInnovationModalOpen, setIsInnovationModalOpen] = useState(false);
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const certificates = [
    {
      title: "Detection of Parkinson Disease Using ML", 
      description: "National Level Students Technical Symposium",
      organization: "Erode Sengunthar Engineering College",
      achievement: "3rd Prize",
      imageUrl: "/lovable-uploads/1c6dfb8f-9163-4953-88e0-383c76c52891.png"
    },
    {
      title: "BRAHMASTRA 23",
      description: "Paper Presentation - PAPERIQ THEIDIJI BRAINAZA",
      organization: "Chettinad College of Engineering & Technology",
      achievement: "Participation",
      imageUrl: "/lovable-uploads/brahmastra-cert.png"
    },
    {
      title: "AMPERE2K25",
      description: "Paper Presentation, Poster Presentation, Technical Quiz",
      organization: "Selvam College of Technology",
      achievement: "Participation",
      imageUrl: "/lovable-uploads/ampere2k25-cert.png"
    },
    {
      title: "MXCEL-2K24",
      description: "Paper Presentation CAD/CAM SISTER",
      organization: "Kongu Engineering College",
      achievement: "Participation",
      imageUrl: "/lovable-uploads/mxcel-cert.png"
    },
    {
      title: "MEDICNIK 2K25",
      description: "Paper Presentation Technical Quiz - Med & Tech Expo",
      organization: "Karpagam Academy of Higher Education",
      achievement: "Participation",
      imageUrl: "/lovable-uploads/medicnik-cert.png"
    }
  ];

  const academicCertificates = [
    {
      title: "Certificate of Merit - First Semester",
      description: "Class Topper I/II/III - Computer Science and Engineering",
      organization: "Kongunadu College of Engineering & Technology",
      year: "2022-2023",
      imageUrl: "/lovable-uploads/aad8b6b1-ac38-4850-96ec-72898f28d0c3.png"
    },
    {
      title: "Certificate of Merit - Second Semester", 
      description: "Class Topper I/II/III - Computer Science and Engineering",
      organization: "Kongunadu College of Engineering & Technology",
      year: "2022-2023",
      imageUrl: "/lovable-uploads/e44c71a1-e008-4fa6-b8be-e8a072f65846.png"
    },
    {
      title: "Certificate of Merit - Third Semester",
      description: "Class Topper I/II/III - Computer Science and Engineering", 
      organization: "Kongunadu College of Engineering & Technology",
      year: "2023-2024",
      imageUrl: "/lovable-uploads/926e0ade-bf7d-47cb-82f1-7499d703e677.png"
    },
    {
      title: "Certificate of Merit - Fourth Semester",
      description: "Class Topper I/II/III - Computer Science and Engineering",
      organization: "Kongunadu College of Engineering & Technology", 
      year: "2023-2024",
      imageUrl: "/lovable-uploads/309a019d-afdd-4d94-b134-c877db33c53b.png"
    },
    {
      title: "Certificate of Merit - Fifth Semester",
      description: "Class Topper I/II/III - Computer Science and Engineering",
      organization: "Kongunadu College of Engineering & Technology",
      year: "2024-2025", 
      imageUrl: "/lovable-uploads/0101e068-57c7-4fad-ad4d-44aa25e3f39e.png"
    },
    {
      title: "Certificate of Merit - Sixth Semester",
      description: "Class Topper I/II/III - Computer Science and Engineering",
      organization: "Kongunadu College of Engineering & Technology",
      year: "2024-2025",
      imageUrl: "/lovable-uploads/f4162ab4-d508-427d-98fd-7a2dae74a157.png"
    }
  ];

  const innovationCertificates = [
    {
      title: "Top Rank in Overall Academic Performance",
      description: "XII Standard",
      organization: "TNPEITA, Namakkal District",
      achievement: "Top Rank",
      imageUrl: "/lovable-uploads/top-rank-cert.png"
    },
    {
      title: "Detection of Parkinson Disease Using ML",
      description: "National Level Students Technical Symposium TECHNO FEST",
      organization: "Erode Sengunthar Engineering College",
      achievement: "3rd Prize",
      imageUrl: "/lovable-uploads/techno-fest-cert.png"
    }
  ];

  const hackathonCertificates = [
    {
      title: "AI Hackathon Participation",
      description: "AIVOLUTION - AI Hackathon organized by DAKSH, SASTRA University",
      organization: "SASTRA University",
      achievement: "Participation",
      imageUrl: "/lovable-uploads/ai-hackathon-cert.jpg",
      date: "07,08,09 March 2025"
    }
  ];

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
      description: "Secured Top Rank in 12th Standard (TINPEITA, Namakkal) and demonstrated excellence in Engineering with project presentations and technical achievements.",
      category: "Innovation",
      highlight: "Academic & Technical Excellence"
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
    <section 
      id="achievements" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-background-secondary/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
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
            <Card 
              key={index} 
              className={`project-card group p-6 h-full ${(achievement.title === "Paper Presentations" || achievement.title === "Academic Excellence" || achievement.title === "Innovation Spotlight" || achievement.title === "DAKSH'S AI Hackathon") ? "cursor-pointer" : ""}`}
              onClick={
                achievement.title === "Paper Presentations" ? () => setIsModalOpen(true) :
                achievement.title === "Academic Excellence" ? () => setIsAcademicModalOpen(true) :
                achievement.title === "Innovation Spotlight" ? () => setIsInnovationModalOpen(true) :
                achievement.title === "DAKSH'S AI Hackathon" ? () => setIsHackathonModalOpen(true) :
                undefined
              }
            >
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
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {achievement.title}
                    {(achievement.title === "Paper Presentations" || achievement.title === "Academic Excellence" || achievement.title === "Innovation Spotlight" || achievement.title === "DAKSH'S AI Hackathon") && (
                      <ExternalLink size={16} className="opacity-60" />
                    )}
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

        {/* Certificates Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">
                Paper Presentation Certificates
              </DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-primary">{cert.organization}</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {cert.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Academic Excellence Modal */}
        <Dialog open={isAcademicModalOpen} onOpenChange={setIsAcademicModalOpen}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">
                Academic Excellence - Continuous Rank Holder
              </DialogTitle>
              <p className="text-muted-foreground">
                Consistent academic performance across six semesters with Class Topper achievements
              </p>
            </DialogHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicCertificates.map((cert, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-2">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{cert.description}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-primary">{cert.organization}</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Innovation Spotlight Modal */}
        <Dialog open={isInnovationModalOpen} onOpenChange={setIsInnovationModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">
                Innovation Spotlight
              </DialogTitle>
              <p className="text-muted-foreground">
                Academic excellence and innovative achievements in engineering and technology
              </p>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              {innovationCertificates.map((cert, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-primary">{cert.organization}</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {cert.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* AI Hackathon Modal */}
        <Dialog open={isHackathonModalOpen} onOpenChange={setIsHackathonModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">
                DAKSH'S AI Hackathon
              </DialogTitle>
              <p className="text-muted-foreground">
                Participation in AI innovation and technology competition
              </p>
            </DialogHeader>
            <div className="grid gap-6">
              {hackathonCertificates.map((cert, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-primary">{cert.organization}</span>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-full">
                            {cert.date}
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {cert.achievement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>

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