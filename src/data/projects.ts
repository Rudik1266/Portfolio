export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  coverImage: string;
  type: "internal" | "external";
  url: string;
  year?: string;
  role?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "dvoryk-by",
    title: "Dvoryk.by — Инженерное благоустройство",
    description:
      "Официальный сайт компании по комплексному благоустройству частных и коммерческих территорий. Продуманная архитектура, интерактивная демонстрация услуг, автомобильных навесов и дренажных систем под ключ.",
    tags: ["Next.js", "Коммерческий проект", "UI/UX", "Благоустройство"],
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    type: "internal",
    url: "https://www.dvoryk.by",
    year: "2025",
    role: "Full-Stack Development",
    featured: true,
  },
  {
    id: "lumora-studio",
    title: "Lumora — Design & Engineering Studio",
    description:
      "Премиальный сайт независимой студии дизайна и разработки. Минималистичная типографика, адаптивная верстка, кастомный интерактивный интерфейс и безупречные микровзаимодействия.",
    tags: ["Design System", "Interactive", "Engineering", "Branding"],
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    type: "internal",
    url: "/demos/lumora",
    year: "2025",
    role: "Full-Stack & Creative Direction",
    featured: true,
  },
  {
    id: "laocoon-webgl",
    title: "The Statue of Laocoön",
    description:
      "Иммерсивный кинематографический 3D-опыт скульптуры Лаокоона. Динамическое освещение, кастомный курсор, плавная физика камеры и глубокая темная атмосфера музейной инсталляции.",
    tags: ["WebGL", "Three.js", "3D Cinematic", "Creative Dev"],
    coverImage:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    type: "internal",
    url: "/demos/laocoon",
    year: "2025",
    role: "WebGL & Creative Tech",
    featured: true,
  },
  {
    id: "loopstack",
    title: "Loopstack — Minimal Interface",
    description:
      "Концептуальный цифровой продукт со светящимися кинетическими градиентами, пульсирующими микро-индикаторами и плавной сценографией на стыке искусства и интерфейса.",
    tags: ["Next.js", "Design System", "Framer Motion", "Minimalism"],
    coverImage:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    type: "internal",
    url: "/demos/loopstack",
    year: "2024",
    role: "UI/UX & Frontend",
    featured: false,
  },
];
