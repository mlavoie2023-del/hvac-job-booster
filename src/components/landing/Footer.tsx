import { Link } from "react-router-dom";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="section-container">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={lavoieLogo}
              alt="Lavoie Systems"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-foreground">
              Lavoie Systems
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/pricing" className="link-accent text-sm">
              Pricing
            </Link>
            <a href="#how-it-works" className="link-accent text-sm">
              How It Works
            </a>
            <Link to="/book" className="link-accent text-sm">
              Schedule Demo
            </Link>
            <Link to="/privacy" className="link-accent text-sm">
              Privacy
            </Link>
          </div>

          {/* Email */}
          <a
            href="mailto:hello@lavoiesystems.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@lavoiesystems.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
