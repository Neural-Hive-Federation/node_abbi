import React, { useState } from 'react';
import { OUTFITS_MOCK, Outfit } from '../data/mockData';

export const OutfitsView: React.FC = () => {
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(OUTFITS_MOCK[0]);
  const [analyzingIA, setAnalyzingIA] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState<string | null>(null);

  const handleRunVisionEngine = () => {
    setAnalyzingIA(true);
    setAiAnalysisResult(null);
    setTimeout(() => {
      setAnalyzingIA(false);
      setAiAnalysisResult(
        "✅ Vision Engine V2: Prenda analizada con éxito. Detectadas 2 piezas: Camisa Manga Corta con Cartera y Cuello Camisero + Short Tiro Alto con Pretina Elástica 3 Líneas. Generadas 11 operaciones estándar con tiempo SAM sugerido y balance de línea optimizado."
      );
    }, 1800);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="h4 m-0">Gestión de Conjuntos</h1>
          <p className="small text-muted mb-0">Catálogo de referencias, moldes y fichas técnicas de confección</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-core d-flex align-items-center gap-2" onClick={handleRunVisionEngine}>
            <i className={`fas ${analyzingIA ? 'fa-spinner fa-spin' : 'fa-brain'}`}></i>
            <span>{analyzingIA ? 'Analizando con IA...' : 'Auto-Despiece con Vision Engine'}</span>
          </button>
        </div>
      </div>

      {aiAnalysisResult && (
        <div className="alert alert-success d-flex align-items-center gap-2 shadow-sm mb-4" role="alert">
          <i className="fas fa-check-circle fs-5"></i>
          <div>{aiAnalysisResult}</div>
        </div>
      )}

      <div className="row g-4">
        {/* LISTADO DE CONJUNTOS (LADO IZQUIERDO) */}
        <div className="col-12 col-lg-5">
          <div className="card card-ghost">
            <div className="card-body p-3">
              <h2 className="h6 mb-3 text-danger fw-bold">Catálogo de Outfits</h2>
              <div className="d-flex flex-column gap-3">
                {OUTFITS_MOCK.map((outfit) => (
                  <div
                    key={outfit.id}
                    className={`p-3 rounded border d-flex gap-3 align-items-center cursor-pointer transition ${
                      selectedOutfit?.id === outfit.id ? 'bg-light border-danger shadow-sm' : ''
                    }`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedOutfit(outfit)}
                  >
                    <img
                      src={outfit.imagen}
                      alt={outfit.nombre}
                      style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8 }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold">{outfit.nombre}</div>
                      <div className="small text-muted">Fecha: {outfit.fecha}</div>
                      <span className="badge bg-secondary text-uppercase mt-1" style={{ fontSize: '0.7rem' }}>
                        {outfit.estado}
                      </span>
                    </div>
                    <i className="fas fa-chevron-right text-muted"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DETALLE DEL OUTFIT SELECCIONADO (LADO DERECHO) */}
        {selectedOutfit && (
          <div className="col-12 col-lg-7">
            <div className="card card-ghost">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h2 className="h5 fw-bold mb-1">{selectedOutfit.nombre}</h2>
                    <div className="text-muted small">ID Outfit: #{selectedOutfit.id} | Registrado: {selectedOutfit.fecha}</div>
                  </div>
                  <span className="badge bg-success text-uppercase">{selectedOutfit.estado}</span>
                </div>

                <div className="text-center my-3 p-3 bg-light rounded">
                  <img
                    src={selectedOutfit.imagen}
                    alt={selectedOutfit.nombre}
                    className="img-fluid rounded shadow-sm"
                    style={{ maxHeight: 260, objectFit: 'contain' }}
                  />
                </div>

                <h3 className="h6 fw-bold mt-4 text-danger">Prendas y Operaciones de Confección</h3>
                <div className="accordion mt-3" id="accPrendas">
                  {selectedOutfit.prendas.map((prenda, idx) => (
                    <div className="accordion-item" key={prenda.id}>
                      <h2 className="accordion-header" id={`head-${prenda.id}`}>
                        <button
                          className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${prenda.id}`}
                        >
                          <i className="fas fa-tshirt me-2 text-danger"></i>
                          <strong>{prenda.nombre}</strong>
                          <span className="badge bg-light text-dark border ms-2">
                            {prenda.actividades.length} actividades
                          </span>
                        </button>
                      </h2>
                      <div
                        id={`collapse-${prenda.id}`}
                        className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                      >
                        <div className="accordion-body p-2">
                          <table className="table table-sm table-striped align-middle small mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>Operación</th>
                                <th>Proceso</th>
                                <th className="text-end">Tarifa</th>
                              </tr>
                            </thead>
                            <tbody>
                              {prenda.actividades.map((act) => (
                                <tr key={act.id}>
                                  <td>{act.nombre}</td>
                                  <td>
                                    <span className="badge bg-light text-dark border">{act.proceso}</span>
                                  </td>
                                  <td className="text-end fw-bold text-success">${act.precio} COP</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
