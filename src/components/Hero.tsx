import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Server, Smartphone, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import HeroAnimation from "@/components/HeroAnimation";
const Hero = () => {
  const values = [{
    title: "Clean Code & Best Practices",
    description: "Leesbare, testbare en onderhoudbare code volgens gangbare standaarden. Met code reviews, testing en CI/CD als vaste basis."
  }, {
    title: "Schaalbare Architectuur",
    description: "Van MVP tot enterprise-grade systemen die meegroeien met je organisatie. Doordachte architectuur, duidelijke verantwoordelijkheden en toekomstvast ontwerp."
  }, {
    title: "Transparant & Agile",
    description: "Iteratieve ontwikkeling met wekelijkse demos en duidelijke communicatie. Geen verrassingen, wel voorspelbare oplevering en heldere afspraken."
  }];
  const typicalProjects = ["Digitale platformen met meerdere gebruikersrollen en rechten", "Interne tools en backoffice-applicaties", "API-first systemen en complexe integraties", "MVP's die effectief doorgroeien naar productie", "Modernisering van bestaande of legacy-systemen"];
  const services = [{
    icon: <Globe className="h-6 w-6" />,
    title: "Webapplicaties",
    description: "Moderne, performante webapplicaties op maat van je organisatie."
  }, {
    icon: <Server className="h-6 w-6" />,
    title: "API & Backend",
    description: "Robuuste backend-systemen en API's die veilig en schaalbaar zijn."
  }, {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobiele applicaties",
    description: "Cross-platform of native mobiele apps voor iOS en Android."
  }, {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Integraties & Automatisering",
    description: "Systemen verbinden, processen automatiseren en data betrouwbaar laten stromen."
  }];
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
              Van idee tot productie voor organisaties die schaalbaarheid, kwaliteit en betrouwbaarheid nodig hebben.
            </p>
          </div>

          <Button asChild variant="hero" size="xl" className="shadow-large hover:shadow-glow">
            <Link to="/contact">Start je project</Link>
          </Button>
        </div>

        {/* Hero Animation */}
        <div className="mb-16 relative h-64 md:h-96">
          <HeroAnimation />
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Waar we voor staan</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {values.map((value, index) => <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>)}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Mavix ontwikkelt maatwerksoftware voor organisaties met echte complexiteit.
            Wij combineren technische expertise met een pragmatische aanpak, en bouwen systemen die vandaag werken én morgen onderhouden kunnen worden.
          </p>
        </div>

        {/* Typical Projects */}
        <div className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Typische projecten</h2>
          <p className="text-center text-muted-foreground mb-8">Wij werken onder andere aan:</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {typicalProjects.map((project, index) => <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{project}</p>
              </div>)}
          </div>
        </div>

        {/* Services Summary */}
        

        {/* Collaboration Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Samenwerking</h2>
          <p className="text-muted-foreground leading-relaxed">
            We werken nauw samen met product owners, stakeholders en interne teams.
            Architectuur, prioriteiten en planning worden samen afgestemd.
            Onze focus ligt op kwaliteit, overdraagbaarheid en langetermijnwaarde.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="bg-primary-light/20 rounded-2xl p-8 text-center shadow-soft mb-20">
          <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
          <p className="text-base font-medium mb-4">React · TypeScript · Node.js · Java · PostgreSQL · AWS · Docker · Kubernetes</p>
          <p className="text-sm text-muted-foreground">
            We kiezen technologie in functie van context, schaal en onderhoud — niet omwille van trends.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om een idee om te zetten in werkende software?</h2>
          <Button asChild variant="hero" size="xl" className="shadow-large hover:shadow-glow">
            <Link to="/contact">Start je project</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;