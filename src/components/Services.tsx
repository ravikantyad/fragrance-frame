import { Camera, Heart, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Capturing every magical moment of your special day with elegance and artistry. From ceremony to reception, we preserve memories that last a lifetime.",
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    description:
      "Romantic and creative pre-wedding sessions that showcase your love story. Perfect for save-the-dates and wedding invitations.",
  },
  {
    icon: Plane,
    title: "Tour Photography",
    description:
      "Document your adventures and travels with stunning photography. From honeymoons to destination events, we capture the essence of your journey.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specializing in creating timeless memories through expert photography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
