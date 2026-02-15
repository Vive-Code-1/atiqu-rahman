import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const technical = ["MS Office", "SPSS", "Stata", "Data Analysis", "Research Methodology"];
const soft = ["Critical Thinking", "Risk Management", "Project Management", "Communication", "Teamwork"];
const languages = ["Bangla (Native)", "English (Proficient)", "French (Beginner)"];
const certifications = [
  "IELTS Band 6.5",
  "Disaster Management Training",
  "Digital Marketing",
  "British Council Active Citizen",
];

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div className="creative-card rounded-xl border border-border bg-card p-6">
    <h3 className="mb-4 font-['Space_Grotesk'] text-sm font-semibold tracking-wide text-foreground uppercase">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge
          key={item}
          variant="secondary"
          className="rounded-full border border-accent/20 px-3 py-1.5 font-['Space_Grotesk'] text-xs transition-colors hover:border-accent hover:bg-accent/10"
        >
          {item}
        </Badge>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".creative-card");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="bg-secondary py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-center font-['Space_Grotesk'] text-xs font-medium tracking-[0.3em] text-accent uppercase">
            What I bring
          </p>
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">
            Skills & Certifications
          </h2>
          <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />
        </motion.div>

        <div ref={gridRef} className="grid gap-5 md:grid-cols-2">
          <SkillGroup title="Technical" items={technical} />
          <SkillGroup title="Soft Skills" items={soft} />
          <SkillGroup title="Languages" items={languages} />
          <SkillGroup title="Certifications & Training" items={certifications} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
