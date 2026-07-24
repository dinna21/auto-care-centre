import React from "react";
import { Droplets, Sparkles, Wrench, Thermometer, Car } from "lucide-react";

export interface WhyChooseUsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
    {
        icon: <Droplets className="size-5 text-gold" />,
        title: "Professional Body Wash & Polish",
        description: "Thorough hand-wash, foam treatment, and machine polish to remove dirt, grime, and minor scratches. Starting from Rs. 800 — approximately 45 minutes.",
        image: "/assets/galleryImage3.webp"
    },
    {
        icon: <Sparkles className="size-5 text-gold" />,
        title: "Complete Interior Cleaning",
        description: "Complete interior vacuum, dashboard polish, seat shampoo, and odor removal. Includes door panels and floor mats. Approximately 60 minutes.",
        image: "/assets/galleryImage5.webp"
    },
    {
        icon: <Wrench className="size-5 text-gold" />,
        title: "Full Vehicle Servicing",
        description: "Full engine oil change, filter replacements, brake inspection, and multi-point safety check. Using quality parts and fluids. Book in advance.",
        image: "/assets/galleryImage6.webp"
    },
    {
        icon: <Thermometer className="size-5 text-gold" />,
        title: "Coolant & Fluid Top-Ups",
        description: "Radiator coolant, brake fluid, power steering fluid, and windshield washer check and refill. Quick service — drive in anytime, approximately 15 minutes.",
        image: "/assets/galleryImage7.webp"
    },
    {
        icon: <Car className="size-5 text-gold" />,
        title: "Car Care & Detailing",
        description: "Premium wax, paint correction, headlight restoration, and ceramic coating options. Preserves your car's value and shine. Packages from Rs. 3,500.",
        image: "/assets/galleryImage8.webp"
    }
];

export interface TestimonialItem {
    name: string;
    location: string;
    avatar: string;
    text: string;
}

// data/data.ts

export const testimonialsCol1 = [
    {
        name: "Shalini Nimashika",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "My car was cleaned perfectly inside and out. Great attention to detail and very professional work. Great care taken with the vehicle. Will definitely visit again.",
    },
    {
        name: "Shehan Ruwinda",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "Got a full car service done along with car interior cleaning, and I'm very happy with the work. The service was professional and done on time as expected. The interior looks fresh and well finished.",
    },
    {
        name: "Roshane Perera",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "Really impressed with the service quality. The team did a great job and handled everything carefully. My car feels great after the service, and the pricing was very reasonable.",
    },
    {
        name: "Shalki Sasanka",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "One of the best car wash centres I have visited. The quality of work is excellent.",
    },
];

export const testimonialsCol2 = [
    {
        name: "Ashika De Silva",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "Excellent car service experience! The body wash was perfect and the car looked spotless. Very friendly and professional staff with great attention to detail. Highly recommended!",
    },
    {
        name: "Roshen Senadeera",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "Excellent service and very professional staff. I did my full vehicle service with them, and the work was done accurately and on time. Highly recommended.",
    },
    {
        name: "Rajitha Peiris",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "Excellent car wash and servicing. The work was done perfectly, and the owner is friendly, professional, and well-informed about car service. Really happy with the service.",
    },
    {
        name: "Hizlan Mohomad",
        location: "Negombo",
        avatar: "/assets/avatar-placeholder.png",
        text: "I had a really good experience at this car wash center. Prices are reasonable for the quality of service. Highly recommended.",
    },
];
