import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers, FileCode, Code, TestTube, Rocket } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      number: "1",
      title: "Discovery",
      description: "We analyseren je requirements, bestaande systemen en doelen. We stellen de juiste vragen om scope en prioriteiten helder te krijgen."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      number: "2", 
      title: "Architectuur",
      description: "We ontwerpen een schaalbare technische architectuur. Database models, API design en infrastructure als solide fundament."
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      number: "3",
      title: "Planning", 
      description: "User stories, sprint planning en een realistische roadmap. Geen verrassingen, wel duidelijke milestones."
    },
    {
      icon: <Code className="h-8 w-8" />,
      number: "4",
      title: "Development",
      description: "Agile sprints met wekelijkse demos. Clean code, code reviews en continuous integration vanaf dag één."
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      number: "5", 
      title: "Testing & QA",
      description: "Unit tests, integration tests en end-to-end testing. Security audits en performance optimalisatie."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      number: "6", 
      title: "Deployment & Support",
      description: "CI/CD pipelines, monitoring en onderhoud. We blijven beschikbaar voor bugfixes, updates en nieuwe features."
    }
  ];

  const tools = [
    "React",
    "TypeScript", 
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS"
  ];

  return (
    <section id="werkwijze" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Werkwijze</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van idee naar productie - een bewezen development proces
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
          <h3 className="text-2xl font-bold mb-4">Waarom met ons werken?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Ervaren developers die weten wat ze doen. Geen juniors die leren op jouw project. 
            Directe communicatie, snelle iteraties en software die echt werkt.
          </p>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Tech Stack</h3>
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
