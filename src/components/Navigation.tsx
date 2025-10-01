import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Mavix</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('diensten')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
            >
              Diensten
            </button>
            <button
              onClick={() => scrollToSection('werkwijze')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
            >
              Werkwijze
            </button>
            <button
              onClick={() => scrollToSection('over')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
            >
              Over
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="professional"
              size="sm"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => scrollToSection('contact')}
              variant="professional"
              size="sm"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;