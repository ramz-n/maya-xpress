import { AwardIcon, BanknoteArrowUpIcon, HandHeartIcon, LucideIcon, MapPinHouseIcon, PackageCheckIcon, ShieldCheckIcon, SmileIcon, TicketIcon, TruckElectricIcon } from "lucide-react";

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

export const services: { title: string; desc: string, icon: LucideIcon }[] = [
    { title: "Lottery Tickets", desc: "Sales of national and local lottery tickets in Antwerp", icon: TicketIcon },
    { title: "Post Services", desc: "Official BPOST and DHL service point for letters and parcels", icon: PackageCheckIcon },
    { title: "Money Transfers", desc: "Fast and secure international RIA money transfers in Antwerp", icon: BanknoteArrowUpIcon },
]

export const whyChooseUs: { title: string; icon: LucideIcon }[] = [
    { title: "Fast Delivery", icon: TruckElectricIcon },
    { title: "Secure Service", icon: ShieldCheckIcon },
    { title: "Customer Satisfaction", icon: SmileIcon },
]