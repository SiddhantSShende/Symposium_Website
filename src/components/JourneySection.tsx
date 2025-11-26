import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./journey.css";

gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80";

  const stickyRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current!;
      const cardsContainer = containerRef.current!;
      const c1 = card1Ref.current!;
      const c2 = card2Ref.current!;
      const c3 = card3Ref.current!;

      const cards = [c1, c2, c3];

      // fronts & backs (we flip THESE, not the wrapper)
      const fronts = Array.from(
        cardsContainer.querySelectorAll<HTMLElement>(".journey-card-front")
      );
      const backs = Array.from(
        cardsContainer.querySelectorAll<HTMLElement>(".journey-card-back")
      );

      // final tilt layout (like your screenshot)
      const tiltConfigs = [
        { rotateX: 10, rotateZ: -12, x: -40, y: 40 }, // left
        { rotateX: 6, rotateZ: 0, x: 0, y: 0 },       // middle
        { rotateX: 10, rotateZ: 12, x: 40, y: 40 },   // right
      ];

      let isGapAnimationCompleted = false;

      const mm = ScrollTrigger.matchMedia();

      // DESKTOP
      mm.add("(min-width: 1001px)", () => {
        ScrollTrigger.create({
          trigger: stickyRef.current!,
          start: "top top",
          end: `+=${window.innerHeight * 4}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // 1) Header fade-in (0.1  0.2) - a bit quicker
            if (progress >= 0.1 && progress <= 0.2) {
              const p = gsap.utils.mapRange(0.1, 0.2, 0, 1, progress);
              gsap.set(header, { y: 40 * (1 - p), opacity: p });
            } else if (progress < 0.1) {
              gsap.set(header, { y: 40, opacity: 0 });
            } else if (progress > 0.2) {
              gsap.set(header, { y: 0, opacity: 1 });
            }

            // 2) Container width (0  0.2) - reacts sooner to scroll
            if (progress <= 0.2) {
              const widthPct = gsap.utils.mapRange(0, 0.2, 75, 60, progress);
              gsap.set(cardsContainer, { width: `${widthPct}%` });
            } else {
              gsap.set(cardsContainer, { width: "60%" });
            }

            // 3) Gap + borderRadius (trigger once @ 0.3 for a snappier feel)
            if (progress >= 0.3 && !isGapAnimationCompleted) {
              gsap.to(cardsContainer, { gap: "10px", duration: 0.3, ease: "power2.inOut" });
              gsap.to(cards, { borderRadius: "10px", duration: 0.3, ease: "power2.inOut" });
              isGapAnimationCompleted = true;
            }

            // 4) Flip + tilt blend (0.35  0.6) so cards react sooner
            //    - fronts: 0 → 180
            //    - backs: -180 → 0  (so text is never reversed)
            //    - cards: blend from flat → tilted (Option B)
            let flip = 0;
            let tiltProgress = 0;

            if (progress >= 0.35 && progress <= 0.6) {
              flip = gsap.utils.mapRange(0.35, 0.6, 0, 180, progress);
              tiltProgress = gsap.utils.mapRange(0.35, 0.6, 0, 1, progress);
            } else if (progress < 0.35) {
              flip = 0;
              tiltProgress = 0;
            } else if (progress > 0.6) {
              flip = 180;
              tiltProgress = 1;
            }

            // apply flip
            fronts.forEach((el) => {
              gsap.set(el, { rotateY: flip });
            });
            backs.forEach((el) => {
              gsap.set(el, { rotateY: flip - 180 }); // -180 → 0
            });

            // apply tilt blend on wrappers (cards)
            cards.forEach((card, i) => {
              const cfg = tiltConfigs[i];
              gsap.set(card, {
                rotateX: cfg.rotateX * tiltProgress,
                rotateZ: cfg.rotateZ * tiltProgress,
                x: cfg.x * tiltProgress,
                y: cfg.y * tiltProgress,
              });
            });
          },
        });
      });

      // MOBILE – no 3D / flip, just stacked cards
      mm.add("(max-width: 1000px)", () => {
        gsap.set([header, cardsContainer, c1, c2, c3], { clearProps: "transform" });
        fronts.forEach((el) => gsap.set(el, { clearProps: "transform" }));
        backs.forEach((el) => gsap.set(el, { clearProps: "transform" }));
      });
    }, stickyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="relative bg-background">
      <div className="dots-fade-bg" aria-hidden />
      <div ref={stickyRef} className="journey-sticky relative z-10">
        <div className="journey-sticky-header">
          <h1 ref={headerRef} className="font-serif services-glow-heading">
            Where are you in your journey?
          </h1>
        </div>

        <div ref={containerRef} className="journey-card-container">
          {/* CARD 1 */}
          <div ref={card1Ref} className="journey-card" id="card-1">
            <div
              className="journey-card-front journey-front-left"
              aria-hidden
              style={{ backgroundImage: `url(${IMAGE_URL})` }}
            />
            <div className="journey-card-back">
              <span>( 01 )</span>
              <svg
                aria-hidden
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="absolute top-3 right-3 opacity-60"
              >
                <path
                  d="M5 16l6-6 4 4 4-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Going Zero to One</h3>
                <p className="text-sm opacity-80">
                  If you're navigating a new business unit, or a new venture entirely, or breaking into a new market.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div ref={card2Ref} className="journey-card" id="card-2">
            <div
              className="journey-card-front journey-front-center"
              aria-hidden
              style={{ backgroundImage: `url(${IMAGE_URL})` }}
            />
            <div className="journey-card-back">
              <span>( 02 )</span>
              <svg
                aria-hidden
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute top-3 right-3 opacity-70"
              >
                <circle cx="7" cy="7" r="2" />
                <circle cx="12" cy="10" r="2" />
                <circle cx="17" cy="7" r="2" />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Scaling from One to N</h3>
                <p className="text-sm opacity-80">
                  If you’ve achieved Product/Service Market Fit, and are looking to scale your business to new heights.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div ref={card3Ref} className="journey-card" id="card-3">
            <div
              className="journey-card-front journey-front-right"
              aria-hidden
              style={{ backgroundImage: `url(${IMAGE_URL})` }}
            />
            <div className="journey-card-back">
              <span>( 03 )</span>
              <svg
                aria-hidden
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="absolute top-3 right-3 opacity-70"
              >
                <path d="M6 18l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M14 4l2 2M18 6l2 2M16 8l2 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Need Quick Solutions</h3>
                <p className="text-sm opacity-80">
                  If you know exactly what you want and need a team that can step in and quickly help you with it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
