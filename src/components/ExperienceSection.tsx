import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Universal Officer",
    company: "BRAC Bank PLC",
    period: "Nov 2024 – Present",
    desc: "Working full-time as a Universal Officer, contributing to banking operations and customer service excellence.",
  },
  {
    role: "Teaching Assistant",
    company: "Happycoders",
    period: "Sep 2022 – Present",
    desc: "Guiding students in coding and analytical thinking, bridging academic concepts with practical applications.",
  },
  {
    role: "Research Assistant",
    company: "Growing Together (BRAC International)",
    period: "Jan 2023 – Nov 2023",
    desc: "Reported directly to the Country Director. Conducted field research, data collection, and policy analysis for development projects.",
  },
  {
    role: "Interviewer",
    company: "DataSense",
    period: "",
    desc: "Performed structured interviews and data collection for socio-economic research projects.",
  },
];

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    const items = timelineRef.current.querySelectorAll(".timeline-item");
    gsap.fromTo(
      items,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="experience" className="bg-secondary py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-center font-['Space_Grotesk'] text-xs font-medium tracking-[0.3em] text-accent uppercase">
            My journey
          </p>
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">
            Experience
          </h2>
          <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />
        </motion.div>

        <div ref={timelineRef} className="relative space-y-10 pl-5">
          {/* Timeline line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary/20" />
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item flex items-start gap-5">
              <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                <Briefcase size={18} />
              </div>
              <div className="creative-card flex-1 rounded-xl bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="font-['Space_Grotesk'] text-sm font-medium text-accent">
                  {exp.company}
                </p>
                {exp.period && (
                  <p className="mt-1 text-xs text-muted-foreground">{exp.period}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
