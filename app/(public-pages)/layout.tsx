import React from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import LenisScroll from '@/components/lenis-scroll';

export const metadata = {
    title: 'Auto Care Center - Your Ride, Our Pride',
    description: 'Professional car wash and vehicle servicing in Negombo, Sri Lanka.',
    appleWebApp: {
        title: 'Auto Care Center',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LenisScroll />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
