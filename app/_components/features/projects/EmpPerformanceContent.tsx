// pages/bookcrossing.tsx
import Link from "next/link";
import React from "react";
import { Button } from "@/app/_components/ui/button";
import { projects } from "@/app/_modules/projects/project-list";
import Image from "next/image";

export default function EmpPerformanceContent() {
  const projectDetail = projects.find((p) => p.id === 7);
  const liveUrl = "https://dashboard.eliesoft.com/";

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-[980px]">
        {/* Hero */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Employee Performance Tracking Mobile & Web Full-stack App
          </h1>
          <p className="mt-2 text-muted-foreground">
            Cross-platform mobile and web suite with a React Native app, React
            admin dashboard, AWS-backed APIs, secure Auth0 authentication, and
            CI/CD with GitHub Actions.
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
            This project delivers a cohesive mobile and web experience. The
            mobile app (iOS/Android) is built with Expo React Native for a
            seamless cross-platform UX, complemented by a React-based admin
            dashboard with D3.js for near real-time insights. A secure, scalable
            backend on AWS powers data and auth via Express.js, MongoDB, and
            Auth0, while CI/CD with GitHub Actions and Jest ensures reliability
            and rapid iteration.
          </p>
        </section>

        {/* Business Goals / Logic */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Business Goals</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>
              Deliver a polished, consistent cross-platform user experience.
            </li>
            <li>
              Provide near real-time operational insights for decision-making.
            </li>
            <li>Ensure secure authentication and role-based access control.</li>
            <li>Scale reliably on AWS with maintainable, testable services.</li>
            <li>Accelerate development with automated testing and CI/CD.</li>
          </ul>
        </section>

        {/* Feature Spec */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Feature Specification</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>iOS and Android app built with Expo React Native.</li>
            <li>React admin dashboard with D3.js data visualizations.</li>
            <li>Secure authentication and RBAC with Auth0.</li>
            <li>CRUD operations for core entities across mobile and web.</li>
            <li>Automated testing with Jest integrated into CI.</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Architecture</h2>
          <p className="leading-relaxed text-foreground/90">
            The platform comprises a cross-platform mobile client, a web-based
            admin dashboard, and a secure backend on AWS. Express.js powers REST
            APIs, MongoDB stores data, and Auth0 manages authentication and
            authorization. GitHub Actions orchestrates CI/CD with unit tests in
            Jest.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
            <li>Mobile: Expo React Native (iOS, Android)</li>
            <li>Web Admin: React + D3.js</li>
            <li>API: Node.js (Express.js)</li>
            <li>Data: MongoDB</li>
            <li>Auth: Auth0 (RBAC)</li>
            <li>Infra: AWS (compute, networking, storage)</li>
            <li>CI/CD: GitHub Actions + Jest</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
            <TechPill label="Expo" />
            <TechPill label="React Native" />
            <TechPill label="React" />
            <TechPill label="D3.js" />
            <TechPill label="Node.js" />
            <TechPill label="Express.js" />
            <TechPill label="MongoDB" />
            <TechPill label="Auth0" />
            <TechPill label="AWS" />
            <TechPill label="GitHub Actions" />
            <TechPill label="Jest" />
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
              src="https://www.youtube-nocookie.com/embed/Bws4ivbeylk"
              title="Mobile & Web Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              Led end-to-end development across mobile and web—from concept to
              production—owning UI/UX, architecture guidance, and code quality.
            </li>
            <li>
              Shipped iOS and Android apps with Expo React Native for a seamless
              cross-platform experience.
            </li>
            <li>
              Delivered a React admin dashboard with D3.js, providing near
              real-time insights and improving decision-making.
            </li>
            <li>
              Designed a secure, scalable backend on AWS with Express.js,
              MongoDB, and Auth0 for robust authentication and access control.
            </li>
            <li>
              Implemented CI/CD via GitHub Actions with Jest tests, reducing
              deployment errors and speeding up releases.
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
