// pages/inventory-mgt.tsx
import Link from "next/link";
import React from "react";
import { Button } from "@/app/_components/ui/button";
import { projects } from "@/app/_modules/projects/project-list";
import Image from "next/image";

const liveUrl = "https://invmgt.dashboard.eliesoft.com/"; // TODO: update

export default function InventoryMgtContent() {
  const projectDetail = projects.find((p) => p.id === 8);
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-[980px]">
        {/* Hero */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Inventory Management Platform
          </h1>
          <p className="mt-2 text-muted-foreground">
            A cross-platform inventory and operations suite with a Next.js web
            app, an Expo mobile app, and cost-efficient AWS infrastructure.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={liveUrl} target="_blank" rel="noreferrer">
                Visit Website
              </Link>
            </Button>
          </div>
        </header>
        {/* Intro */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Introduction</h2>
          <p className="leading-relaxed text-foreground/90">
            This project delivers a unified platform for inventory and field
            operations. It features a web application built with Next.js for
            server-rendered performance and an Expo-powered mobile app for
            on-the-go workflows. On-demand data synchronization keeps views fast
            and fresh, while an AWS-based architecture provides elasticity and
            cost control.
          </p>
        </section>

        {/* Business Goals */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Business Goals</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Reduce manual tracking and data-entry overhead.</li>
            <li>Deliver fast, reliable web and mobile user experiences.</li>
            <li>Scale efficiently with pay-for-what-you-use services.</li>
            <li>Translate business needs into shipped features quickly.</li>
          </ul>
        </section>

        {/* Feature Spec */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Feature Specification</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Cross-platform mobile app using Expo (iOS/Android).</li>
            <li>Next.js web app leveraging SSR for performance and SEO.</li>
            <li>On-demand data synchronization to refresh critical views.</li>
            <li>Role-based access and secure authentication.</li>
            <li>Operational dashboards for visibility and control.</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Architecture</h2>
          <p className="leading-relaxed text-foreground/90">
            The web frontend uses Next.js with SSR to deliver fast initial loads
            and improved SEO. The mobile app is built with Expo to streamline
            cross-platform delivery. Backend services run in Docker containers
            on AWS ECS for core, always-on systems, while intermittent workloads
            are migrated to AWS Lambda behind API Gateway for elasticity and
            cost savings. On-demand revalidation and synchronization patterns
            keep data fresh without over-fetching.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
            <li>Frontend (Web): Next.js with SSR</li>
            <li>Mobile: Expo (React Native)</li>
            <li>Core Services: Dockerized workloads on AWS ECS</li>
            <li>Intermittent Jobs: AWS Lambda + API Gateway</li>
            <li>Sync: On-demand data synchronization and revalidation</li>
            <li>Infra: AWS-first, cost-optimized architecture</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
            <TechPill label="Next.js" />
            <TechPill label="React" />
            <TechPill label="TypeScript" />
            <TechPill label="Expo" />
            <TechPill label="React Native" />
            <TechPill label="Docker" />
            <TechPill label="AWS ECS" />
            <TechPill label="AWS Lambda" />
            <TechPill label="API Gateway" />
          </div>
        </section>

        {/* Media placeholders */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Screenshots</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
            {projectDetail &&
              projectDetail.images?.length > 0 &&
              projectDetail.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-square mx-4 mt-2"
                >
                  <Image
                    src={imgUrl}
                    alt="project image"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Video Demo</h2>
          {/* TODO: Replace the iframe src with your video URL (YouTube/Vimeo) */}
          <div className="relative overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/7Ryx4r6SVgk"
              title="Inventory Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </section>

        {/* Achievements */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Achievements</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>
              Launched a cross-platform mobile application (Expo), reducing
              manual tracking by 40% through automation.
            </li>
            <li>
              Built a Next.js web application leveraging SSR and on-demand data
              synchronization to improve performance.
            </li>
            <li>
              Suggested and implemented architecture improvements: deployed core
              services in Docker on AWS ECS and migrated intermittent jobs to
              AWS Lambda + API Gateway for scalability and cost savings.
            </li>
            <li>
              Optimized backend architecture by consolidating services into an
              ECS cluster, cutting operational costs by nearly 60%.
            </li>
            <li>
              Managed client interactions as a 3-person freelance team,
              translating requirements into features and ensuring rapid delivery
              and support.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border bg-muted/50 px-2.5 py-1 text-sm">
      {label}
    </span>
  );
}
