import { useState, useEffect } from "react";
import { Home, User, Briefcase, GraduationCap, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

const mobileNavItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Briefcase, href: "#experience", label: "Work" },
  { icon: GraduationCap, href: "#education", label: "Education" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop top navbar */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/70 shadow-xl backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="font-['Playfair_Display'] text-xl font-bold text-primary-foreground">
            Atiqur<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
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
        </div>
      </nav>

      {/* Mobile bottom navbar */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center md:hidden">
        <nav className="flex items-center gap-6 rounded-full border border-white/15 bg-primary/80 px-6 py-3 shadow-2xl backdrop-blur-xl">
          {mobileNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full p-2 text-primary-foreground/70 transition-colors hover:text-accent"
              aria-label={item.label}
            >
              <item.icon size={20} />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent p-2.5 text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:scale-110 active:scale-95"
            aria-label="Contact Me"
          >
            <MessageCircle size={20} />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
