export const origin = "https://www.martindicovsky.com.ar";

const whatsappPhone = "5491122528446";

export const whatsappMessages = {
  general:
    "Hola Martín, te escribo desde martindicovsky.com.ar. Quiero hacerte una consulta.",
  capacitaciones:
    "Hola Martín, te escribo desde la web. Quiero consultar por una capacitación para mi empresa.",
} as const;

export function whatsappUrl(message: string = whatsappMessages.general) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Martín Dicovsky",
  role: "Coach para personas empáticas",
  claim:
    "Ayudo a personas empáticas a sanar su autoestima y construir relaciones sanas y auténticas en 90 días.",
  calendly: "https://calendly.com/coach-martindicovsky/45",
  claseGratuita: "https://guia.martindicovsky.com.ar/",
  spotify:
    "https://open.spotify.com/show/0TWe0P99qUISVhRZb7Ckyh?si=b20f5d4da8b34ac6",
  instagram: "https://www.instagram.com/coachmartin.ok/",
  tiktok: "https://www.tiktok.com/@coachmartin.ok",
  linkedin: "https://www.linkedin.com/in/martindicovsky",
  youtube: "https://www.youtube.com/@coachmartinok",
  whatsapp: whatsappUrl(),
  whatsappCapacitaciones: whatsappUrl(whatsappMessages.capacitaciones),
  whatsappLabel: "+54 9 11 2252-8446",
  email: "coach@martindicovsky.com.ar",
};

export const negocio = {
  nombre: "Martín Dicovsky",
  direccion: "Los Malvones 3953, B1669AAA Pilar, Provincia de Buenos Aires",
  calle: "Los Malvones 3953",
  localidad: "Pilar",
  provincia: "Provincia de Buenos Aires",
  codigoPostal: "B1669AAA",
  telefonoDisplay: "011 2252-8446",
  telefonoTel: "+541122528446",
  mapsUrl:
    "https://www.google.com/maps/place/Coach+Martin+Dicovsky/@-34.4292272,-58.7964666,17z/data=!3m1!4b1!4m6!3m5!1s0x8632f61b742dfb6b:0x5c28de952b9345bd!8m2!3d-34.4292272!4d-58.7938917!16s%2Fg%2F11zyp4t95s?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
  geo: {
    region: "AR-B",
    placename: "Pilar, Buenos Aires",
    latitude: -34.4292272,
    longitude: -58.7938917,
  },
  horarios: [
    { dia: "Lunes", horario: "8:00 a.m. – 7:00 p.m." },
    { dia: "Martes", horario: "8:00 a.m. – 7:00 p.m." },
    { dia: "Miércoles", horario: "8:00 a.m. – 7:00 p.m." },
    { dia: "Jueves", horario: "8:00 a.m. – 7:00 p.m." },
    { dia: "Viernes", horario: "8:00 a.m. – 7:00 p.m." },
    { dia: "Sábado", horario: "Cerrado" },
    { dia: "Domingo", horario: "Cerrado" },
  ],
};

export const linkTitles = {
  home: "Inicio — Martín Dicovsky",
  coaching: "Método S.I.A.: coaching 1:1 de 90 días",
  capacitaciones: "Capacitaciones ejecutivas en Zona Norte y CABA",
  claseGratuita: "Clase gratuita para empáticos",
  sobreMi: "Sobre Martín Dicovsky",
  testimonios: "Testimonios de clientes del Método S.I.A.",
  podcast: "Podcast Protagonistas en Spotify",
  contacto: "Contacto con Martín Dicovsky",
  faq: "Preguntas frecuentes del coaching",
  calendly: "Agendar videollamada de admisión con Martín Dicovsky",
  whatsapp: "Escribir a Martín Dicovsky por WhatsApp",
  email: "Enviar email a Martín Dicovsky",
  maps: "Ver la ubicación de Martín Dicovsky en Google Maps",
  instagram: "Instagram de Martín Dicovsky",
  tiktok: "TikTok de Martín Dicovsky",
  linkedin: "LinkedIn de Martín Dicovsky",
  spotify: "Escuchar Protagonistas Podcast en Spotify",
  designer: "Sitio web de Patricio Baliña",
} as const;

export const nav = [
  { to: "/coach-para-empaticos", label: "Método S.I.A.", title: linkTitles.coaching },
  { to: "/capacitaciones", label: "Capacitaciones", title: linkTitles.capacitaciones },
  { to: "/clase-gratuita", label: "Clase gratuita", title: linkTitles.claseGratuita },
  { to: "/sobre-mi", label: "Sobre mí", title: linkTitles.sobreMi },
  { to: "/testimonios", label: "Testimonios", title: linkTitles.testimonios },
  { to: "/podcast", label: "Podcast", title: linkTitles.podcast },
  { to: "/contacto", label: "Contacto", title: linkTitles.contacto },
] as const;

export const pasos = [
  {
    n: "01",
    title: "Evaluación y filtro",
    text: 'Agendamos una charla directa. No es una "llamada de regalo": en esta etapa vemos si realmente estás para comprometerte con tu cambio o si buscás que alguien te resuelva la vida. Si veo que el programa no es para vos, te lo voy a decir para evitar que ambos perdamos el tiempo. Mi compromiso es total a la hora de ayudarte, y espero lo mismo de vos.',
  },
  {
    n: "02",
    title: "Método S-I-A en acción",
    text: "Sin teoría barata ni frases motivacionales de instagram. Identificamos las verdaderas causas de que te postergues y dudes de vos, cortamos con la complacencia y desarmamos el miedo al rechazo. Ordenamos tu cabeza y tus hábitos.",
  },
  {
    n: "03",
    title: "Acción real y límites sostenidos",
    text: "Aprender herramientas y no aplicarlas es no aprenderlas. En esta etapa implementás los microhábitos, ponés los límites que venís esquivando y dejás de postergarte. Te desafío y acompaño semana a semana para que esa confianza que construimos no se caiga ante el primer conflicto.",
  },
];

export const paraQuien = [
  "Siempre estás para los demás, pero te dejás siempre para el final.",
  'Te cuesta decir "no" y después te sentís con culpa o te enojás con vos mismo/a.',
  "Evitás el conflicto a toda costa hasta que explotás o te alejás en silencio.",
  "Sostenés relaciones donde das todo y terminás recibiendo migajas.",
  "Elegís personas que al principio parecen ideales, pero terminan desgastándote y haciéndote dudar de vos.",
  "En tu trabajo sos muy responsable, pero en tus metas personales te postergás y procrastinás.",
];

export const noEsPara = [
  "Quien busca terapia clínica o tratamiento de salud mental.",
  "Quien quiere que otro le resuelva la vida sin poner acción propia.",
  "Quien busca una receta motivacional rápida en lugar de un proceso.",
];

export const testimonios = [
  {
    name: "Judith Medina",
    quote:
      "Mis sesiones con martin me ayudaron a valorarme, fortalecerme, mejorar mi autoestima. Me llevo herramientas en cada sesión. Lectura agradable y sobre todo amor propio.",
  },
  {
    name: "Lenny Lennards",
    quote:
      "La ayuda de Martín fue fundamental para que pudiera encontrar mi verdadero potencial y aprendiera a explotarlo, tanto en lo profesional como en lo personal. Soy hoy una mejor versión de mí mismo gracias a sus consejos, su visión, su capacidad de desafiar mis creencias limitantes y las herramientas que fue proporcionándome para cada reto que hubo que superar.",
  },
  {
    name: "Felicitas Tapia",
    quote:
      "Martin, ha sido netamente luz, en el momento q atravesaba. Con las herramientas q me dejó, me manejo cotidianamente y aunque todo lleva un proceso, entendí q había elegido bien a mi coach. A pesar q estoy muy bien, él siempre está presente, con un audio un mensaje, para saber cómo sigue mi existencia 🤗! Gracias por estar en mi vida Martín!!!!😊",
  },
  {
    name: "Antonio G",
    quote:
      "La sesión con Martín fue muy natural. Hablamos de todo un poco, ya que en ese momento yo estaba concretando varios proyectos. Además, Martín es un profesional que te acompaña incluso fuera de la sesión. Lo recomiendo al 100%.",
  },
  {
    name: "Samira Reyes",
    quote:
      "Cuando estás atrapado en un problema, cambiar la situación parece imposible y es normal dudar antes de buscar ayuda. A mí me pasó, pero Martín desde el principio me generó una comodidad y confianza única. Vale cada peso y cada segundo del proceso. Con su guía aprendí a gestionar mis relaciones, a ver las cosas desde otra perspectiva y a frenar los pensamientos negativos. Gracias a esto, avancé en mi carrera, mejoré mis vínculos personales, y potencié mis hábitos diarios. Realmente marcó un antes y un después en mi vida. ¡Un camino de crecimiento que valió la pena cada segundo y en el que seguimos trabajando!",
  },
  {
    name: "Ariel Mataitis",
    quote:
      "Martín ha sido un necesario apoyo para la toma de decisiones claves en mi vida personal y profesional. Empático, sincero y con enorme capacidad de escucha activa, tiene la habilidad de conducirte a una profunda reflexión y análisis. No dudo en recomendarlo.",
  },
  {
    name: "Tom Elizalde",
    quote:
      "Mi experiencia con Martín ha sido y sigue siendo muy positiva. En los últimos 5 años me ha ayudado con mi desarrollo profesional, moldeando y conceptualizando mi liderazgo, la comunicación, a identificar sesgos y encontrar herramientas para lidiar con presiones, balance vida/trabajo y objetivos personales. Si estás buscando o necesitando un cambio, y no sabés por donde arrancar, llamalo.",
  },
  {
    name: "Patricio Balinia",
    quote:
      "Hacer un proceso de coaching 1 a 1 con Martín fue clave para mi día a día. Estaba mal organizado y me faltaba disciplina para sostener proyectos. Me ayudó a trabajar mis hábitos, ordenar prioridades y ganar muchísima confianza en mí mismo. Se nota su compromiso y profesionalismo!",
  },
  {
    name: "Yenny Silva",
    quote:
      "El método SIA fortaleció mi amor propio, me enseñó a poner límites con respeto y a dejar de conformarme con lo que no me hace bien. Fue una transformación profunda: reconocí mi valor y empecé a tomar decisiones más conscientes. Un antes y un después en mi vida. Gracias Martin 🙏",
  },
].map((item) => ({ ...item, rating: 5 as const }));

export const faqPrograma = [
  {
    q: "¿Cuánto dura el programa?",
    a: "Son 90 días de trabajo 1:1. En mi experiencia, cuando aplicás las herramientas con compromiso real, los resultados y las metas se alcanzan incluso antes de ese plazo. Trabajamos con sesiones individuales y seguimiento por WhatsApp entre encuentros para asegurar que nada te frene.",
  },
  {
    q: "¿Es online o presencial?",
    a: "Es 100% online vía videollamada. Podés hacer el proceso desde cualquier lugar, con total privacidad y flexibilidad de horarios para adaptarlo a tu rutina.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Saber un precio no te sirve de nada si no entendés qué vas a transformar ni cómo vamos a trabajar. En la primera charla evaluamos si el programa es para vos y te explico el valor de la inversión de forma transparente, junto con las opciones de financiación que mejor se adapten a tu situación.",
  },
  {
    q: "¿En qué se diferencia de la terapia tradicional?",
    a: "Muchas terapias se quedan analizando el pasado para entender el porqué de tus conductas. Acá no nos quedamos en la teoría: vamos a la acción. Te doy herramientas concretas para que aprendas a poner límites sin culpa, desarmes la complacencia y cambies tu forma de relacionarte con los demás.",
  },
];

export const faqGeneral = [
  ...faqPrograma,
  {
    q: "¿Cómo es la primera videollamada?",
    a: "Es una charla directa, sin venta agresiva. Me contás tu situación, te devuelvo una lectura honesta y, si tiene sentido, te explico cómo sería trabajar juntos con el Método S.I.A.",
  },
  {
    q: "¿Qué metodología usás?",
    a: "El Método S.I.A.: un trabajo orientado a la acción sobre autoestima, límites y vínculos, construido a partir de mi formación con referentes internacionales y de mi propio proceso.",
  },
  {
    q: "¿Lo que hablamos es confidencial?",
    a: "Sí. Todo lo que compartís en las sesiones es estrictamente confidencial.",
  },
];

export const faqCapacitaciones = [
  {
    q: "¿Para quiénes son las capacitaciones?",
    a: "Para empresas y pymes de Zona Norte y CABA, mandos medios y líderes, e instituciones u organizaciones que quieran mejorar comunicación, feedback, resolución de conflictos y liderazgo.",
  },
  {
    q: "¿Dónde se dictan?",
    a: "Son 100% presenciales, en formato in-company: vamos a tus oficinas. Zona Norte y CABA (Argentina).",
  },
  {
    q: "¿Qué duración tienen?",
    a: "La duración, la cantidad de encuentros, el tamaño del grupo y la inversión se definen después de un diagnóstico inicial donde me contás qué problema necesitan resolver.",
  },
  {
    q: "¿Es lo mismo que el coaching 1:1?",
    a: "No. El coaching 1:1 es el Método S.I.A., un proceso individual de 90 días y 100% online. Las capacitaciones son encuentros presenciales y grupales para organizaciones.",
  },
];

export const temarioCapacitaciones = [
  {
    t: "01. Comunicación clara: pedidos y acuerdos",
    d: "El 90% de los errores en una empresa ocurren porque alguien asumió algo en lugar de pedirlo claramente. Herramientas para dejar de suponer, hacer pedidos efectivos y generar acuerdos medibles.",
  },
  {
    t: "02. Feedbacks que funcionan",
    d: "Cómo corregir un mal desempeño sin destruir la motivación del empleado, y cómo reconocer el buen trabajo. El arte de dar y recibir feedback honesto sin que se vuelva personal.",
  },
  {
    t: "03. Resolución de conflictos y conversaciones difíciles",
    d: "Los problemas que se barren bajo la alfombra terminan explotando. Técnicas concretas para abordar roces en el equipo, negociar posturas y poner límites profesionales sin dañar el clima laboral.",
  },
  {
    t: "04. Estilos de liderazgo y gestión de equipos",
    d: "No existe un único modelo de líder. Cómo adaptar tu estilo a cada persona, liderando con empatía para cuidar el recurso humano, pero sin perder la firmeza, la dirección ni la exigencia.",
  },
];

export const beneficiosClase = [
  {
    t: "Entender por qué das demasiado",
    d: "El problema no es tu empatía ni que seas “demasiado buena”, sino que estás actuando desde una herida de rechazo o abandono. Vas a entender en profundidad por qué te pasa esto.",
  },
  {
    t: "El costo oculto de ser complaciente",
    d: "Vas a ver con claridad cómo la falta de límites te está arruinando sin que te des cuenta. Vas a entender que muchas veces el problema no es que tu jefe exija de más o tu pareja sea mala, sino el lugar de sumisión donde vos te estás poniendo. Te vas a dar cuenta de en qué situaciones te afecta realmente.",
  },
  {
    t: "Soluciones y pasos concretos",
    d: "No nos quedamos solo en la teoría. Te llevás herramientas exactas y pasos concretos para aplicar a partir de hoy mismo, cortar con el autosabotaje y empezar a sanar.",
  },
];
