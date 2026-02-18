import { Link } from "react-router-dom";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Logo + Address */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src={lavoieLogo} alt="Lavoie Systems" className="h-8 w-8" />
              <span className="text-lg font-bold text-foreground">Lavoie Systems</span>
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p>68 Harrison Ave, STE 605, #696786</p>
              <p>Boston, MA 02111</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <a
              href="mailto:hello@mail.lavoiesystems.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@mail.lavoiesystems.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
