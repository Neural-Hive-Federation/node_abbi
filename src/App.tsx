import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { OutfitsView } from './components/OutfitsView';
import { CortesView } from './components/CortesView';
import { ProduccionView } from './components/ProduccionView';
import { HistorialView } from './components/HistorialView';
import { QRScannerModal } from './components/QRScannerModal';
import { AtadoQR } from './data/mockData';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [showQRModal, setShowQRModal] = useState<boolean>(false);
  const [scannedAtado, setScannedAtado] = useState<AtadoQR | null>(null);

  const handleScanSuccess = (atado: AtadoQR) => {
    setScannedAtado(atado);
    setShowQRModal(false);
    setActiveTab('produccion');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQR={() => setShowQRModal(true)}
      />

      <main className="flex-grow-1">
        {activeTab === 'dashboard' && (
          <Dashboard
            setActiveTab={setActiveTab}
            onOpenQR={() => setShowQRModal(true)}
          />
        )}
        {activeTab === 'outfits' && <OutfitsView />}
        {activeTab === 'cortes' && <CortesView />}
        {activeTab === 'produccion' && (
          <ProduccionView
            activeAtado={scannedAtado}
            onOpenQR={() => setShowQRModal(true)}
          />
        )}
        {activeTab === 'historial' && <HistorialView />}
      </main>

      {showQRModal && (
        <QRScannerModal
          onScanSuccess={handleScanSuccess}
          onClose={() => setShowQRModal(false)}
        />
      )}

      <footer className="text-center py-3 text-muted small bg-white border-top mt-auto">
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>&copy; 2026 ABBIE — Sistema de Producción Confección</span>
          <span className="badge chip-core">
            Powered by CoreTextil & Ecosistema Neural Nexus
          </span>
        </div>
      </footer>
    </div>
  );
};
