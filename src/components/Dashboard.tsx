import React from 'react';

interface Props {
  setActiveTab: (tab: string) => void;
  onOpenQR: () => void;
}

export const Dashboard: React.FC<Props> = ({ setActiveTab, onOpenQR }) => {
  return (
    <div className="container py-4 py-md-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h1 className="h4 m-0">
          Bienvenido, <strong>WILLY 19N</strong> <span className="chip text-capitalize">operario</span>
        </h1>
        <div className="d-flex gap-2">
          <span className="badge bg-white text-dark shadow-sm px-3 py-2 border d-flex align-items-center gap-2">
            <span style={{ width: 8, height: 8, background: "#10b981", borderRadius: "50%" }}></span>
            Planta de Confección Conectada
          </span>
        </div>
      </div>

      {/* BANNER CORETEXTIL */}
      <div className="card card-ghost card-core mb-4 p-3 shadow-sm">
        <div className="card-body p-2 d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge chip-core">NUEVA FUNCIÓN ACTIVA</span>
              <strong className="text-purple" style={{ color: "#7c3aed" }}>
                Trazabilidad Inteligente por Atados QR & Visor 2D
              </strong>
            </div>
            <p className="small text-muted mb-0">
              Ahora cada corte se divide en atados con código QR único por talla y color.
              Escanea el tiquete de tu lote para registrar avance sin buscar en listas manuales.
            </p>
          </div>
          <button className="btn btn-core d-flex align-items-center gap-2" onClick={onOpenQR}>
            <i className="fas fa-qrcode"></i>
            <span>Probar Escáner de Atado</span>
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* CONJUNTOS */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-ghost h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="h5">
                <i className="fas fa-tshirt"></i> Gestión de Conjuntos
              </h2>
              <p className="text-muted mb-4">
                Crea conjuntos, fotos y prendas. Ahora potenciado con <strong>Vision Engine V2</strong> para despiece automático.
              </p>
              <div className="mt-auto d-flex gap-2">
                <button className="btn btn-abbie" onClick={() => setActiveTab('outfits')}>
                  Ir a Conjuntos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CORTE */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-ghost h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="h5">
                <i className="fas fa-cut"></i> Corte & Atados
              </h2>
              <p className="text-muted mb-4">
                Registra capas, pesajes y ahora consulta la <strong>Matriz de Responsables por Talla y Color</strong>.
              </p>
              <div className="mt-auto d-flex gap-2">
                <button className="btn btn-abbie" onClick={() => setActiveTab('cortes')}>
                  Ir a Corte
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCCIÓN */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-ghost h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="h5">
                <i className="fas fa-cogs"></i> Producción en Vivo
              </h2>
              <p className="text-muted mb-4">
                Registra actividades por color y visualiza el ensamble de la prenda en el <strong>Visor 2D interactivo</strong>.
              </p>
              <div className="mt-auto d-flex gap-2">
                <button className="btn btn-abbie" onClick={() => setActiveTab('produccion')}>
                  Registrar Avance
                </button>
                <button className="btn btn-outline-dark" onClick={() => setActiveTab('historial')}>
                  Historial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
