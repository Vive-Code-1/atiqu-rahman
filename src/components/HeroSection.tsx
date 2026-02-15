import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import atiqurPhoto from "@/assets/atiqur-photo.jpeg";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center bg-primary px-6 pt-20">
    <div className="container mx-auto flex flex-col items-center gap-10 md:flex-row md:gap-16">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-shrink-0"
      >
        <img
          src={atiqurPhoto}
          alt="Md. Atiqur Rahman"
          className="h-56 w-56 rounded-full border-4 border-accent object-cover shadow-2xl md:h-72 md:w-72"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Md. Atiqur Rahman
        </h1>
        <p className="mt-4 max-w-xl text-sm font-medium tracking-widest text-accent uppercase">
          Banking Professional · Research Assistant · Environmentalist · Data Analyst · HRM · Economic Policy Analyst
        </p>
        <p className="mt-4 flex items-center justify-center gap-1 text-primary-foreground/70 md:justify-start">
          <MapPin size={16} /> Dhaka, Bangladesh
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow transition-transform hover:scale-105"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/50">
      <ChevronDown size={28} />
    </a>
  </section>
);

export default HeroSection;
