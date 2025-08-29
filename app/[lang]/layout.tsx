import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { LangType } from "@/app/languages/_lang.types";
import { getLanguage } from "@/app/languages/_getLanguage";
import { LanguageProvider } from "@/app/_providers/LangProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SidebarProvider } from "@/app/_components/ui/sidebar";
import Navbar from "../_components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johnny's Portfolio",
  description: "Contact me for freelance work or just to say hi!",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tc" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: LangType }>;
}>) {
  const { lang } = await params;
  const langPack = await getLanguage(lang);
  return (
    <html lang={(await params).lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider lang={lang} langPack={langPack}>
          <SidebarProvider defaultOpen={false}>
            <Navbar />
            <main className="w-full mx-auto mt-12 md:mt-16">
              {children}
              <SpeedInsights />
            </main>
          </SidebarProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
