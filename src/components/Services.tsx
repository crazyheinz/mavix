import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Target, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Strategie Sprint",
      duration: "2 weken",
      description: "Van ambitie naar scherp plan met prioriteiten en KPI's.",
      details: [
        "Value proposition per segment (pains/gains/jobs)",
        "Prioriteiten & roadmap (0–3 mnd / 3–6 mnd)",
        "KPI-set (conversie, retentie, kost, tijdswinst)",
        "Beslisdocument voor directie"
      ],
      price: "vanaf €X.XXX"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Venture Discovery",
      duration: "4–8 weken",
      description: "MVP definiëren en met echte gebruikers valideren.",
      details: [
        "MVP-definitie (scope, UX-schetsen, datamodel)",
        "Validatieplan (hypothesen, metingen, succescriteria)",
        "Experimenten (smoke tests, prototyping, pilots)",
        "Go/No-Go advies met leerpunten"
      ],
      price: "op offerte"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fractional Product Lead",
      duration: "retainer",
      description: "Tijdelijk leiderschap en ritme voor je innovatie.",
      details: [
        "Wekelijkse prioritering & voortgang",
        "Stakeholdermanagement en besluitvorming",
        "Roadmap actualisatie en KPI-review",
        "1–2 dagen/week, minimaal 3 maanden"
      ],
      price: "op maat"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Zorg & Maatschappelijke Proposities",
      duration: "flexibel",
      description: "Specifiek voor zorgdoelgroepen en maatschappelijke diensten.",
      details: [
        "Zwangerschap & jonge ouders (educatie, conversie)",
        "Mantelzorgers (ontzorging, premies, wegwijs)",
        "Huishoudhulp/Thuiszorg (efficiëntie, tevredenheid)",
        "Verpleegkundig platform (administratie, software-ecosysteem)"
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
            Van strategie tot validatie - elke fase vraagt een andere aanpak
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
            Bespreek je uitdaging
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;