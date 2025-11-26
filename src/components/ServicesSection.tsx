import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Connect & Collaborate",
    description: "Showcase what you offer and what you need. Find the perfect partners, clients, and opportunities.",
    items: ["Business Profiles", "Deals & Offers", "Smart Matching", "Partnership Tools"]
  },
  {
    title: "VR Conferences",
    description: "Network in immersive virtual reality environments. Present your startup, attend events, and build meaningful connections.",
    items: ["Virtual Events", "Startup Pitches", "Networking Lounges", "Interactive Demos"]
  },
  {
    title: "Business Communities",
    description: "Create or join exclusive clubs. Collaborate with like-minded professionals in public or invite-only spaces.",
    items: ["Private Clubs", "Public Communities", "Direct Messaging", "Group Channels"]
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="services"
      className="relative py-32 px-6 md:px-12 bg-background z-10"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto relative">
        {/* Very subtle dotted background for this section */}
        <div className="dots-fade-bg" aria-hidden />

        {/* Centered heading like reference */}
        <div className="mb-24 text-center relative">
          <motion.h2
            className="services-glow-heading text-4xl md:text-6xl font-serif mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="italic">With</span> our services
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help you achieve more at every stage of business growth.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-16 items-start">
          {/* Left: textual service list, similar to reference */}
          <div className="space-y-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-xs tracking-[0.25em] text-muted-foreground mb-2">
                  ({String(index + 1).padStart(2, "0")})
                </p>
                <h3 className="services-glow-heading text-2xl md:text-3xl font-serif mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-1 text-sm text-foreground/80">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right: image-based service card like in the reference */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="services-image-card h-[260px] md:h-[320px] bg-black/60">
              {/* Replace the src below with your actual marketing/service image */}
              <img
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80"
                alt="Service highlight"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
