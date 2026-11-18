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
    <section className="location-section py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-offwhite" style={{ zIndex: 0, isolation: "isolate" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-2 px-3 py-1 rounded-full"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
        >
          <span className="size-1.5 rounded-full bg-gold"></span>
          <span className="text-xs font-semibold tracking-wider text-navy uppercase">
            Location
          </span>
        </motion.div>

        <div className="w-24 h-[2px] bg-gradient-to-r from-navy via-gold to-transparent mt-4" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-8 lg:mt-10">
          <div className="lg:col-span-5 flex flex-col justify-center lg:pr-8">
            <motion.h2 className="text-3xl sm:text-4xl md:text-[38px] text-navy font-bold mt-4 leading-tight tracking-tight max-w-[420px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 240, damping: 70 }}
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
            <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-600">
              <motion.a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="location-address group w-fit"
                aria-label="Open Auto Care Center address in Google Maps"
              >
                <span className="location-address__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                </span>
                <span>
                  <span className="font-medium text-navy group-hover:text-gold transition-colors duration-200">
                    203 St Joseph&apos;s Street, Negombo
                  </span>
                  <span className="block mt-1 text-zinc-500">Open daily from 7:30 AM</span>
                </span>
              </motion.a>
            </div>
            <motion.a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 bg-navy hover:bg-navy-light text-white text-sm px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-2 w-fit shadow-md hover:shadow-lg hover:shadow-navy/20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </motion.a>
          </div>

          <motion.div className="location-map-shell lg:col-span-7 h-[390px] md:h-[480px] rounded-[22px] overflow-hidden border border-white shadow-[0_20px_60px_-28px_rgba(10,22,40,0.42)]"
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