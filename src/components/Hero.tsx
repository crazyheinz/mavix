import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Content */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              We build strategies{" "}
              <span className="bg-gradient-hero text-white px-4 py-1 rounded-lg inline-block">
                that move
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Van noodanalyse tot MVP, validatie en groei. In zorg en daarbuiten.
            </p>
          </div>

          <Button 
            onClick={scrollToContact}
            variant="hero" 
            size="xl"
            className="shadow-large hover:shadow-glow"
          >
            Vrijblijvend kennismaken
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-large">
            <img 
              src={heroImage} 
              alt="Healthcare innovation and strategy consulting professionals collaborating"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Core Promise */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft">
            <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Diep inzicht in doelgroepen</h3>
              <p className="text-sm text-muted-foreground">
                Interviews, data en jobs-to-be-done voor scherpe focus.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft">
            <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Concreet naar implementatie</h3>
              <p className="text-sm text-muted-foreground">
                MVP definiëren, UX schetsen, experimenten opzetten.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft">
            <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Meetbaar resultaat</h3>
              <p className="text-sm text-muted-foreground">
                Heldere KPI's, ritme, learnings en beslissingen.
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-primary-light/20 rounded-2xl p-8 text-center shadow-soft">
          <p className="text-sm text-muted-foreground mb-2">Ervaring met</p>
          <p className="text-base font-medium">
            Mutualiteiten, zorgdiensten en digitale proposities • 
            Trajecten rond zwangerschap, mantelzorg, huishoudhulp en verpleegkundig platformen
          </p>
        </div>

        {/* What You Get */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Wat je krijgt</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-md"></div>
              </div>
              <h3 className="text-xl font-semibold">Heldere strategie</h3>
              <p className="text-muted-foreground">
                Scherpe positionering en value proposition per doelgroep.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-md"></div>
              </div>
              <h3 className="text-xl font-semibold">Concreet plan</h3>
              <p className="text-muted-foreground">
                Roadmap met prioriteiten, wie-wat-wanneer.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-md"></div>
              </div>
              <h3 className="text-xl font-semibold">MVP & validatie</h3>
              <p className="text-muted-foreground">
                Wat we nu lanceren, hoe we het meten, wat "goed genoeg" is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;