// pages/bookcrossing.tsx
import Head from "next/head";
import React from "react";

const githubUrl = "https://github.com/your-org/your-repo"; // TODO: update
const liveUrl = "https://your-domain.com"; // TODO: update

export default function BookCrossingContent() {
  return (
    <div style={{ padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", margin: 0 }}>BookCrossing</h1>
          <p style={{ color: "#555", marginTop: "0.5rem" }}>
            A multilingual book exchange platform with secure auth, scalable
            microservices, and a polished web UI.
          </p>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              style={linkBtnStyle}
            >
              GitHub
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              style={outlineBtnStyle}
            >
              Visit Website
            </a>
          </div>
        </header>

        {/* Intro */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Introduction</h2>
          <p style={pStyle}>
            BookCrossing enables readers to discover, list, and exchange books
            across languages. It offers multilingual search, CRUD listings, and
            secure, role-based access to streamline the exchange process.
          </p>
        </section>

        {/* Business Goals / Logic */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Business Goals</h2>
          <ul style={ulStyle}>
            <li>Grow a trusted community for book exchange and discovery.</li>
            <li>
              Support multilingual search to broaden reach and accessibility.
            </li>
            <li>
              Ensure secure authentication and role-based access to reduce
              misuse.
            </li>
            <li>Scale efficiently with resilient, observable microservices.</li>
          </ul>
        </section>

        {/* Feature Spec */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Feature Specification</h2>
          <ul style={ulStyle}>
            <li>Multilingual search over titles, authors, and tags.</li>
            <li>CRUD for book listings (create, read, update, delete).</li>
            <li>User profiles and role-based permissions via Auth0.</li>
            <li>Messaging and orders for exchanges between members.</li>
            <li>Event-driven backend with Kafka for decoupled services.</li>
          </ul>
        </section>

        {/* Architecture */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Architecture</h2>
          <p style={pStyle}>
            The frontend uses Next.js and MongoDB for dynamic, SEO-friendly
            pages and data. Backend services are Spring Boot microservices
            communicating via Kafka. Containerized with Docker, orchestrated
            locally with Skaffold, and deployed with Helm charts.
          </p>
          <ul style={ulStyle}>
            <li>Frontend: Next.js (React), REST/GraphQL (as applicable)</li>
            <li>
              Backend: Spring Boot microservices (book, member, order, post,
              message)
            </li>
            <li>Async: Kafka topics for events and inter-service messaging</li>
            <li>
              Data: MongoDB (primary), plus service-local data stores if needed
            </li>
            <li>Orchestration: Docker, Skaffold (dev), Helm (deploy)</li>
            <li>Auth: Auth0 with role-based access control</li>
            <li>Infra: Self-hosted on Ubuntu via Docker + Helm</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Tech Stack</h2>
          <div style={gridStyle}>
            <TechPill label="Next.js" />
            <TechPill label="React" />
            <TechPill label="TypeScript" />
            <TechPill label="MongoDB" />
            <TechPill label="Spring Boot" />
            <TechPill label="Apache Kafka" />
            <TechPill label="Docker" />
            <TechPill label="Skaffold" />
            <TechPill label="Helm" />
            <TechPill label="Auth0" />
            <TechPill label="Ubuntu" />
          </div>
        </section>

        {/* Media placeholders */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Screenshots</h2>
          <div style={mediaGridStyle}>
            {/* TODO: Replace src with actual images in /public */}
            <img
              src="/images/bookcrossing-1.png"
              alt="Screenshot 1"
              style={imgStyle}
            />
            <img
              src="/images/bookcrossing-2.png"
              alt="Screenshot 2"
              style={imgStyle}
            />
            <img
              src="/images/bookcrossing-3.png"
              alt="Screenshot 3"
              style={imgStyle}
            />
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Video Demo</h2>
          {/* TODO: Replace the iframe src with your video URL (YouTube/Vimeo) */}
          <div
            style={{
              position: "relative",
              paddingTop: "56.25%",
              borderRadius: 8,
              overflow: "hidden",
              background: "#000",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/XXXXXXXXXXX"
              title="BookCrossing Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </section>

        {/* Achievements */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Achievements</h2>
          <ul style={ulStyle}>
            <li>
              Scaled microservices via Docker, Skaffold, Helm to improve
              resilience.
            </li>
            <li>Reduced unauthorized access with Auth0 and RBAC.</li>
            <li>Self-hosted on Ubuntu for cost efficiency and full control.</li>
            <li>
              Delivered multilingual search and end-to-end CRUD for listings.
            </li>
          </ul>
        </section>

        {/* Callouts */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Links</h2>
          <ul style={ulStyle}>
            <li>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href={liveUrl} target="_blank" rel="noreferrer">
                Live Website
              </a>
            </li>
            {/* Add docs, API spec, etc. */}
          </ul>
        </section>

        <footer style={{ marginTop: "3rem", color: "#666" }}>
          <small>© {new Date().getFullYear()} BookCrossing</small>
        </footer>
      </div>
    </div>
  );
}

/* ——— Simple UI helpers ——— */

const sectionStyle: React.CSSProperties = { margin: "2rem 0" };
const h2Style: React.CSSProperties = {
  fontSize: "1.5rem",
  margin: "0 0 0.75rem 0",
};
const pStyle: React.CSSProperties = { margin: "0.5rem 0", lineHeight: 1.6 };
const ulStyle: React.CSSProperties = {
  margin: "0.5rem 0",
  paddingLeft: "1.25rem",
  lineHeight: 1.6,
};
const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "0.5rem",
  alignItems: "start",
};
const mediaGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "0.75rem",
};
const imgStyle: React.CSSProperties = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  borderRadius: 8,
  background: "#f2f2f2",
};
const linkBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "0.5rem 0.85rem",
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  borderRadius: 6,
};
const outlineBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "0.5rem 0.85rem",
  color: "#111",
  textDecoration: "none",
  borderRadius: 6,
  border: "1px solid #ccc",
  background: "#fff",
};

function TechPill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.35rem 0.6rem",
        borderRadius: 999,
        background: "#f5f5f5",
        border: "1px solid #eee",
        fontSize: 14,
      }}
    >
      {label}
    </span>
  );
}
