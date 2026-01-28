import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Header = () => {
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

          {/* CTA */}
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-primary"
            asChild
          >
            <Link to="/book">
              Schedule a Strategy Call
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
