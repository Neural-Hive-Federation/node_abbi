export interface Outfit {
  id: number;
  nombre: string;
  fecha: string;
  estado: "borrador" | "confirmado" | "cerrado";
  imagen: string;
  prendas: Prenda[];
}

export interface Prenda {
  id: number;
  nombre: string;
  actividades: Actividad[];
}

export interface Actividad {
  id: number;
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

export const OUTFITS_MOCK: Outfit[] = [
  {
    id: 298,
    nombre: "Short & Camisa Natalia Crepe",
    fecha: "2026-11-18",
    estado: "confirmado",
    imagen: "/assets/1786019632_3a65bd7a377edc65.jpg",
    prendas: [
      {
        id: 345,
        nombre: "CAMISA CREPE NATALIA",
        actividades: [
          { id: 1, nombre: "CORTE CAMISA CON COMPLEMENTOS", proceso: "Corte", precio: 450, partePrenda: "delantero" },
          { id: 2, nombre: "filete de camisa crepe con interlon y bordes", proceso: "Confección", precio: 600, partePrenda: "delantero" },
          { id: 3, nombre: "ARMADA DE CUELLO CAMISERO", proceso: "Confección", precio: 800, partePrenda: "cuello" },
          { id: 4, nombre: "POSTURA DE PUÑOS A MANGAS", proceso: "Confección", precio: 700, partePrenda: "mangas" },
          { id: 5, nombre: "ruedo de borde inferior de camisa", proceso: "Confección", precio: 500, partePrenda: "espalda" },
          { id: 6, nombre: "BOTON Y OJAL X6", proceso: "Terminación", precio: 350, partePrenda: "delantero" },
        ],
      },
      {
        id: 346,
        nombre: "PANTALÓN CREPE NATALIA",
        actividades: [
          { id: 7, nombre: "CORTE PANTALON CON COMPLEMENTOS", proceso: "Corte", precio: 450, partePrenda: "pretina" },
          { id: 8, nombre: "filete de pantalón crepe con pretina", proceso: "Confección", precio: 650, partePrenda: "pretina" },
          { id: 9, nombre: "union borde de bolsillo y fijado", proceso: "Confección", precio: 550, partePrenda: "delantero" },
          { id: 10, nombre: "ENCAUCHADO DE PRETINA CON 3 LINEAS", proceso: "Confección", precio: 900, partePrenda: "pretina" },
          { id: 11, nombre: "RUEDO DE BOTA DE PANTALON", proceso: "Terminación", precio: 400, partePrenda: "bota" },
        ],
      },
    ],
  },
  {
    id: 297,
    nombre: "Lupe 14 nov — Crepe Cuello V",
    fecha: "2026-11-14",
    estado: "confirmado",
    imagen: "/assets/1786019632_3a65bd7a377edc65.jpg",
    prendas: [
      {
        id: 344,
        nombre: "LUPE CREPE CUELLO V",
        actividades: [
          { id: 12, nombre: "Filete de hombros y sesgo cuello V", proceso: "Confección", precio: 550, partePrenda: "cuello" },
          { id: 13, nombre: "Cierre de laterales y mangas", proceso: "Confección", precio: 750, partePrenda: "mangas" },
          { id: 14, nombre: "Dobladillo bota y planchado", proceso: "Terminación", precio: 400, partePrenda: "bota" },
        ],
      },
    ],
  },
];

export const CORTES_MOCK: Corte[] = [
  {
    id: 160,
    outfitNombre: "Short & Camisa Natalia Crepe",
    prendaNombre: "CAMISA CREPE NATALIA",
    nombreCorte: "CORTE NATALIA LOTE 01",
    tipoTela: "CREPE ALGODÓN",
    fecha: "2026-11-18",
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
                codigoQR: "NAT-CAM-S-MOKA-01",
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
                codigoQR: "NAT-CAM-M-MOKA-02",
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
                codigoQR: "NAT-CAM-L-MOKA-03",
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
                codigoQR: "NAT-CAM-S-MARFIL-04",
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
                codigoQR: "NAT-CAM-M-MARFIL-05",
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
