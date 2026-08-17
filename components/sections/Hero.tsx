"use client";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLanguage } from "@/context/LanguageContext";

// Ensure the plugin is registered outside the component
gsap.registerPlugin(SplitText);

const Hero = () => {
    const { t } = useLanguage();
    const router = useRouter();
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 0.5,
            defaults: {
                duration: 1,
                ease: "power3.out",
            },
        });

        // Split both mobile and desktop headings using a class selector inside our scope
        const split1 = new SplitText(".gsap-heading-1", {
            type: "words,chars",
        });

        tl.from(
            split1.chars,
            {
                yPercent: 130,
                opacity: 0,
                duration: 0.9,
                stagger: 0.02,
            },
            "-=0.55"
        )
            .from(
                ".gsap-heading-2",
                {
                    yPercent: 130,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power4.out",
                },
                "-=0.65"
            )
            .from(
                ".sub-heading",
                {
                    y: 24,
                    opacity: 0,
                    duration: 0.7,
                },
                "-=0.2"
            )
            .from(
                ".buttons-cta",
                {
                    x: 24,
                    opacity: 0,
                    duration: 0.7,
                },
                "-=0.5"
            );

        return () => split1.revert();
    }, {
        scope: sectionRef,
        dependencies: [],
    });

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden pt-45 md:pt-52 pb-52"
        >
            {/* Full Background */}
            <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/background1.png')",
                    backgroundPosition: "center -50px",
                }}
            />
            <div className="hidden md:block">
                <div
                    className="absolute inset-0 bg-linear-to-r
                    from-[#ffffffee]
                    to-transparent"
                />
                <div
                    className="absolute inset-y-0 left-0 w-2/3
                    bg-linear-to-r
                    from-[#75178f22]
                    via-[#d9026922]
                    to-transparent"
                />
            </div>


            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-7xl xl:max-w-400 lg:-mt-10 px-6 sm:px-8">

                {/* MOBILE-ONLY VERSION (Visible below 768px) */}
                <div className="block md:hidden
                    bg-gradient-to-b
                    from-[#d90269]/40
                    via-[#75178f]/40
                    to-[#4e1b9c]/40
                    backdrop-blur-md
                    rounded-2xl
                    px-6 py-13
                    max-w-md">
                    <h1 className="font-display leading-[1.05] font-bold">
                        <span className="gsap-heading-1 block text-white text-4xl">
                            {t.hero.title}
                        </span>
                        <span className="gsap-heading-2 block text-yellow-300 text-3xl py-5">
                            {t.hero.subtitle}
                        </span>
                    </h1>

                    <p className="sub-heading mt-7 text-lg text-slate-100 drop-shadow-md max-w-xl">
                        {t.hero.description}
                    </p>

                    <div className="buttons-cta mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => router.push("#services")}
                            className="rounded-full bg-violet px-8 py-4 font-semibold text-white hover:bg-violet/80"
                        >
                            {t.hero.exploreBtn}
                        </button>
                        <button
                            onClick={() => router.push("#contact")}
                            className="rounded-full border-2 border-violet bg-white/70 px-8 py-4 font-semibold text-violet hover:border-amber hover:text-amber"
                        >
                            {t.hero.visitBtn}
                        </button>
                    </div>
                </div>

                {/* TABLET & DESKTOP VERSION (Visible from 768px and up) */}
                <div className="hidden md:block max-w-4xl">
                    <h1 className="font-display leading-[1.05] font-bold">
                        <span className="gsap-heading-1 block text-violet text-6xl">
                            {t.hero.title}
                        </span>
                        <span className="gsap-heading-2 block text-gradient text-5xl py-6">
                            {t.hero.subtitle}
                        </span>
                    </h1>

                    <p className="sub-heading mt-6 text-xl text-ink max-w-2xl md:max-w-xl">
                        {t.hero.description}
                    </p>

                    <div className="buttons-cta mt-10 flex flex-wrap gap-6">
                        <button
                            onClick={() => router.push("#services")}
                            className="rounded-full bg-purple-dark px-10 py-5 font-semibold text-white text-base hover:bg-purple-dark/80 transition-colors"
                        >
                            {t.hero.exploreBtn}
                        </button>
                        <button
                            onClick={() => router.push("#contact")}
                            className="rounded-full border-2 border-purple-dark bg-white/70 px-10 py-5 font-semibold text-violet text-base hover:border-amber hover:text-amber transition-colors"
                        >
                            {t.hero.visitBtn}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
