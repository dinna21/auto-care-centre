"use client";

import React, { useState, useEffect } from "react";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav style={{ isolation: "isolate" }} className={`fixed z-50 flex items-center justify-between left-1/2 -translate-x-1/2 transition-all duration-500 p-4 ${scrolled ? "lg:w-5xl w-[calc(100vw-14px)] bg-white/60 backdrop-blur-2xl rounded-full mt-4 pl-6 shadow" : "md:px-16 lg:px-24 xl:px-32 w-full"}`}>
                <a href="#home" className={`font-urbanist font-bold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-navy" : "text-white"}`}>
                    Auto Care Center
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6 md:gap-10 text-sm">
                    <a href="#home" className={`transition-colors duration-500 ${scrolled ? "text-navy hover:text-navy/70" : "text-white hover:text-white/90"}`}>Home</a>
                    <a href="#our-work" className={`transition-colors duration-500 ${scrolled ? "text-navy hover:text-navy/70" : "text-white hover:text-white/90"}`}>Our Work</a>
                    <a href="#services" className={`transition-colors duration-500 ${scrolled ? "text-navy hover:text-navy/70" : "text-white hover:text-white/90"}`}>Services</a>
                    <a href="#reviews" className={`transition-colors duration-500 ${scrolled ? "text-navy hover:text-navy/70" : "text-white hover:text-white/90"}`}>Reviews</a>
                    <a href="#contact" className={`transition-colors duration-500 ${scrolled ? "text-navy hover:text-navy/70" : "text-white hover:text-white/90"}`}>Contact</a>
                </div>

                <a href="tel:0777777155" className={`hidden md:block px-6 py-2.5 rounded-[6px] text-sm font-medium cursor-pointer transition-all duration-500 ${scrolled ? "bg-navy text-white hover:bg-navy-light rounded-full" : "bg-gold text-navy hover:bg-gold/90"}`}>
                    Call Now
                </a>

                <button onClick={() => setMobileOpen(true)} className={`md:hidden p-2 rounded-md aspect-square font-medium transition cursor-pointer ${scrolled ? "text-navy" : "text-white"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} md:hidden max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-navy/95 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-6 md:gap-10 text-sm`}>
                <a href="#home" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-gold transition-colors duration-500">Home</a>
                <a href="#our-work" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-gold transition-colors duration-500">Our Work</a>
                <a href="#services" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-gold transition-colors duration-500">Services</a>
                <a href="#reviews" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-gold transition-colors duration-500">Reviews</a>
                <a href="#contact" onClick={() => { setMobileOpen(false) }} className="text-white hover:text-gold transition-colors duration-500">Contact</a>

                <button onClick={() => setMobileOpen(false)} className="md:hidden bg-white text-navy p-2 rounded-md aspect-square font-medium transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </>
    );
}
