import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Send, Mail, User, FileText, MapPin, Phone, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setSending(true);
    try {
      const { data: res, error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });
      if (error) throw error;
      toast.success("Message sent!");
      form.reset();
      setSent(true);
    } catch (err: any) {
      toast.error(err?.message || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-primary py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-center font-['Space_Grotesk'] text-xs font-medium tracking-[0.3em] text-accent uppercase">
            Let's connect
          </p>
          <h2 className="mb-2 text-center text-3xl font-bold text-primary-foreground md:text-4xl">
            Contact Me
          </h2>
          <div className="mx-auto mb-8 h-1 w-16 rounded bg-accent" />
          <p className="mb-12 text-center text-sm text-primary-foreground/60">
            Have a question or want to collaborate? Drop me a message below.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] text-sm font-semibold text-primary-foreground">
                  Address
                </h4>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] text-sm font-semibold text-primary-foreground">
                  Phone
                </h4>
                <a
                  href="tel:+8801788201436"
                  className="mt-1 inline-block text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                >
                  +880 1788-201436
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                <Mail className="text-accent" size={18} />
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] text-sm font-semibold text-primary-foreground">
                  Email
                </h4>
                <a
                  href="mailto:atiqur.mdrahman96@gmail.com"
                  className="mt-1 inline-block text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                >
                  atiqur.mdrahman96@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form or Thank You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-xl border border-accent/20 bg-primary-foreground/5 p-12 text-center"
                >
                  <CheckCircle2 className="mb-4 text-accent" size={56} />
                  <h3 className="text-2xl font-bold text-primary-foreground">Thank You!</h3>
                  <p className="mt-2 max-w-sm text-sm text-primary-foreground/60">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="magnetic-btn mt-6 rounded-md bg-accent px-6 py-2 font-['Space_Grotesk'] text-sm font-semibold text-accent-foreground"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0 }}>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-primary-foreground/80">
                              <User size={14} /> Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-primary-foreground/80">
                              <Mail size={14} /> Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-primary-foreground/80">
                              <FileText size={14} /> Subject
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Subject"
                                className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground/80">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={5}
                                placeholder="Write your message..."
                                className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={sending}
                        className="magnetic-btn w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <Send size={16} />
                        {sending ? "Sending…" : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
