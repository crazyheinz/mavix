import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Helderheid",
      description: "Complexe dingen eenvoudig en besluitbaar maken."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Snel leren", 
      description: "Liever klein en meetbaar dan groot en onzeker."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mens & data",
      description: "Gesprekken én cijfers sturen de keuzes."
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
            Strategisch innovatieconsultancy op het snijvlak van onderzoek, strategie en executie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Mavix is een strategisch innovatiebureau dat organisaties helpt vernieuwen met focus, snelheid en impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We combineren onderzoek, strategie en experimenten om van inzicht tot resultaat te komen — zonder onnodige complexiteit.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Geen dikke rapporten, maar heldere keuzes en tastbare vooruitgang.
              </p>
            </div>

            <Button onClick={scrollToContact} variant="professional" size="lg">
              Laat ons kennismaken
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

        {/* Case Highlight */}
        <div className="mt-20">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-6 text-center">Highlight Case</h3>
            <div className="max-w-4xl mx-auto">
              <h4 className="text-xl font-semibold mb-4">
                Digitale begeleiding voor zwangere klanten
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Van hypothesen naar MVP-app, KPI's voor conversie & efficiëntie, 
                en UX-flows die consulenten ontzorgen. Resultaat: besluitbaar plan goedgekeurd, 
                MVP-traject opgestart, eerste experimenten tonen hogere betrokkenheid en tijdswinst.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-success-light text-success-foreground rounded-full text-sm font-medium">
                  ✓ Hogere conversie
                </span>
                <span className="px-3 py-1 bg-success-light text-success-foreground rounded-full text-sm font-medium">
                  ✓ Tijdswinst consulenten
                </span>
                <span className="px-3 py-1 bg-success-light text-success-foreground rounded-full text-sm font-medium">
                  ✓ Verhoogde betrokkenheid
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;