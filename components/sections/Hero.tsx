"use client";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
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
    const logoRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.5, defaults: { duration: 1, ease: "power3.out" } });
        const split1 = new SplitText(heading1Ref.current, { type: "words,chars" });

        tl.from(logoRef.current, { scale: 0.4, opacity: 0, rotate: -25, duration: 1, ease: "back.out(1.6)" })
            .from(split1.chars, { yPercent: 130, opacity: 0, duration: 0.9, stagger: 0.02 }, "-=0.55")
            .from(heading2Ref.current, { yPercent: 130, opacity: 0, duration: 0.9, ease: "power4.out" }, "-=0.65")
            .from(".sub-heading", { y: 24, opacity: 0, duration: 0.7 }, "-=0.2")
            .from(".buttons-cta", { x: 24, opacity: 0, duration: 0.7 }, "-=0.5")
        return () => split1.revert();
    }, { scope: sectionRef, dependencies: [] });

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
                <div className="text-center md:text-left">
                    <h1 className="font-display leading-[1.05] font-bold text-3xl md:text-6xl">
                        <span ref={heading1Ref} className="block overflow-hidden pb-1 text-violet">
                            {t.hero.title}
                        </span>
                        <span ref={heading2Ref} className="block overflow-hidden pb-1 text-gradient">
                            {t.hero.subtitle}
                        </span>
                    </h1>

                    <p className="sub-heading mt-7 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
                        {t.hero.description}
                    </p>

                    {/* <form
                        onSubmit={() => undefined}
                        className="track mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-3 backdrop-blur-sm sm:flex-row sm:items-center sm:p-2 sm:pl-5"
                    >
                        <div className="flex flex-1 items-center gap-2.5">
                            <Package className="text-amber" />
                            <input
                                value={trackingCode}
                                onChange={(e) => setTrackingCode(e.target.value)}
                                placeholder={"e.g. Z12X3Y4001"}
                                className="w-full bg-transparent py-2 text-sm text-cloud placeholder:text-mist/40 focus:outline-none sm:text-base"
                            />
                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer shrink-0 rounded-xl bg-linear-to-r from-magenta to-violet px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
                        >
                            Submit
                        </button>
                    </form> */}

                    <div className="buttons-cta mt-7 flex items-center md:place-content-start justify-center gap-1 md:gap-4">
                        <button
                            onClick={() => router.push("#services")}
                            className="cursor-pointer rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-cloud transition-colors hover:bg-violet/50"
                        >
                            {t.hero.exploreBtn}
                        </button>
                        <button
                            onClick={() => router.push("#contact")}
                            className="cursor-pointer rounded-full border border-violet px-7 py-3.5 text-sm font-semibold text-violet transition-colors hover:border-amber hover:text-amber"
                        >
                            {t.hero.visitBtn}
                        </button>
                    </div>
                </div>

                <div ref={logoRef} className="hidden lg:block relative mx-auto items-center justify-center">
                    <div className="absolute h-64 w-64 rounded-full bg-magenta/30 blur-[80px] sm:h-80 sm:w-80" />
                    <img
                        src="/mx_logo_transparent.png"
                        alt="Maya X-press wing emblem"
                        className="relative w-56 drop-shadow-[0_20px_60px_rgba(217,2,105,0.45)] sm:w-72 lg:w-80"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero