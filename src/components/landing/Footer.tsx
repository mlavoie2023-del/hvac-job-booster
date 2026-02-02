import { Link } from "react-router-dom";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Footer = () => {
  return (
    <footer className="py-12 relative">
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
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#try-it" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Try It
            </a>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>

          {/* Email */}
          <a
            href="mailto:hello@mail.lavoiesystems.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@mail.lavoiesystems.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
