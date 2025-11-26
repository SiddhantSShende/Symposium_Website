import heroImage from "@/assets/hero-hands.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="sticky top-0 min-h-screen flex items-center justify-center overflow-visible">
      {/* Frame with outer padding - keeps hero inside a rounded rectangle */}
      <div className="absolute inset-1 px-4 md:px-6 top-9 bottom-9">
        <div className="relative h-full rounded-3xl md:rounded-[28px] overflow-hidden ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* Background with gradient overlay - clipped to the frame */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-hero" />
            <div className="absolute inset-0 bg-gradient-overlay" />
            <img
              src={heroImage}
              alt="Artistic hands"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Where Business<br />
              Meets Opportunity
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-foreground/90 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Connect. Collaborate. Grow Together.
            </motion.p>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
              <span className="text-sm text-foreground/60">Scroll to Explore</span>
              <div className="w-6 h-10 border border-foreground/30 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-foreground/50 rounded-full animate-bounce" />
              </div>
            </div>

            {/* Time & Location */}
            <div className="absolute bottom-8 left-6 md:left-12 text-sm text-foreground/40">
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="absolute bottom-8 right-6 md:right-12 text-sm text-foreground/40">PNQ, IND</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
