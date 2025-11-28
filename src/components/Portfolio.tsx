import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import prewedding1 from "@/assets/prewedding-1.jpg";
import prewedding2 from "@/assets/prewedding-2.jpg";
import tour1 from "@/assets/tour-1.jpg";

const portfolioItems = {
  all: [
    { src: wedding1, category: "Wedding", alt: "Wedding ceremony moment" },
    { src: prewedding1, category: "Pre-Wedding", alt: "Pre-wedding photoshoot" },
    { src: tour1, category: "Tour", alt: "Couple on tour" },
    { src: wedding2, category: "Wedding", alt: "Wedding reception details" },
    { src: prewedding2, category: "Pre-Wedding", alt: "Beach pre-wedding shoot" },
  ],
  wedding: [
    { src: wedding1, category: "Wedding", alt: "Wedding ceremony moment" },
    { src: wedding2, category: "Wedding", alt: "Wedding reception details" },
  ],
  prewedding: [
    { src: prewedding1, category: "Pre-Wedding", alt: "Pre-wedding photoshoot" },
    { src: prewedding2, category: "Pre-Wedding", alt: "Beach pre-wedding shoot" },
  ],
  tour: [{ src: tour1, category: "Tour", alt: "Couple on tour" }],
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the beautiful moments we've had the privilege to capture
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="wedding">Wedding</TabsTrigger>
            <TabsTrigger value="prewedding">Pre-Wedding</TabsTrigger>
            <TabsTrigger value="tour">Tour</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.all.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm font-semibold text-accent mb-1">
                        {item.category}
                      </p>
                      <p className="text-lg">{item.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wedding" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.wedding.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm font-semibold text-accent mb-1">
                        {item.category}
                      </p>
                      <p className="text-lg">{item.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prewedding" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.prewedding.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm font-semibold text-accent mb-1">
                        {item.category}
                      </p>
                      <p className="text-lg">{item.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tour" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.tour.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm font-semibold text-accent mb-1">
                        {item.category}
                      </p>
                      <p className="text-lg">{item.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
