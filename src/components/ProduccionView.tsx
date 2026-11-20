import React, { useState } from 'react';
import { AtadoQR } from '../data/mockData';
import { GarmentVisualizer2D } from './GarmentVisualizer2D';

interface Props {
  activeAtado: AtadoQR | null;
  onOpenQR: () => void;
}

export const ProduccionView: React.FC<Props> = ({ activeAtado, onOpenQR }) => {
  const [currentAtado, setCurrentAtado] = useState<AtadoQR>(
    activeAtado || {
      codigoQR: "NAT-CAM-M-MOKA-02",
      color: "CAFÉ MOKA",
      talla: "M",
      unidades: 25,
      responsable: "WILLY 19N",
      estado: "en_costura",
      progreso: 65,
      partesListas: ["cuello", "delantero"],
    }
  );

  const [operaciones, setOperaciones] = useState([
    { id: 1, nombre: "Filete de hombros y escote", parte: "delantero", hechas: 25, max: 25, valor: 450 },
    { id: 2, nombre: "Armada de cuello camisero", parte: "cuello", hechas: 25, max: 25, valor: 800 },
    { id: 3, nombre: "Postura de puños a mangas", parte: "mangas", hechas: 15, max: 25, valor: 700 },
    { id: 4, nombre: "Ruedo inferior y dobladillo", parte: "bota", hechas: 0, max: 25, valor: 500 },
  ]);

  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleSumar = (opId: number, cant: number) => {
    setOperaciones((prev) =>
      prev.map((op) => {
        if (op.id === opId) {
          const nuevaCant = op.hechas + cant;
          if (nuevaCant > op.max) {
            setToastMsg(`⚠️ Bloqueo Anti-Fraude: No puedes reportar más de ${op.max} unidades en este atado.`);
            setTimeout(() => setToastMsg(null), 3500);
            return op;
          }

          // Si completó la operación, agregamos la parte al visualizador 2D
          if (nuevaCant === op.max && !currentAtado.partesListas.includes(op.parte)) {
            setCurrentAtado({
              ...currentAtado,
              partesListas: [...currentAtado.partesListas, op.parte],
            });
          }

          setToastMsg(`✅ Registradas +${cant} unidades en "${op.nombre}"`);
          setTimeout(() => setToastMsg(null), 2500);
          return { ...op, hechas: nuevaCant };
        }
        return op;
      })
    );
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="h4 m-0">Registro de Producción en Vivo</h1>
          <p className="small text-muted mb-0">Captura ágil por destajo con escaneo QR y validación de topes</p>
        </div>
        <button className="btn btn-core d-flex align-items-center gap-2" onClick={onOpenQR}>
          <i className="fas fa-qrcode"></i>
          <span>Escanear Otro Atado</span>
        </button>
      </div>

      {toastMsg && (
        <div className={`alert ${toastMsg.startsWith('⚠️') ? 'alert-warning' : 'alert-success'} shadow-sm mb-4`}>
          {toastMsg}
        </div>
      )}

      {/* TARJETA DEL ATADO ACTIVO */}
      <div className="card card-ghost card-core mb-4 p-3 shadow-sm">
        <div className="card-body p-2 d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                width: 54,
                height: 54,
                background: '#7c3aed',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
            >
              <i className="fas fa-qrcode fs-3"></i>
            </div>
            <div>
              <div className="small text-muted text-uppercase">Atado Identificado por QR</div>
              <div className="h5 mb-0 fw-bold">{currentAtado.codigoQR}</div>
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="text-center px-3 border-end">
              <div className="small text-muted">Color</div>
              <strong>{currentAtado.color}</strong>
            </div>
            <div className="text-center px-3 border-end">
              <div className="small text-muted">Talla</div>
              <span className="badge bg-dark px-2">{currentAtado.talla}</span>
            </div>
            <div className="text-center px-3">
              <div className="small text-muted">Límite Lote</div>
              <strong className="text-danger">{currentAtado.unidades} UND</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* LISTADO DE ACTIVIDADES DEL ATADO */}
        <div className="col-12 col-lg-7">
          <div className="card card-ghost">
            <div className="card-body p-4">
              <h2 className="h6 fw-bold text-danger mb-3">Operaciones Asignadas a tu Cuadrilla</h2>

              <div className="d-flex flex-column gap-3">
                {operaciones.map((op) => (
                  <div key={op.id} className="p-3 border rounded bg-white shadow-sm">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong className="text-dark">{op.nombre}</strong>
                      <span className="badge bg-light text-success border fw-bold">${op.valor} c/u</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="small text-muted">
                        Progreso:{' '}
                        <strong>
                          {op.hechas} de {op.max} piezas
                        </strong>
                      </div>
                      <span className={`small fw-bold ${op.hechas === op.max ? 'text-success' : 'text-primary'}`}>
                        {Math.round((op.hechas / op.max) * 100)}%
                      </span>
                    </div>

                    <div className="progress mb-3" style={{ height: 8 }}>
                      <div
                        className={`progress-bar ${op.hechas === op.max ? 'bg-success' : 'bg-danger'}`}
                        style={{ width: `${(op.hechas / op.max) * 100}%` }}
                      ></div>
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        disabled={op.hechas >= op.max}
                        onClick={() => handleSumar(op.id, 5)}
                      >
                        +5 piezas
                      </button>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        disabled={op.hechas >= op.max}
                        onClick={() => handleSumar(op.id, 10)}
                      >
                        +10 piezas
                      </button>
                      <button
                        className="btn btn-sm btn-abbie"
                        disabled={op.hechas >= op.max}
                        onClick={() => handleSumar(op.id, op.max - op.hechas)}
                      >
                        Completar Lote ({op.max - op.hechas})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VISOR 2D EN TIEMPO REAL */}
        <div className="col-12 col-lg-5">
          <GarmentVisualizer2D
            partesListas={currentAtado.partesListas}
            operario={currentAtado.responsable}
            talla={currentAtado.talla}
            color={currentAtado.color}
          />
        </div>
      </div>
    </div>
  );
};
