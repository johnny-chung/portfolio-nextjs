"use client";

import { Card } from "@/app/_components/ui/card";
import { cn } from "@/app/_lib/shadcn-utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function FadeInCard({
  href,
  className,
  slowly = false,
  children,
}: {
  href?: string;
  className?: string;
  slowly?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current; // capture it once

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Link href={href ?? "#"}>
      <Card
        ref={ref}
        className={cn(
          `cursor-pointer hover:shadow-lg ${
            visible
              ? slowly
                ? "animate-slideFadeIn-slow"
                : "animate-slideFadeIn"
              : "opacity-0"
          }`,
          className
        )}
      >
        {children}
      </Card>
    </Link>
  );
}
