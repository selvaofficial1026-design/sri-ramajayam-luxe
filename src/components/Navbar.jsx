import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Building2, PartyPopper } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'lodge', label: 'Lodge Stays', icon: Building2 },
    { id: 'party-hall', label: 'Grand Party Hall', icon: PartyPopper },
    { id: 'gallery', label: 'Gallery', icon: null },
    { id: 'contact', label: 'Contact Us', icon: null },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled ? 'rgba(7, 23, 44, 0.96)' : 'linear-gradient(180deg, rgba(7, 23, 44, 0.92) 0%, rgba(15, 56, 44, 0.85) 100%)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(200, 169, 107, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
        padding: isScrolled ? '12px 0' : '18px 0',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            flexShrink: 0,
            maxWidth: '75%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-brand)',
                fontSize: 'clamp(22px, 5vw, 28px)',
                color: '#ffffff',
                fontWeight: 600,
                letterSpacing: '0.03em',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              Sri Ramajayam
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(12px, 3.5vw, 16px)',
                color: 'var(--gold)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: '1px solid var(--gold)',
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'rgba(200, 169, 107, 0.15)',
              }}
            >
              LUXE
            </span>
          </div>
          <span
            className="logo-subtitle"
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#dcd1c1',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Lodge · Stays · Grand Banquets
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <ul
            style={{
              display: 'flex',
              gap: '6px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <li key={item.id} style={{ flexShrink: 0 }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: isActive ? 'rgba(200, 169, 107, 0.25)' : 'transparent',
                      color: isActive ? 'var(--gold)' : '#ffffff',
                      border: isActive ? '1px solid var(--gold)' : '1px solid transparent',
                      padding: '10px 14px',
                      borderRadius: '30px',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {Icon && <Icon size={16} color={isActive ? 'var(--gold)' : '#ffffff'} />}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-gold header-cta-btn"
            style={{
              padding: '10px 20px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
            }}
          >
            <PhoneCall size={14} />
            Inquire Now
          </button>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#fff',
              padding: '8px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="animate-fade-in"
          style={{
            background: 'var(--sapphire-900)',
            borderTop: '1px solid rgba(200, 169, 107, 0.3)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '12px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'var(--gold)' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#fff' : '#dcd1c1',
                  border: 'none',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                {Icon && <Icon size={18} />}
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-gold"
            style={{
              width: '100%',
              padding: '14px',
              marginTop: '10px',
              justifyContent: 'center',
            }}
          >
            <PhoneCall size={16} />
            Inquire & Book Now
          </button>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1150px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .header-cta-btn {
            display: none !important;
          }
          .logo-subtitle {
            font-size: 8.5px !important;
            letter-spacing: 0.1em !important;
          }
        }
      `}</style>
    </header>
  );
}
