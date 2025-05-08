import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:py-40 overflow-hidden bg-gradient-to-br from-background to-sidebar-background text-foreground min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/83fab54f-98d0-4590-bf7c-1df75548f729.png')] bg-cover bg-center opacity-15 z-0 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl z-0"></div>
      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-1 mb-4 border border-primary/30 rounded-sm bg-background/60 backdrop-blur-sm text-primary text-sm font-medium tracking-wider">
              ISO 9001 CERTIFIED QUALITY
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Building <span className="text-primary">Stronger</span> <br className="hidden md:block"/> Foundations
            </h1>
            <p className="text-lg text-foreground/70 mb-10 max-w-xl">
              Engineered for durability and designed for beauty, our high-performance pavers stand the test of time and style. From driveways to promenades, elevate every surface with ISO-certified quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#products" 
                className="inline-block px-8 py-3 bg-primary text-white text-center font-medium rounded-sm tracking-wide transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_12px_rgba(0,200,83,0.25)] transform hover:-translate-y-[1px]">
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-transparent text-white text-center font-medium rounded-sm tracking-wide border border-gray-700 transition-all duration-300 hover:bg-gray-900/50 hover:border-gray-600 transform hover:-translate-y-[1px] backdrop-blur-sm">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-in hidden lg:block">
            <div className="honeycomb-grid">
              <div className="hexagon-container">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/01.jpg" 
                    alt="Red textured paver" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/02.jpeg" 
                    alt="Textured pavers" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/03.jpg" 
                    alt="Black textured paver" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/04.png" 
                    alt="Light grey paver" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/05.png" 
                    alt="Dark grey paver" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/06.png" 
                    alt="Additional paver sample" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
              <div className="hexagon-container hexagon-row3">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/07.png" 
                    alt="Additional center paver 1" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
              <div className="hexagon-container hexagon-row3">
                <div className="hexagon">
                  <img 
                    src="/lovable-uploads/08.jpeg" 
                    alt="Additional center paver 2" 
                    className="hexagon-image shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary opacity-20 blur-3xl z-0"></div>
            <div className="absolute -left-5 top-1/2 w-32 h-32 rounded-full bg-primary/30 opacity-30 blur-3xl z-0"></div>
          </div>
        </div>
      </div> 

      {/* Scroll down indicator */}
      <div className="scroll-indicator animate-bounce" onClick={scrollToNextSection}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/80">
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 12 16 16 12" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
