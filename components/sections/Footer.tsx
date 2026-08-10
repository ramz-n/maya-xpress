"use client";

import { navLinks } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {

    const { t } = useLanguage();
    const router = useRouter();

    const navMap = {
        "#home": t.nav.home,
        "#about": t.nav.about,
        "#services": t.nav.services,
        "#reviews": t.nav.reviews,
        "#contact": t.nav.contact,
    };

    const handleNav = (linkId: string) => {
        router.push(`/${linkId}`);
    };

    return (
        <footer className="relative border-t border-violet/20 bg-navy px-6 pb-8 pt-16 sm:px-8">
            <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-magenta/50 to-transparent" />

            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-magenta/10 blur-3xl" />
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
                <div className="max-w-sm">
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Maya X-press home">
                        <span className="flex flex-col items-center font-display text-lg sm:text-xl font-bold tracking-tight text-cloud">
                            <img
                                src="/mx_logo_transparent.png"
                                alt="Maya X-press logo"
                                className="h-14 w-15 drop-shadow-[0_0_18px_rgba(217,2,105,0.45)]"
                            />
                            <p className="mt-1 tracking-wide">
                                MAYA{" "}
                                <span className="text-gradient">
                                    <span className="text-2xl">X</span>-PRESS
                                </span>
                            </p>
                        </span>
                    </Link>
                    <p className="mt-5 max-w-md text-sm leading-7 text-mist/75">
                        {t.footer.description}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cloud/80">{t.footer.quickLinks}</p>
                    <ul className="mt-4 space-y-3 text-sm text-mist/75">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button onClick={() => handleNav(`${link.id}`)} className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-amber">
                                    {navMap[link.id as keyof typeof navMap]}
                                </button>
                            </li>
                        ))}
                        {/* <li>
                            <Link href="/track" className="text-amber hover:underline">
                                Track
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cloud/80">{t.footer.location}</p>
                    <p className="mt-4 max-w-xs text-sm leading-7 text-mist/75">Frank Craeybeckxlaan 83, 2100 Antwerpen, BELGIUM</p>
                    <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cloud/80">
                            {t.footer.services}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {[
                                "/lotto-circle.png",
                                "/dhl-circle.png",
                                "/bpost-circle.png",
                                "/ria-circle.png",
                            ].map((logo) => (
                                <div
                                    key={logo}
                                    className="
                                        flex h-12 w-12 items-center justify-center
                                        rounded-full
                                        bg-white
                                        shadow-md
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        hover:scale-105
                                    "
                                >
                                    <img
                                        src={logo}
                                        alt="Service Logo"
                                        className="h-11 w-11 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-mist/50 sm:flex-row">
                <p>{t.footer.copyright}</p>

                <p className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    {t.footer.city}
                </p>

                <p>
                    {t.footer.designedBy}{" "}
                    <a
                        href="https://www.qrcoders.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Website Design and Development by QRCoders"
                        className="font-semibold text-amber hover:text-magenta transition-colors"
                    >
                        QRCoders
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer