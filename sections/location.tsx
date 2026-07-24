"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

type MapProps = {
  lat: number;
  lng: number;
};

const Map = dynamic<MapProps>(() => import("@/components/map"), { ssr: false });

const SHOP_LAT = 7.206875;
const SHOP_LNG = 79.84489;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP_LAT},${SHOP_LNG}`;

export function Location() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-offwhite" style={{ zIndex: 0, isolation: "isolate" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex items-center gap-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <span className="size-1.5 rounded-full bg-gold"></span>
          <span className="text-sm text-navy tracking-[0.15em] uppercase">
            Location
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-8">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.h2 className="text-3xl md:text-[40px]/12 text-navy leading-tight font-medium"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
              Visit Our Shop in Negombo
            </motion.h2>
            <motion.p className="text-zinc-500 text-sm md:text-base mt-4 max-w-md"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
              Conveniently located on St Joseph&apos;s Street &mdash; just minutes from the town center.
              Drop in for a wash, service, or a quick fluid top-up.
            </motion.p>
            <motion.a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 mt-5 text-sm text-zinc-600 group w-fit"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
              <p className="font-medium text-navy group-hover:text-gold transition-colors duration-200 underline decoration-navy/20 group-hover:decoration-gold underline-offset-4">
                203 St Joseph&apos;s Street, Negombo
              </p>
              <p>Open Daily from 7:30 AM</p>
            </motion.a>
            <motion.a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-navy hover:bg-navy-light text-white text-sm px-6 py-3 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-2 w-fit shadow-md hover:shadow-lg hover:shadow-navy/20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </motion.a>
          </div>

          <motion.div className="lg:col-span-7 h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-navy/10 shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
          >
            <Map lat={SHOP_LAT} lng={SHOP_LNG} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}