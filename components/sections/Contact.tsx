"use client";

import { Clock, MapPinIcon, MoveUpRightIcon, Smartphone, } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section
            id="contact"
            className="relative bg-white -mt-20 py-30"
            style={{
                clipPath: "polygon(0 0, 100% 6%, 100% 100%, 0 100%)",
            }}
        >
            <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
                <p className="text-amber">{t.contact.badge}</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-gradient sm:text-5xl">{t.contact.title}</h2>
                <p className="mt-5 text-base text-navy/75 sm:text-lg">{t.contact.subtitle}</p>
            </div>

            <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:items-stretch">
                <div className="h-full">
                    <div className="rounded-3xl border border-violet bg-navy p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-magenta">
                                <MapPinIcon className="h-5 w-5" color="#ffffff" />
                            </div>
                            <div className=" space-y-3">
                                <p className="text-xs font-semibold uppercase tracking-wider text-mist/50">{t.contact.address}</p>
                                <p className="mt-1 font-display text-lg font-semibold text-cloud">Frank Craeybeckxlaan 83, 2100 Antwerpen, Belgium
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/8zbiksGdZL7YLd939"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:underline"
                                >
                                    Frank Craeybeckxlaan 83, 2100 Antwerpen, Belgium
                                    <MoveUpRightIcon className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 flex items-start gap-4 border-t border-cloud/20 pt-8">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-linear-to-br from-violet to-purple-dark shadow-lg">
                                <Clock className="h-5 w-5 text-white" />
                            </div>

                            <div className="flex-1 space-y-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mist/50">
                                    {t.contact.hours}
                                </p>

                                <div className="space-y-2 font-display text-mist/80">
                                    <div className="flex justify-between gap-4">
                                        <span>{t.contact.weekday}</span>
                                        <span className="font-semibold text-cloud">
                                            9:00 AM - 7:00 PM
                                        </span>
                                    </div>

                                    <div className="flex justify-between gap-4">
                                        <span>{t.contact.saturday}</span>
                                        <span className="font-semibold text-cloud">
                                            9:00 AM - 5:00 PM
                                        </span>
                                    </div>

                                    <div className="flex justify-between gap-4">
                                        <span>{t.contact.sunday}</span>
                                        <span className="font-semibold text-amber">
                                            {t.contact.closed}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-start gap-4 border-t border-cloud/20 pt-8">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-linear-to-br from-violet to-magenta shadow-lg">
                                <Smartphone className="h-5 w-5 text-white" />
                            </div>

                            <div className="flex-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mist/50">
                                    {t.contact.phone}
                                </p>

                                <a
                                    href="tel:+32469754412"
                                    className="mt-2 inline-block font-display text-lg font-semibold text-cloud transition-colors hover:text-amber"
                                >
                                    +32 469 75 44 12
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-mist shadow-glow h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.7283163697507!2d4.456098775494056!3d51.2240803313627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f78803e92f89%3A0x17e7b8cc265daab0!2sMaya%20X-press!5e0!3m2!1sen!2snp!4v1786357575003!5m2!1sen!2snp"
                        className="w-full h-full min-h-full"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact