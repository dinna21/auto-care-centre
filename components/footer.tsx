"use client";

import { motion } from "framer-motion";
import type { LucideProps } from "lucide-react";

const InstagramIcon = ({ size = 24, ...props }: LucideProps) => (
    <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: LucideProps) => (
    <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const TwitterIcon = ({ size = 24, ...props }: LucideProps) => (
    <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const FacebookIcon = ({ size = 24, ...props }: LucideProps) => (
    <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const socialLinks = [
    { name: "Instagram", href: "#", icon: InstagramIcon },
    { name: "LinkedIn", href: "#", icon: LinkedinIcon },
    { name: "Twitter", href: "#", icon: TwitterIcon },
    { name: "Facebook", href: "#", icon: FacebookIcon },
];

export function Footer() {
    return (
        <footer className="relative bg-navy text-white pt-16 pb-8 mt-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden">
            {/* top accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>

            {/* background glow */}
            <div className="pointer-events-none absolute inset-0 -z-0">
                <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-gold/[0.06] rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-[360px] h-[360px] bg-white/[0.03] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

                    {/* Left Brand Details */}
                    <motion.div className="lg:col-span-7 flex flex-col items-start gap-6"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        <a href="#home" className="select-none font-urbanist font-bold text-xl md:text-2xl tracking-tight flex items-center gap-2">
                            Auto Care Centre
                            <span className="size-1.5 rounded-full bg-gold"></span>
                        </a>
                        <p className="text-zinc-300 text-sm/5.5 max-w-md">
                            Professional car wash and vehicle servicing in Negombo. Your ride, our pride.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-3 mt-2">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className="size-9 flex items-center justify-center rounded-full border border-white/15 text-zinc-300 hover:text-navy hover:bg-gold hover:border-gold transition-all duration-200"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -3 }}
                                        transition={{ delay: 0.15 + i * 0.05, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Link Columns */}
                    <div className="lg:col-span-5 flex justify-between gap-8 flex-wrap">
                        {/* Explore */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white text-sm font-medium tracking-wide">Explore</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a href="#home" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Home
                                </motion.a>
                                <motion.a href="#services" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Services
                                </motion.a>
                                <motion.a href="#our-work" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Our Work
                                </motion.a>
                                <motion.a href="#reviews" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Reviews
                                </motion.a>
                                <motion.a href="#contact" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Contact
                                </motion.a>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white text-sm font-medium tracking-wide">Company</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a href="#" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    About Us
                                </motion.a>
                                <motion.a href="#" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    FAQ
                                </motion.a>
                                <motion.a href="#contact" className="hover:text-gold transition-colors duration-200 w-fit hover:translate-x-0.5" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Contact
                                </motion.a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-navy-light via-white/10 to-navy-light"></div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 text-xs text-zinc-300">
                    <p>Copyright 2026 &copy; Auto Care Centre. All Right Reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gold transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors duration-200">Terms of Service</a>
                        <a href="#" className="hover:text-gold transition-colors duration-200">Cookie Policy</a>
                    </div>
                </div>

                {/* Powered by */}
                <div className="flex justify-center sm:justify-end pt-6">
                    <a
                        href="https://inkavalley.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-zinc-400 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                        Powered by
                        <span className="font-medium text-zinc-300 hover:text-gold transition-colors duration-200">inkavalley.com</span>
                    </a>
                </div>

                <span className="absolute bottom-[-2px] right-[-12px] font-urbanist text-[140px] md:text-[210px] font-bold leading-none text-white/[0.04] select-none pointer-events-none">
                    AUTO<br />CARE
                </span>
            </div>
        </footer>
    );
}