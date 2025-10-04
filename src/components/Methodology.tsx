import { Card, CardContent } from "@/components/ui/card";
import { Search, Frame, CheckCircle, Hammer, TrendingUp, Users } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      number: "1",
      title: "Begrijpen",
      description: "We spreken met klanten, medewerkers en partners. We bekijken data, processen en context. We vatten de kernnoden in jobs-to-be-done."
    },
    {
      icon: <Frame className="h-8 w-8" />,
      number: "2", 
      title: "Kaderen",
      description: "We clusteren inzichten, toetsen aannames en schetsen scenario's met impact/haalbaarheid."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      number: "3",
      title: "Besluiten", 
      description: "We leggen een kort en besluitbaar plan voor: wat nu, wat later, wat niet."
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      number: "4",
      title: "Bouwen",
      description: "We definiëren MVP, UX-flows en experimenten. We meten wat telt en leren snel."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "5", 
      title: "Schalen",
      description: "We verfijnen de propositie, verbreden segmenten en borgen ritme en KPI's."
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "6", 
      title: "Implementeren",
      description: "We implementeren wat werkt in teams en processen. We begeleiden changemanagement en duurzame groei."
    }
  ];

  const tools = [
    "Interviewsjablonen",
    "JTBD-canvas", 
    "VPC",
    "Service blueprints",
    "KPI-matrix",
    "Experimenteerbord"
  ];

  return (
    <section id="werkwijze" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Werkwijze</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Een aanpak die beweegt - van inzicht naar implementatie
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4">
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodology Highlight */}
        <div className="bg-gradient-subtle rounded-2xl p-8 text-center shadow-soft">
          <h3 className="text-2xl font-bold mb-4">Slimmer vernieuwen, sneller leren</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Veel organisaties willen vernieuwen, maar weten niet waar te beginnen. Mavix helpt om kansen scherp te stellen en ideeën om te zetten in haalbare, meetbare oplossingen. We combineren strategie, businessanalyse en experimenten om snel te leren wat echt werkt.
          </p>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Toolstack (selectie)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;