import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lodge from './pages/Lodge';
import PartyHall from './pages/PartyHall';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'lodge':
        return <Lodge setActivePage={setActivePage} />;
      case 'party-hall':
        return <PartyHall setActivePage={setActivePage} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Floating WhatsApp / Quick Contact Pill */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'flex-end',
        }}
      >
        <button
          onClick={() => {
            window.open('https://wa.me/919876543210?text=Hello%20Sri%20Ramajayam%20Luxe%20Team,%20I%20would%20like%20to%20inquire%20about%20bookings.', '_blank');
          }}
          style={{
            background: '#25D366',
            color: '#fff',
            border: 'none',
            padding: '14px 22px',
            borderRadius: '50px',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
            fontWeight: 700,
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <MessageSquare size={20} />
          <span>Quick WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
