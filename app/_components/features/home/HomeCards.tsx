"use client";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { FadeInCard } from "@/app/_components/ui/fadein-card";
import { useLang } from "@/app/_providers/LangProvider";
import Image from "next/image";

export default function HomeCards() {
  const { langPack } = useLang();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <FadeInCard
        href="/about-me"
        className={`h-[50vh] cursor-pointer hover:shadow-lg transition-shadow duration-200`}
      >
        <CardHeader>
          <CardTitle className="md:text-xl">{langPack.aboutMe}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-2">
            <p>{langPack.aboutMeDesc}</p>
            <div className="relative w-3/4 aspect-square mx-4 mt-2">
              <Image
                src="/about-me.png"
                alt="about-me"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </CardContent>
      </FadeInCard>
      <FadeInCard
        href="/my-projects"
        className={`h-[50vh] cursor-pointer hover:shadow-lg transition-shadow duration-200`}
      >
        <CardHeader>
          <CardTitle className="md:text-xl">
            {langPack.viewMyProjects}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-2">
            <p>{langPack.viewProjectsDesc}</p>
            <div className="relative w-3/4 aspect-square mx-4 mt-2">
              <Image
                src="/viewProjects.png"
                alt="about-me"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </CardContent>
      </FadeInCard>
      <FadeInCard
        href="/blog"
        className={`h-[50vh] cursor-pointer hover:shadow-lg transition-shadow duration-200`}
      >
        <CardHeader>
          <CardTitle className="md:text-xl">
            {langPack.seeLatestPosts}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-2">
            <p>{langPack.viewPostsDesc}</p>
            <div className="relative w-3/4 aspect-square mx-4 mt-2">
              <Image
                src="/viewPosts.png"
                alt="about-me"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </CardContent>
      </FadeInCard>
    </div>
  );
}
