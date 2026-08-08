"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MenuIcon, PackageIcon, X } from "lucide-react";
import { navLinks } from "@/constants";

const langOptions = ["English", "Deutsch", "French"]

export function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [lang, setLang] = useState("English");

    const router = useRouter();

    const handleNav = (linkId: string) => {
        setMenuOpen(false);
        router.push(`/${linkId}`);
    };

    const handleLangSelect = (selectedLng: string) => {
        setLang(selectedLng);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 bg-cloud/90 backdrop-blur-sm`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
                <Link href="/" className="flex items-center gap-3 group" aria-label="Maya X-press home">
                    <img
                        src="/logo.png"
                        alt="Maya X-press logo"
                        className="h-12 w-20 drop-shadow-[0_0_18px_rgba(217,2,105,0.45)]"
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNav(link.id)}
                            className="cursor-pointer px-3.5 py-2 text-sm font-medium text-ink hover:text-violet transition-colors relative group"
                        >
                            {link.key}
                            <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px scale-x-0 bg-linear-to-r from-amber via-magenta to-violet transition-transform duration-300 group-hover:scale-x-100" />
                        </button>
                    ))}
                    {/* <Link
                        href="/track"
                        className="ml-1 flex items-center gap-1.5 rounded-full border border-violet px-4 py-2 text-sm font-semibold text-violet transition-colors hover:border-magenta/60 hover:text-magenta"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 8l8-4 8 4-8 4-8-4Zm0 0v8l8 4m0-8v8m8-12v8l-8 4" />
                        </svg>
                        Track
                    </Link> */}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative hidden lg:block">
                        <button
                            onClick={() => setLangOpen((v) => !v)}
                            onBlur={() => setTimeout(() => setLangOpen(false), 120)}
                            className="flex items-center gap-1.5 rounded-full border border-navy bg-ink px-3.5 py-1.5 text-xs font-semibold tracking-wide text-mist hover:border-magenta/60 transition-colors"
                            aria-haspopup="listbox"
                            aria-expanded={langOpen}
                        >
                            {lang}
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${langOpen ? "rotate-180" : ""}`}>
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {langOpen && (
                            <ul
                                role="listbox"
                                className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-navy/95 backdrop-blur-md shadow-glow"
                            >
                                {langOptions.map((lng) => (
                                    <li key={lng}>
                                        <button
                                            onClick={() => handleLangSelect(lng)}
                                            className={`flex w-full items-center justify-between px-4 py-2.5 text-sm hover:bg-white/10 transition-colors ${lang === lng ? "text-amber" : "text-mist"
                                                }`}
                                        >
                                            {lng}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-navy bg-navy"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {menuOpen &&
                <div
                    className="h-screen z-60 bg-ink text-white flex flex-col gap-1 items-center justify-center"
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            data-mobile-link
                            onClick={() => handleNav(link.id)}
                            className="py-3 text-left font-display text-lg font-semibold text-mist border-b border-white/5 cursor-pointer"
                        >
                            {link.key}
                        </button>
                    ))}
                    {/*  <Link
                        onClick={() => setMenuOpen(false)}
                        data-mobile-link
                        href="/track"
                        className="ml-1 flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-amber transition-colors hover:border-amber/60"
                    >
                        <PackageIcon size={20} />
                        Track
                    </Link> */}
                    <div data-mobile-link className="flex gap-2 pt-4">
                        {langOptions.map((lng) => (
                            <button
                                key={lng}
                                onClick={() => setLang(lng)}
                                className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${lang === lng ? "border-amber text-amber" : "border-white/15 text-mist/70"
                                    }`}
                            >
                                {lng}
                            </button>
                        ))}
                    </div>
                </div>}
        </header>
    )
}