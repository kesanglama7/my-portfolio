

"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  isReady: boolean;
}

const INTRO_WORD = "Myself";
const PERSON_NAME = "Kesang Lama";

const ROLE_NORMAL = "Frontend ";
const ROLE_ACCENT = "Developer";
const FULL_ROLE = `${ROLE_NORMAL}${ROLE_ACCENT}`;

export default function Hero({ isReady }: HeroProps) {
  const scrollTrackRef = useRef<HTMLElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const introSceneRef = useRef<HTMLDivElement>(null);
  const typingTextRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const finalSceneRef = useRef<HTMLDivElement>(null);
  const finalCopyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scrollTrack = scrollTrackRef.current;
      const screen = screenRef.current;

      const introScene = introSceneRef.current;
      const typingText = typingTextRef.current;
      const cursor = cursorRef.current;

      const finalScene = finalSceneRef.current;
      const finalCopy = finalCopyRef.current;
      const image = imageRef.current;

      const headerBrandSection =
        document.querySelector<HTMLElement>(
          "[data-header-brand-section]",
        );

      const headerBrandReveal =
        document.querySelector<HTMLElement>(
          "[data-header-brand-reveal]",
        );

      const headerMenuReveal =
        document.querySelector<HTMLElement>(
          "[data-header-menu-reveal]",
        );

      if (
        !scrollTrack ||
        !screen ||
        !introScene ||
        !typingText ||
        !cursor ||
        !finalScene ||
        !finalCopy ||
        !image ||
        !headerBrandSection ||
        !headerBrandReveal ||
        !headerMenuReveal
      ) {
        return;
      }

      const select = gsap.utils.selector(screen);
      const roleLetters = select(".role-letter");

      let scrollTimeline: gsap.core.Timeline | null = null;
      let sectionHeaderTrigger: ScrollTrigger | null = null;

      typingText.textContent = "";

      gsap.set(screen, {
        autoAlpha: 1,
      });

      gsap.set(introScene, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
      });

      gsap.set(typingText, {
        autoAlpha: 1,
      });

      gsap.set(cursor, {
        autoAlpha: 1,
      });

      gsap.set(finalScene, {
        autoAlpha: 0,
      });

      gsap.set(finalCopy, {
        autoAlpha: 1,
        x: 0,
        y: 0,
      });

      gsap.set(roleLetters, {
        autoAlpha: 0,
      });

      gsap.set(image, {
        autoAlpha: 0,
        x: 120,
        scale: 0.94,
      });

      gsap.set([headerBrandReveal, headerMenuReveal], {
        autoAlpha: 0,
        y: -28,
      });

      gsap.set(headerBrandSection, {
        autoAlpha: 1,
        x: 0,
      });

      if (!isReady) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const html = document.documentElement;
      const body = document.body;

      const originalHtmlOverflow = html.style.overflow;
      const originalHtmlScrollbarGutter =
        html.style.scrollbarGutter;

      const originalBodyOverflow = body.style.overflow;
      const originalBodyOverscroll =
        body.style.overscrollBehavior;

      const lockScrolling = () => {
        /*
         * Reserve the scrollbar width before hiding it.
         * This prevents the centered text from shifting.
         */
        html.style.scrollbarGutter = "stable";
        html.style.overflow = "hidden";

        body.style.overflow = "hidden";
        body.style.overscrollBehavior = "none";
      };

      const unlockScrolling = () => {
        html.style.overflow = originalHtmlOverflow;
        html.style.scrollbarGutter =
          originalHtmlScrollbarGutter;

        body.style.overflow = originalBodyOverflow;
        body.style.overscrollBehavior =
          originalBodyOverscroll;
      };

      const setupSectionHeaderBehavior = () => {
        const workSection =
          document.querySelector<HTMLElement>("#work");

        if (!workSection) {
          return;
        }

        const showBrand = (immediate = false) => {
          const values = {
            autoAlpha: 1,
            x: 0,
          };

          if (immediate) {
            gsap.set(headerBrandSection, values);
            return;
          }

          gsap.to(headerBrandSection, {
            ...values,
            duration: 0.55,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const hideBrand = (immediate = false) => {
          const values = {
            autoAlpha: 0,
            x: -20,
          };

          if (immediate) {
            gsap.set(headerBrandSection, values);
            return;
          }

          gsap.to(headerBrandSection, {
            ...values,
            duration: 0.55,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        sectionHeaderTrigger = ScrollTrigger.create({
          trigger: workSection,
          start: "top 85%",
          end: "max",
          invalidateOnRefresh: true,

          onEnter: () => {
            hideBrand();
          },

          onEnterBack: () => {
            hideBrand();
          },

          onLeaveBack: () => {
            showBrand();
          },

          onRefresh: (trigger) => {
            if (trigger.scroll() >= trigger.start) {
              hideBrand(true);
            } else {
              showBrand(true);
            }
          },
        });
      };

      if (prefersReducedMotion) {
        typingText.textContent = PERSON_NAME;

        gsap.set(scrollTrack, {
          height: "100svh",
        });

        gsap.set(introScene, {
          autoAlpha: 0,
        });

        gsap.set(finalScene, {
          autoAlpha: 1,
        });

        gsap.set(roleLetters, {
          autoAlpha: 1,
        });

        gsap.set(image, {
          autoAlpha: 1,
          x: 0,
          scale: 1,
        });

        gsap.set([headerBrandReveal, headerMenuReveal], {
          autoAlpha: 1,
          y: 0,
        });

        setupSectionHeaderBehavior();
        ScrollTrigger.refresh();

        return () => {
          sectionHeaderTrigger?.kill();
        };
      }

      lockScrolling();

      const cursorTween = gsap.to(cursor, {
        autoAlpha: 0,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });

      const typeText = (
        timeline: gsap.core.Timeline,
        text: string,
        speed = 0.09,
      ) => {
        for (let index = 1; index <= text.length; index += 1) {
          timeline.call(() => {
            typingText.textContent = text.slice(0, index);
          });

          timeline.to({}, {
            duration: speed,
          });
        }
      };

      const deleteText = (
        timeline: gsap.core.Timeline,
        text: string,
        speed = 0.055,
      ) => {
        for (
          let index = text.length - 1;
          index >= 0;
          index -= 1
        ) {
          timeline.call(() => {
            typingText.textContent = text.slice(0, index);
          });

          timeline.to({}, {
            duration: speed,
          });
        }
      };

      const createScrollAnimation = () => {
        unlockScrolling();

        const isMobile = window.innerWidth < 768;

        scrollTimeline = gsap.timeline({
          defaults: {
            ease: "none",
          },

          scrollTrigger: {
            id: "hero-scroll-trigger",
            trigger: scrollTrack,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        scrollTimeline
          .to({}, {
            duration: 0.3,
          })

          .to(introScene, {
            autoAlpha: 0,
            x: isMobile ? 0 : -100,
            y: -20,
            scale: 0.94,
            duration: 1,
            ease: "power2.inOut",
          })

          .set(
            finalScene,
            {
              autoAlpha: 1,
            },
            0.72,
          )

          .to(
            image,
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
              duration: 1.15,
              ease: "power3.out",
            },
            0.76,
          )

          .fromTo(
            roleLetters,
            {
              autoAlpha: 0,

              x: () =>
                gsap.utils.random(
                  isMobile ? -120 : -320,
                  isMobile ? 120 : 320,
                ),

              y: () =>
                gsap.utils.random(
                  isMobile ? -100 : -210,
                  isMobile ? 100 : 210,
                ),

              rotation: () =>
                gsap.utils.random(-210, 210),

              scale: () =>
                gsap.utils.random(0.55, 1.35),
            },

            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 1.35,

              stagger: {
                each: 0.035,
                from: "random",
              },

              ease: "back.out(1.2)",
            },

            0.85,
          )

          .to(
            headerMenuReveal,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            1.65,
          )

          .to(
            headerBrandReveal,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            1.8,
          )
          .addLabel("homeShowcase", 2.75)
          .to({}, {
            duration: 1.2,
          });

        setupSectionHeaderBehavior();

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      const typingTimeline = gsap.timeline({
        onComplete: createScrollAnimation,
      });

      typeText(typingTimeline, INTRO_WORD, 0.1);

      typingTimeline.to({}, {
        duration: 0.55,
      });

      deleteText(typingTimeline, INTRO_WORD, 0.06);

      typingTimeline.to({}, {
        duration: 0.2,
      });

      typeText(typingTimeline, PERSON_NAME, 0.09);

      typingTimeline.to({}, {
        duration: 0.45,
      });

      return () => {
        typingTimeline.kill();
        cursorTween.kill();

        scrollTimeline?.scrollTrigger?.kill();
        scrollTimeline?.kill();

        sectionHeaderTrigger?.kill();

        unlockScrolling();
      };
    },
    {
      scope: screenRef,
      dependencies: [isReady],
      revertOnUpdate: true,
    },
  );

  return (
    <>
      <section
        id="home"
        ref={scrollTrackRef}
        aria-hidden="true"
        className="relative z-0 h-[280svh] w-full md:h-[310svh]"
      />

      <div
        ref={screenRef}
        className="pointer-events-none fixed inset-0 z-0 flex h-[100svh] w-full items-center justify-center overflow-hidden bg-white text-black"
      >
        <div
          ref={introSceneRef}
          className="absolute inset-0 z-20 flex items-center justify-center will-change-transform"
        >
          <div className="flex items-center whitespace-nowrap">
            <h1
              ref={typingTextRef}
              aria-label={`${INTRO_WORD}, ${PERSON_NAME}`}
              className="font-manrope text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            />

            <span
              ref={cursorRef}
              aria-hidden="true"
              className="ml-2 inline-block h-[5em] w-[3px] bg-neutral-500 md:w-[4px]"
            />
          </div>
        </div>

        <div
          ref={finalSceneRef}
          className="absolute inset-0 z-30 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-0 pt-24 md:grid-cols-2 md:gap-16 md:px-10 md:pt-20"
        >
          <div
            ref={finalCopyRef}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="mb-3 whitespace-nowrap font-manrope text-5xl font-bold leading-none tracking-tight sm:text-6xl md:mb-4 md:text-7xl">
              I&apos;m a
            </h2>

            <div
              aria-label={FULL_ROLE}
              className="flex flex-wrap justify-center font-syne text-2xl font-medium leading-tight sm:text-3xl md:justify-start md:text-4xl"
            >
              {FULL_ROLE.split("").map((character, index) => {
                const isAccent = index >= ROLE_NORMAL.length;

                return (
                  <span
                    key={`${character}-${index}`}
                    aria-hidden="true"
                    className={`role-letter inline-block ${
                      isAccent ? "text-red-600" : "text-black"
                    } ${character === " " ? "w-2 md:w-3" : ""}`}
                  >
                    {character === " " ? "\u00A0" : character}
                  </span>
                );
              })}
            </div>
          </div>

          <div
            ref={imageRef}
            className="flex items-center justify-center will-change-transform md:justify-end"
          >
            <Image
              src="/images/kesang.png"
              alt="Kesang Lama, frontend developer"
              width={1000}
              height={1000}
              priority
              className="max-h-[90svh] w-auto max-w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}