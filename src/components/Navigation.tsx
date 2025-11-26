import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onNavigate?: (sectionId: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const intro = document.getElementById("intro");
    if (!intro) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // once we reach intro, lock nav into the smaller state
          setShrink(true);
        }
      },
      { threshold: 0.2 }
    );

    io.observe(intro);
    return () => io.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(sectionId);
    }
  };

  return (
    <motion.nav
      className={cn(
        "fixed z-50 left-4 right-4 md:left-6 md:right-6",
        "top-[7px] md:top-[12px]"
      )}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "mx-auto w-full transition-all duration-300",
          // noticeably smaller nav once we scroll past hero
          shrink ? "max-w-[980px]" : "max-w-[1500px]",
          "rounded-2xl md:rounded-3xl",
          "backdrop-blur-xl",
          "border border-white/10",
          "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
          // neutral glass background (no red tint)
          "bg-white/5",
          "ring-1 ring-white/5",
          shrink ? "px-3.5 py-2.5" : "px-7 md:px-9 py-4.5 md:py-3"
        )}
      >
        <div className="flex items-center justify-between">
          <a
            href="/"
            className={cn(
              "italic font-serif",
              shrink ? "text-lg md:text-xl" : "text-2xl md:text-3xl"
            )}
          >
            Symposium
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#services"
              onClick={(e) => handleClick(e, "#services")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={(e) => handleClick(e, "#work")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Featured Work
            </a>
            <a
              href="#reviews"
              onClick={(e) => handleClick(e, "#reviews")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Reviews
            </a>
          </div>

          <Button
            variant="outline"
            className={cn(
              // white button with subtle hover state
              "bg-white text-black border-white/20",
              "hover:bg-white/80 hover:border-white/40",
              shrink ? "h-9 px-4 text-sm" : "h-10 px-5"
            )}
            asChild
          >
            <a href="mailto:hello@symposium.com">Get In Touch</a> 
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
