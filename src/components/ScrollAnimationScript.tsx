import React, { useEffect } from 'react';

const ScrollAnimationScript: React.FC = () => {
  useEffect(() => {
    // Initialize Intersection Observer to handle scroll animations
    const initScrollAnimations = () => {
      const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
      const staggerItems = document.querySelectorAll('.stagger-item');
      
      // First, ensure all elements are visible by default
      scrollAnimateElements.forEach(element => {
        // Set initial opacity to visible but slightly transparent
        (element as HTMLElement).style.opacity = '0.95';
      });
      
      staggerItems.forEach(element => {
        // Set initial opacity to visible but slightly transparent
        (element as HTMLElement).style.opacity = '0.95';
      });
      
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          // Add class when element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Make fully visible
            (entry.target as HTMLElement).style.opacity = '1';
            
            // Optional: Add pop-in animation
            if (entry.target.classList.contains('pop-effect')) {
              entry.target.classList.add('pop-in');
            }
            
            // Optional: Add fade-in-up animation
            if (entry.target.classList.contains('fade-effect')) {
              entry.target.classList.add('fade-in-up');
            }
          }
        });
      };
      
      // Create observer with options
      const observer = new IntersectionObserver(callback, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
      });
      
      // Observe all elements with scroll-animate class
      scrollAnimateElements.forEach(element => {
        observer.observe(element);
      });
      
      // Observe all elements with stagger-item class
      staggerItems.forEach(element => {
        observer.observe(element);
      });
    };
    
    // Add a slight delay to ensure all content is loaded first
    setTimeout(() => {
      initScrollAnimations();
    }, 200);
    
    return () => {
      // Clean up if needed
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default ScrollAnimationScript;