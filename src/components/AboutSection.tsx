import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background to-sidebar-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-animate pop-effect">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Us</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-animate fade-effect">
            <p className="text-lg text-foreground/70 mb-8">
              We are a leading pavers block manufacturer since 2012. We manufacture precast products like Paver blocks, kerb stones, retaining wall blocks, solid blocks and more. We have a decade of elaborate experience in the Precast industry. Aravali Coop. I&C Society Ltd. is ISO:9001 certified construction company.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-sm bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/30 hover:translate-y-[-4px] stagger-item">
                <div className="flex items-center mb-4 relative z-10">
                  <div className="h-10 w-10 bg-primary rounded-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-foreground/70 relative z-10">
                  To provide complete paving solution under one roof with best in class products for architects, builders, construction companies.
                </p>
              </div>
              
              <div className="p-6 rounded-sm bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/30 hover:translate-y-[-4px] stagger-item">
                <div className="flex items-center mb-4 relative z-10">
                  <div className="h-10 w-10 bg-primary rounded-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                      <path d="M12 20h9"/>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-foreground/70 relative z-10">
                  To be leader manufacturer of precast products in the industry, providing innovative and sustainable solutions.
                </p>
              </div>
            </div>
            
            <div className="mt-12 scroll-animate p-8 bg-card/80 backdrop-blur-sm border border-border rounded-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">Infrastructure</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Finest equipment with fully automatic state of art plant and machinery
                </li>
                <li className="flex items-start stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vibro press technology with best in class material handling systems
                </li>
                <li className="flex items-start stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  PLC based batching and mixing plant for consistency in products
                </li>
                <li className="flex items-start stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Various processing lines like shot blasting machines for various surface finishing options
                </li>
                <li className="flex items-start stagger-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Our own fleet of trucks for timely delivery of products
                </li>
              </ul>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-sm scroll-animate h-[750px] border border-border/40">
            <div className="absolute inset-0 border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="/lovable-uploads/ChatGPT Image May 6, 2025, 03_09_33 AM.png" 
              alt="Our facility" 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
              loading="lazy"
              width="800"
              height="950"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background to-transparent">
              <span className="text-sm font-medium tracking-wider text-primary">OUR FACILITY</span>
              <h3 className="text-xl font-bold text-foreground mt-2">State-of-the-art Production Plant</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
