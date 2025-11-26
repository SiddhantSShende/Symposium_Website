import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Top Performers",
    category: "Discover Excellence",
    description: "Browse the most successful professionals and businesses on Symposium. See who's making waves and connect with industry leaders."
  },
  {
    title: "Hottest Deals",
    category: "Real-Time Opportunities",
    description: "Track trending deals and offers as they happen. Never miss out on valuable partnerships and business opportunities."
  },
  {
    title: "Live Contracts",
    category: "Seamless Transactions",
    description: "Monitor your ongoing deals, offers, and contracts in real-time. Stay updated on every stage of your business relationships."
  },
  {
    title: "Smart Communication",
    category: "Stay Connected",
    description: "Slack-like messaging with locked and unlocked channels, plus direct communication. Everything you need to collaborate effectively."
  }
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="work" ref={sectionRef} className="relative py-32 px-6 md:px-12 bg-background z-10">
      {/* very subtle white dots over dark background */}
      <div className="dots-fade-bg" aria-hidden />

      <div className="max-w-[1400px] mx-auto relative">
        <motion.h2 
          className="services-glow-heading text-5xl md:text-7xl font-serif mb-20 text-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Key Capabilities
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [index % 2 === 0 ? 100 : -100, index % 2 === 0 ? -100 : 100]
            );

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/60 transition-all duration-500"
              >
                {/* top visual strip with subtle motion */}
                <motion.div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ y: yOffset }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-background/40 opacity-80" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.3),transparent_55%)] opacity-60 mix-blend-screen" />
                  <div className="absolute inset-0 flex items-center justify-between px-6 py-4 text-xs text-white/80">
                    <span className="rounded-full bg-black/30 px-3 py-1 uppercase tracking-[0.18em]">{project.category}</span>
                    <span className="opacity-80">0{index + 1}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-serif opacity-10 group-hover:opacity-25 transition-opacity">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </motion.div>

                {/* text content */}
                <div className="p-7 md:p-8">
                  <h3 className="services-glow-heading text-2xl md:text-3xl font-serif mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <motion.button
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-xs md:text-sm text-foreground hover:bg-white/15 hover:border-primary/70 transition-colors"
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-medium">Explore capability</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
