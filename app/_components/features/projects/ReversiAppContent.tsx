// pages/inventory-mgt.tsx
import Link from "next/link";
import React from "react";
import { Button } from "@/app/_components/ui/button";
import { projects } from "@/app/_modules/projects/project-list";
import Image from "next/image";

//const liveUrl = "https://johnny-library.web.app/"; // TODO: update
const githubUrl = "https://github.com/johnny-chung/Reversi-py";
export default function ReversiAppContent() {
  const projectDetail = projects.find((p) => p.id === 5);
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-[980px]">
        {/* Hero */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Reversi AI — Self‑Play Trained Agent
          </h1>
          <p className="mt-2 text-muted-foreground">
            An AI agent trained to play Reversi using a search‑guided neural
            policy/value network. Includes analysis mode, adjustable difficulty,
            and explainable move evaluations.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
          </div>
        </header>

        {/* Introduction */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Introduction</h2>
          <p className="leading-relaxed text-foreground/90">
            This project centers on an AI that plays Reversi at a strong level.
            The core engine combines a neural network that estimates move
            probabilities (policy) and expected outcome (value) with a
            tree‑search procedure to select moves. The model is trained via
            staged learning—warm‑starting from synthetic/supervised data and
            then improving through self‑play—resulting in an agent that can both
            challenge humans and explain its reasoning through evaluations,
            principal variations, and move heatmaps.
          </p>
        </section>

        {/* AI Goals */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">AI Goals</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Achieve strong play against classical minimax baselines.</li>
            <li>Train primarily from self‑play to avoid manual heuristics.</li>
            <li>
              Provide explainable evaluations: score, policy heatmap, and PV.
            </li>
            <li>Serve the model efficiently for low‑latency gameplay.</li>
          </ul>
        </section>

        {/* AI Design */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">AI Design</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>
              State Encoding: 8×8 planes encoding current player, disks, legal
              moves, and optional parity/edge features.
            </li>
            <li>
              Network: Lightweight residual CNN producing two heads: policy
              (move probabilities over 64 cells) and value (win/draw/loss
              expectation from the current player’s perspective).
            </li>
            <li>
              Search: Monte Carlo Tree Search guided by the network’s policy and
              value; exploration via Dirichlet noise at the root and temperature
              scheduling in early game.
            </li>
            <li>
              Rules/Termination: Server validates legality, pass moves, and end
              conditions; value targets from final outcomes.
            </li>
            <li>
              Difficulty: Tune by limiting visits, depth, or compute budget per
              move; supports fixed time/visit modes.
            </li>
          </ul>
        </section>

        {/* Training Pipeline */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Training Pipeline</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>
              Warm Start: Supervised pretraining on synthetic positions or
              classical engine outputs to stabilize early policy/value.
            </li>
            <li>
              Self‑Play: The current network plays against itself with MCTS,
              generating trajectories with search‑improved policies and final
              outcomes as value targets.
            </li>
            <li>
              Replay Buffer: Maintains a rolling window of games; batches are
              sampled for SGD with data augmentation (rotations/reflections).
            </li>
            <li>
              Optimization: Cross‑entropy for policy, MSE for value, L2 weight
              decay; learning‑rate schedule with periodic evaluation gates.
            </li>
            <li>
              Model Selection: New checkpoints must outperform the current best
              in head‑to‑head matches to be promoted.
            </li>
          </ul>
        </section>

        {/* Evaluation */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Evaluation</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>
              Baselines: Compares against depth‑limited minimax (alpha‑beta) and
              heuristic engines across standard test suites and random seeds.
            </li>
            <li>
              Metrics: Match win‑rate, average margin, opening diversity,
              strength vs. difficulty levels, and inference latency.
            </li>
            <li>
              Robustness: Tests under noisy move cutoffs and time constraints to
              validate graceful degradation.
            </li>
          </ul>
        </section>

        {/* Feature Specification */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Feature Specification</h2>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Play vs AI with adjustable difficulty and time controls.</li>
            <li>
              Analysis Mode: Policy heatmap, value graph, and principal
              variation (best line) after each move.
            </li>
            <li>AI vs AI matches for benchmarking and regression checks.</li>
            <li>Position editor and opening explorer from self‑play data.</li>
            <li>Export/import games in common formats (e.g., Othello PGN).</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Architecture</h2>
          <p className="leading-relaxed text-foreground/90">
            The web client renders the board and requests AI moves from a model
            service that runs the search and neural inference. The service
            exposes endpoints for move suggestions, analysis, and bulk
            evaluation used in training/evaluation pipelines. Models are
            exported to an efficient runtime for low‑latency inference.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
            <li>Frontend: Next.js + Tailwind (board, UI, analysis views)</li>
            <li>Model Serving: FastAPI/Node bridge with ONNX/TorchScript</li>
            <li>Search: MCTS with configurable visits/time budget</li>
            <li>Training: Self‑play generator + trainer (PyTorch)</li>
            <li>Storage: Game replay buffer and model registry</li>
            <li>Infra: Docker; optional GPU for training/inference</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
            <TechPill label="Next.js" />
            <TechPill label="TypeScript" />
            <TechPill label="Tailwind CSS" />
            <TechPill label="PyTorch" />
            <TechPill label="ONNX Runtime" />
            <TechPill label="FastAPI / Node" />
            <TechPill label="Docker" />
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

        <section className="my-8">
          <h2 className="mb-3 text-xl font-semibold">Video Demo</h2>
          {/* TODO: Replace the iframe src with your video URL (YouTube/Vimeo) */}
          <div className="relative overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/YTaivEa7ww4"
              title="Reversi Game Demo"
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
              Trained a search‑guided policy/value network via self‑play with
              promotion gates based on head‑to‑head results.
            </li>
            <li>
              Outperforms depth‑limited minimax baselines at equal time/compute
              in evaluation matches.
            </li>
            <li>
              Delivers low‑latency interactive play via optimized inference and
              configurable search budgets.
            </li>
            <li>
              Provides explainable analysis: heatmaps, PV lines, and score
              timelines for study and review.
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
