export type Tech = {
  label: string;
  color: string;
  logo: string;
  logoColor?: string;
};

export function shieldsUrl({ label, color, logo, logoColor }: Tech) {
  const base = `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}`;
  const params = new URLSearchParams({
    logo,
    style: "for-the-badge",
    ...(logoColor ? { logoColor } : {}),
  });
  return `${base}?${params.toString()}`;
}

export const PROGRAMMING: Tech[] = [
  { label: "C", color: "A8B9CC", logo: "c", logoColor: "black" },
  { label: "C++", color: "00599C", logo: "cplusplus", logoColor: "white" },
  { label: "Java", color: "007396", logo: "openjdk", logoColor: "white" },
  { label: "JavaScript", color: "F7DF1E", logo: "javascript", logoColor: "black" },
  { label: "TypeScript", color: "3178C6", logo: "typescript", logoColor: "white" },
  { label: "Python", color: "3776AB", logo: "python", logoColor: "white" },
];

export const FRONTEND: Tech[] = [
  { label: "React", color: "61DAFB", logo: "react", logoColor: "black" },
  { label: "Next.js", color: "000000", logo: "nextdotjs", logoColor: "white" },
  { label: "React Native", color: "61DAFB", logo: "react", logoColor: "black" },
  { label: "Expo", color: "000020", logo: "expo", logoColor: "white" },
  { label: "Redux", color: "764ABC", logo: "redux", logoColor: "white" },
  { label: "Zustand", color: "18181B", logo: "three-dot-js", logoColor: "white" },
  { label: "TailwindCSS", color: "06B6D4", logo: "tailwindcss", logoColor: "white" },
  { label: "MUI", color: "007FFF", logo: "mui", logoColor: "white" },
  { label: "shadcn/ui", color: "000000", logo: "shadcnui", logoColor: "white" },
  { label: "D3.js", color: "F9A03C", logo: "d3dotjs", logoColor: "white" },
];

export const BACKEND: Tech[] = [
  { label: "Spring Boot", color: "6DB33F", logo: "springboot", logoColor: "white" },
  { label: "Node.js", color: "339933", logo: "nodedotjs", logoColor: "white" },
  { label: "Express", color: "000000", logo: "express", logoColor: "white" },
  { label: "Flask", color: "000000", logo: "flask", logoColor: "white" },
  { label: "Auth0", color: "EB5424", logo: "auth0", logoColor: "white" },
  { label: "RESTful APIs", color: "0052CC", logo: "swagger", logoColor: "white" },
];

export const DEVOPS: Tech[] = [
  { label: "Docker", color: "2496ED", logo: "docker", logoColor: "white" },
  { label: "Kubernetes", color: "326CE5", logo: "kubernetes", logoColor: "white" },
  { label: "Skaffold", color: "18A999", logo: "skaffold", logoColor: "white" },
  { label: "Helm", color: "0F1689", logo: "helm", logoColor: "white" },
  { label: "Kafka", color: "231F20", logo: "apachekafka", logoColor: "white" },
  { label: "NATS", color: "27AAE1", logo: "natsdotio", logoColor: "white" },
  { label: "GitHub Actions", color: "2088FF", logo: "githubactions", logoColor: "white" },
];

export const DATABASES: Tech[] = [
  { label: "Oracle", color: "F80000", logo: "oracle", logoColor: "white" },
  { label: "PostgreSQL", color: "4169E1", logo: "postgresql", logoColor: "white" },
  { label: "MongoDB", color: "47A248", logo: "mongodb", logoColor: "white" },
  { label: "Redis", color: "DC382D", logo: "redis", logoColor: "white" },
  { label: "Firebase", color: "FFCA28", logo: "firebase", logoColor: "black" },
];

export const CLOUD: Tech[] = [
  { label: "AWS", color: "232F3E", logo: "amazonaws", logoColor: "FF9900" },
  { label: "Azure", color: "0078D4", logo: "microsoftazure", logoColor: "white" },
];

export const ALL_TECH: Tech[] = [
  ...PROGRAMMING,
  ...FRONTEND,
  ...BACKEND,
  ...DATABASES,
  ...DEVOPS,
  ...CLOUD,
];

