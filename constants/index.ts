import { AwardIcon, HandHeartIcon, LucideIcon, MapPinHouseIcon } from "lucide-react";

export const navLinks: { id: string; key: string }[] = [
    { id: "#home", key: "Home" },
    { id: "#about", key: "About" },
    { id: "#services", key: "Services" },
    { id: "#reviews", key: "Reviews" },
    { id: "#contact", key: "Contact" },
];

export const aboutFeatures: { title: string; desc: string, icon: LucideIcon }[] = [
    { title: "Local Expertise", desc: "Years of experience as a neighborhood store in Antwerp", icon: AwardIcon },
    { title: "Friendly Service", desc: "Personal attention for every customer", icon: HandHeartIcon },
    { title: "Central Location", desc: "Easily accessible in the heart of Antwerp", icon: MapPinHouseIcon },
];