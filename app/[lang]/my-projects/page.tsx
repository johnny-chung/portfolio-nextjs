import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { FadeInCard } from "@/app/_components/ui/fadein-card";
import { projects } from "@/app/_modules/projects/project-list";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {projects.map((project, idx) => (
        <FadeInCard
          key={idx}
          href={project.href ?? "#"}
          className={`${
            project.href ? "cursor-pointer" : ""
          } hover:shadow-lg transition-shadow duration-200`}
        >
          <CardHeader>
            <CardTitle className="md:text-xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-2">
              <p>{project.description}</p>
              {project.images?.length > 0 && (
                <div className="relative w-3/4 aspect-square mx-4 mt-2">
                  <Image
                    src={project.images[0]}
                    alt="project image"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </FadeInCard>
      ))}
    </div>
  );
}
