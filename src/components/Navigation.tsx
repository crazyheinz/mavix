import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Appnest
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 md:space-x-12">
            <Link
              to="/"
              className={`text-sm font-medium transition-smooth ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/diensten"
              className={`text-sm font-medium transition-smooth ${
                isActive('/diensten') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Diensten
            </Link>
            <Link
              to="/team"
              className={`text-sm font-medium transition-smooth ${
                isActive('/team') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Team
            </Link>
            <Link
              to="/werkwijze"
              className={`text-sm font-medium transition-smooth ${
                isActive('/werkwijze') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Werkwijze
            </Link>
            <Link
              to="/over"
              className={`text-sm font-medium transition-smooth ${
                isActive('/over') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Over
            </Link>
            <Button asChild variant="professional" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
