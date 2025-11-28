import { Award, Camera, Users } from "lucide-react";

const stats = [
  { icon: Camera, value: "500+", label: "Weddings Captured" },
  { icon: Users, value: "1000+", label: "Happy Couples" },
  { icon: Award, value: "15+", label: "Awards Won" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over a decade of experience in wedding and lifestyle photography, we
              specialize in capturing the authentic emotions and precious moments that make
              your special day truly unforgettable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our approach combines artistic vision with documentary-style storytelling,
              ensuring every laugh, tear, and tender moment is preserved beautifully. We
              believe that great photography is about more than just technical skill—it's
              about connection, trust, and understanding your unique story.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From intimate pre-wedding sessions to grand celebrations and destination
              tours, we're passionate about creating timeless images that you'll treasure
              for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
