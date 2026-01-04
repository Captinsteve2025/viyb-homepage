"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";

interface ParallaxHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  minHeight?: string;
  overlayOpacity?: number;
  children?: ReactNode;
}

export default function ParallaxHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  minHeight = "70vh",
  overlayOpacity = 0.5,
  children,
}: ParallaxHeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const heroHeight = heroRef.current.offsetHeight;

        // Only update if hero is visible
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Use requestAnimationFrame for smoother animation
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Calculate parallax offset - image moves at 50% of scroll speed
  const parallaxOffset = scrollY * 0.4;

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center overflow-hidden pt-20"
      style={{ minHeight }}
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.2)`,
          willChange: isVisible ? "transform" : "auto",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
          loading="eager"
          style={{
            minHeight: "120%",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70"
        style={{
          transform: `translateY(${parallaxOffset * 0.2}px)`,
        }}
      />

      {/* Content */}
      <div
        className="container relative z-10 mx-auto px-4 text-center text-white"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: Math.max(0, 1 - scrollY / 600),
        }}
      >
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:mb-6 md:text-5xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed md:mb-8 md:text-lg lg:text-xl">
          {subtitle}
        </p>
        {children}
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform"
        style={{
          opacity: Math.max(0, 1 - scrollY / 200),
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-white/40 p-1">
            <div className="h-2 w-1.5 animate-bounce rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
