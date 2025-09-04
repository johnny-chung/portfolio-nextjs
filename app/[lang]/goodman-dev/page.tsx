import { getLanguage } from "@/app/languages/_getLanguage";
import { LangType } from "@/app/languages/_lang.types";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import {
  Code,
  ShieldCheck,
  Smartphone,
  Palette,
  Server,
  Languages,
} from "lucide-react";
import Image from "next/image";
import { ALL_TECH, shieldsUrl } from "@/app/_data/tech-stack";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  const langPack = await getLanguage(lang);

  const iconColors = [
    "text-blue-500",
    "text-green-500",
    "text-pink-500",
    "text-yellow-500",
    "text-purple-500",
    "text-red-500",
  ];

  const expertise = [
    {
      icon: <Code className={iconColors[0]} />,
      title: langPack.softwareDev,
      desc: langPack.softwareDevDesc,
    },
    {
      icon: <ShieldCheck className={iconColors[1]} />,
      title: langPack.QualityControl,
      desc: langPack.QualityControlDesc,
    },
    {
      icon: <Smartphone className={iconColors[2]} />,
      title: langPack.WebMoblileApp,
      desc: langPack.WebMoblileAppDesc,
    },
    {
      icon: <Palette className={iconColors[3]} />,
      title: langPack.UIUXDesign,
      desc: langPack.UIUXDesignDesc,
    },
    {
      icon: <Server className={iconColors[4]} />,
      title: langPack.Infrastructure,
      desc: langPack.InfrastructureDesc,
    },
    {
      icon: <Languages className={iconColors[5]} />,
      title: langPack.MultilingualDev,
      desc: langPack.MultilingualDevDesc,
    },
  ];

  return (
    <div className="space-y-16 mx-auto max-w-7xl ">
      {/* Slogan */}
      <section className="text-center py-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-4 text-amber-950">
          {langPack.goodmanDev}
        </h1>
        <h2 className="text-3xl font-bold mb-2 text-amber-900">
          {langPack.slogan}
        </h2>
        <p className="text-lg text-muted-foreground">{langPack.subTitle}</p>
      </section>

      {/* Our Expertise */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          {langPack.ourExpertise}
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => (
            <Card
              key={i}
              className="animate-slideFadeIn transition-transform duration-200 transform-gpu hover:shadow-lg hover:scale-[1.02]"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="mx-2">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          {langPack.aboutUs}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Photo placeholder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[4/3] bg-muted rounded-xl">
              <Image
                src="/logo/logo-medium.png"
                alt="about us"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          {/* Wording */}
          <div className="order-2 md:order-1">
            <p className="text-lg text-muted-foreground whitespace-pre-line">
              {langPack.aboutUsDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack (Marquee, no border) */}
      <section className="mx-2">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {langPack.ourTechStack}
        </h2>
        <div className="relative overflow-hidden mask-fade-x py-6">
          <div className="animate-marquee-ltr will-change-transform flex items-center gap-3 whitespace-nowrap">
            {/* Duplicate the sequence twice for seamless loop */}
            {[0, 1].map((rep) => (
              <React.Fragment key={rep}>
                {ALL_TECH.map((t, idx) => (
                  <span
                    key={`${rep}-${t.label}-${idx}`}
                    className="relative block h-8 w-[110px] shrink-0 leading-none"
                  >
                    <Image
                      src={shieldsUrl(t)}
                      alt={t.label}
                      fill
                      sizes="110px"
                      unoptimized
                      className="select-none rounded-md saturate-[.9] drop-shadow-sm object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Button */}
      <div className="flex justify-center p-10">
        <Button size="lg" variant="outline" asChild>
          <Link href={`/goodman-dev/enquiry`}>{langPack.getInTouch}</Link>
        </Button>
      </div>
    </div>
  );
}
