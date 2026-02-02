import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Header = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-lg">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={lavoieLogo} 
              alt="Lavoie Systems" 
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-foreground">
              Lavoie Systems
            </span>
          </Link>

          {/* Navigation + CTA */}
          <div className="flex items-center gap-6">
            {/* Nav links - only on landing page */}
            {isLandingPage && (
              <nav className="hidden sm:flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection("try-it")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Try It
                </button>
              </nav>
            )}

            {/* CTA */}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-primary text-xs px-3 py-2 sm:text-sm sm:px-4 sm:py-2"
              size="sm"
              asChild
            >
              <Link to="/book">
                <span className="sm:hidden">Book Call</span>
                <span className="hidden sm:inline">Book a Discovery Call</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
