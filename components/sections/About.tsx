import {
    AwardIcon,
    HandHeartIcon,
    MapPinHouseIcon,
    QuoteIcon
} from "lucide-react";

import { aboutIcons } from "@/constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {

    const { t } = useLanguage();
    const aboutRef = useRef<HTMLElement>(null);

    const features = [
        {
            title: t.about.expertiseTitle,
            desc: t.about.expertiseDesc,
            icon: aboutIcons[0],
        },
        {
            title: t.about.friendlyTitle,
            desc: t.about.friendlyDesc,
            icon: aboutIcons[1],
        },
        {
            title: t.about.locationTitle,
            desc: t.about.locationDesc,
            icon: aboutIcons[2],
        },
    ];

    useGSAP(() => {
        gsap.from(".about-title, .about-subtitle, .about-quote, .about-img", {
            scrollTrigger: { trigger: aboutRef.current, start: "top 70%" },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
        })
        gsap.from(".about-features", {
            scrollTrigger: { trigger: ".about-features", start: "top 78%" },
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
        });

    }, { scope: aboutRef, dependencies: [] });

    return (
        <section
            ref={aboutRef}
            id="about"
            className="relative bg-purple-dark -mt-40 pt-30 pb-70"
            style={{
                clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)",
            }}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-purple-dark/30 blur-[130px]" />
            </div>

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div className="lg:sticky lg:top-32 lg:self-start">
                    <p className="about-title text-amber">{t.about.badge}</p>
                    <h2 className="about-subtitle mt-4 font-display text-4xl font-bold leading-[1.1] text-cloud sm:text-5xl">
                        {t.about.title}
                    </h2>

                    <div className="about-quote mt-10 rounded-3xl border border-violet/20 bg-linear-to-br from-navy-light p-7 shadow-glow">
                        <QuoteIcon className="rotate-180 icon-gradient" />
                        <p className="font-display text-lg leading-snug text-cloud sm:text-xl">
                            {t.about.description}
                        </p>
                    </div>
                </div>

                <div>
                    <div className="about-img h-100">
                        <img src={"/shop-picture.png"} alt="maya express store" className="h-full w-full object-cover rounded-2xl shadow-2xl shadow-ink shadow" />
                    </div>

                    <div className="about-features mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon

                            return <div
                                key={idx}
                                className="flex flex-col gap-2 items-center rounded-2xl border border-navy bg-navy p-6 transition-colors hover:border-amber"
                            >
                                <Icon color="#d90269" size={40} className="icon-gradient" />
                                <h3 className="font-display text-base font-semibold text-cloud">{feature.title}</h3>
                                <p className="text-center mt-2 text-sm leading-relaxed text-mist/65">{feature.desc}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About