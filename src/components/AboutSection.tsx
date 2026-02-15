import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="bg-background py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground">About Me</h2>
        <div className="mx-auto mb-8 h-1 w-16 rounded bg-accent" />
        <p className="text-center leading-relaxed text-muted-foreground">
          I am a multidisciplinary professional with a strong foundation in Environmental and Resource Economics from the University of Dhaka. My career spans banking, academic research, data analysis, and human resource management. I served as a Research Assistant reporting directly to the BRAC International Country Director and have hands-on experience with SPSS, Stata, and advanced data analysis. Passionate about sustainable development, economic policy, and bridging the gap between research and real-world impact.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
