import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Lavoie Systems
            </span>
          </div>

          {/* CTA */}
          <Button variant="hero" size="default">
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
