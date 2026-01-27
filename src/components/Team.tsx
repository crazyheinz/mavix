import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import davidDebuckImage from "@/assets/david-debuck.png";
import hannesDeBackerImage from "@/assets/hannes-de-backer.png";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedIn?: string;
  achievements?: string[];
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sammy Deprez",
      role: "AI Solution Architect",
      description: "Gen AI Solutions Expert met meer dan 10 jaar ervaring in data-driven AI oplossingen voor finance, healthcare en sustainability.",
      image: "https://sammydeprez.com/assets/profile-D2874KnS.png",
      linkedIn: "https://www.linkedin.com/in/sammydeprez/",
      achievements: ["6× Microsoft AI MVP", "LinkedIn Learning Instructor"]
    },
    {
      name: "David Debuck",
      role: "Java DevOps Engineer",
      description: "Senior Software Engineer met meer dan 10 jaar ervaring in Java development en DevOps. Expertise in software architectuur bij bedrijven als DHL, Cegeka en Bricsys.",
      image: davidDebuckImage,
      linkedIn: "https://be.linkedin.com/in/zonaut",
      achievements: ["10+ jaar ervaring", "Software Architect"]
    },
    {
      name: "Hannes De Backer",
      role: "IT Generalist & Developer",
      description: "Ik ontwerp en bouw digitale oplossingen die processen vereenvoudigen, data betrouwbaar maken en organisaties vooruithelpen.",
      image: hannesDeBackerImage,
      achievements: ["10+ jaar ervaring", "Cegeka", "NTT", "Telenet Business"]
    }
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
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
                
                {member.achievements && member.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {achievement}
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
