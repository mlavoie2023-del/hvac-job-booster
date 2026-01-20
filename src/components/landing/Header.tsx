import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-lg">
      <div className="section-container">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={lavoieLogo} 
              alt="Lavoie Systems" 
              className="h-8 w-8 sm:h-9 sm:w-9"
            />
            <span className="text-lg sm:text-xl font-bold text-foreground">
              Lavoie Systems
            </span>
          </Link>

          {/* CTA */}
          <Button variant="hero" size="sm" className="text-xs sm:text-sm px-3 sm:px-4" asChild>
            <Link to="/vsl">
              <span className="hidden sm:inline">See How It Works</span>
              <span className="sm:hidden">Watch Demo</span>
              <Play className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
