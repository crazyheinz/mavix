import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import hannesDeBackerImage from "@/assets/hannes-de-backer.png";

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
      description: "Geen account managers, je praat direct met de developer."
    }
  ];

  const expertise = [
    "Digitale product- en appontwikkeling",
    "Procesautomatisatie & interne tools",
    "Brug tussen business, technologie en AI",
  ];

  const companies = ["Cegeka", "NTT", "Telenet Business"];

  return (
    <section id="over" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Over Mavix</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software development met 10+ jaar ervaring in complexe systemen
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-medium">
              <img 
                src={hannesDeBackerImage} 
                alt="Hannes De Backer - Founder" 
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">Hannes De Backer</h3>
              <p className="text-primary font-medium text-lg mb-4">Founder & Solution Lead</p>
              <p className="text-muted-foreground leading-relaxed">
                Specialist in digitale transformatie met een focus op het vertalen van complexe businessbehoeften naar schaalbare applicaties. Van initiële analyse tot het finale oplossingsontwerp en de uitvoering — altijd met oog voor maximale impact en technologische maturiteit.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {expertise.map((item, i) => (
                <span key={i} className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  {item}
                </span>
              ))}
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2 font-medium">Ervaring opgedaan bij:</p>
              <div className="flex flex-wrap items-center gap-2">
                {companies.map((company, i) => (
                  <span
                    key={i}
                    className="text-sm font-semibold bg-muted text-foreground px-3 py-1.5 rounded-md border border-border/50"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Mavix is opgericht vanuit de overtuiging dat goede software begint bij goede code. Moderne technologieën, best practices en een focus op onderhoudbaarheid staan centraal.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Van startups tot enterprise — software die schaalt, presteert en lang meegaat.
              </p>
            </div>

            <Button asChild variant="professional" size="lg">
              <Link to="/contact">Plan een gesprek</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Waar Mavix voor staat</h3>
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