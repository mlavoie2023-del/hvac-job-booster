import { Button } from "@/components/ui/button";
import lavoieLogo from "@/assets/lavoie-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={lavoieLogo} 
              alt="Lavoie Systems" 
              className="h-10 w-auto"
            />
          </div>

          {/* CTA */}
          <Button variant="hero" size="default" asChild>
            <a href="https://lavoiesystems.com/book">Get Started Free</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
