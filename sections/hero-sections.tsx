"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <motion.section
            id="home"
            className="flex flex-col items-center min-h-screen justify-center px-4 w-full relative bg-navy overflow-hidden"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Blurred background image layer */}
            <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/hero-image.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(3px)",
                        transform: "scale(1.05)",
                    }}
                />
            </div>

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 z-0"
                aria-hidden="true"
                style={{
                    background: "linear-gradient(180deg, rgba(6,14,27,0.75) 0%, rgba(6,14,27,0.35) 45%, rgba(6,14,27,0.65) 100%)",
                }}
            />

            <motion.div className="bg-white/10 backdrop-blur-md text-xs text-white tracking-wider pl-3 pr-5 py-1.5 rounded-full flex items-center gap-2 border border-white/15 relative z-10"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <MapPin size={14} />
                <p>NEGOMBO &middot; SRI LANKA</p>
            </motion.div>

            <motion.h1
                className="text-4xl md:text-5xl lg:text-[58px] text-white font-medium max-w-xl md:max-w-2xl text-center mt-8 leading-[1.15] [text-shadow:0_4px_20px_rgba(0,0,0,0.4)] relative z-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                <span className="font-light">Your Ride, Our Pride</span>{" "}
                <span className="font-bold">Professional Car Wash &amp; Vehicle Service</span>
            </motion.h1>

            <motion.p
                className="text-white/90 max-w-lg md:max-w-xl text-center mt-4 text-sm md:text-base font-light [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] relative z-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Professional car wash, detailing, and full vehicle servicing in Negombo. Trusted by hundreds of drivers for quality work and fair pricing.
            </motion.p>

            <motion.div
                className="flex items-center gap-4 mt-10 relative z-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <motion.a
                    href="#services"
                    className="text-navy text-sm font-semibold cursor-pointer transition-all duration-300 rounded-full px-8 py-3.5 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #F5C518, #E0AD0C)" }}
                >
                    Our Services
                </motion.a>
                <a
                    href="tel:0777777155"
                    className="border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:border-white/50 group"
                >
                    <div className="relative overflow-hidden">
                        <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                            Call Now
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                            Call Now
                        </span>
                    </div>
                </a>
            </motion.div>

            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10">
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
            </div>
        </motion.section>
    )
}
