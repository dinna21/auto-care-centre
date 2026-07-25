"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/count-number";
import { MessageCircle, Star, Heart, Clock, ArrowRight, ShieldCheck } from "lucide-react";

const statsData = [
  {
    icon: <MessageCircle className="size-5 md:size-6 text-gold" />,
    value: 50,
    suffix: "+",
    label: "GOOGLE REVIEWS",
  },
  {
    icon: <Star className="size-5 md:size-6 text-gold" />,
    value: 4.5,
    suffix: "\u2605",
    label: "AVERAGE RATING",
  },
  {
    icon: <Heart className="size-5 md:size-6 text-gold" />,
    value: 98,
    suffix: "%",
    label: "CUSTOMER SATISFACTION",
  },
  {
    icon: <Clock className="size-5 md:size-6 text-gold" />,
    value: 8,
    suffix: "+",
    label: "YEARS IN BUSINESS",
  },
];

export function Stats() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 w-full bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split Layout: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              className="flex items-center gap-2 px-3 py-1 rounded-full"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
            >
              <span className="size-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs md:text-sm font-semibold tracking-wider text-navy uppercase">
                Auto Care Center
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
              Negombo&apos;s Most Trusted Car Care
            </motion.h2>

            <motion.p
              className="text-zinc-600 text-sm sm:text-base md:text-lg mt-4 max-w-[540px] leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70 }}
            >
              From professional washes to full servicing, hundreds of drivers trust us for quality workmanship and fair pricing every time.
            </motion.p>

            <motion.a
              href="#services"
              className="group mt-8 bg-navy hover:bg-navy/90 active:scale-95 text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
            >
              <span>Our Services</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 text-gold" />
            </motion.a>
          </div>

          {/* Right Column: Featured Image */}
          <motion.div 
            className="lg:col-span-5 relative w-full h-[280px] sm:h-[360px] lg:h-[400px] mt-4 lg:mt-0"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 50 }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-navy/10">
              <Image
                src="/assets/testimonials.webp" // Replace with your car care photo path
                alt="Car Detailing and Auto Care"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge Accent */}
            <div className="absolute -bottom-4 -left-2 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gold/20 flex items-center gap-3">
              <div className="p-2 bg-gold/10 rounded-xl text-gold">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-medium">Certified Quality</p>
                <p className="text-sm font-bold text-navy">100% Guaranteed</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Grid: Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="group bg-white hover:bg-white/90 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-xs hover:shadow-xl border border-navy/5 hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-1.5"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 60,
              }}
            >
              <div className="bg-gold/10 group-hover:bg-gold/20 rounded-2xl p-3 sm:p-3.5 mb-3 sm:mb-4 transition-colors duration-300">
                {stat.icon}
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl text-navy font-bold tracking-tight">
                <CountUp from={0} to={stat.value} />
                <span className="text-gold ml-0.5">{stat.suffix}</span>
              </div>

              <span className="text-[10px] sm:text-xs tracking-widest text-zinc-500 group-hover:text-navy mt-2.5 sm:mt-3 font-semibold uppercase transition-colors duration-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}