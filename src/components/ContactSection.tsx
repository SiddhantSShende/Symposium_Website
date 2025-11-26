import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";

const ContactSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-card z-10">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to grow<br />your business?
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of professionals finding opportunities on Symposium.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <MagneticButton>
            <Button 
              size="lg"
              className="text-lg px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50"
              asChild
            >
              <a href="mailto:hello@symposium.com">Get In Touch</a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
