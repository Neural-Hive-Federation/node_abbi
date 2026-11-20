import outfitsRaw from './outfitsDatabase.json';

export interface Outfit {
  id: number;
  nombre: string;
  fecha: string;
  estado: "borrador" | "confirmado" | "cerrado";
  imagen: string;
  prendas: Prenda[];
}

export interface Prenda {
  id?: number;
  nombre: string;
  actividades: Actividad[];
}

export interface Actividad {
  id?: number;
  nombre: string;
  proceso: string;
  precio: number;
  partePrenda?: "cuello" | "mangas" | "delantero" | "espalda" | "pretina" | "bota";
}

export interface Corte {
  id: number;
  outfitNombre: string;
  prendaNombre: string;
  nombreCorte: string;
  tipoTela: string;
  fecha: string;
  estado: string;
  capas: number;
  undTotal: number;
  detallesColor: CorteColorDetalle[];
}

export interface CorteColorDetalle {
  color: string;
  undTotal: number;
  tallas: { talla: string; und: number; atados: AtadoQR[] }[];
}

export interface AtadoQR {
  codigoQR: string;
  color: string;
  talla: string;
  unidades: number;
  responsable: string;
  estado: "corte" | "en_costura" | "completado";
  progreso: number; // 0 a 100%
  partesListas: string[];
}

// Convertimos la base de datos scrapeada de ABBI
export const OUTFITS_MOCK: Outfit[] = (outfitsRaw as any[])
  .filter((o) => o.nombre && o.nombre !== "Outfit 1")
  .map((o, idx) => ({
    id: o.id || idx + 1,
    nombre: o.nombre,
    fecha: o.fecha || "2026-11-15",
    estado: (o.estado === "borrador" || o.estado === "confirmado" || o.estado === "cerrado") ? o.estado : "confirmado",
    imagen: o.imagen || "/assets/1786019632_3a65bd7a377edc65.jpg",
    prendas: (o.prendas || []).map((p: any, pIdx: number) => ({
      id: pIdx + 1,
      nombre: p.nombre,
      actividades: (p.actividades || []).map((a: any, aIdx: number) => ({
        id: aIdx + 1,
        nombre: a.nombre,
        proceso: a.proceso || "Confección",
        precio: a.precio || 650,
      })),
    })),
  }));

export const CORTES_MOCK: Corte[] = [
  {
    id: 160,
    outfitNombre: "Lupe 14 nov",
    prendaNombre: "LUPE CREPE CUELLO V",
    nombreCorte: "CORTE LUPE CREPE LOTE 01",
    tipoTela: "CREPE ALGODÓN",
    fecha: "2026-11-17",
    estado: "confirmado",
    capas: 25,
    undTotal: 150,
    detallesColor: [
      {
        color: "CAFÉ MOKA",
        undTotal: 75,
        tallas: [
          {
            talla: "S",
            und: 25,
            atados: [
              {
                codigoQR: "LUP-CAM-S-MOKA-01",
                color: "CAFÉ MOKA",
                talla: "S",
                unidades: 25,
                responsable: "Daniel Martínez",
                estado: "completado",
                progreso: 100,
                partesListas: ["cuello", "mangas", "delantero", "espalda"],
              },
            ],
          },
          {
            talla: "M",
            und: 25,
            atados: [
              {
                codigoQR: "LUP-CAM-M-MOKA-02",
                color: "CAFÉ MOKA",
                talla: "M",
                unidades: 25,
                responsable: "WILLY 19N",
                estado: "en_costura",
                progreso: 65,
                partesListas: ["cuello", "delantero"],
              },
            ],
          },
          {
            talla: "L",
            und: 25,
            atados: [
              {
                codigoQR: "LUP-CAM-L-MOKA-03",
                color: "CAFÉ MOKA",
                talla: "L",
                unidades: 25,
                responsable: "Rosa Elena",
                estado: "corte",
                progreso: 15,
                partesListas: ["delantero"],
              },
            ],
          },
        ],
      },
      {
        color: "MARFIL",
        undTotal: 75,
        tallas: [
          {
            talla: "S",
            und: 25,
            atados: [
              {
                codigoQR: "LUP-CAM-S-MARFIL-04",
                color: "MARFIL",
                talla: "S",
                unidades: 25,
                responsable: "WILLY 19N",
                estado: "en_costura",
                progreso: 40,
                partesListas: ["delantero"],
              },
            ],
          },
          {
            talla: "M",
            und: 50,
            atados: [
              {
                codigoQR: "LUP-CAM-M-MARFIL-05",
                color: "MARFIL",
                talla: "M",
                unidades: 50,
                responsable: "Carmen Silva",
                estado: "corte",
                progreso: 0,
                partesListas: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
