import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Economics — Environmental & Resource Economics",
    institution: "University of Dhaka",
    detail: "CGPA 3.16 / 4.00",
  },
  {
    degree: "HR for People Managers Specialization",
    institution: "University of Minnesota (Online)",
    detail: "",
  },
  {
    degree: "HSC — Govt. Shahid Suhrawardy College, Dhaka",
    institution: "",
    detail: "GPA 5.00 / 5.00",
  },
  {
    degree: "SSC — Farazipara M.A. Wazed Ali High School",
    institution: "",
    detail: "GPA 5.00 / 5.00",
  },
];

const EducationSection = () => (
  <section id="education" className="bg-background py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-center text-3xl font-bold text-foreground"
      >
        Education
      </motion.h2>
      <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 rounded-lg border border-border bg-card p-5"
          >
            <GraduationCap className="mt-1 flex-shrink-0 text-accent" size={22} />
            <div>
              <h3 className="font-semibold text-foreground">{edu.degree}</h3>
              {edu.institution && <p className="text-sm text-muted-foreground">{edu.institution}</p>}
              {edu.detail && <p className="mt-1 text-xs font-medium text-accent">{edu.detail}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
