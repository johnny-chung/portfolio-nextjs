"use client";
import React from "react";
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
import { Mail, Linkedin } from "lucide-react";

type Tech = {
  label: string;
  color: string;
  logo: string;
  logoColor?: string;
};

function shieldsUrl({ label, color, logo, logoColor }: Tech) {
  const base = `https://img.shields.io/badge/${encodeURIComponent(
    label
  )}-${color}`;
  const params = new URLSearchParams({
    logo,
    style: "for-the-badge",
    ...(logoColor ? { logoColor } : {}),
  });
  return `${base}?${params.toString()}`;
}

const PROGRAMMING: Tech[] = [
  { label: "C", color: "A8B9CC", logo: "c", logoColor: "black" },
  { label: "C++", color: "00599C", logo: "cplusplus", logoColor: "white" },
  { label: "Java", color: "007396", logo: "openjdk", logoColor: "white" },
  {
    label: "JavaScript",
    color: "F7DF1E",
    logo: "javascript",
    logoColor: "black",
  },
  {
    label: "TypeScript",
    color: "3178C6",
    logo: "typescript",
    logoColor: "white",
  },
  { label: "Python", color: "3776AB", logo: "python", logoColor: "white" },
];

const FRONTEND: Tech[] = [
  { label: "React", color: "61DAFB", logo: "react", logoColor: "black" },
  { label: "Next.js", color: "000000", logo: "nextdotjs", logoColor: "white" },
  { label: "React Native", color: "61DAFB", logo: "react", logoColor: "black" },
  { label: "Expo", color: "000020", logo: "expo", logoColor: "white" },
  { label: "Redux", color: "764ABC", logo: "redux", logoColor: "white" },
  {
    label: "Zustand",
    color: "18181B",
    logo: "three-dot-js",
    logoColor: "white",
  },
  {
    label: "TailwindCSS",
    color: "06B6D4",
    logo: "tailwindcss",
    logoColor: "white",
  },
  { label: "MUI", color: "007FFF", logo: "mui", logoColor: "white" },
  { label: "shadcn/ui", color: "000000", logo: "shadcnui", logoColor: "white" },
  { label: "D3.js", color: "F9A03C", logo: "d3dotjs", logoColor: "white" },
];

const BACKEND: Tech[] = [
  {
    label: "Spring Boot",
    color: "6DB33F",
    logo: "springboot",
    logoColor: "white",
  },
  { label: "Node.js", color: "339933", logo: "nodedotjs", logoColor: "white" },
  { label: "Express", color: "000000", logo: "express", logoColor: "white" },
  { label: "Flask", color: "000000", logo: "flask", logoColor: "white" },
  { label: "Auth0", color: "EB5424", logo: "auth0", logoColor: "white" },
  {
    label: "RESTful APIs",
    color: "0052CC",
    logo: "swagger",
    logoColor: "white",
  },
];

const DEVOPS: Tech[] = [
  { label: "Docker", color: "2496ED", logo: "docker", logoColor: "white" },
  {
    label: "Kubernetes",
    color: "326CE5",
    logo: "kubernetes",
    logoColor: "white",
  },
  { label: "Skaffold", color: "18A999", logo: "skaffold", logoColor: "white" },
  { label: "Helm", color: "0F1689", logo: "helm", logoColor: "white" },
  { label: "Kafka", color: "231F20", logo: "apachekafka", logoColor: "white" },
  { label: "NATS", color: "27AAE1", logo: "natsdotio", logoColor: "white" },
  {
    label: "GitHub Actions",
    color: "2088FF",
    logo: "githubactions",
    logoColor: "white",
  },
];

const DATABASES: Tech[] = [
  { label: "Oracle", color: "F80000", logo: "oracle", logoColor: "white" },
  {
    label: "PostgreSQL",
    color: "4169E1",
    logo: "postgresql",
    logoColor: "white",
  },
  { label: "MongoDB", color: "47A248", logo: "mongodb", logoColor: "white" },
  { label: "Redis", color: "DC382D", logo: "redis", logoColor: "white" },
  { label: "Firebase", color: "FFCA28", logo: "firebase", logoColor: "black" },
];

const CLOUD: Tech[] = [
  { label: "AWS", color: "232F3E", logo: "amazonaws", logoColor: "FF9900" },
  {
    label: "Azure",
    color: "0078D4",
    logo: "microsoftazure",
    logoColor: "white",
  },
];

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
                <a
                  href={linkedin || "#"}
                  target={linkedin ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-disabled={!linkedin}
                >
                  <Linkedin className="mr-2 size-4" />
                  LinkedIn
                </a>
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

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
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
            <img
              key={t.label}
              src={shieldsUrl(t)}
              alt={t.label}
              className="h-7 md:h-8 select-none rounded-md transition-all duration-200 ease-out hover:scale-[1.03] hover:-translate-y-0.5 saturate-[.85] hover:saturate-100 drop-shadow-sm hover:drop-shadow-md"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
