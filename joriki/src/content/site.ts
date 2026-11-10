import type { IconName } from "../components/icons";

export const siteName = "Joriki";

export const title = "Joriki | Liderazgo y conexión humana";

export const description =
  "Formando líderes que se comunican con claridad, delegan con criterio y recuperan su tiempo.";

export const ogTitle = "Líderes que delegan, se comunican con claridad y recuperan su tiempo.";

export const ogDescription =
  "Programas ejecutivos diseñados para implementar herramientas prácticas: delegar, resolver roces cotidianos y potenciar equipos.";

export const ogImagePath = "/og-image.png";

export const ogImageAlt = "Joriki · Liderazgo y conexión humana";

export const email = "coaching@martindicovsky.com.ar";

const whatsapp = "https://wa.me/5491122528446";

export const links = {
  contact: `mailto:${email}?subject=Capacitaciones%20corporativas`,
  callout: `${whatsapp}?text=Hola%20Mart%C3%ADn,%20quiero%20coordinar%20una%20llamada%20de%20diagn%C3%B3stico%20por%20las%20capacitaciones%20de%20Joriki`,
  programa: `${whatsapp}?text=Hola%20Mart%C3%ADn,%20quiero%20consultar%20por%20el%20programa%20de%20Desarrollo%20de%20Liderazgo%20de%20Joriki`,
  taller: `${whatsapp}?text=Hola%20Mart%C3%ADn,%20quiero%20consultar%20por%20el%20taller%20de%20Liderazgo%20e%20IA%20de%20Joriki`,
  whatsapp,
  instagram: "https://www.instagram.com/coachmartin.ok/",
  tiktok: "https://www.tiktok.com/@coachmartin.ok",
  linkedin: "https://www.linkedin.com/in/martindicovsky",
  spotify: "https://open.spotify.com/show/0TWe0P99qUISVhRZb7Ckyh",
  designer: "https://patriciobalina.com.ar/es/",
} as const;

export const whatsappLabel = "WhatsApp: +54 9 11 2252-8446";

export const address = "Provincia de Buenos Aires, Argentina";

export const negocio = {
  nombre: "Joriki Consultora",
  provincia: "Buenos Aires",
  telefono: "+54 9 11 2252-8446",
};

export const logo = {
  src: "/images/joriki-logo.png",
  alt: "Joriki · Liderazgo y conexión humana",
  width: 1657,
  height: 540,
} as const;

export const headerNav = [
  { label: "Programas", href: "#programas" },
  { label: "Facilitadores", href: "#facilitadores" },
  { label: "Metodología", href: "#metodologia" },
] as const;

export const footerNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programas", href: "#programas" },
  { label: "Quiénes facilitan", href: "#facilitadores" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const socials: { icon: IconName; label: string; href: string }[] = [
  { icon: "instagram", label: "Instagram", href: links.instagram },
  { icon: "music-2", label: "TikTok", href: links.tiktok },
  { icon: "linkedin", label: "LinkedIn", href: links.linkedin },
  { icon: "audio-lines", label: "Spotify", href: links.spotify },
];

export const hours = [["Lunes a Viernes", "8:00 – 19:00"]] as const;

export const ejes: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "messages-square",
    title: "Comunicación y Feedback Efectivo",
    text: "Conversaciones difíciles sin fricción destructiva.",
  },
  {
    icon: "handshake",
    title: "Pedidos y Acuerdos Impecables",
    text: "Fin de los malentendidos operativos y la falta de compromiso.",
  },
  {
    icon: "scale",
    title: "Resolución de Conflictos",
    text: "Estrategias para destrabar tensiones entre áreas o colaboradores.",
  },
  {
    icon: "unlock",
    title: "Superación del Micromanagement",
    text: "Hacia el liderazgo por confianza, autonomía y objetivos claros.",
  },
  {
    icon: "compass",
    title: "Estilos de Liderazgo",
    text: "Adaptación al perfil y madurez de cada miembro del equipo.",
  },
];

export const ejesIA: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "sliders-horizontal",
    title: "Criterio vs. Automatización",
    text: "Sostener la escucha y la cercanía cuando los procesos se digitalizan.",
  },
  {
    icon: "shield-check",
    title: "Gestión de la Incertidumbre",
    text: "Desactivar temores y generar seguridad psicológica frente a los cambios tecnológicos.",
  },
  {
    icon: "messages-square",
    title: "Conversaciones Reales",
    text: "Abordar lo que la pantalla no muestra: desmotivación, roces de equipo y clima laboral.",
  },
  {
    icon: "user-check",
    title: "El Rol del Líder",
    text: "Cómo transformar el tiempo que ahorra la tecnología en acompañamiento y desarrollo de personas.",
  },
];

export const metodo: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "50% Práctica / 50% Concepto",
    text: "Simulaciones de casos reales, roleplays y dinámicas 100% aplicadas. Cero monólogos teóricos: cada concepto se entrena pensando en el día a día operativo del líder.",
  },
  {
    icon: "video",
    title: "Sin fatiga ni relleno",
    text: "Dinámicas ágiles y participativas diseñadas para sostener el foco de principio a fin, tanto en sala presencial como en entornos virtuales.",
  },
  {
    icon: "zap",
    title: "Transferencia Inmediata",
    text: "Ni charlas motivacionales ni teoría abstracta: herramientas prácticas para resolver los problemas del día a día.",
  },
];

export const programaFacts: { icon: IconName; label: string }[] = [
  { icon: "video", label: "6 encuentros virtuales" },
  { icon: "clock", label: "90 min c/u" },
  { icon: "users", label: "10–15 mandos medios" },
  { icon: "play", label: "Acceso a grabaciones" },
];

export const tallerFacts: { icon: IconName; label: string }[] = [
  { icon: "video", label: "3 encuentros virtuales" },
  { icon: "clock", label: "90 min c/u" },
  { icon: "users", label: "10–15 mandos medios" },
  { icon: "play", label: "Acceso a grabaciones" },
];

export const facilitators = [
  {
    img: "/images/martin-dicovsky.jpg",
    width: 1100,
    height: 1100,
    name: "Martín Dicovsky",
    role: "Co-Founder de Joriki | Coach Organizacional (UdeSA)",
    bio: "Coach Organizacional egresado de la Universidad de San Andrés y Life Coach (Insight Coaching Academy, USA). Con trayectoria operativa como Gerente de Administración en empresas de tecnología, aporta la mirada pragmática del negocio, la gestión de operaciones y la facilitación grupal.",
  },
  {
    img: "/images/francisco-cuerda.png",
    width: 250,
    height: 250,
    name: "Francisco Cuerda",
    role: "Co-Founder de Joriki | Psicólogo Laboral y Organizacional",
    bio: "Especialista con más de 20 años de experiencia en gestión del talento, selección de personal, evaluación psicotécnica y consultoría. Combina la perspectiva sistémica con la psicología aplicada para acompañar el desarrollo humano, ordenar dinámicas de equipo y fortalecer la cultura interna de las organizaciones.",
  },
] as const;
