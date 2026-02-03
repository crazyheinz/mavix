import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Server, Smartphone, RefreshCw, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Webapplicaties",
      subtitle: "Van concept tot productie",
      description: "We bouwen schaalbare webapplicaties die helder, onderhoudbaar en toekomstgericht zijn.",
      detailsLabel: "Typische realisaties",
      details: [
        "Single Page Applications (SPA)",
        "Dashboards en admin-omgevingen",
        "Klant- en medewerkersportalen",
        "Bedrijfsspecifieke webplatformen"
      ],
      tech: "React · TypeScript · moderne webarchitectuur",
      footer: "Op maat — afhankelijk van scope en context"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "API & Backend",
      subtitle: "Robuuste fundamenten die meegroeien",
      description: "We ontwerpen en bouwen backends en API's die prestaties, veiligheid en schaalbaarheid combineren.",
      detailsLabel: "Wat dit omvat",
      details: [
        "REST & GraphQL API's",
        "Datamodellering en optimalisatie",
        "Authenticatie & autorisatiestructuren",
        "Cloud-native architectuur (AWS / GCP)"
      ],
      footer: "Stabiele systemen die eenvoudig uitbreidbaar blijven."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobiele applicaties",
      subtitle: "Gebruiksvriendelijk en betrouwbaar",
      description: "We ontwikkelen mobiele applicaties die logisch aanvoelen voor gebruikers en beheersbaar blijven voor organisaties.",
      detailsLabel: "Aanpak",
      details: [
        "Cross-platform ontwikkeling",
        "Native iOS & Android waar nodig",
        "App Store & Play Store begeleiding",
        "Offline gebruik en notificaties"
      ],
      footer: "Apps die functioneel blijven, ook op langere termijn."
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Integraties & automatisering",
      subtitle: "Minder handwerk, meer samenhang",
      description: "We verbinden systemen en automatiseren processen zodat informatie vlot stroomt.",
      detailsLabel: "Toepassingen",
      details: [
        "Integratie van bestaande tools en platformen",
        "Workflow-automatisering",
        "Datamigraties & ETL-processen",
        "Modernisering van legacy-oplossingen"
      ],
      footer: "Efficiëntere processen zonder complexiteit toe te voegen."
    }
  ];

  const workingMethod = [
    "duidelijke beslissingen",
    "transparante voortgang",
    "oplossingen die beheersbaar blijven"
  ];

  return (
    <section id="diensten" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Diensten</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Van idee naar werkende software — met duidelijke keuzes en controle.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Mavix helpt organisaties om digitale oplossingen te bouwen die aansluiten bij hun context, processen en ambities.
            We combineren strategisch inzicht met technische uitvoering, zodat je geen tijd of budget verliest aan verkeerde keuzes.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium hover:shadow-large transition-spring bg-gradient-card">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-sm text-accent font-medium">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-foreground mb-3">{service.detailsLabel}</p>
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                {service.tech && (
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="font-medium">Technologie:</span> {service.tech}
                  </p>
                )}
                <p className="text-sm text-primary font-medium italic">{service.footer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How We Work Section */}
        <Card className="mb-16 shadow-soft bg-background">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Hoe we werken</h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
              Geen standaardoplossingen of dogma's. We vertrekken altijd vanuit het probleem, 
              de organisatie en de realiteit — en kiezen pas daarna technologie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {workingMethod.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3">Twijfel over de juiste digitale aanpak?</h3>
          <p className="text-muted-foreground mb-6">
            Laten we eerst scherp krijgen wat nodig is — en wat niet.
          </p>
          <Button asChild variant="professional" size="lg">
            <Link to="/contact">Neem contact op</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
