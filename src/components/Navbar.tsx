import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 shadow-xl backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-['Playfair_Display'] text-xl font-bold text-primary-foreground">
          Atiqur<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-['Space_Grotesk'] text-xs font-medium tracking-widest text-primary-foreground/70 uppercase transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 font-['Space_Grotesk'] text-xs font-semibold tracking-wider text-accent-foreground uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 active:scale-95"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-primary/98 shadow-2xl backdrop-blur-xl transition-transform duration-400 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border/20 px-6 py-5">
          <span className="font-['Playfair_Display'] text-lg font-bold text-primary-foreground">
            Menu
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-full p-2 text-primary-foreground/70 transition-colors hover:bg-accent/10 hover:text-accent"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-4 pt-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 font-['Space_Grotesk'] text-sm font-medium tracking-wide text-primary-foreground/80 transition-all hover:bg-accent/10 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t border-border/20 px-6 py-6">
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full rounded-full bg-accent py-3 text-center font-['Space_Grotesk'] text-sm font-semibold tracking-wider text-accent-foreground uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
