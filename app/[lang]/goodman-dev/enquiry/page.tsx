import React from "react";
import EnquiryForm from "@/app/_components/features/goodman-dev/EnquiryForm";
import { getLanguage } from "@/app/languages/_getLanguage";
import { LangType } from "@/app/languages/_lang.types";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  const langPack = await getLanguage(lang);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 mx-auto max-w-5xl">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-950">
          {langPack?.getInTouch ?? "Get in touch"}
        </h1>
        <p className="text-muted-foreground">
          {langPack.shareDetails}
        </p>
      </div>
      <EnquiryForm />
    </div>
  );
}
