import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Globe } from "lucide-react";
import sammyDeprezImage from "@/assets/sammy-deprez.png";
import davidDebuckImage from "@/assets/david-debuck.png";
import hannesDeBackerImage from "@/assets/hannes-de-backer.png";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedIn?: string;
  website?: string;
  expertise?: string[];
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Hannes De Backer",
      role: "Founder & Solution Lead",
      description:
        "Ik begeleid digitale trajecten van idee tot werkende oplossing. Mijn focus ligt op het vertalen van business- en procesnoden naar schaalbare applicaties, waarbij ik instaan voor analyse, oplossingsontwerp en coördinatie van de uitvoering. Ik werk samen met senior developers en AI-specialisten om betrouwbare, toekomstgerichte oplossingen te bouwen die organisaties echt vooruithelpen.",
      image: hannesDeBackerImage,
      expertise: [
        "Digitale product- en appontwikkeling",
        "Procesautomatisatie & interne tools",
        "Brug tussen business, technologie en AI",
      ],
    },
    {
      name: "David Debuck",
      role: "Senior Software Architect (Associate)",
      description:
        "Senior software engineer en architect met meer dan 10 jaar ervaring in backend development en DevOps. David ondersteunt projecten op architectuurniveau en waakt over codekwaliteit, schaalbaarheid en technische keuzes. Hij heeft ervaring in complexe omgevingen bij onder andere grote ondernemingen en brengt die maturiteit mee in elk project.",
      image: davidDebuckImage,
      linkedIn: "https://be.linkedin.com/in/zonaut",
      expertise: ["Software architectuur", "Backend & DevOps", "Schaalbare en robuuste systemen"],
    },
    {
      name: "Sammy Deprez",
      role: "AI Solution Architect (Associate)",
      description:
        "AI-specialist met uitgebreide ervaring in data-gedreven en generatieve AI-oplossingen. Sammy wordt ingeschakeld voor AI-strategie, modelkeuze en implementatie van intelligente toepassingen, telkens met oog voor haalbaarheid en impact. Hij combineert technische diepgang met strategisch inzicht en ondersteunt projecten waar AI een echte meerwaarde biedt.",
      image: sammyDeprezImage,
      linkedIn: "https://www.linkedin.com/in/sammydeprez/",
      website: "https://sammydeprez.com",
      expertise: [
        "Generative AI & data-driven oplossingen",
        "AI-strategie en architectuur",
        "Complexe AI-toepassingen in productie",
      ],
    },
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ervaren developers en specialisten met passie voor technologie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth overflow-hidden">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <div className="flex gap-2">
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                        aria-label={`${member.name} website`}
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {member.expertise && member.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.expertise.map((item, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
