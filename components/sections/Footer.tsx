"use client";

import { navLinks } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {

    const router = useRouter();

    const handleNav = (linkId: string) => {
        router.push(`/${linkId}`);
    };

    return (
        <footer className="relative border-t border-violet/50 bg-navy/50 px-6 pb-8 pt-16 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:justify-between">
                <div className="max-w-sm">
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Maya X-press home">
                        <span className="flex flex-col items-center font-display text-lg sm:text-xl font-bold tracking-tight text-cloud">
                            <img
                                src="/mx_logo_transparent.png"
                                alt="Maya X-press logo"
                                className="h-14 w-14 drop-shadow-[0_0_18px_rgba(217,2,105,0.45)]"
                            />
                            <p>MAYA <span className="text-gradient">X-PRESS</span></p>
                        </span>
                    </Link>
                    <p className="mt-4 text-sm leading-relaxed text-mist/60">
                        Your trusted neighborhood store in Antwerp for lottery tickets, post services like BPOST & DHL, RIA money transfers, gift cards, Hallmark cards, snacks & drinks and many more.
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-mist/40">Quick Links</p>
                    <ul className="mt-3 space-y-2 text-sm text-mist/70">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button onClick={() => handleNav(`${link.id}`)} className="cursor-pointer hover:text-amber transition-colors">
                                    {link.key}
                                </button>
                            </li>
                        ))}
                        <li>
                            <Link href="/track" className="text-amber hover:underline">
                                Track
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-mist/40">Location</p>
                    <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-mist/70">Frank Craeybeckxlaan 83, 2100 Antwerpen, BELGIUM</p>
                </div>
            </div>

            <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist/40 sm:flex-row">
                <p>© {new Date().getFullYear()} Maya X-press. </p>
                <p className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    Antwerp, Belgium
                </p>
            </div>
        </footer>
    )
}

export default Footer