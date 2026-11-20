import React, { useState } from 'react';
import { AtadoQR } from '../data/mockData';

interface Props {
  onScanSuccess: (atado: AtadoQR) => void;
  onClose: () => void;
}

export const QRScannerModal: React.FC<Props> = ({ onScanSuccess, onClose }) => {
  const [inputCode, setInputCode] = useState('');

  const atadosEjemplo: AtadoQR[] = [
    {
      codigoQR: "NAT-CAM-M-MOKA-02",
      color: "CAFÉ MOKA",
      talla: "M",
      unidades: 25,
      responsable: "WILLY 19N",
      estado: "en_costura",
      progreso: 65,
      partesListas: ["cuello", "delantero"]
    },
    {
      codigoQR: "NAT-CAM-S-MARFIL-04",
      color: "MARFIL",
      talla: "S",
      unidades: 25,
      responsable: "WILLY 19N",
      estado: "en_costura",
      progreso: 40,
      partesListas: ["delantero"]
    },
    {
      codigoQR: "NAT-CAM-L-MOKA-03",
      color: "CAFÉ MOKA",
      talla: "L",
      unidades: 25,
      responsable: "Rosa Elena",
      estado: "corte",
      progreso: 15,
      partesListas: ["delantero"]
    }
  ];

  const handleSimulate = (atado: AtadoQR) => {
    onScanSuccess(atado);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = atadosEjemplo.find(a => a.codigoQR.toLowerCase() === inputCode.trim().toLowerCase());
    if (found) {
      onScanSuccess(found);
    } else {
      alert("Atado no encontrado. Prueba seleccionando uno de los atados demo.");
    }
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0" style={{ borderRadius: 16 }}>
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title d-flex align-items-center gap-2">
              <i className="fas fa-qrcode text-danger"></i>
              <strong>Escáner de Atados QR CoreTextil</strong>
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body text-center p-4">
            <div
              className="p-4 mb-3 border border-2 border-danger rounded-4 d-flex flex-column align-items-center justify-content-center"
              style={{ background: "#fff5f7", borderStyle: "dashed" }}
            >
              <div
                style={{
                  width: 140,
                  height: 140,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}
              >
                <i className="fas fa-camera text-danger" style={{ fontSize: "3rem", opacity: 0.8 }}></i>
                {/* Animación de escaneo láser */}
                <div
                  style={{
                    position: "absolute",
                    top: "15%",
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "red",
                    boxShadow: "0 0 8px red"
                  }}
                ></div>
              </div>
              <p className="small text-muted mt-3 mb-0">
                Apunta la cámara al código QR impreso en el tiquete del atado de corte.
              </p>
            </div>

            <form onSubmit={handleManualSubmit} className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="O digita el código (ej: NAT-CAM-M-MOKA-02)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                />
                <button className="btn btn-abbie" type="submit">
                  Cargar
                </button>
              </div>
            </form>

            <div className="text-start">
              <div className="small fw-bold text-muted mb-2">Simular escaneo de atados reales:</div>
              <div className="d-flex flex-column gap-2">
                {atadosEjemplo.map((atado) => (
                  <button
                    key={atado.codigoQR}
                    type="button"
                    className="btn btn-outline-dark btn-sm text-start d-flex justify-content-between align-items-center"
                    onClick={() => handleSimulate(atado)}
                  >
                    <span>
                      <i className="fas fa-tag text-danger me-2"></i>
                      <strong>{atado.codigoQR}</strong> ({atado.color} - Talla {atado.talla})
                    </span>
                    <span className="badge bg-secondary">{atado.unidades} UND</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
