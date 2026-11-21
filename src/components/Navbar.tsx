import React from 'react';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQR: () => void;
}

export const Navbar: React.FC<Props> = ({ activeTab, setActiveTab, onOpenQR }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('dashboard');
          }}
        >
          <img src="/assets/logo.png" alt="ABBIE" height="30" style={{ borderRadius: 4 }} />
          <span className="brand-name">ABBIE</span>
          <span
            className="badge rounded-pill ms-2"
            style={{ background: "#7c3aed", fontSize: "0.65rem", letterSpacing: "0.5px" }}
          >
            CORETEXTIL SMART
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-1">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'dashboard' ? 'fw-bold text-danger' : 'text-dark'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <i className="fas fa-home me-1"></i> Panel
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'outfits' ? 'fw-bold text-danger' : 'text-dark'}`}
                onClick={() => setActiveTab('outfits')}
              >
                <i className="fas fa-tshirt me-1"></i> Conjuntos
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'cortes' ? 'fw-bold text-danger' : 'text-dark'}`}
                onClick={() => setActiveTab('cortes')}
              >
                <i className="fas fa-cut me-1"></i> Corte
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'produccion' ? 'fw-bold text-danger' : 'text-dark'}`}
                onClick={() => setActiveTab('produccion')}
              >
                <i className="fas fa-cogs me-1"></i> Producción
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${activeTab === 'historial' ? 'fw-bold text-danger' : 'text-dark'}`}
                onClick={() => setActiveTab('historial')}
              >
                <i className="fas fa-history me-1"></i> Historial
              </button>
            </li>

            <li className="nav-item ms-lg-2">
              <button
                className="btn btn-core d-flex align-items-center gap-2 btn-sm"
                onClick={onOpenQR}
              >
                <i className="fas fa-qrcode"></i>
                <span>Escanear Atado</span>
              </button>
            </li>

            <li className="nav-item ms-1">
              <a
                href="/COMPARATIVA_ABBIE_CORETEXTIL.pdf"
                target="_blank"
                rel="noreferrer"
                download="COMPARATIVA_ABBIE_CORETEXTIL.pdf"
                className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                title="Descargar Informe Ejecutivo en PDF"
              >
                <i className="fas fa-file-pdf"></i>
                <span>PDF Comparativo</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
