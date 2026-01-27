import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
// Backup image available at: @/assets/hero-image-backup.jpg

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Content */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              We build software{" "}
              <span className="bg-gradient-hero text-white px-4 py-1 rounded-lg inline-block">
                that works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Ervaren developers, schaalbare oplossingen
            </p>
          </div>

          <Button onClick={scrollToContact} variant="hero" size="xl" className="shadow-large hover:shadow-glow">
            Start je project
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-large">
            <img src={heroImage} alt="Software development team collaborating on code" className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Core Promise */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft">
            <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Clean Code & Best Practices</h3>
              <p className="text-sm text-muted-foreground">
                Leesbare, testbare en onderhoudbare code volgens de nieuwste standaarden.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft">
            <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Schaalbare Architectuur</h3>
              <p className="text-sm text-muted-foreground">
                Van startup MVP tot enterprise-grade systemen die meegroeien.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft">
            <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Transparant & Agile</h3>
              <p className="text-sm text-muted-foreground">
                Wekelijkse demos, duidelijke communicatie en geen verrassingen.
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-primary-light/20 rounded-2xl p-8 text-center shadow-soft">
          <p className="text-sm text-muted-foreground mb-2">Onze tech stack</p>
          <p className="text-base font-medium">React • TypeScript • Node.js • Java • PostgreSQL • AWS • Docker • Kubernetes</p>
        </div>
      </div>
    </section>;
};
export default Hero;