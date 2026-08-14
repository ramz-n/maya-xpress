"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const Services = () => {

    const { t } = useLanguage();

    const serviceItems = [
        {
            title: t.services.lotteryTitle,
            desc: t.services.lotteryDesc,
            image: "/lotto-circle.png",
        },
        {
            title: t.services.dhlTitle,
            desc: t.services.dhlDesc,
            image: "/dhl-circle.png",
        },
        {
            title: t.services.bpostTitle,
            desc: t.services.bpostDesc,
            image: "/bpost-circle.png",
        },
        {
            title: t.services.moneyTitle,
            desc: t.services.moneyDesc,
            image: "/ria-circle.png",
        },
    ];


    return (
        <section
            id="services"
            className="relative -mt-50 bg-white pt-40 pb-40"
            style={{
                clipPath: "polygon(0 0, 100% 6%, 100% 100%, 0 100%)",
            }}
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-amber">
                        {t.services.badge}
                    </p>

                    <h2 className="mt-4 font-display text-4xl font-bold text-gradient sm:text-5xl">
                        {t.services.title}
                    </h2>

                    <p className="mt-5 text-lg text-ink/70">
                        {t.services.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 pt-10">
                    {serviceItems.map((service) => (
                        <article
                            key={service.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-violet/10
                                bg-white
                                p-8
                                shadow-lg
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-violet/30
                                hover:shadow-2xl
                            "
                        >
                            {/* Top Accent */}
                            <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-[rgb(117,23,143)] via-[rgb(217,2,105)] to-[rgb(250,138,12)]" />

                            {/* Logo */}
                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-24
                                    w-24
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-linear-to-br
                                    from-violet/50
                                    to-magenta/50
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={92}
                                    height={92}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="mt-6 text-center">
                                <h3 className="font-display text-xl font-bold text-violet">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Bottom Decoration */}
                            <div className="mt-6 flex justify-center">
                                <span className="h-1 w-12 rounded-full bg-linear-to-r from-[rgb(117,23,143)] to-[rgb(217,2,105)]" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services