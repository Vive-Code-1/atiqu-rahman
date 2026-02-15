import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
  <div>
    <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="secondary" className="px-3 py-1 text-xs">
          {item}
        </Badge>
      ))}
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="bg-secondary py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-center text-3xl font-bold text-foreground"
      >
        Skills & Certifications
      </motion.h2>
      <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2"
      >
        <SkillGroup title="Technical" items={technical} />
        <SkillGroup title="Soft Skills" items={soft} />
        <SkillGroup title="Languages" items={languages} />
        <SkillGroup title="Certifications & Training" items={certifications} />
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
