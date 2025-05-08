import React from 'react';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  description: string;
  specifications?: string[];
  image: string;
  color?: string;
  size?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  specifications,
  image,
  color = "As per Requirement",
  size = ""
}) => {
  return (
    <Card className="overflow-hidden border border-border bg-card/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group relative stagger-item">
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 border-2 border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow z-10">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-foreground/70 text-sm mb-4">
          {description}
        </p>
        
        <div className="space-y-3 mt-auto">
          {/* Size information */}
          {size && (
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-sm px-3 py-2">
              <span className="text-xs font-medium text-foreground/70">Size:</span>
              <span className="text-sm text-foreground ml-2">{size}</span>
            </div>
          )}
          
          {/* Color information */}
          {color && color !== "As per Requirement" && (
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-sm px-3 py-2">
              <span className="text-xs font-medium text-foreground/70">Color:</span>
              <span className="text-sm text-foreground ml-2">{color}</span>
            </div>
          )}
          
          {/* Specifications */}
          {specifications && specifications.length > 0 && (
            <div className="mt-4">
              <ul className="space-y-2">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start text-sm text-foreground/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-4">
            <button 
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn"
              onClick={() => console.log(`Details for ${title}`)}
            >
              View Details
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
