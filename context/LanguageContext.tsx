"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

import {
    translations,
    Language,
} from "@/translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
    mounted: boolean;
};

const LanguageContext =
    createContext<LanguageContextType | null>(
        null
    );

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [language, setLanguage] =
        useState<Language>("en");

    const [mounted, setMounted] =
        useState(false);

    useEffect(() => {

        const savedLanguage =
            localStorage.getItem(
                "language"
            ) as Language;

        if (
            savedLanguage &&
            ["en", "nl", "fr"].includes(savedLanguage)
        ) {
            setLanguage(savedLanguage);
        }

        setMounted(true);

    }, []);

    useEffect(() => {

        if (mounted) {
            localStorage.setItem(
                "language",
                language
            );
        }

    }, [language, mounted]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations[language],
                mounted,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {

    const context =
        useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be inside LanguageProvider"
        );
    }

    return context;
}