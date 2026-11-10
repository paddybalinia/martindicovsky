import type { IconName } from "../components/icons";

export const siteName = "Joriki";

export const title = "Joriki | Programas Ejecutivos de Liderazgo y Equipos";

export const description =
  "Programas in-company de liderazgo práctico y conexión humana: conflictos, acuerdos, feedback y liderazgo en la era de la IA.";

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

export const address = "Los Malvones 3953, B1669AAA Pilar, Provincia de Buenos Aires";

export const negocio = {
  nombre: "Joriki Consultora",
  calle: "Los Malvones 3953",
  localidad: "Pilar",
  provincia: "Buenos Aires",
  codigoPostal: "B1669AAA",
  telefono: "+54 9 11 2252-8446",
  geo: {
    region: "AR-B",
    placename: "Pilar, Buenos Aires",
    latitude: -34.4292272,
    longitude: -58.7938917,
  },
};

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

export const hours = [
  ["Lunes a Viernes", "8:00 – 19:00"],
  ["Sábado", "Cerrado"],
  ["Domingo", "Cerrado"],
] as const;

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

export const modulosIA = [
  {
    n: "01",
    title: "La Paradoja del Algoritmo",
    kicker: "Lectura del subtexto",
    text: "Calibrar lo emocional y gestual frente a la frialdad de la pantalla. Roleplay para abrir conversaciones de clima de equipo sin caer en métricas.",
  },
  {
    n: "02",
    title: "El Antídoto a la Incertidumbre",
    kicker: "Seguridad psicológica",
    text: "Validar el criterio humano, habilitar el error como aprendizaje y desactivar el miedo al reemplazo tecnológico.",
  },
  {
    n: "03",
    title: "Escucha Activa vs. Velocidad Transaccional",
    kicker: "Clínica de casos",
    text: "Cómo reinvertir el tiempo que la IA nos ahorra en el desarrollo real de las personas. Casos reales en vivo.",
  },
] as const;

export const metodo: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "50% Práctica / 50% Concepto",
    text: "Roleplays, simulaciones de casos reales y dinámicas 100% interactivas. Cero monólogos de teoría: cada concepto está pensado para que los líderes puedan aplicarlo de forma inmediata en el día a día con sus equipos.",
  },
  {
    icon: "video",
    title: "Sin fatiga de pantalla",
    text: "Dinámicas ágiles que sostienen la atención y la participación, en la sala o en pantalla.",
  },
  {
    icon: "zap",
    title: "Transferencia Inmediata",
    text: "Herramientas aplicables a las reuniones del día siguiente.",
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
    bio: "Psicólogo Laboral y Organizacional con más de 20 años de experiencia en gestión del talento, selección de personal, evaluación psicotécnica, capacitación y consultoría organizacional. Combina la perspectiva sistémica y la psicología aplicada para acompañar procesos de desarrollo humano, optimizar equipos de trabajo y fortalecer la cultura organizacional.",
  },
] as const;
