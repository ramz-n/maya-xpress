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
        <section ref={servicesRef} id="services" className="relative">
            <div className="mx-auto max-w-4xl px-6 pt-28 text-center sm:px-8 sm:pt-36">
                <p className="service-title text-amber">{t.services.badge}</p>
                <h2 className="service-heading mt-4 font-display text-4xl font-bold leading-tight text-gradient sm:text-5xl">
                    {t.services.title}
                </h2>
                <p className="service-sub mt-5 text-base text-ink/75 sm:text-lg">{t.services.description}</p>
            </div>

            <div className="relative overflow-hidden lg:h-[90vh] lg:py-0">
                <div className="flex my-5 h-full items-center">
                    <div className="service-cards py-12 flex w-max flex-col gap-6 px-6 sm:px-8 lg:flex-row lg:gap-8 lg:px-[8vw]"
                    >
                        {serviceItems.map((service, idx) => {

                            const Icon = service.icon;

                            return <article
                                key={service.title}
                                className="cursor-pointer shadow-glow shadow-purple-dark flex w-full flex-col justify-between overflow-hidden rounded-4xl border border-violet/50 bg-linear-to-br from-navy/95 to-navy/75 p-8 transition-colors hover:border-amber lg:w-[calc(100%/3)]"
                            >
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink/60">
                                        <Icon color='#d90269' size={30} className='icon-gradient' />
                                    </div>
                                    <h3 className="mt-6 font-display text-2xl font-bold text-cloud">{service.title}</h3>
                                    <p className="text-center mt-3 text-sm leading-relaxed text-mist/70 sm:text-base">{service.desc}</p>
                                </div>
                            </article>
                        })}
                    </div>
                </div>

            <div className="mx-auto overflow-hidden w-full px-6">
                <div className="services-deliveries grid my-10 md:mt-0 md:pb-10 grid-cols-4 gap-10">
                    <img src={"/bpost1.png"} alt="bpost" className="h-full w-full object-contain rounded-2xl shadow-2xl shadow-violet shadow" />
                    <img src={"/dhl.png"} alt="dhl" className="h-full w-full object-cover rounded-2xl shadow-2xl shadow-violet shadow" />
                    <img src={"/rialogo.png"} alt="bpost" className="h-full w-full object-cover rounded-2xl shadow-2xl shadow-violet shadow" />
                    <img src={"/lottery.png"} alt="bpost" className="h-full w-full object-cover rounded-2xl shadow-2xl shadow-violet shadow" />
                </div>
            </div>
        </section>
    )
}

export default Services