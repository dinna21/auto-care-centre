"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MicroSlats = dynamic(() => import("@/components/micro-slats/MicroSlats"), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,22,40,0.04),transparent_72%)]" />,
});

const galleryImage1 = "/assets/galleryImage9.webp";
const galleryImage2 = "/assets/galleryImage2.jpg";
const galleryImage3 = "/assets/galleryImage4.webp";

export function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-offwhite flex flex-col items-center justify-center text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          maskImage: "radial-gradient(ellipse at center, transparent 25%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 25%, black 80%)",
        }}
      >
        <MicroSlats
          preset="tide"
          color="#0a1628"
          glintColor="#f5c518"
          backgroundColor="transparent"
          slatWidth={9}
          slatHeight={22}
          gap={5}
          roundness={0.8}
          speed={0.16}
          glint={0.5}
          contrast={0.9}
          perspective={0.3}
          interactive={false}
          intro={false}
          className="opacity-70"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-offwhite via-offwhite/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-offwhite via-offwhite/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          className="flex items-center gap-2 px-3 py-1 rounded-full mb-4"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
        >
          <span className="size-1.5 rounded-full bg-gold"></span>
          <span className="text-xs font-semibold tracking-wider text-navy uppercase">
            Our Work
          </span>
        </motion.div>

        <div className="relative w-full max-w-sm overflow-hidden md:max-w-[600px] h-[200px] md:h-[220px] mb-16 flex justify-center items-center md:overflow-visible group/cta-images select-none">
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
            <div className="cta-photo-glow w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-gold/[0.18] rounded-full blur-3xl"></div>
            <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] bg-navy/10 rounded-full blur-3xl translate-x-16"></div>
          </div>

          <Image height={139} width={251} src={galleryImage1} alt="Technician waxing the hood of a car" className="absolute w-[180px] md:w-[251px] h-[90px] md:h-[139px] object-cover rounded-[10px] border-2 border-white shadow-[0_20px_40px_-15px_rgba(6,14,27,0.35)] transition-all duration-500 ease-out z-0 origin-bottom-right -rotate-12 translate-x-[-100px] md:translate-x-[-115px] translate-y-4 group-hover/cta-images:translate-x-[-155px] group-hover/cta-images:rotate-[-16deg] group-hover/cta-images:translate-y-2" />
          <Image height={139} width={251} src={galleryImage3} alt="Worker washing a car with a sponge" className="absolute w-[180px] md:w-[251px] h-[90px] md:h-[139px] object-cover rounded-[10px] border-2 border-white shadow-[0_20px_40px_-15px_rgba(6,14,27,0.35)] transition-all duration-500 ease-out z-0 origin-bottom-left rotate-12 translate-x-[100px] md:translate-x-[115px] translate-y-4 group-hover/cta-images:translate-x-[155px] group-hover/cta-images:rotate-16 group-hover/cta-images:translate-y-2" />
          <Image height={139} width={251} src={galleryImage2} alt="Freshly detailed car finished result" className="absolute w-[180px] md:w-[251px] h-[90px] md:h-[139px] object-cover rounded-[10px] border-2 border-white shadow-[0_25px_50px_-12px_rgba(6,14,27,0.4)] transition-all duration-500 ease-out z-10 translate-y-[-10px] group-hover/cta-images:translate-y-[-22px] group-hover/cta-images:scale-105" />
        </div>

        <div className="w-24 h-[2px] bg-gradient-to-r from-navy via-gold to-transparent" />

        <motion.h2 className="text-3xl sm:text-4xl md:text-[38px] text-navy font-bold mt-4 leading-tight tracking-tight max-w-[420px] mb-3"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70 }}
        >
          See Our Work in Action
        </motion.h2>

        <motion.p className="text-zinc-500 text-sm md:text-base max-w-[460px] mb-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          Real photos from the shop &mdash; washes, services, and detailing in progress.
        </motion.p>

        <motion.a
          href="#our-work"
          className="bg-navy hover:bg-navy-light text-white text-sm px-6 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 group cursor-pointer shadow-md hover:shadow-lg hover:shadow-navy/20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <span>View Gallery</span>
          <MoveRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}