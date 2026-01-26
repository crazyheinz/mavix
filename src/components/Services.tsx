import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Server, Smartphone, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Applicaties",
      duration: "vanaf 4 weken",
      description: "Moderne, responsieve web apps met React en TypeScript.",
      details: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Dashboards & admin panels",
        "E-commerce platforms"
      ],
      price: "op offerte"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "API & Backend",
      duration: "vanaf 2 weken",
      description: "Robuuste APIs en backend systemen die schalen.",
      details: [
        "RESTful & GraphQL APIs",
        "Microservices architectuur",
        "Database design & optimalisatie",
        "Cloud infrastructure (AWS, GCP)"
      ],
      price: "op offerte"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobiele Apps",
      duration: "vanaf 6 weken",
      description: "Cross-platform apps voor iOS en Android.",
      details: [
        "React Native development",
        "Native iOS & Android",
        "App Store deployment",
        "Push notifications & offline"
      ],
      price: "op offerte"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Integraties & Automatisering",
      duration: "flexibel",
      description: "Verbind systemen en automatiseer processen.",
      details: [
        "Third-party API integraties",
        "Legacy systeem modernisering",
        "Workflow automatisering",
        "Data migratie & ETL"
      ],
      price: "vanaf €XXX/dag"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="diensten" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Diensten</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van concept tot productie - wij bouwen software die werkt
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium hover:shadow-large transition-spring bg-gradient-card">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-sm text-accent font-medium">{service.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">{service.price}</span>
                  <Button onClick={scrollToContact} variant="outline" size="sm">
                    Meer info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToContact} variant="professional" size="lg">
            Bespreek je project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
