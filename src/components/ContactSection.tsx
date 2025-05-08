import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formcarryId = 'VePE_T6o9iK';
      const response = await fetch(`https://formcarry.com/s/${formcarryId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        body: JSON.stringify(formState)
      });

      const data = await response.json();

      if (data.status !== 'success') {
        throw new Error(data.message || 'Something went wrong');
      }

      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Optional: Add any additional animation effects here if needed
  }, []);
  
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-black">      
      {/* Marquee Large Text */}
      <div className="relative w-full overflow-hidden py-4 -mb-12 z-10">
        <div 
          ref={marqueeRef}
          className="whitespace-nowrap animate-marquee-slow"
          style={{
            fontSize: 'clamp(80px, 15vw, 180px)',
            fontWeight: '800',
            letterSpacing: '-4px',
            lineHeight: '0.8',
            fontFamily: 'UberMove, Inter, sans-serif'
          }}
        >
          <span className="inline-block text-transparent" style={{ 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)'
          }}>
            Aravali Coop. I & C Ltd
          </span>
          <span className="inline-block mx-16 text-transparent" style={{ 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)'
          }}>
            Aravali Coop. I & C Ltd
          </span>
          <span className="inline-block mx-16 text-transparent" style={{ 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)'
          }}>
            Aravali Coop. I & C Ltd
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-animate pop-effect">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70">
            We're here to answer your questions and discuss your paving needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="scroll-animate fade-effect">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 stagger-item">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Our Location</h4>
                  <p className="text-foreground/70">
                  Vipul plaza, Sector-8 <br />
                  Manufacturing unit Village Pali<br /> Faridabad, Haryana
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 stagger-item">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Email Us</h4>
                  <a href="mailto:thearavalipaverblocks@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                  thearavalipaverblocks@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 stagger-item">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Call Us</h4>
                  <a href="tel:+919711113111" className="text-primary hover:text-primary/80 transition-colors">
                    +91 9711113111, +91 9671340064
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 stagger-item">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Working Hours</h4>
                  <p className="text-foreground/70">
                    Monday - Saturday: 9:00 AM - 6:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-sm bg-card/80 border border-border hover:border-primary/30 flex items-center justify-center transition-colors duration-300 hover:bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-sm bg-card/80 border border-border hover:border-primary/30 flex items-center justify-center transition-colors duration-300 hover:bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-sm bg-card/80 border border-border hover:border-primary/30 flex items-center justify-center transition-colors duration-300 hover:bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-sm bg-card/80 border border-border hover:border-primary/30 flex items-center justify-center transition-colors duration-300 hover:bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="scroll-animate fade-effect">
            <div className="p-4 sm:p-6 md:p-8 rounded-sm bg-card/60 backdrop-blur-sm border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              {submitSuccess && (
                <div className="bg-[#f2fdf8] border border-[#e1f5e9] text-[#166534] rounded-xl p-5 mb-8 flex items-center animate-fadeIn">
                  <CheckCircle size={22} className="text-success mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Thank you for your message! We will get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 border border-red-100 text-red-700 rounded-xl p-5 mb-8 flex items-center animate-fadeIn">
                  <div className="mr-4 flex-shrink-0">⚠️</div>
                  <div>
                    <p className="font-medium">Failed to send message</p>
                    <p className="text-sm mt-1 text-red-700/80">{submitError}</p>
                  </div>
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-card/40 border-border focus:border-primary/50 text-foreground placeholder:text-foreground/40"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-card/40 border-border focus:border-primary/50 text-foreground placeholder:text-foreground/40"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="bg-card/40 border-border focus:border-primary/50 text-foreground placeholder:text-foreground/40"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Tell us how we can help..." 
                    className="w-full rounded-sm border border-border bg-card/40 p-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-0 placeholder:text-foreground/40"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full rounded-sm bg-primary px-6 py-3 font-medium text-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                <p className="text-xs text-foreground/50 mt-4 text-center">
                  By submitting this form, you agree to our <a href="#" className="text-primary hover:text-primary/80">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
