import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Leesbare, testbare code die andere developers begrijpen."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Continuous Delivery", 
      description: "Frequente releases, snelle feedback en constante verbetering."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Directe Communicatie",
      description: "Geen account managers, je praat direct met de developers."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="over" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Over Mavix</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Een team van ervaren developers met passie voor kwaliteit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Mavix is een software development bureau opgericht door developers met 10+ jaar ervaring in het bouwen van complexe systemen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We geloven dat goede software begint bij goede code. Daarom werken we met moderne technologieën, best practices en een focus op onderhoudbaarheid.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Van startups tot enterprise - we bouwen software die schaalt, presteert en lang meegaat.
              </p>
            </div>

            <Button onClick={scrollToContact} variant="professional" size="lg">
              Plan een gesprek
            </Button>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Waar Mavix voor staat</h3>
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
