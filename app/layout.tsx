import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import IconGradient from "@/components/ui/IconGradient";

import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading-nf",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body-nf",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maya Xpress | Local store in Antwerp",
  description: "Your trusted neighborhood store in Antwerp for lottery tickets, post services like BPOST & DHL, RIA money transfers, gift cards, Hallmark cards, snacks & drinks and many more",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="h-full">
        <IconGradient />

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
