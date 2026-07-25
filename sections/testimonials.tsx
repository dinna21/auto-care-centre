"use client";

import { Star, User, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { testimonialsCol1, testimonialsCol2 } from "../data/data";
import Image from "next/image";
import { useState } from "react";

export function Testimonials() {
  const renderCard = (item: typeof testimonialsCol1[0], index: number) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div
        key={index}
        className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-3.5 w-[280px] sm:w-[320px] select-none border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          {/* Avatar with Image Fallback to User Icon */}
          <div className="relative size-11 rounded-full overflow-hidden bg-navy/5 shrink-0 flex items-center justify-center border border-zinc-200">
            {!imgError ? (
              <Image
                src={item.avatar}
                alt={item.name}
                className="size-full object-cover"
                width={44}
                height={44}
                onError={() => setImgError(true)}
                unoptimized
              />
            ) : (
              <div className="bg-navy text-gold font-semibold size-full flex items-center justify-center text-xs">
                {item.name.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-navy leading-tight">
              {item.name}
            </span>
            <span className="text-xs text-zinc-500 mt-0.5 font-medium">
              {item.location} &middot; Google Review
            </span>
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>
    );
  };

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 w-full bg-slate-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Column - Header Details */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <motion.div
            className="flex items-center gap-2 px-3 py-1 rounded-full"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
          >
            <span className="size-1.5 rounded-full bg-gold"></span>
            <span className="text-xs font-semibold tracking-wider text-navy uppercase">
              REVIEWS
            </span>
          </motion.div>

          <div className="w-24 h-[2px] bg-gradient-to-r from-navy via-gold to-transparent mt-4" />

          <motion.h2
            className="text-3xl sm:text-4xl md:text-[38px] text-navy font-bold mt-4 leading-tight tracking-tight max-w-[420px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 240, damping: 70 }}
          >
            Trusted by Drivers. Proven by Reviews.
          </motion.h2>

          <motion.p
            className="text-zinc-600 text-sm sm:text-base mt-3 max-w-[360px] leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
          >
            Real feedback from local drivers who trust us with their vehicles every day.
          </motion.p>

          <motion.a
            href="https://maps.app.goo.gl/2RhVQMsmys5fhQTy9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-navy hover:bg-navy/90 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 cursor-pointer inline-flex items-center gap-2 w-fit shadow-md hover:shadow-lg active:scale-95 group"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, type: "spring", stiffness: 320, damping: 70 }}
          >
            <span>Write a Review</span>
            <ExternalLink className="size-4 text-gold group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Right Column - Marquee Scroll Area (Exact Marquee Animations Preserved) */}
        <div className="lg:col-span-7 relative h-[480px] sm:h-[540px] md:h-[580px] overflow-hidden flex justify-center md:justify-start gap-4 sm:gap-6 mt-6 lg:mt-0">
          
          {/* Top/Bottom Fade Gradient Overlay */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50/90 via-slate-50/50 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50/90 via-slate-50/50 to-transparent pointer-events-none z-10" />

          {/* Column 1 (Scrolls Upwards) */}
          <div className="overflow-hidden h-full flex flex-col">
            <div className="flex flex-col gap-4 sm:gap-5 animate-marquee-up py-2">
              {testimonialsCol1.map((item, index) => renderCard(item, index))}
              {testimonialsCol1.map((item, index) => renderCard(item, index + testimonialsCol1.length))}
            </div>
          </div>

          {/* Column 2 (Scrolls Downwards) */}
          <div className="overflow-hidden h-full hidden sm:flex flex-col">
            <div className="flex flex-col gap-4 sm:gap-5 animate-marquee-down py-2">
              {testimonialsCol2.map((item, index) => renderCard(item, index))}
              {testimonialsCol2.map((item, index) => renderCard(item, index + testimonialsCol2.length))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}