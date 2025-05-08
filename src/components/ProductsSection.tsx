import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection: React.FC = () => {
  const pavers = [
    {
      title: "Zig-Zag Paver",
      description: "Unipaver with high load carrying capacity, suitable for heavy traffic areas.",
      specifications: ["Thickness: 60mm/80mm/100mm", "High abrasion resistance"],
      image: "/lovable-uploads/zig-zag-paver-blocks.jpg",
      size: "Thickness - 60mm/80mm/100mm"
    },
    {
      title: "I-Shaped Paver",
      description: "Elegant design suitable for pathways and light traffic areas.",
      specifications: ["Thickness: 60mm", "Interlocking design for strength"],
      image: "/lovable-uploads/i shaped pavers.jpeg",
      size: "Thickness - 60mm"
    },
    {
      title: "Brick Paver",
      description: "Classic brick paver with versatile applications for both residential and commercial use.",
      specifications: ["Size: 200mm x 100mm", "Thickness: 60mm/80mm"],
      image: "/lovable-uploads/brick-pavers-055.jpg",
      size: "200mm x 100mm (thickness - 60mm/80mm)"
    },
    {
      title: "Square Paver",
      description: "Traditional square paver for uniform patterns, suitable for various applications.",
      specifications: ["Size: 150 x 150mm or 200mm x 200mm", "Thickness: 60mm/80mm"],
      image: "/lovable-uploads/square pavers.jpeg",
      size: "150 x 150 or 200mm x 200mm (thickness- 60mm/80mm)"
    },
    {
      title: "Cobble Stone",
      description: "Stone textured paver resembling natural stone, perfect for pathways and driveways.",
      specifications: ["Size: 150mm x 150mm", "Thickness: 60mm"],
      image: "/lovable-uploads/cobble stone.jpg",
      size: "Size: 150mm x 150mm (thickness- 60mm)"
    }
  ];

  const textures = [
    {
      title: "Plain Texture",
      description: "Double layer paver blocks with smooth sand finished surface on top layer with different colours.",
      specifications: ["Good for light and heavy traffic areas", "Available in multiple colors"],
      image: "/lovable-uploads/plaintexture.jpg"
    },
    {
      title: "Shot Blasted Texture",
      description: "Shot blasting treatments add rough texture to top layer that are loved by designers for premium projects.",
      specifications: ["Provides anti-slip properties", "Premium aesthetic finish"],
      image: "/lovable-uploads/shot blasted.jpeg"
    },
    {
      title: "Stone Texture",
      description: "Paver with stone textured surface resembling natural stone texture.",
      specifications: ["Best suitable for pathways & driveways", "Natural appearance"],
      image: "/lovable-uploads/stone.jpeg"
    }
  ];

  const constructionBlocks = [
    {
      title: "Kerb Stone",
      description: "Used at edge of roads or walkway to provide additional strength to edges of the walkways & prevent traffic from mounting on walkways.",
      specifications: ["Size: L300mm x H450mm x T100mm", "Size: L300mm x H300mm x T150mm", "Profile: Chamfered"],
      image: "/lovable-uploads/kerb-stone-paver-block.jpeg",
      size: "L300mm x H450mm x T100mm or L300mm x H300mm x T150mm"
    },
    {
      title: "Retaining Wall Blocks",
      description: "High strength RE wall Blocks with interlocking system which can used in soil retaining structures & BRIDGES etc.",
      specifications: ["Size: L457mm x W305mm x H203mm", "Interlocking system for strength"],
      image: "/lovable-uploads/retaing wall.jpeg",
      size: "L457mm x W305mm x H203mm"
    },
    {
      title: "Solid Blocks",
      description: "High strength with zero breakage wall construction blocks with precise sizes resulting in reduction of cost of plastering and labour.",
      specifications: ["Size: L390mm x W90mm x H190mm", "Zero breakage design"],
      image: "/lovable-uploads/solid block.jpeg",
      size: "L390mm x W90mm x H190mm"
    },
    {
      title: "Hollow Blocks",
      description: "Lightweight and cost-effective construction blocks for various structural applications.",
      specifications: ["Size: L400mm x W190mm x H200mm", "Reduced material consumption"],
      image: "/lovable-uploads/hollow block.jpeg",
      size: "L400mm x W190mm x H200mm"
    }
  ];

  return (
    <section id="products" className="section-padding relative bg-gradient-to-b from-background to-sidebar-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/10 filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-animate pop-effect">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Products</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70">
            Discover our wide range of high-quality paving tiles and construction blocks, designed for durability, aesthetics, and versatility.
          </p>
        </div>
        
        {/* Heavy Duty Pavers */}
        <div className="mb-20 scroll-animate fade-effect">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
            Heavy Duty Pavers
          </h3>
          <p className="text-foreground/70 mb-10 max-w-3xl">
            These pavers are of high load carrying capacity with high abrasion resistance best suitable for heavy traffic roads, fuel stations, port terminals, industrial pavements and commercial parking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pavers.map((paver, index) => (
              <div key={index} className="stagger-item">
                <ProductCard {...paver} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Textures */}
        <div className="mb-20 scroll-animate fade-effect">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
            Available Textures
          </h3>
          <p className="text-foreground/70 mb-10 max-w-3xl">
            Choose from a variety of textures to match your aesthetic preferences and functional requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {textures.map((texture, index) => (
              <div key={index} className="stagger-item">
                <ProductCard {...texture} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Construction Blocks */}
        <div className="scroll-animate fade-effect">
          <h3 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
            Construction Blocks
          </h3>
          <p className="text-foreground/70 mb-10 max-w-3xl">
            Our range of construction blocks are designed for strength, precision, and ease of installation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionBlocks.map((block, index) => (
              <div key={index} className="stagger-item">
                <ProductCard {...block} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
