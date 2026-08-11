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
} from "@/locales";


type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
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

    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") return "en";

        const saved = localStorage.getItem("language");

        return saved === "en" ||
            saved === "nl" ||
            saved === "fr"
            ? saved
            : "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations[language],
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