/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const text = "Symposium is a social network for business where professionals showcase what they offer and what they need. Connect with the right people, send deals and offers, collaborate on partnerships, and network in immersive virtual reality conferences. Your business growth starts here.";
  const words = text.split(" ");

  return (
    <section id="intro" ref={sectionRef} className="relative min-h-[300vh] bg-background z-10">
      <div className="dots-fade-bg" aria-hidden />

  <div className="sticky top-20 md:top-24 min-h-screen flex items-center justify-center px-6 md:px-12 z-10">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="max-w-4xl mx-auto">
            <p className="text-3xl md:text-5xl lg:text-6xl font-serif leading-relaxed text-center">
              {words.map((word, index) => {
                // tighten the scroll window so the text reacts faster
                const start = 0.25 + (index / words.length) * 0.3;
                const end = 0.25 + ((index + 1) / words.length) * 0.3;
                const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
                return (
                  <motion.span
                    key={index}
                    style={{ opacity }}
                    className="inline-block mr-[0.3em] will-change-transform services-glow-heading"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </p>
          </div>

          <motion.div 
            className="mt-20"
            style={{
              // bring the bottom copy in earlier in the scroll
              opacity: useTransform(scrollYProgress, [0.6, 0.75], [0, 1])
            }}
          >
            <p className="text-sm text-muted-foreground mb-8">Join 10,000+ Business Professionals</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 opacity-40">
              {['Entrepreneurs', 'Startups', 'Investors', 'Consultants', 'Agencies', 'Freelancers', 'Innovators', 'Leaders'].map((brand) => (
                <div key={brand} className="flex items-center justify-center h-16">
                  <span className="text-lg font-medium text-foreground">{brand}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
