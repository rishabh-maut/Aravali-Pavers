import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-md border-b border-border/40' : 'bg-transparent'}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Mobile Logo (hidden on desktop) */}
        <a href="#" className="flex flex-col md:hidden">
          <span className="text-3xl font-bold text-foreground">Aravali</span>
          <span className="text-primary text-xl font-semibold">Coop. L&C Society Ltd</span>
        </a>
        
        {/* Desktop Logo (hidden on mobile) */}
        <a href="#" className="hidden md:flex md:items-center">
          <span className="text-3xl font-bold text-foreground">Aravali</span>
          <span className="text-primary text-3xl font-semibold ml-2">Coop. L&C Society Ltd</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Products</a>
          <a href="#about" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a href="#projects" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Projects</a>
          <a href="#contact" className="text-base font-medium bg-primary text-foreground px-4 py-2 rounded-sm transition-colors hover:bg-primary/90">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sidebar-background backdrop-blur-sm border-t border-border/40 shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#products" 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
