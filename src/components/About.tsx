import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { GraduationCap, Award, Briefcase, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
      detail: "Amazon Web Services",
      certificate: "/lovable-uploads/26f0d7bb-46dd-477e-b608-47233fc29540.png"
    }
  ];

  const internships = [
    {
      title: "Full Stack Development",
      company: "e-soft solutions", 
      duration: "June 27 - July 12, 2024",
      certificate: "/lovable-uploads/6d124923-d2ca-49f2-8c2b-7d7f4870cf4b.png"
    },
    {
      title: "Cloud Computing",
      company: "iSquare Consulting Services LLP",
      duration: "Feb 7 - Feb 20, 2024", 
      certificate: "/lovable-uploads/b8ba5a14-904d-498e-98ca-b696cbd18043.png"
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

          {/* Education Qualification Table */}
          <div className="lg:col-span-2 mb-12">
            <div className="max-w-4xl mx-auto">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-t-lg">
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold tracking-wider">EDUCATION QUALIFICATION</h3>
                </div>
              </div>
              
              {/* Table Content */}
              <div className="bg-white border border-gray-200 rounded-b-lg overflow-hidden">
                {/* Column Headers */}
                <div className="grid grid-cols-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
                  <div className="p-4 text-center font-semibold border-r border-white/20">Course</div>
                  <div className="p-4 text-center font-semibold border-r border-white/20">Year</div>
                  <div className="p-4 text-center font-semibold border-r border-white/20">Institution Name</div>
                  <div className="p-4 text-center font-semibold">Percentage</div>
                </div>
                
                {/* Table Rows */}
                <div className="grid grid-cols-4 border-b border-gray-200">
                  <div className="p-4 text-center border-r border-gray-200 bg-gray-50 font-medium">B.E.,CSE</div>
                  <div className="p-4 text-center border-r border-gray-200">2022 - 2026</div>
                  <div className="p-4 text-center border-r border-gray-200">Kongunadu college of Engineering and Technology</div>
                  <div className="p-4 text-center">94.6% upto 6th sem</div>
                </div>
                
                <div className="grid grid-cols-4 border-b border-gray-200">
                  <div className="p-4 text-center border-r border-gray-200 bg-gray-50 font-medium">HSC</div>
                  <div className="p-4 text-center border-r border-gray-200">2022</div>
                  <div className="p-4 text-center border-r border-gray-200">Bharathi Hr.sec School</div>
                  <div className="p-4 text-center">94.5%</div>
                </div>
                
                <div className="grid grid-cols-4">
                  <div className="p-4 text-center border-r border-gray-200 bg-gray-50 font-medium">SSLC</div>
                  <div className="p-4 text-center border-r border-gray-200">2020</div>
                  <div className="p-4 text-center border-r border-gray-200">Bharathi Hr.sec School</div>
                  <div className="p-4 text-center">91%</div>
                </div>
              </div>
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
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      {item.certificate && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="text-primary hover:text-primary/80 transition-colors">
                              <ExternalLink size={16} />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <img 
                              src={item.certificate} 
                              alt={`${item.title} Certificate`}
                              className="w-full h-auto rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-1">{item.subtitle}</p>
                    <p className="text-foreground/80 mb-2">{item.description}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Experience Section with Internship Certificates */}
            <Card className="project-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Experience</h3>
                  <p className="text-primary font-medium mb-3">Internship Training</p>
                  
                  <div className="space-y-4">
                    {internships.map((internship, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">{internship.title}</h4>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="text-primary hover:text-primary/80 transition-colors">
                                <ExternalLink size={16} />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <img 
                                src={internship.certificate} 
                                alt={`${internship.title} Certificate`}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                        <p className="text-foreground/80 text-sm mb-1">{internship.company}</p>
                        <p className="text-muted-foreground text-xs">{internship.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;