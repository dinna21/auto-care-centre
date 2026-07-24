"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function Gallery() {
    const gridRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const images = [
        "/assets/galleryImage1.png", "/assets/galleryImage7.webp", "/assets/galleryImage3.webp", "/assets/galleryImage4.webp",
        "/assets/galleryImage1.png", "/assets/galleryImage8.webp", "/assets/galleryImage6.webp", "/assets/galleryImage5.webp"
    ];

    // Fade/slide-in entrance animation for each card (works for both the
    // mobile horizontal carousel and the desktop grid — IntersectionObserver
    // tracks real on-screen position either way).
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const cards = Array.from(grid.querySelectorAll<HTMLElement>("[data-gallery-card]"));

        if (prefersReducedMotion) {
            cards.forEach((card) => {
                card.style.opacity = "1";
                card.style.transform = "none";
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const index = Number(el.dataset.index ?? 0);
                        el.style.transitionDelay = `${index * 90}ms`;
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    // Tracks horizontal scroll position on mobile to drive the progress bar.
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let frame = 0;
        const updateProgress = () => {
            const max = el.scrollWidth - el.clientWidth;
            const pct = max > 0 ? (el.scrollLeft / max) * 100 : 0;
            setScrollProgress(pct);
        };

        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(updateProgress);
        };

        updateProgress();
        el.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateProgress);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section id="our-work" className="relative w-full bg-white py-16 md:py-24 px-4 md:px-16 lg:px-24 xl:px-32">
            {/* Mobile scroll progress indicator */}
            <div className="md:hidden mb-5 h-1 w-full rounded-full bg-zinc-100 overflow-hidden">
                <div
                    className="h-full rounded-full bg-gold transition-[width] duration-150 ease-out"
                    style={{ width: `${Math.max(scrollProgress, 6)}%` }}
                />
            </div>

            <div
                ref={(node) => {
                    gridRef.current = node;
                    scrollRef.current = node;
                }}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 -mx-4 px-4 pb-2
                           md:mx-0 md:px-0 md:pb-0 md:grid md:gap-6 md:overflow-visible md:snap-none
                           [&::-webkit-scrollbar]:hidden"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        data-gallery-card
                        data-index={index}
                        className="group relative shrink-0 w-[78%] xs:w-[70%] sm:w-[55%] snap-center
                                   aspect-[3/4] md:aspect-[4/3] md:w-full
                                   overflow-hidden rounded-xl shadow-sm transition-shadow duration-500 hover:shadow-[0_0_24px_rgba(245,197,24,0.35)]"
                        style={{
                            opacity: 0,
                            transform: "translateY(24px)",
                            transition:
                                "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1), box-shadow 0.5s ease, translate 0.5s ease",
                        }}
                        onMouseEnter={(e) => {
                            if (window.matchMedia("(hover: hover)").matches) {
                                e.currentTarget.style.transform = "translateY(-4px)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            loading={index < 3 ? "eager" : "lazy"}
                            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                        />
                    </div>
                ))}
            </div>


        </section>
    );
}