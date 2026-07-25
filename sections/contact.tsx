"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contactImage = "/assets/galleryImage4.webp";
const contactAccentImage = "/assets/galleryImage9.webp";

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-28 w-full flex items-center justify-center bg-white" style={{ zIndex: 0, isolation: "isolate" }}>
            <div className="max-w-5xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Column: Contact Form */}
                <div className="flex flex-col">

                    <motion.div
                        className="flex items-center gap-2 px-3 py-1 rounded-full"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
                    >
                        <span className="size-1.5 rounded-full bg-gold"></span>
                        <span className="text-xs font-semibold tracking-wider text-navy uppercase">
                            Contact
                        </span>
                    </motion.div>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-navy via-gold to-transparent mt-4" />

                    <motion.h2 className="text-3xl sm:text-4xl md:text-[38px] text-navy font-bold mt-4 leading-tight tracking-tight max-w-[420px]"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70 }}
                    >
                        Connect with us <br />to get the best deal
                    </motion.h2>

                    {/* Form */}
                    <form className="mt-15 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="flex flex-col">
                                <motion.label className="text-sm text-navy/70 mb-2"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    YOUR NAME
                                </motion.label>
                                <motion.input type="text" placeholder="Michael Anderson" className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 focus:shadow-[0_4px_14px_-4px_rgba(6,14,27,0.15)]"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <motion.label className="text-sm text-navy/70 mb-2"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    EMAIL ADDRESS
                                </motion.label>
                                <motion.input type="email" placeholder="michael@prebuiltUI.com" className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 focus:shadow-[0_4px_14px_-4px_rgba(6,14,27,0.15)]"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Phone */}
                            <div className="flex flex-col">
                                <motion.label className="text-sm text-navy/70 mb-2"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    PHONE NUMBER
                                </motion.label>
                                <motion.input type="tel" placeholder="E.g. +94 77 777 7155" className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 focus:shadow-[0_4px_14px_-4px_rgba(6,14,27,0.15)]"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                />
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col">
                                <motion.label className="text-sm text-navy/70 mb-2"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    SUBJECT
                                </motion.label>
                                <motion.input type="text" placeholder="E.g. Full Vehicle Service" className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 focus:shadow-[0_4px_14px_-4px_rgba(6,14,27,0.15)]"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <motion.label className="text-sm text-navy/70 mb-2"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                MESSAGE
                            </motion.label>
                            <motion.textarea rows={4} placeholder="E.g. I want to get my car serviced" className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 focus:shadow-[0_4px_14px_-4px_rgba(6,14,27,0.15)] resize-none"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.div className="mt-2"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <motion.button
                                type="submit"
                                className="bg-navy hover:bg-navy-light text-white text-xs px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:shadow-navy/20"
                                whileTap={{ scale: 0.97 }}
                            >
                                SEND MESSAGE
                            </motion.button>
                        </motion.div>
                    </form>
                </div>

                {/* Right Column: Key Details Image Card */}
                <motion.div className="relative flex justify-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    {/* background glow */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
                        <div className="w-[300px] h-[300px] bg-gold/10 rounded-full blur-3xl translate-x-10 -translate-y-6"></div>
                        <div className="absolute w-[220px] h-[220px] bg-navy/10 rounded-full blur-3xl -translate-x-16 translate-y-10"></div>
                    </div>

                    <div className="relative w-[382px] h-[455px] max-w-full group">
                        <div className="relative w-full h-full overflow-hidden rounded-xl shadow-[0_25px_50px_-12px_rgba(6,14,27,0.35)]">
                            <Image src={contactImage} alt="Auto Care Center" width={382} height={455} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none brightness-80" />

                            {/* Details Content Overlay */}
                            <div className="absolute bottom-10 left-10 flex flex-col gap-2.5 z-10">
                                <span className="text-base text-white">
                                    KEY DETAILS
                                </span>
                                <motion.div className="flex flex-col gap-1 text-sm text-white"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    <p>Open Daily from 7:30 AM</p>
                                    <p>203 St Joseph&apos;s St, Negombo</p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Accent overlapping photo */}
                        <motion.div
                            className="absolute -top-8 -left-8 w-[130px] h-[100px] rounded-lg overflow-hidden border-2 border-white shadow-[0_20px_40px_-15px_rgba(6,14,27,0.35)] z-20 hidden sm:block"
                            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                            viewport={{ once: true }}
                            whileHover={{ rotate: 0, scale: 1.05 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 60, mass: 1 }}
                        >
                            <Image src={contactAccentImage} alt="Detailed car finish" width={130} height={100} className="w-full h-full object-cover select-none" />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}