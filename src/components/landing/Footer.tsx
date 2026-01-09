import { Link } from "react-router-dom";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8 sm:py-12">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6 text-center sm:text-left sm:flex-row sm:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={lavoieLogo} 
              alt="Lavoie Systems" 
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <span className="text-base sm:text-lg font-bold text-foreground">
              Lavoie Systems
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lavoie Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
