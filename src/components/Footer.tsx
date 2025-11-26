import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <footer className="py-12 px-6 md:px-12 bg-card border-t border-border/50" ref={ref}>
      <motion.div 
        className="max-w-[1400px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-serif italic mb-2">Symposium</p>
            <p className="text-sm text-muted-foreground">
              Where business meets opportunity
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
              Capabilities
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="mailto:hello@symposium.com" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Symposium. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
