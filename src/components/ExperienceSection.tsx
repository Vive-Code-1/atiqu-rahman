import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
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

const ExperienceSection = () => (
  <section id="experience" className="bg-secondary py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-center text-3xl font-bold text-foreground"
      >
        Experience
      </motion.h2>
      <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-4 rounded-lg bg-card p-6 shadow-sm"
          >
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Briefcase size={18} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm font-medium text-accent">{exp.company}</p>
              {exp.period && <p className="mt-1 text-xs text-muted-foreground">{exp.period}</p>}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
