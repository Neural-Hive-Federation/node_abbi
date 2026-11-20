import React from 'react';

interface Props {
  partesListas: string[];
  operario?: string;
  talla?: string;
  color?: string;
}

export const GarmentVisualizer2D: React.FC<Props> = ({
  partesListas,
  operario = "WILLY 19N",
  talla = "M",
  color = "Café Moka"
}) => {
  const isPartDone = (part: string) => partesListas.includes(part);

  const getColor = (part: string) => {
    return isPartDone(part) ? "#10b981" : "#e2e8f0";
  };

  const getStroke = (part: string) => {
    return isPartDone(part) ? "#059669" : "#cbd5e1";
  };

  return (
    <div className="card card-ghost p-3">
      <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
        <div>
          <span className="badge bg-danger me-2">Visor 2D CoreTextil</span>
          <strong>Estado en Vivo de Prenda</strong>
        </div>
        <div className="small text-muted">
          Talla: <strong>{talla}</strong> | Color: <strong>{color}</strong>
        </div>
      </div>

      <div className="d-flex justify-content-center py-2" style={{ background: "#f8fafc", borderRadius: 8 }}>
        <svg viewBox="0 0 320 280" width="280" height="240" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.05))" }}>
          {/* CUELLO */}
          <path
            d="M 120 40 Q 160 70 200 40 L 190 25 Q 160 40 130 25 Z"
            fill={getColor("cuello")}
            stroke={getStroke("cuello")}
            strokeWidth="2"
          >
            <title>Cuello Camisero: {isPartDone("cuello") ? "Listo" : "Pendiente"}</title>
          </path>

          {/* MANGA IZQUIERDA */}
          <path
            d="M 115 45 L 60 90 L 80 120 L 120 85 Z"
            fill={getColor("mangas")}
            stroke={getStroke("mangas")}
            strokeWidth="2"
          >
            <title>Manga Izquierda: {isPartDone("mangas") ? "Listo" : "Pendiente"}</title>
          </path>

          {/* MANGA DERECHA */}
          <path
            d="M 205 45 L 260 90 L 240 120 L 200 85 Z"
            fill={getColor("mangas")}
            stroke={getStroke("mangas")}
            strokeWidth="2"
          >
            <title>Manga Derecha: {isPartDone("mangas") ? "Listo" : "Pendiente"}</title>
          </path>

          {/* CUERPO DELANTERO */}
          <path
            d="M 120 70 L 200 70 L 205 170 L 115 170 Z"
            fill={getColor("delantero")}
            stroke={getStroke("delantero")}
            strokeWidth="2"
          >
            <title>Cuerpo Delantero / Cartera: {isPartDone("delantero") ? "Listo" : "Pendiente"}</title>
          </path>

          {/* LÍNEA DE BOTONERA */}
          <line x1="160" y1="70" x2="160" y2="170" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="2" />
          <circle cx="160" cy="90" r="3" fill="#64748b" />
          <circle cx="160" cy="115" r="3" fill="#64748b" />
          <circle cx="160" cy="140" r="3" fill="#64748b" />

          {/* PANTALÓN / SHORT */}
          {/* PRETINA */}
          <rect
            x="115"
            y="175"
            width="90"
            height="18"
            rx="3"
            fill={getColor("pretina")}
            stroke={getStroke("pretina")}
            strokeWidth="2"
          >
            <title>Pretina con elástico: {isPartDone("pretina") ? "Listo" : "Pendiente"}</title>
          </rect>

          {/* PIERNA IZQUIERDA */}
          <path
            d="M 115 195 L 155 195 L 150 250 L 110 250 Z"
            fill={getColor("bota")}
            stroke={getStroke("bota")}
            strokeWidth="2"
          >
            <title>Bota y Tiro Izquierdo: {isPartDone("bota") ? "Listo" : "Pendiente"}</title>
          </path>

          {/* PIERNA DERECHA */}
          <path
            d="M 165 195 L 205 195 L 210 250 L 170 250 Z"
            fill={getColor("bota")}
            stroke={getStroke("bota")}
            strokeWidth="2"
          >
            <title>Bota y Tiro Derecho: {isPartDone("bota") ? "Listo" : "Pendiente"}</title>
          </path>
        </svg>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-2 text-center small">
        <div className="d-flex align-items-center gap-1">
          <span style={{ width: 12, height: 12, background: "#10b981", borderRadius: 3, display: "inline-block" }}></span>
          <span className="text-muted">Operación Lista</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <span style={{ width: 12, height: 12, background: "#e2e8f0", borderRadius: 3, display: "inline-block" }}></span>
          <span className="text-muted">Pendiente</span>
        </div>
      </div>

      <div className="mt-2 text-center p-2 rounded" style={{ background: "#f1f5f9", fontSize: "0.85rem" }}>
        Responsable en Mesa: <strong className="text-danger">{operario}</strong>
      </div>
    </div>
  );
};
