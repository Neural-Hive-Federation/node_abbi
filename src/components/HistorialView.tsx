import React from 'react';

export const HistorialView: React.FC = () => {
  const registros = [
    {
      fecha: "2026-11-20 10:15",
      atado: "NAT-CAM-M-MOKA-02",
      outfit: "Short & Camisa Natalia Crepe",
      prenda: "CAMISA CREPE NATALIA",
      actividad: "Filete de hombros y escote",
      color: "CAFÉ MOKA",
      talla: "M",
      cantidad: 25,
      valorUnit: 450,
      subtotal: 11250,
    },
    {
      fecha: "2026-11-20 11:30",
      atado: "NAT-CAM-M-MOKA-02",
      outfit: "Short & Camisa Natalia Crepe",
      prenda: "CAMISA CREPE NATALIA",
      actividad: "Armada de cuello camisero",
      color: "CAFÉ MOKA",
      talla: "M",
      cantidad: 25,
      valorUnit: 800,
      subtotal: 20000,
    },
    {
      fecha: "2026-11-20 12:05",
      atado: "NAT-CAM-S-MARFIL-04",
      outfit: "Short & Camisa Natalia Crepe",
      prenda: "CAMISA CREPE NATALIA",
      actividad: "CORTE CAMISA CON COMPLEMENTOS",
      color: "MARFIL",
      talla: "S",
      cantidad: 25,
      valorUnit: 450,
      subtotal: 11250,
    },
  ];

  const totalAcumulado = registros.reduce((acc, r) => acc + r.subtotal, 0);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="h4 m-0">Mi Historial de Liquidación & Destajo</h1>
          <p className="small text-muted mb-0">Comprobantes validados contra topes de corte en base de datos</p>
        </div>
      </div>

      <div className="card card-ghost mb-4 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <div className="small text-muted">Período de Liquidación:</div>
            <strong className="fs-5">2026-11-01 al 2026-11-20</strong>
          </div>
          <div className="text-end">
            <div className="small text-muted">Total a Pagar Acumulado:</div>
            <div className="h4 m-0 fw-bold text-success">${totalAcumulado.toLocaleString('es-CO')} COP</div>
          </div>
        </div>
      </div>

      <div className="card card-ghost">
        <div className="card-body p-0 table-responsive">
          <table className="table table-sm table-striped align-middle mb-0">
            <thead className="table-light small">
              <tr>
                <th>Fecha y Hora</th>
                <th>Atado QR</th>
                <th>Outfit / Prenda</th>
                <th>Actividad</th>
                <th>Color</th>
                <th className="text-center">Talla</th>
                <th className="text-end">Cantidad</th>
                <th className="text-end">V. Unitario</th>
                <th className="text-end">Subtotal</th>
                <th className="text-center">Validación</th>
              </tr>
            </thead>
            <tbody className="small">
              {registros.map((r, i) => (
                <tr key={i}>
                  <td className="text-muted">{r.fecha}</td>
                  <td>
                    <span className="font-monospace fw-bold text-danger">{r.atado}</span>
                  </td>
                  <td>
                    <strong>{r.outfit}</strong>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                      {r.prenda}
                    </div>
                  </td>
                  <td>{r.actividad}</td>
                  <td>{r.color}</td>
                  <td className="text-center">
                    <span className="badge bg-dark">{r.talla}</span>
                  </td>
                  <td className="text-end fw-bold">{r.cantidad}</td>
                  <td className="text-end text-muted">${r.valorUnit}</td>
                  <td className="text-end fw-bold text-success">${r.subtotal.toLocaleString('es-CO')}</td>
                  <td className="text-center">
                    <span className="badge bg-success" title="Validado en base de datos sin sobrecupo">
                      <i className="fas fa-shield-alt me-1"></i> Tope OK
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
