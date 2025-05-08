import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sidebar-background text-foreground border-t border-border/20">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">Aravali</span>
              <span className="ml-1 text-primary font-semibold">Coop. I&C</span>
            </div>
            
            <p className="text-foreground/70 mb-8 max-w-md">
              Premium paving tiles manufacturer providing strength with style for residential, commercial and industrial applications. ISO 9001 certified quality you can trust.
            </p>
            
            <div className="flex space-x-5">
              <a href="#" className="h-10 w-10 rounded-sm bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-sm bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-sm bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-sm bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">Products</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">Pavers</a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">Construction Blocks</a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">Kerb Stones</a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">Solid Blocks</a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">Retaining Wall Blocks</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} Aravali Coop. I&C Society Ltd. All rights reserved.
          </p>
          
          <div className="mt-6 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
