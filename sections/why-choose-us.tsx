"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { whyChooseUsData } from "../data/data";

const defaultImage = "/assets/galleryImage2.jpg"; // Default image when no accordion item is open

export function WhyChooseUs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-16 md:py-24 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-offwhite" style={{ zIndex: 0, isolation: "isolate" }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
                {/* Left Column */}
                <div className="flex flex-col">
                    <motion.div className="flex items-center gap-1.5" 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-gold"></span>
                        <span className="text-sm text-navy">
                            WHY CHOOSE US
                        </span>
                    </motion.div>
                    <motion.h2 className="text-3xl md:text-[40px]/12 text-navy mt-4 leading-tight font-medium max-w-100"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Quality Work You Can Trust
                    </motion.h2>

                    {/* Accordion List */}
                    <div className="flex flex-col gap-4 mt-12 md:mt-16 w-full">
                        {whyChooseUsData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
                                        isOpen ? "border-navy/20 shadow-sm" : "border-zinc-100/50 hover:border-navy/10 hover:shadow-sm"
                                    }`}
                                    initial={{ y: 150, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-4 md:py-4 md:px-6 text-left cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gold/10 rounded-full size-10 flex items-center justify-center shrink-0">
                                                {item.icon}
                                            </div>
                                            <span className="text-sm md:text-base text-zinc-700 font-medium">
                                                {item.title}
                                            </span>
                                        </div>
                                        <div className={`rounded-full p-1 transition-colors duration-300 ${isOpen ? "bg-navy text-white" : "bg-zinc-100 text-zinc-500"}`}>
                                            {isOpen ? (
                                                <Minus className="size-3.5" />
                                            ) : (
                                                <Plus className="size-3.5" />
                                            )}
                                        </div>
                                    </button>

                                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <p className="p-4 md:px-16 pt-0 text-xs md:text-sm text-zinc-500 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between">
                    <motion.p className="text-zinc-500 text-sm md:text-base max-w-115 md:mt-12 mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Our team brings professional workmanship and genuine care to every vehicle that comes through our doors.
                    </motion.p>

                    <motion.div className="bg-navy rounded-xl p-5 text-white mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="flex gap-6 justify-between">
                            <div className="text-center">
                                <span className="text-gold text-xl font-bold">800+</span>
                                <p className="text-xs text-zinc-300 mt-1">Cars Serviced<br />Monthly</p>
                            </div>
                            <div className="text-center">
                                <span className="text-gold text-xl font-bold">5&#9733;</span>
                                <p className="text-xs text-zinc-300 mt-1">Google<br />Rated</p>
                            </div>
                            <div className="text-center">
                                <span className="text-gold text-xl font-bold">8+</span>
                                <p className="text-xs text-zinc-300 mt-1">Years<br />Experience</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div className="relative w-full h-[280px] md:h-[400px] rounded-xl overflow-hidden shadow-md bg-zinc-100 max-w-full" 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <Image src={defaultImage} alt="Auto Care Service" fill
                            className={`absolute inset-0 object-cover object-center transition-all duration-500 ease-in-out ${
                                openIndex === null ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                            }`}
                        />
                        {whyChooseUsData.map((item, index) => (
                            <Image key={index} src={item.image} alt={item.title} fill
                                className={`absolute inset-0 object-cover object-center transition-all duration-500 ease-in-out ${
                                    openIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                                }`}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
