// ============================================================
// MatrixLab Intelligence — Central Configuration
// ============================================================
// Edit this file to update WhatsApp number, social links, etc.
// ============================================================

// ── WhatsApp ────────────────────────────────────────────────
// REPLACE: change to your real WhatsApp number (with country code, no + or spaces)
const WA_NUMBER = "+5215655575131"

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? "Hola, me interesa cotizar algo con MatrixLab Intelligence."
  )
  // wa.me exige el número sin "+", espacios ni guiones
  return `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${text}`
}

// ── Social Links ─────────────────────────────────────────────
// REPLACE: update each URL with your real social profiles
export const SOCIAL_LINKS = {
  whatsapp: whatsappLink(),
  instagram: "https://www.instagram.com/matrixlabstickers?igsh=MW5mY2V3MTdwMnA1aw%3D%3D&utm_source=qr",  // 
  facebook:  "https://www.facebook.com/people/MatrixLab-Stickers/61589782191329/?sk=reels_tab",   // 
  tiktok:    "https://www.tiktok.com/@matrixlab.stickers",    // 
  website:   "https://matrixlabintelligence.com",            // ← REPLACE
} as const

// ── Business Units ───────────────────────────────────────────
export const BUSINESS_UNITS = [
  {
    id: "stickers",
    name: "MatrixLab Stickers",
    tagline: "Personalización creativa",
    desc: "Stickers, imanes, playeras, gorras y grabado láser para personas, eventos y emprendimientos.",
    accent: "purple" as const,
    href: "#stickers",
    cta: "Crear algo personalizado",
    waMessage: "Hola, me interesa crear un producto personalizado con MatrixLab Stickers.",
  },
  {
    id: "experiences",
    name: "Experiencias creativas",
    tagline: "Talleres y cursos",
    desc: "Cursos de manualidades, personalización y talleres creativos para familias, grupos y emprendedores.",
    accent: "aqua" as const,
    href: "#experiencias",
    cta: "Ver próximas experiencias",
    waMessage: "Hola, me interesa conocer los talleres y experiencias creativas.",
  },
  {
    id: "enterprise",
    name: "Soluciones para empresas",
    tagline: "Producción a escala",
    desc: "Merchandising, kits para eventos, regalos corporativos y producción personalizada para marcas y empresas.",
    accent: "coral" as const,
    href: "#empresas",
    cta: "Cotizar solución empresarial",
    waMessage: "Hola, me interesa una cotización para soluciones empresariales con MatrixLab.",
  },
  {
    id: "store",
    name: "Tienda online",
    tagline: "Catálogo visual",
    desc: "Explora categorías de productos listos para personalizar, regalar o producir en volumen.",
    accent: "gold" as const,
    href: "#tienda",
    cta: "Explorar catálogo",
    waMessage: "Hola, me gustaría explorar el catálogo de productos.",
  },
] as const

export type AccentColor = (typeof BUSINESS_UNITS)[number]["accent"]

// ── Store Categories ──────────────────────────────────────────
export const STORE_CATEGORIES = [
  {
    id: "imanes",
    name: "Imanes",
    desc: "Imanes personalizados para nevera, eventos y regalos especiales.",
    accent: "purple" as const,
  },
  {
    id: "stickers",
    name: "Stickers",
    desc: "Stickers en cualquier forma, tamaño y acabado. Desde uno hasta miles.",
    accent: "aqua" as const,
  },
  {
    id: "playeras",
    name: "Playeras y hoodies",
    desc: "Prendas personalizadas con tu diseño, para grupos, eventos o colecciones.",
    accent: "coral" as const,
  },
  {
    id: "gorras",
    name: "Gorras",
    desc: "Gorras personalizadas para eventos, equipos y marcas.",
    accent: "gold" as const,
  },
  {
    id: "laser",
    name: "Grabado láser",
    desc: "Grabado de alta precisión en madera, metal, acrílico y más.",
    accent: "purple" as const,
  },
  {
    id: "3d",
    name: "Impresiones 3D",
    desc: "Piezas impresas en 3D para prototipos, decoración y productos únicos.",
    accent: "aqua" as const,
  },
] as const

// ── Experience Cards ─────────────────────────────────────────
export const EXPERIENCES = [
  {
    id: "vasos-glow",
    name: "Vasos Glow",
    desc: "Diseña y personaliza tu propio vaso iluminado en un taller práctico y divertido.",
    tag: "Popular",
    accent: "aqua" as const,
  },
  {
    id: "manualidades",
    name: "Cursos de manualidades",
    desc: "Aprende técnicas creativas para hacer productos únicos desde cero.",
    tag: "Principiantes",
    accent: "purple" as const,
  },
  {
    id: "personalizacion",
    name: "Personalización de productos",
    desc: "Taller práctico para aprender a personalizar prendas, accesorios y artículos.",
    tag: "Práctico",
    accent: "coral" as const,
  },
  {
    id: "familias",
    name: "Talleres para familias",
    desc: "Experiencias creativas diseñadas para niños, familias y grupos.",
    tag: "Familiar",
    accent: "gold" as const,
  },
  {
    id: "emprendedores",
    name: "Talleres para emprendedores",
    desc: "Aprende a crear y vender productos personalizados con tu propia marca.",
    tag: "Negocio",
    accent: "aqua" as const,
  },
  {
    id: "eventos",
    name: "Experiencias para eventos",
    desc: "Activaciones creativas para bodas, cumpleaños, fiestas y eventos corporativos.",
    tag: "Eventos",
    accent: "purple" as const,
  },
] as const

// ── Enterprise Features ──────────────────────────────────────
export const ENTERPRISE_METRICS = [
  { value: "Desde 1 pieza", label: "hasta miles" },
  { value: "Eventos y marcas", label: "empresariales" },
  { value: "Producción", label: "flexible y rápida" },
  { value: "Diseño +", label: "fabricación" },
] as const

export const ENTERPRISE_SERVICES = [
  "T-Shirt Lab para eventos corporativos",
  "Merchandising personalizado para tu marca",
  "Kits y packs para eventos y lanzamientos",
  "Producciones de alto volumen",
  "Regalos corporativos únicos",
  "Material promocional impactante",
  "Desarrollo de piezas a medida",
  "Activaciones creativas en eventos",
] as const
