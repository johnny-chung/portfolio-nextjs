// pages/inventory-mgt.tsx
import Link from "next/link";
import React from "react";
import { Button } from "@/app/_components/ui/button";
import { projects } from "@/app/_modules/projects/project-list";
import Image from "next/image";

const liveUrl = "https://johnny-library.web.app/"; // TODO: update
const githubUrl = "https://github.com/johnny-chung/Johnny-Library";
export default function LibAppContent() {
  const projectDetail = projects.find((p) => p.id === 6);
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-[980px]">
        {/* Hero */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            LibraLounge — Online Library Platform
          </h1>
          <p className="mt-2 text-muted-foreground">
            A full‑stack library system for reserving resources and booking
            study rooms with equipment and date filters, secured by Auth0 and
            backed by MongoDB.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={liveUrl} target="_blank" rel="noreferrer">
                Visit Website
              </Link>
            </Button>
          </div>
        </header>
        {/* Introduction */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Introduction</h2>
          <p className="leading-relaxed text-foreground/90">
            LibraLounge showcases a complete web experience for library users to
            browse and reserve resources and to book study rooms with specific
            equipment on chosen dates. It blends a responsive React front end
            with a Node/Express API and MongoDB for persistent data, using Auth0
            for authentication and Tailwind CSS for fast, consistent styling.
          </p>
        </section>

        {/* Business Goals */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Business Goals</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Simplify finding and reserving library resources.</li>
            <li>Streamline study room bookings by date and equipment.</li>
            <li>Provide secure, reliable user authentication with Auth0.</li>
            <li>Ensure scalability and maintainability with modern tooling.</li>
          </ul>
        </section>

        {/* Feature Specification */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Feature Specification</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Resource catalog with search and detail pages.</li>
            <li>Reservations tracked per user profile.</li>
            <li>
              Study room booking with date selection and equipment filtering.
            </li>
            <li>Auth0-based login, logout, and protected routes.</li>
            <li>Responsive UI with Tailwind CSS.</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Architecture</h2>
          <p className="leading-relaxed text-foreground/90">
            The front end is a React app with React Router handling navigation
            and Auth0 for authentication. A Node.js/Express API manages
            resources, rooms, and bookings, persisted in MongoDB via Mongoose.
            The app is container-friendly with Docker and hosts the front end on
            Firebase Hosting. The design emphasizes clean separation of concerns
            and a straightforward developer workflow.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
            <li>Frontend: React + React Router</li>
            <li>Styles: Tailwind CSS</li>
            <li>Auth: Auth0 (SPA flow)</li>
            <li>Backend: Node.js + Express</li>
            <li>Database: MongoDB + Mongoose</li>
            <li>Infra/Tooling: Docker; Frontend on Firebase Hosting</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
            <TechPill label="React" />
            <TechPill label="TypeScript" />
            <TechPill label="React Router" />
            <TechPill label="Tailwind CSS" />
            <TechPill label="Auth0" />
            <TechPill label="Node.js" />
            <TechPill label="Express" />
            <TechPill label="MongoDB" />
            <TechPill label="Mongoose" />
            <TechPill label="Docker" />
            <TechPill label="Firebase Hosting" />
          </div>
        </section>

        {/* Screenshots */}
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

        {/* Video Demo
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Video Demo</h2>
          <div className="relative overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
              title="LibraLounge Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          
        </section> */}

        {/* Achievements */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Achievements</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Implemented Auth0 authentication with protected routes.</li>
            <li>
              Built resource browsing, detail views, and user reservations with
              MongoDB persistence.
            </li>
            <li>
              Delivered room booking with date and equipment filters for better
              room utilization.
            </li>
            <li>
              Containerized services with Docker for consistent dev setup.
            </li>
            <li>
              Deployed frontend to Firebase Hosting with CI-friendly steps.
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
