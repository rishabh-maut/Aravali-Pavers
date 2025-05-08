import React from 'react';
import { Card } from '@/components/ui/card';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      image: "/lovable-uploads/coorporate campus.png",
      title: "Corporate Campus",
      description: "Paving solution for a large corporate campus, showcasing our ability to handle large-scale projects."
    },
    {
      image: "/lovable-uploads/fuel station.png",
      title: "BP Fuel Station",
      description: "High-strength interlocking pavers for heavy-duty traffic at a commercial fuel station."
    },
    {
      image: "/lovable-uploads/residential complex.jpg",
      title: "Residential Complex",
      description: "Beautiful aesthetic paving for a premium residential complex with custom patterns."
    },
    {
      image: "/lovable-uploads/Commercial center.jpg",
      title: "Commercial Center",
      description: "Mixed paving solutions for a busy commercial center with both pedestrian and vehicle traffic."
    },
    {
      image: "/lovable-uploads/water front.png",
      title: "Waterfront Development",
      description: "Specialized paving solutions for a waterfront project with both aesthetic and functional requirements."
    }
  ];

  return (
    <section id="projects" className="section-padding relative bg-gradient-to-br from-sidebar-background to-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-animate pop-effect">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Projects</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70">
            Take a look at some of our completed projects across various sectors, showcasing the quality and versatility of our products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group relative overflow-hidden border border-border bg-card/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 stagger-item">
              <div className="absolute inset-0 border-2 border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-card/60 backdrop-blur-sm border border-border rounded-sm">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Clients</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/images__1_-removebg-preview.png" alt="Pramukh" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/images__2_-removebg-preview.png" alt="Hero" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/navraj.png" alt="Navraj" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/images-removebg-preview (1).png" alt="Jio BP" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/images-removebg-preview.png" alt="McDonald's" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/indian-oil-corporation-vector-logo-11574259324ulqkuccpqn-removebg-preview.png" alt="Indian Oil" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/Hero-logo-768x432.png" alt="Hero" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group flex items-center justify-center p-5 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden hover:shadow-[0_8px_16px_rgba(0,200,83,0.15)]">
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
              <img src="/lovable-uploads/Ashok-Leyland-Logo.png" alt="Ashok Leyland" className="relative z-10 h-14 object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
