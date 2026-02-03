import { Link } from "react-router-dom";
import { Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Mavix</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Custom Software Development. Van webapps tot API's en mobiele oplossingen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/diensten"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  to="/werkwijze"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Werkwijze
                </Link>
              </li>
              <li>
                <Link
                  to="/over"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Over
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Webapplicaties</li>
              <li className="text-primary-foreground/80">API & Backend</li>
              <li className="text-primary-foreground/80">Mobiele Apps</li>
              <li className="text-primary-foreground/80">Integraties & Automatisering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@mavix.be"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  hello@mavix.be
                </a>
              </li>
              <li className="text-primary-foreground/80 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                België
              </li>
              <li className="text-primary-foreground/80 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Snelle en directe communicatie
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Mavix. Custom Software Development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
