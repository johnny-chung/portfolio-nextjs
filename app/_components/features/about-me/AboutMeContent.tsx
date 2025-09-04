"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { useLang } from "@/app/_providers/LangProvider";
import { Mail } from "lucide-react";
import {
  Code,
  ShieldCheck,
  Smartphone,
  Palette,
  Server,
  Languages,
} from "lucide-react";
import {
  BACKEND,
  CLOUD,
  DATABASES,
  DEVOPS,
  FRONTEND,
  PROGRAMMING,
  shieldsUrl,
  type Tech,
} from "@/app/_data/tech-stack";
import { FaLinkedin } from "react-icons/fa";

export default function AboutMeContent() {
  const name = "Johnny C."; // Update if needed
  const title = "Full-Stack Software Developer • Chartered Engineer (UK)";
  const email = "johnny.chung2046@gmail.com"; // e.g. "johnny@example.com"
  const linkedin = "https://www.linkedin.com/in/johnny-wychung "; // e.g. "https://www.linkedin.com/in/your-handle/"
  const { langPack } = useLang();

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 lg:px-8 py-8 space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card className="md:col-span-2 animate-slideFadeIn transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="size-16 transition-transform duration-300 ring-2 ring-primary/15 hover:ring-primary/35 rounded-full shadow-sm hover:shadow-md hover:scale-105">
                <AvatarImage src="/logo/icon.png" alt={name} />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl md:text-2xl">{name}</CardTitle>
                <CardDescription className="md:text-base">
                  {title}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="transition-transform hover:-translate-y-0.5"
              >
                <Link
                  href={linkedin || "#"}
                  target={linkedin ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-disabled={!linkedin}
                  className="flex items-center gap-2"
                >
                  <FaLinkedin />
                  LinkedIn
                </Link>
              </Button>
              <Button
                asChild
                className="transition-transform hover:-translate-y-0.5"
              >
                <a
                  href={email ? `mailto:${email}` : "#"}
                  aria-disabled={!email}
                >
                  <Mail className="mr-2 size-4" />
                  Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card
          className="md:col-span-3 animate-slideFadeIn transition-shadow hover:shadow-lg"
          style={{ animationDelay: "120ms" }}
        >
          <CardHeader>
            <CardTitle>{langPack.aboutMe}</CardTitle>
            <CardDescription>{langPack.detailDesc}</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator />

      {/* Expertise Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          {langPack.myExpertise}
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Code className="text-blue-500" />,
              title: langPack.softwareDev,
              desc: langPack.aboutMeSoftwareDevDesc,
            },
            {
              icon: <ShieldCheck className="text-green-500" />,
              title: langPack.QualityControl,
              desc: langPack.aboutMeQualityControlDesc,
            },
            {
              icon: <Smartphone className="text-pink-500" />,
              title: langPack.WebMoblileApp,
              desc: langPack.aboutMeWebMobileAppDesc,
            },
            {
              icon: <Palette className="text-yellow-500" />,
              title: langPack.UIUXDesign,
              desc: langPack.aboutMeUIUXDesignDesc,
            },
            {
              icon: <Server className="text-purple-500" />,
              title: langPack.Infrastructure,
              desc: langPack.aboutMeInfrastructureDesc,
            },
            {
              icon: <Languages className="text-red-500" />,
              title: langPack.MultilingualDev,
              desc: langPack.aboutMeMultilingualDevDesc,
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="animate-slideFadeIn transition-transform duration-200 transform-gpu hover:shadow-lg hover:scale-[1.02]"
              style={{ animationDelay: `${80 + i * 40}ms` }}
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

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          {langPack.techStack}
        </h2>
        <div className="space-y-4">
          <TechGroup title="Programming" items={PROGRAMMING} delay={80} />
          <TechGroup title="Frontend" items={FRONTEND} delay={120} />
          <TechGroup title="Backend" items={BACKEND} delay={160} />
          <TechGroup title="Databases" items={DATABASES} delay={200} />
          <TechGroup title="DevOps & Streaming" items={DEVOPS} delay={240} />
          <TechGroup title="Cloud" items={CLOUD} delay={280} />
        </div>
      </section>
    </div>
  );
}

function TechGroup({
  title,
  items,
  delay,
}: {
  title: string;
  items: Tech[];
  delay?: number;
}) {
  return (
    <Card
      className="transition-all hover:shadow-md hover:-translate-y-0.5 animate-fadeIn"
      style={
        delay
          ? { animationDelay: `${delay}ms`, animationFillMode: "backwards" }
          : undefined
      }
    >
      <CardHeader className="border-b border-border/60">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((t) => (
            <div
              key={t.label}
              className="relative h-10 w-auto min-w-[60px] aspect-[3/1] flex items-center"
            >
              <Image
                src={shieldsUrl(t)}
                alt={t.label}
                fill
                unoptimized
                className="object-contain select-none rounded-md transition-all duration-200 ease-out hover:scale-[1.03] hover:-translate-y-0.5 saturate-[.85] hover:saturate-100 drop-shadow-sm hover:drop-shadow-md"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
