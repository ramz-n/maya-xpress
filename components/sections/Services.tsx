import { services, whyChooseUs } from '@/constants'
import React from 'react'

const Services = () => {
    return (
        <section id="services" className="relative bg-ink">
            <div className="mx-auto max-w-4xl px-6 pt-28 text-center sm:px-8 sm:pt-36">
                <p className="text-amber">What we offer</p>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-cloud sm:text-5xl">
                    Everything you need in one location
                </h2>
                <p className="mt-5 text-base text-mist/70 sm:text-lg">Maya Express is an authorised service point for the partners you already know and trust.</p>
            </div>

            <div className="relative mt-16 overflow-hidden py-10 lg:h-[90vh] lg:py-0">
                <div className="flex h-full items-center">
                    <div
                        className="flex w-max flex-col gap-6 px-6 sm:px-8 lg:flex-row lg:gap-8 lg:px-[8vw]"
                    >
                        {services.map((service, idx) => {

                            const Icon = service.icon;

                            return <article
                                key={service.title}
                                className="cursor-pointer flex w-full flex-col justify-between overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-white/15 to-white/5 p-8 transition-colors hover:border-amber/40 lg:w-[calc(100%/3)]"
                            >
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <span className="font-display text-sm font-semibold text-mist/40">{service.title}</span>
                                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink/60">
                                        <Icon color='#d90269' size={30} />
                                    </div>
                                    <h3 className="mt-6 font-display text-2xl font-bold text-cloud">{service.title}</h3>
                                    <p className="text-center mt-3 text-sm leading-relaxed text-mist/70 sm:text-base">{service.desc}</p>
                                </div>
                            </article>
                        })}
                    </div>
                </div>
            </div>

            <div className="strip-row mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-28 pt-10 sm:grid-cols-3 sm:px-8 sm:pb-36">
                <p className="col-span-full mb-2 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-mist/60">
                    Why people choose our store
                </p>
                {whyChooseUs.map((l, idx) => {

                    const Icon = l.icon

                    return <div key={idx} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
                        <Icon className='' color="#d90269" size={30} />
                        <span className="font-display text-base font-semibold text-cloud">{l.title}</span>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Services