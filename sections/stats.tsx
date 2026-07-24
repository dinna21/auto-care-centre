"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/count-number";
import { MessageCircle, Star, Heart, Clock } from "lucide-react";

const statsData = [
  {
    icon: <MessageCircle className="size-6 text-gold" />,
    value: 50,
    suffix: "+",
    label: "GOOGLE REVIEWS",
  },
  {
    icon: <Star className="size-6 text-gold" />,
    value: 4.5,
    suffix: "\u2605",
    label: "AVERAGE RATING",
  },
  {
    icon: <Heart className="size-6 text-gold" />,
    value: 98,
    suffix: "%",
    label: "CUSTOMER SATISFACTION",
  },
  {
    icon: <Clock className="size-6 text-gold" />,
    value: 8,
    suffix: "+",
    label: "YEARS IN BUSINESS",
  },
];

export function Stats() {
    return (
        <section className="py-16 md:py-25 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-offwhite">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start max-w-3xl">
                    <motion.div className="flex items-center gap-1.5" 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 bg-gold"></span>
                        <span className="text-sm text-navy">
                            AUTO CARE CENTER
                        </span>
                    </motion.div>
                    <motion.h2 className="text-5xl md:text-6xl text-navy mt-8 leading-tight max-w-[610px]"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Negombo&apos;s Most Trusted Car Care
                    </motion.h2>

                    <motion.p className="text-zinc-500 text-sm md:text-base mt-3 max-w-[520px]"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        From professional washes to full servicing, hundreds of drivers trust us for quality workmanship and fair pricing every time.
                    </motion.p>

                    <motion.a href="#services" className="mt-7 bg-navy hover:bg-navy-light text-white px-7 py-3 rounded-full text-sm transition cursor-pointer inline-block" 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Our Services
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 md:mt-20">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-navy/5"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <div className="bg-gold/10 rounded-full p-3 mb-4">
                                {stat.icon}
                            </div>
                            <span className="text-4xl md:text-5xl text-navy font-medium">
                                <CountUp from={0} to={stat.value} />{stat.suffix}
                            </span>
                            <span className="text-xs tracking-wider text-zinc-500 mt-3 font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
