"use server";

import { Resend } from "resend";

type EnquiryData = {
  projectType: string;
  description: string;
  techStack?: string;
  budget: string;
  companySize: string;
  name: string;
  email: string;
};

type ActionState = {
  ok: boolean;
  error?: string | null;
};

function validate(data: EnquiryData): string | null {
  if (!data.projectType) return "Please select a project type.";
  if (!data.description || data.description.trim().length < 20)
    return "Please describe your project (min 20 chars).";
  if (!data.budget) return "Please choose a budget.";
  if (!data.companySize) return "Please choose a company size.";
  if (!data.name || data.name.trim().length < 2)
    return "Please enter your name.";
  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email))
    return "Please enter a valid email.";
  return null;
}

export async function submitEnquiry(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const payload: EnquiryData = {
    projectType: (formData.get("projectType") || "") as string,
    description: (formData.get("description") || "") as string,
    techStack: (formData.get("techStack") || "") as string,
    budget: (formData.get("budget") || "") as string,
    companySize: (formData.get("companySize") || "") as string,
    name: (formData.get("name") || "") as string,
    email: (formData.get("email") || "") as string,
  };

  const error = validate(payload);
  if (error) return { ok: false, error };

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) return { ok: false, error: "CONTACT_TO_EMAIL is not configured." };

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey)
    return { ok: false, error: "RESEND_API_KEY is not configured." };

  const resend = new Resend(resendKey);

  const subject = `New enquiry: ${payload.projectType} from ${payload.name}`;
  const lines = [
    `Project type: ${payload.projectType}`,
    `Budget: ${payload.budget}`,
    `Company size: ${payload.companySize}`,
    `Tech stack: ${payload.techStack || "(not specified)"}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    "Description:",
    payload.description,
  ];

  try {
    await resend.emails.send({
      from: "Portfolio Enquiries <enquiry@goodmanltd.com>",
      to: [to],
      subject,
      text: lines.join("\n"),
    });
    return { ok: true };
  } catch (err) {
    console.error("Failed to send enquiry:", err);
    return {
      ok: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
