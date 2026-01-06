import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
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

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lavoie Systems. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
