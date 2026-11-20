import React, { useState } from 'react';
import { CORTES_MOCK, Corte } from '../data/mockData';

export const CortesView: React.FC = () => {
  const [selectedCorte, setSelectedCorte] = useState<Corte>(CORTES_MOCK[0]);
  const [showPrintModal, setShowPrintModal] = useState(false);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="h4 m-0">Órdenes de Corte & Atados</h1>
          <p className="small text-muted mb-0">Control de tendido, pesaje y asignación de atados por talla y color</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-abbie d-flex align-items-center gap-2" onClick={() => setShowPrintModal(true)}>
            <i className="fas fa-print"></i>
            <span>Imprimir Rótulos QR de Atados</span>
          </button>
        </div>
      </div>

      <div className="card card-ghost mb-4">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <span className="badge bg-danger me-2">Lote Activo</span>
              <strong className="h5 mb-0">{selectedCorte.nombreCorte}</strong> — {selectedCorte.prendaNombre}
            </div>
            <span className="badge bg-success">{selectedCorte.estado}</span>
          </div>

          <div className="row g-3 p-3 bg-light rounded mb-4">
            <div className="col-6 col-md-3">
              <div className="small text-muted text-uppercase">Tipo de Tela</div>
              <div className="fw-bold">{selectedCorte.tipoTela}</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="small text-muted text-uppercase">Capas Tendidas</div>
              <div className="fw-bold">{selectedCorte.capas} capas</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="small text-muted text-uppercase">Total Cortado</div>
              <div className="fw-bold text-danger">{selectedCorte.undTotal} Unidades</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="small text-muted text-uppercase">Fecha de Corte</div>
              <div className="fw-bold">{selectedCorte.fecha}</div>
            </div>
          </div>

          {/* MATRIZ DE ASIGNACIÓN CORETEXTIL */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h6 fw-bold text-danger mb-0 d-flex align-items-center gap-2">
              <i className="fas fa-table-cells"></i>
              Matriz de Asignación por Talla, Color y Operario (CoreTextil)
            </h2>
            <span className="small text-muted">Trazabilidad individual de cada bulto físico</span>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle mb-0">
              <thead className="table-light text-center small">
                <tr>
                  <th style={{ width: '15%' }}>Color</th>
                  <th style={{ width: '10%' }}>Talla</th>
                  <th style={{ width: '22%' }}>Código QR del Atado</th>
                  <th style={{ width: '10%' }}>Cantidad</th>
                  <th style={{ width: '25%' }}>Operario Responsable</th>
                  <th style={{ width: '18%' }}>Avance</th>
                </tr>
              </thead>
              <tbody>
                {selectedCorte.detallesColor.flatMap((detColor) =>
                  detColor.tallas.flatMap((tallaInfo) =>
                    tallaInfo.atados.map((atado) => (
                      <tr key={atado.codigoQR}>
                        <td className="fw-bold">{atado.color}</td>
                        <td className="text-center">
                          <span className="badge bg-dark px-2">{atado.talla}</span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <i className="fas fa-qrcode text-danger"></i>
                            <span className="font-monospace fw-bold">{atado.codigoQR}</span>
                          </div>
                        </td>
                        <td className="text-center fw-bold">{atado.unidades} UND</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <i className="fas fa-user-circle text-muted"></i>
                            <select
                              className="form-select form-select-sm"
                              defaultValue={atado.responsable}
                              onChange={(e) => {
                                atado.responsable = e.target.value;
                              }}
                            >
                              <option value="WILLY 19N">WILLY 19N</option>
                              <option value="Daniel Martínez">Daniel Martínez</option>
                              <option value="Rosa Elena">Rosa Elena</option>
                              <option value="Carmen Silva">Carmen Silva</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="progress flex-grow-1" style={{ height: 10 }}>
                              <div
                                className={`progress-bar ${
                                  atado.progreso === 100
                                    ? 'bg-success'
                                    : atado.progreso > 50
                                    ? 'bg-primary'
                                    : 'bg-warning'
                                }`}
                                style={{ width: `${atado.progreso}%` }}
                              ></div>
                            </div>
                            <span className="small fw-bold">{atado.progreso}%</span>
                          </div>
                        </td>
                      </tr>
                    ))
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL SIMULACIÓN IMPRESIÓN QR */}
      {showPrintModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content shadow-lg border-0" style={{ borderRadius: 16 }}>
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <i className="fas fa-tags text-danger"></i>
                  <strong>Tiquetes QR de Atados Listos para Impresión</strong>
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowPrintModal(false)}></button>
              </div>
              <div className="modal-body p-4">
                <p className="text-muted small">
                  Estos rótulos se imprimen en papel adhesivo o cartulina para engrapar en cada atado de tela que sale de la mesa de corte:
                </p>

                <div className="row g-3">
                  {selectedCorte.detallesColor.flatMap((d) =>
                    d.tallas.flatMap((t) =>
                      t.atados.map((a) => (
                        <div className="col-12 col-md-6" key={a.codigoQR}>
                          <div className="p-3 border rounded-3 bg-white shadow-sm d-flex gap-3 align-items-center">
                            <div
                              style={{
                                width: 80,
                                height: 80,
                                background: '#111',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                              }}
                            >
                              <i className="fas fa-qrcode fs-1"></i>
                            </div>
                            <div className="small">
                              <div className="fw-bold text-danger">{a.codigoQR}</div>
                              <div>
                                Ref: <strong>Natalia Crepe</strong>
                              </div>
                              <div>
                                Color: <strong>{a.color}</strong> | Talla: <strong>{a.talla}</strong>
                              </div>
                              <div className="text-muted">
                                Cantidad: <strong>{a.unidades} piezas</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  )}
                </div>
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-secondary" onClick={() => setShowPrintModal(false)}>
                  Cerrar
                </button>
                <button
                  className="btn btn-abbie"
                  onClick={() => {
                    alert('Enviando a impresora térmica POS / Zebra de corte...');
                    setShowPrintModal(false);
                  }}
                >
                  <i className="fas fa-print me-1"></i> Imprimir Todo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
