const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Mavix</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Strategy & Venture Building voor zorg en daarbuiten. 
              Van noodanalyse tot MVP en meetbare groei.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('diensten')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Diensten
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('werkwijze')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Werkwijze
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('over')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Over
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Strategie Sprint</li>
              <li className="text-primary-foreground/80">Venture Discovery</li>
              <li className="text-primary-foreground/80">Fractional Product Lead</li>
              <li className="text-primary-foreground/80">Zorg Proposities</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">hello@mavix.be</li>
              <li className="text-primary-foreground/80">België (hybride)</li>
              <li className="text-primary-foreground/80">24u responstijd</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Mavix. Strategy & Venture Building.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;