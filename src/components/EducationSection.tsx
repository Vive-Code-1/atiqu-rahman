import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "HR for People Managers Specialization",
    institution: "University of Minnesota",
    detail: "July – August 2023",
  },
  {
    degree: "Bachelor of Economics in Environmental and Resource Economics",
    institution: "University of Dhaka",
    detail: "CGPA 3.16 / 4.00 · February 2017 – 2021",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Government Azizul Haque College, Bogura",
    detail: "GPA 5.00 / 5.00 · January 2014 – April 2016",
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Bogura Zilla School, Bogura",
    detail: "GPA 5.00 / 5.00 · January 2006 – December 2013",
  },
];

const EducationSection = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll(".edu-card");
    gsap.fromTo(
      items,
      { y: 50, opacity: 0, rotateX: 15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="education" className="bg-background py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-center font-['Space_Grotesk'] text-xs font-medium tracking-[0.3em] text-accent uppercase">
            Academic background
          </p>
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">
            Education
          </h2>
          <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />
        </motion.div>

        <div ref={listRef} className="space-y-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className="edu-card creative-card flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                {edu.institution && (
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                )}
                {edu.detail && (
                  <p className="mt-1 font-['Space_Grotesk'] text-xs font-semibold text-accent">
                    {edu.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
