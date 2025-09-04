"use client";

import React from "react";
import { useState, useEffect, useActionState } from "react";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { useLang } from "@/app/_providers/LangProvider";
import { submitEnquiry } from "@/app/_modules/goodman-dev/goodman-dev.actions";
import Link from "next/link";

type FormState = {
  projectType: string;
  description: string;
  techStack: string;
  budget: string;
  companySize: string;
  name: string;
  email: string;
};

const initialState: FormState = {
  projectType: "",
  description: "",
  techStack: "",
  budget: "",
  companySize: "",
  name: "",
  email: "",
};

export default function EnquiryForm() {
  const { langPack } = useLang();
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [state, formAction, isPending] = useActionState(submitEnquiry, {
    ok: false,
    error: null as string | null,
  });

  function validate(next: FormState) {
    const e: Partial<FormState> = {};
    if (!next.projectType) e.projectType = "Please select a project type.";
    if (!next.description || next.description.trim().length < 20)
      e.description = "Please describe your project (min 20 chars).";
    if (!next.budget) e.budget = "Please choose a budget.";
    if (!next.companySize) e.companySize = "Please choose a company size.";
    if (!next.name || next.name.trim().length < 2)
      e.name = "Please enter your name.";
    if (!next.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email))
      e.email = "Please enter a valid email.";
    return e;
  }

  function handleChange<K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) {
    const next = { ...data, [key]: value } as FormState;
    setData(next);
    const e = validate(next);
    setErrors(e);
  }

  useEffect(() => {
    setErrors(validate(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.ok) {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>{langPack.enqueryReceived}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-muted-foreground">
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>
              <span className="text-foreground font-medium">
                {langPack.contact}:
              </span>{" "}
              {data.email}
            </li>
            <li>
              <span className="text-foreground font-medium">
                {langPack.projectType}:
              </span>{" "}
              {data.projectType}
            </li>
            <li>
              <span className="text-foreground font-medium">
                {langPack.budget}:
              </span>{" "}
              {data.budget}
            </li>
            <li>
              <span className="text-foreground font-medium">
                {langPack.companySize}:
              </span>{" "}
              {data.companySize}
            </li>
            <li>
              <span className="text-foreground font-medium">
                {langPack.techStack}:
              </span>{" "}
              {data.techStack || "(not specified)"}
            </li>
            <li className="whitespace-pre-wrap">
              <span className="text-foreground font-medium">
                {langPack.projectDescription}:
              </span>{" "}
              {data.description}
            </li>
          </ul>
          <div className="pt-4">
            <Button variant="outline" asChild>
              <Link href="/">{langPack.backToHome}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{langPack.startProject}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          {/* Project Type */}
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="projectType">
              {langPack.projectType}
            </label>
            <Select
              value={data.projectType}
              onValueChange={(v) => handleChange("projectType", v)}
            >
              <SelectTrigger
                id="projectType"
                aria-invalid={!!errors.projectType}
              >
                <SelectValue placeholder="Select a project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Web App">Web App</SelectItem>
                <SelectItem value="Mobile App">Mobile App</SelectItem>
                <SelectItem value="API / Backend">API / Backend</SelectItem>
                <SelectItem value="Fullstack">Fullstack</SelectItem>
                <SelectItem value="No Idea">I don&apos;t know</SelectItem>
              </SelectContent>
            </Select>
            {/* Hidden field so Select value is submitted */}
            <input type="hidden" name="projectType" value={data.projectType} />
            {errors.projectType && (
              <p className="text-xs text-destructive">{errors.projectType}</p>
            )}
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="description">
              {langPack.tellUsAboutProject}
            </label>
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={(e) => handleChange("description", e.target.value)}
              aria-invalid={!!errors.description}
              placeholder="What are you building? What problem does it solve? Any timelines?"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input min-h-32 flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive md:text-sm"
            />
            {errors.description && (
              <p className="text-xs text-destructive">{errors.description}</p>
            )}
          </div>

          {/* Tech stack */}
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="techStack">
              {langPack.preferTechStack}
            </label>
            <Input
              id="techStack"
              name="techStack"
              value={data.techStack}
              onChange={(e) => handleChange("techStack", e.target.value)}
              placeholder="e.g. Next.js, React Native, Node.js, PostgreSQL, AWS"
            />
          </div>

          {/* Budget */}
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="budget">
              {langPack.budget}
            </label>
            <Select
              value={data.budget}
              onValueChange={(v) => handleChange("budget", v)}
            >
              <SelectTrigger id="budget" aria-invalid={!!errors.budget}>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="< $5k">{"< $5k"}</SelectItem>
                <SelectItem value="$5k - $10k">$5k - $10k</SelectItem>
                <SelectItem value="$10k - $25k">$10k - $25k</SelectItem>
                <SelectItem value="$25k - $50k">$25k - $50k</SelectItem>
                <SelectItem value="> $50k">{"> $50k"}</SelectItem>
                <SelectItem value="Not sure">Not sure</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="budget" value={data.budget} />
            {errors.budget && (
              <p className="text-xs text-destructive">{errors.budget}</p>
            )}
          </div>

          {/* Company size */}
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="companySize">
              {langPack.companySize}
            </label>
            <Select
              value={data.companySize}
              onValueChange={(v) => handleChange("companySize", v)}
            >
              <SelectTrigger
                id="companySize"
                aria-invalid={!!errors.companySize}
              >
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Solo / Founder">Solo / Founder</SelectItem>
                <SelectItem value="2 - 10">2 - 10</SelectItem>
                <SelectItem value="11 - 50">11 - 50</SelectItem>
                <SelectItem value="51 - 200">51 - 200</SelectItem>
                <SelectItem value="> 200">{"> 200"}</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="companySize" value={data.companySize} />
            {errors.companySize && (
              <p className="text-xs text-destructive">{errors.companySize}</p>
            )}
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="name">
                {langPack.yourName}
              </label>
              <Input
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                aria-invalid={!!errors.name}
                placeholder="Jane Doe"
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="email">
                {langPack.email}
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                aria-invalid={!!errors.email}
                placeholder="jane@example.com"
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full md:w-auto"
              disabled={isPending || Object.keys(errors).length > 0}
            >
              {isPending
                ? (langPack.sending ?? "Sending...")
                : langPack.submitEnquiry}
            </Button>
            {state.error && (
              <p className="text-xs text-destructive mt-2">{state.error}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
