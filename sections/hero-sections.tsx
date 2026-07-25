"use client";

import { MapPin, Phone, Star, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 w-full bg-navy overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image - Brightened & Sharpened */}
      <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute inset-0 transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('/hero-image.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px) brightness(1.08) contrast(1.05)",
          }}
        />
      </div>

      {/* Lightened Multi-Layer Dark Vignette for Text Contrast */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,14,27,0.2) 0%, rgba(6,14,27,0.5) 75%, rgba(6,14,27,0.8) 100%), linear-gradient(180deg, rgba(6,14,27,0.35) 0%, transparent 40%, rgba(6,14,27,0.65) 100%)",
        }}
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center mt-12 mb-8">
        
        {/* Location Pill */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/70 backdrop-blur-md border border-white/30 shadow-xl mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 30 }}
        >
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full size-2 bg-gold"></span>
          </span>
          <MapPin size={13} className="text-gold ml-0.5" />
          <span className="text-xs font-semibold tracking-widest text-white uppercase">
            Negombo &middot; Sri Lanka
          </span>
        </motion.div>

        {/* Headline - Brighter White & Gold Accent */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-white font-normal leading-[1.12] tracking-tight text-balance max-w-3xl [text-shadow:0_4px_20px_rgba(0,0,0,0.95),_0_1px_3px_rgba(0,0,0,0.9)]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 50 }}
        >
          <span className="block font-medium text-amber-300 text-2xl sm:text-4xl md:text-5xl mb-2 tracking-normal italic [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Your Ride, Our Pride
          </span>
          <span className="font-extrabold text-white block tracking-tight">
            Professional Car Wash &amp; Auto Detailing
          </span>
        </motion.h1>

        {/* Subtitle - Bright Crisp White Text */}
        <motion.p
          className="text-white font-medium max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed mt-6 text-balance [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 50 }}
        >
          Trusted auto care and vehicle servicing in Negombo. Experience premium workmanship, precision detailing, and fair pricing every single time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 50 }}
        >
          {/* Primary CTA */}
          <a
            href="#services"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-navy bg-gradient-to-r from-gold via-amber-400 to-gold hover:brightness-110 shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <span>Our Services</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="tel:0777777155"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white bg-navy/80 hover:bg-navy backdrop-blur-md border border-white/40 hover:border-white/60 transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
          >
            <Phone size={15} className="text-gold" />
            <span>Call 077 777 7155</span>
          </a>
        </motion.div>

      </div>

      {/* Floating Trust Badges */}
      <motion.div 
        className="hidden lg:flex absolute bottom-12 left-12 z-10 items-center gap-3 bg-navy/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 shadow-2xl"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="p-2.5 bg-gold/20 rounded-xl text-gold">
          <Star size={20} className="fill-gold" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-sm">4.8 / 5.0</span>
          </div>
          <p className="text-xs text-white/90 font-medium">Google Customer Reviews</p>
        </div>
      </motion.div>

      <motion.div 
        className="hidden lg:flex absolute bottom-12 right-12 z-10 items-center gap-3 bg-navy/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 shadow-2xl"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="p-2.5 bg-gold/20 rounded-xl text-gold">
          <ShieldCheck size={20} />
        </div>
        <div className="text-left">
          <p className="text-white font-bold text-sm">8+ Years Experience</p>
          <p className="text-xs text-white/90 font-medium">Certified Auto Experts</p>
        </div>
      </motion.div>

      {/* Scroll Down */}
      <motion.a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/90 hover:text-gold transition-colors duration-300 z-10 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">Scroll Down</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>

    </motion.section>
  );
}