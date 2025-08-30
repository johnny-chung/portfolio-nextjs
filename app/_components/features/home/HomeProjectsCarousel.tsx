"use client";

import { projects } from "@/app/_modules/projects/project-list";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";

export default function HomeProjectsCarousel() {
  const items = useMemo(() => projects.slice(0, 3), []);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [hovering, setHovering] = useState(false);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (hovering) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [hovering, items.length]);

  return (
    <div
      className="max-w-6xl mx-auto"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Card className="relative overflow-hidden animate-fadeIn">
        <div className="relative w-full h-[340px] md:h-[420px] lg:h-[500px]">
          {/* Slides container */}
          <div
            className="absolute inset-0 flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((p) => (
              <div key={p.id} className="relative shrink-0 grow-0 basis-full">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  className="object-cover"
                />

                {/* Bottom gradient overlay with text */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-2xl font-semibold line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-gray-100/90 line-clamp-2 md:line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-3">
                    <Button asChild size="sm" variant="secondary">
                      <Link href={p.href || "/my-projects"}>View Project</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/60 text-white p-2 backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/60 text-white p-2 backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
            {items.map((p, i) => (
              <button
                key={p.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  index === i ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

