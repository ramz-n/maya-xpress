"use client";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {

    const { t } = useLanguage();

    /*     const [trackingCode, setTrackingCode] = useState(""); */
    const router = useRouter();

    const sectionRef = useRef<HTMLElement>(null);
    const heading1Ref = useRef<HTMLSpanElement>(null);
    const heading2Ref = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 0.5,
            defaults: {
                duration: 1,
                ease: "power3.out",
            },
        });

        const split1 = new SplitText(heading1Ref.current, {
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
                heading2Ref.current,
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
    gsap.registerPlugin(SplitText);
    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden pt-40 pb-60"
        >
            {/* Full Background */}
            <div className="absolute inset-0 bg-cover bg-center md:bg-right "
                style={{
                    backgroundImage: "url('/background1.png')",
                }}
            />


            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
                <div className="md:bg-transparent
                                bg-gradient-to-b
                                from-[#d90269]/40
                                via-[#75178f]/40
                                to-[#4e1b9c]/40
                                backdrop-blur-xs
                                rounded-2xl
                                px-6 py-12
                                max-w-md">
                    <h1 className="font-display leading-[1.05] font-bold">
                        <span
                            ref={heading1Ref}
                            className="block text-white text-4xl md:text-6xl"
                        >
                            {t.hero.title}
                        </span>

                        <span
                            ref={heading2Ref}
                            className="block text-yellow-300 text-3xl md:text-5xl py-5"
                        >
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
            </div>
        </section>
    )
}

export default Hero