import { Facebook, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-10 text-center">
    <div className="container mx-auto px-6">
      <div className="mb-6 flex items-center justify-center gap-5">
        <a
          href="https://www.facebook.com/share/18DpCAQJeS/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Facebook"
        >
          <Facebook size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/atiqur-md-rahman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
      <p className="font-['Space_Grotesk'] text-sm text-background/40">
        © {new Date().getFullYear()} Md. Atiqur Rahman. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
