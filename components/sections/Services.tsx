import {
    TicketIcon,
    PackageCheckIcon,
    BanknoteArrowUpIcon,
} from "lucide-react";

import {
    serviceIcons,
    featureIcons,
} from "@/constants";

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {

    const { t } = useLanguage();

    const serviceItems = [
        {
            title: t.services.lotteryTitle,
            desc: t.services.lotteryDesc,
            icon: serviceIcons[0],
        },
        {
            title: t.services.postTitle,
            desc: t.services.postDesc,
            icon: serviceIcons[1],
        },
        {
            title: t.services.moneyTitle,
            desc: t.services.moneyDesc,
            icon: serviceIcons[2],
        },
    ];

    const featureItems = [
        {
            title: t.features.fast,
            icon: featureIcons[0],
        },
        {
            title: t.features.secure,
            icon: featureIcons[1],
        },
        {
            title: t.features.satisfaction,
            icon: featureIcons[2],
        },
    ];
    const servicesRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".service-title, .service-heading, .service-sub", {
            scrollTrigger: { trigger: servicesRef.current, start: "top 70%" },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
        });

        gsap.utils.toArray<HTMLElement>(".service-cards").forEach((card, i) => {
            gsap.from(card, {
                x: i % 2 === 0 ? -80 : 80,
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });
        });

        const deliveries = document.querySelector(".services-deliveries");
        if (deliveries) {
            gsap.from(deliveries, { x: 500, duration: 10, ease: "none", repeat: -1, yoyo: true });
            const w = deliveries.scrollWidth / 2;
            gsap.to(deliveries, { x: -w, duration: 10, ease: "none", repeat: -1, yoyo: true });
        }

        ScrollTrigger.refresh();

    }, { scope: servicesRef });

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
            </div>

            <div className="mx-auto overflow-hidden w-full px-6">
                <div className="services-deliveries grid my-10 md:mt-0 md:pb-10 md:grid-cols-4 gap-10">
                    <img src={"/bpost1.png"} alt="bpost" className="h-full w-full object-contain rounded-2xl shadow-2xl shadow-violet shadow" />
                    <img src={"/dhl.png"} alt="dhl" className="h-full w-full object-cover rounded-2xl shadow-2xl shadow-violet shadow" />
                    <img src={"/rialogo.png"} alt="bpost" className="h-full w-full object-cover rounded-2xl shadow-2xl shadow-violet shadow" />
                    <img src={"/lottery.png"} alt="bpost" className="h-full w-full object-cover rounded-2xl shadow-2xl shadow-violet shadow" />
                </div>
            </div>

            <div className="mx-auto bg-purple-da grid grid-cols-1 gap-6 px-6 pb-28 pt-10 sm:grid-cols-3 sm:px-8 sm:pb-36">
                <p className="col-span-full mb-2 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy/75">
                    {t.features.title}
                </p>
                {featureItems.map((l, idx) => {

                    const Icon = l.icon

                    return <div key={idx} className="flex shadow-glow shadow-purple-dark items-center gap-4 rounded-2xl border border-navy px-6 py-5">
                        <Icon className='icon-gradient' color="#d90269" size={30} />
                        <span className="font-display text-base font-semibold text-navy">
                            {
                                idx === 0
                                    ? t.features.fast
                                    : idx === 1
                                        ? t.features.secure
                                        : t.features.satisfaction
                            }
                        </span>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Services