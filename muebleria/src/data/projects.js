// ─── data/projects.js ─────────────────────────────────────────────────────────
// Para agregar un proyecto nuevo, solo añadí un objeto al final del array.
//
// Campos:
//   id        → número único
//   category  → "SALAS" | "DORMITORIOS" | "COMEDORES" | "OFICINAS"
//   size      → "large" (4:3) | "tall" (3:4) | "small" (1:1)
//   src       → URL de la imagen
//   alt       → descripción accesible
//   title     → nombre de la pieza
// ──────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    category: "SALAS",
    size: "large",
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    alt: "Sala minimalista con sofá modular",
    title: "MÓDULO OSLO",
  },
  {
    id: 2,
    category: "DORMITORIOS",
    size: "small",
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    alt: "Cabecera de madera artesanal",
    title: "CABECERA HARU",
  },
  {
    id: 3,
    category: "COMEDORES",
    size: "small",
    src: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=800&q=80",
    alt: "Mesa de comedor en roble",
    title: "MESA ARCO",
  },
  {
    id: 4,
    category: "OFICINAS",
    size: "tall",
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    alt: "Escritorio ejecutivo en nogal",
    title: "ESCRITORIO NERO",
  },
  {
    id: 5,
    category: "SALAS",
    size: "small",
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Estantería empotrada",
    title: "LIBRERÍA KOTO",
  },
  {
    id: 6,
    category: "DORMITORIOS",
    size: "large",
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
    alt: "Dormitorio suite completo",
    title: "SUITE ALBA",
  },
  {
    id: 7,
    category: "COMEDORES",
    size: "tall",
    src: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80",
    alt: "Sillas tapizadas a medida",
    title: "SILLA DUNA",
  },
  {
    id: 8,
    category: "OFICINAS",
    size: "small",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    alt: "Sala de reuniones con muebles a medida",
    title: "SALA VENN",
  },
  {
    id: 9,
    category: "SALAS",
    size: "small",
    src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    alt: "Sillón de lectura en cuero",
    title: "SILLÓN LUNO",
  },
  {
    id: 10,
    category: "COMEDORES",
    size: "large",
    src: "https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?w=1200&q=80",
    alt: "Comedor familiar en madera maciza",
    title: "COMEDOR TERRA",
  },
  {
    id: 11,
    category: "DORMITORIOS",
    size: "small",
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    alt: "Cómoda con espejo integrado",
    title: "CÓMODA MIRU",
  },
  {
    id: 12,
    category: "OFICINAS",
    size: "small",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    alt: "Espacio de trabajo con shelving",
    title: "SHELVING HAUS",
  },
];

// Categorías derivadas automáticamente del array — no hace falta editarlas a mano
export const categories = [
  "TODOS",
  ...new Set(projects.map((p) => p.category)),
];
