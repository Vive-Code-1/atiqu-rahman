import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, Globe, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: BookOpen, label: "University of Dhaka", sub: "Environmental Economics" },
  { icon: Globe, label: "BRAC International", sub: "Research Experience" },
  { icon: TrendingUp, label: "Data Analysis", sub: "SPSS · Stata · Excel" },
  { icon: Award, label: "IELTS 6.5", sub: "English Proficiency" },
];

const AboutSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".highlight-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="relative bg-background py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-['Space_Grotesk'] text-xs font-medium tracking-[0.3em] text-accent uppercase">
            Get to know me
          </p>
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-8 h-1 w-16 rounded bg-accent" />
          <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
            I am a multidisciplinary professional with a strong foundation in Environmental and
            Resource Economics from the University of Dhaka. My career spans banking, academic
            research, data analysis, and human resource management. I served as a Research
            Assistant reporting directly to the BRAC International Country Director and have
            hands-on experience with SPSS, Stata, and advanced data analysis. Passionate about
            sustainable development, economic policy, and bridging the gap between research and
            real-world impact.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="highlight-card creative-card flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Icon className="text-accent" size={22} />
              </div>
              <h4 className="font-['Space_Grotesk'] text-sm font-semibold text-foreground">
                {label}
              </h4>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
