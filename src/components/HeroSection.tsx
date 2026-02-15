import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Download } from "lucide-react";
import { gsap } from "gsap";
import atiqurPhoto from "@/assets/atiqur-photo.jpeg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    const particles = particlesRef.current.querySelectorAll(".particle");
    particles.forEach((p, i) => {
      gsap.to(p, {
        y: "random(-40, 40)",
        x: "random(-30, 30)",
        rotation: "random(-180, 180)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-6 pt-20"
    >
      {/* Animated background particles */}
      <div ref={particlesRef} className="pointer-events-none absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute h-2 w-2 rounded-full bg-accent/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        {/* Large decorative circles */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/5" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent/5" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Photo with glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-3 animate-pulse rounded-full bg-accent/20 blur-xl" />
            <img
              src={atiqurPhoto}
              alt="Md. Atiqur Rahman"
              className="relative h-56 w-56 rounded-full border-4 border-accent object-cover shadow-2xl glow-accent md:h-72 md:w-72"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-2 font-['Space_Grotesk'] text-xs font-medium tracking-[0.3em] text-accent uppercase"
          >
            Welcome to my portfolio
          </motion.p>
          <h1 className="text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Md. Atiqur
            <br />
            <span className="gradient-text">Rahman</span>
          </h1>
          <p className="mt-4 max-w-xl font-['Space_Grotesk'] text-sm font-medium tracking-widest text-accent/90 uppercase">
            Banking Professional · Research Assistant · Environmentalist
            <br className="hidden sm:block" />
            · Data Analyst · HRM · Economic Policy Analyst
          </p>
          <p className="mt-4 flex items-center justify-center gap-1 text-primary-foreground/70 md:justify-start">
            <MapPin size={16} /> Dhaka, Bangladesh
          </p>

          <div className="mt-8 mb-16 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="magnetic-btn inline-block rounded-md bg-accent px-8 py-3 font-['Space_Grotesk'] text-sm font-semibold text-accent-foreground shadow"
            >
              Get in Touch
            </a>
            <a
              href="/Atiqur_Rahman_CV.pdf"
              download
              className="magnetic-btn inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-['Space_Grotesk'] text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
