"use client";

import { Clock, MapPinIcon, MoveUpRightIcon, Smartphone, } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="relative bg-ink py-28 sm:py-36">
            <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
                <p className="text-amber">Contact Us</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-cloud sm:text-5xl">Visit Maya X-press in Antwerp</h2>
                <p className="mt-5 text-base text-mist/70 sm:text-lg"> Contact us for more information.</p>
            </div>

            <div className="relative mx-auto mt-16 grid items-center max-w-6xl grid-cols-1 gap-8 px-6 sm:px-8 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <div className="rounded-3xl border border-violet bg-violet/20 p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-magenta to-violet">
                                <MapPinIcon className="h-5 w-5" color="#ffffff" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-mist/50">Address</p>
                                <p className="mt-1 font-display text-lg font-semibold text-cloud">Frank Craeybeckxlaan 83, 2100 Antwerpen, Belgium
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/kmDqA8nvyfH75tS36"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:underline"
                                >
                                    Frank Craeybeckxlaan 83, 2100 Antwerpen, Belgium
                                    <MoveUpRightIcon className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-7 flex items-start gap-4 border-t border-violet pt-7">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-purple-dark">
                                <Clock className="h-5 w-5" color="#ffffff" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-semibold uppercase tracking-wider text-mist/50">Hours</p>

                                <p>Monday - Friday: <strong>9:00AM - 7:00PM</strong></p>
                                <p>Saturday: <strong>9:00AM - 5:00PM</strong></p>
                                <p>Sunday: <strong>Closed</strong></p>
                            </div>
                        </div>

                        <div className="mt-7 flex items-start gap-4 border-t border-violet pt-7">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-magenta">
                                <Smartphone className="h-5 w-5" color="#ffffff" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-semibold uppercase tracking-wider text-mist/50">Phone</p>

                                <p>+32 469754412</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex-1 overflow-hidden rounded-3xl border border-violet">
                    <iframe title="Maya Xpress Store" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.6823424090604!2d4.458337564391002!3d51.224060929862425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f7830a54f197%3A0x62b151a89a172eaa!2sFrank%20Craeybeckxlaan%2083%2C%202100%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2snp!4v1786075570762!5m2!1sen!2snp" width="600" height="450" style={{ border: "0" }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact