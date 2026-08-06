"use client";
import { Package, Package2 } from "lucide-react";
import { useState } from "react";

const Hero = () => {

    const [trackingCode, setTrackingCode] = useState("");

    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24"
        >
            <div className="absolute inset-0" data-speed="0.85">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-navy-light)_0%,_var(--color-ink)_55%)]" />
                <div className="hero-orb-1 absolute -left-24 top-16 h-72 w-72 rounded-full bg-magenta/25 blur-[100px]" />
                <div className="hero-orb-2 absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet/25 blur-[120px]" />
                <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-amber/15 blur-[100px]" />
            </div>

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
                <div>
                    <h1 className="font-display text-[2.6rem] leading-[1.05] font-bold text-3xl md:text-6xl">
                        <span className="block overflow-hidden pb-1 text-cloud">
                            Speed you can trust,
                        </span>
                        <span className="block overflow-hidden pb-1 text-gradient">
                            Sevice you deserve.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-relaxed text-mist/75 sm:text-lg">
                        Your trusted local store in Antwerp for lottery tickets, post services like BPOST & DHL, RIA money transfers, gift cards, Hallmark cards, snacks & drinks and many more.
                    </p>

                    <form
                        onSubmit={() => undefined}
                        className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-3 backdrop-blur-sm sm:flex-row sm:items-center sm:p-2 sm:pl-5"
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
                            className="shrink-0 rounded-xl bg-gradient-to-r from-magenta to-amber px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => undefined}
                            className="cursor-pointer rounded-full bg-navy-light px-7 py-3.5 text-sm font-semibold text-cloud transition-colors hover:text-amber"
                        >
                            Explore Our Services
                        </button>
                        <button
                            onClick={() => undefined}
                            className="cursor-pointer rounded-full border border-violet px-7 py-3.5 text-sm font-semibold text-mist transition-colors hover:border-amber/60 hover:text-amber"
                        >
                            Visit Our Store
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