import { useState } from "react";

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionToSection = (sectionId: string) => {
    setIsTransitioning(true);

    // Wait for animation to start
    setTimeout(() => {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);

    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  return { isTransitioning, transitionToSection };
};
