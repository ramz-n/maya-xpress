"use client";
import { useState } from "react";

const Hero = () => {

    const [trackingCode, setTrackingCode] = useState("");

    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24"
        >
            <div className="pointer-events-none absolute inset-0" data-speed="0.85">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-navy-light)_0%,_var(--color-ink)_55%)]" />
                <div className="hero-orb-1 absolute -left-24 top-16 h-72 w-72 rounded-full bg-magenta/25 blur-[100px]" />
                <div className="hero-orb-2 absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet/25 blur-[120px]" />
                <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-amber/15 blur-[100px]" />
            </div>

            <svg
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/3 opacity-70"
                viewBox="0 0 800 800"
                preserveAspectRatio="none"
                fill="none"
            >
                <defs>
                    <linearGradient id="streakGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#fa8a0c" stopOpacity="0" />
                        <stop offset="55%" stopColor="#d90269" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#75178f" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {[120, 180, 240, 300, 360].map((y, i) => (
                    <path
                        key={y}
                        className="hero-streak"
                        d={`M -100 ${y} L ${420 - i * 20} ${y - 60}`}
                        stroke="url(#streakGrad)"
                        strokeWidth={i === 2 ? 3 : 1.5}
                        strokeLinecap="round"
                    />
                ))}
            </svg>

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
                <div>
                    <h1 className="font-display text-[2.6rem] leading-[1.05] font-bold text-3xl md:text-6xl">
                        <span className="block overflow-hidden pb-1 text-cloud">
                            Speed you can trust,
                        </span>
                        <span className="block overflow-hidden pb-1 text-gradient">
                            service you deserve.
                        </span>
                    </h1>

                    <p className="hero-sub mt-7 max-w-xl text-base leading-relaxed text-mist/75 sm:text-lg">
                        Parcels, payments, and everyday essentials under one roof. Maya X-press is your local counter for bpost, DHL, National Lottery, money transfers, and more — delivering happiness, every time.
                    </p>

                    <form
                        onSubmit={() => undefined}
                        className="hero-track-card mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-3 backdrop-blur-sm sm:flex-row sm:items-center sm:p-2 sm:pl-5"
                    >
                        <div className="flex flex-1 items-center gap-2.5">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-amber">
                                <path d="M4 8l8-4 8 4-8 4-8-4Zm0 0v8l8 4m0-8v8m8-12v8l-8 4" />
                            </svg>
                            <input
                                value={trackingCode}
                                onChange={(e) => setTrackingCode(e.target.value)}
                                placeholder={"e.g. MXP-7F3K9-2QRT"}
                                className="w-full bg-transparent py-2 text-sm text-cloud placeholder:text-mist/40 focus:outline-none sm:text-base"
                            />
                        </div>
                        <button
                            type="submit"
                            className="shrink-0 rounded-xl bg-gradient-to-r from-magenta to-amber px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="hero-cta mt-7 flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => undefined}
                            className="cursor-pointer rounded-full bg-navy-light px-7 py-3.5 text-sm font-semibold text-cloud transition-colors hover:bg-white/15"
                        >
                            Explore Our Services
                        </button>
                        <button
                            onClick={() => undefined}
                            className="cursor-pointer rounded-full border border-violet px-7 py-3.5 text-sm font-semibold text-mist transition-colors hover:border-amber/60 hover:text-amber"
                        >
                            Find Our Shop
                        </button>
                    </div>
                </div>

                <div className="hidden lg:block relative mx-auto items-center justify-center">
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