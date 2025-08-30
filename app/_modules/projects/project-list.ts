export interface ProjectType {
  id: number;
  title: string;
  description: string;
  href?: string;
  github?: string;
  youtube?: string;
  demo?: string;
  skills: string[];
  images: string[];
}

export const projects: ProjectType[] = [
  {
    id: 9,
    title: "BookCrossing - Book Exchange Platform",
    href: "/my-projects/bookcrossing-app",
    description:
      "A full-stack book exchange platform where readers can list, search, and swap books. Built with a Next.js UI, Spring Boot microsevice services and Kafka, secured with Auth0 and designed for cloud‑native deployment.",
    skills: [
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Jest",
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Skaffold",
      "Helm",
      "Auth0",
      "Cloudflare Tunnel",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1756516937/Screenshot_1_scin5c.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1756516937/Screenshot_2_iimm1d.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1756516937/Screenshot_3_udgpg0.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1756516937/Screenshot_4_fccjmv.jpg",
    ],
  },
  {
    id: 8,
    title: "Inventory Management Platform",
    href: "/my-projects/inventory-mgt-app",
    description:
      "An end-to-end inventory system with mobile and web apps for stock operations, product tracking, and role-based access. Includes real-time updates and an admin dashboard for insights.",
    skills: [
      "Expo React Native",
      "Next.js",
      "Redux",
      "Zustand",
      "Jest",
      "AWS",
      "Docker",
      "TypeScript",
      "TailwindCSS",
      "Auth0",
      "MongoDB",
      "GitHub Actions",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1756518379/Screenshot_1_p8xeox.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1756518379/Screenshot_2_jjru4e.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1756518380/Screenshot_3_uhjq2n.jpg",
    ],
  },
  {
    id: 7,
    href: "/my-projects/emp-performance-app",
    title: "Employee Performance Tracking Mobile & Web Full-stack App",
    description:
      "A cross-platform performance tracking app with mobile and web clients for goals, reviews, and dashboards. Backed by an Express.js and MongoDB API with Auth0, and delivered via CI/CD with automated tests.",
    skills: [
      "Expo React Native",
      "React",
      "Redux",
      "D3.js",
      "Express.js",
      "MongoDB",
      "Auth0",
      "AWS",
      "GitHub Actions",
      "Jest",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713811801/portfolio/mobile_1_1_ala4q6.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713811814/portfolio/mobile_2_2_ptwuhs.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713811826/portfolio/mobile_3_3_d37pzx.jpg",
    ],
  },
  {
    id: 6,
    title: "Virtual Library Web App",
    description:
      "A virtual library that mirrors real‑world borrowing: browse, reserve, and manage books with secure authentication. MERN stack with a TypeScript React frontend, Express API, and Auth0 integration, hosted on Firebase.",
    github: "https://github.com/Marjorieccc/LibraLounge",
    demo: "https://johnny-library.web.app/",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Auth0",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803590/portfolio/lib-3_zdr150.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803593/portfolio/lib-4_vsjqpm.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803588/portfolio/lib-2_n84bry.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803586/portfolio/lib-1_wnhkjb.jpg",
    ],
  },
  {
    id: 5,
    title: "Reversi Game",
    description:
      "An AI‑assisted Reversi game with a Flask backend serving a trained PyTorch model and a React frontend. Deployed on AWS with Docker, Nginx, and Gunicorn, using CloudFront and Route53 for scalability.",
    github: "https://github.com/johnny-chung/Reversi_Web_App_Backend",
    youtube: "https://youtu.be/YTaivEa7ww4",
    skills: [
      "Python",
      "Flask",
      "PyTorch",
      "Nginx",
      "Gunicorn",
      "AWS",
      "React",
      "Javascript",
      "Docker",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803596/portfolio/reversi_1_aimqac.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803598/portfolio/reversi_2_nvpi9s.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803601/portfolio/reversi_3_nerm4o.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803604/portfolio/reversi_4_cmmgxr.jpg",
    ],
  },
  {
    id: 4,
    title: "Node.js Blog Service App",
    description:
      "A blog service built with Express and Handlebars for posts, comments, and auth. Uses PostgreSQL and MongoDB Atlas, with continuous deployment to Cyclic.",
    github: "https://github.com/johnny-chung/IG_Web_app_full_stack",
    skills: [
      "Javascript",
      "Express",
      "Bootstrap",
      "PostgreSQL",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806393/portfolio/ig_1_wwlkym.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806461/portfolio/ig_2_el9ag6.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806475/portfolio/ig_3_ru3sh5.jpg",
    ],
  },
  {
    id: 3,
    title: "React Practice App",
    description:
      "A React practice app exploring Redux Toolkit, Context API, and modern patterns.",
    skills: ["React", "Typescript", "Redux TK", "Context API"],
    github: "https://github.com/johnny-chung/ReactPractice_wordwise",
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713805068/portfolio/practice_1_twwo7b.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713805073/portfolio/practice_2_p6frj4.jpg",
    ],
  },
  {
    id: 2,
    title: "OOP - C++ School Project",
    description:
      "A C++ project demonstrating core OOP concepts—inheritance, polymorphism, containers, multithreading, and custom data structures—with unit tests and code reviews.",
    skills: ["C++", "OOP", "Data structure & analysis"],
    github: "https://github.com/johnny-chung/oop_345/tree/main/project",
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806700/portfolio/c_1_nea4qn.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806707/portfolio/c_2_jh97iq.jpg",
    ],
  },
  {
    id: 1,
    title: "Portfolio Webapp",
    description:
      "A personal portfolio built with React and TypeScript using MUI and Tailwind. CI/CD publishes to AWS S3 via GitHub Actions.",
    skills: ["React", "Tailwind CSS", "MUI", "Typescript"],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713804065/portfolio/portfolio_vmbgdu.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806891/portfolio/portfolio_2_mrqf2i.jpg",
    ],
  },
];
