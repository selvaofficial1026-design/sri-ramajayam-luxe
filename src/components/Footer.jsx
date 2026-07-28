import React, { useState, useEffect } from 'react';
import { Globe, Share2, MessageCircle, MapPin, PhoneCall, ArrowUpRight, Sparkles, Building2, PartyPopper, Camera, Phone } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navChips = [
    { label: '✨ Overview', id: 'home' },
    { label: '🏨 Lodge Suites', id: 'lodge' },
    { label: '🏛️ Banquets', id: 'party-hall' },
    { label: '🖼️ Gallery', id: 'gallery' },
    { label: '📞 Concierge Desk', id: 'contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--sapphire-950)',
        color: '#a0aab8',
        paddingTop: isMobile ? '24px' : '44px',
        paddingBottom: '22px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="container" style={{ maxWidth: '1080px' }}>
        {isMobile ? (
          /* ==========================================================================
             UNIQUE MOBILE RESPONSIVE LUXURY CONSOLE & APP-DOCK FOOTER
             ========================================================================== */
          <div
            className="animate-fade-in"
            style={{
              background: 'linear-gradient(180deg, var(--sapphire-900) 0%, #051021 100%)',
              borderRadius: '24px',
              border: '1.5px solid rgba(200, 169, 107, 0.35)',
              padding: '24px 18px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(200, 169, 107, 0.15)',
              marginBottom: '24px',
            }}
          >
            {/* Top Brand & Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px' }}>
              <div onClick={() => handleNav('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontFamily: 'var(--font-brand)', fontSize: '20px', color: '#fff', fontWeight: 600 }}>Sri Ramajayam</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '10px', color: 'var(--gold)', fontWeight: 700, border: '1px solid var(--gold)', padding: '1px 5px', borderRadius: '4px' }}>LUXE</span>
              </div>
              <span style={{ fontSize: '10.5px', background: 'rgba(38, 133, 105, 0.3)', color: '#5eead4', padding: '3px 10px', borderRadius: '20px', fontWeight: 700, border: '1px solid #14b8a6' }}>
                🟢 24/7 Live Desk
              </span>
            </div>

            {/* Unique Mobile Navigation Pill Dock (Like Native iOS/Android App Chips) */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
                ✦ Quick App Navigation Dock
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {navChips.map((chip) => (
                  <button
                    key={chip.id}
                    onClick={() => handleNav(chip.id)}
                    className="spring-hover"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(200, 169, 107, 0.3)',
                      color: '#fff',
                      padding: '8px 14px',
                      borderRadius: '20px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {chip.label} <ArrowUpRight size={13} color="var(--gold)" />
                  </button>
                ))}
              </div>
            </div>

            {/* Instant Mobile Tap-to-Call Strip */}
            <div style={{ marginBottom: '16px' }}>
              <a
                href="tel:+919876543210"
                className="btn btn-gold spring-hover"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '16px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(200, 169, 107, 0.3)',
                }}
              >
                <PhoneCall size={17} />
                Tap to Call 24/7 Concierge Now
              </a>
            </div>

            {/* Compact Location & Valet Badge */}
            <div style={{ fontSize: '12px', color: '#848e9c', textAlign: 'center', lineHeight: 1.5 }}>
              📍 108, Royal Heritage Road, Tamil Nadu — 600001<br />
              <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>✨ 100% Secure Valet Parking | ISO Certified</span>
            </div>
          </div>
        ) : (
          /* ==========================================================================
             STREAMLINED 3-COLUMN DESKTOP MNC GRID
             ========================================================================== */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '36px',
              marginBottom: '36px',
            }}
          >
            {/* Col 1: Brand & Minimalist Promise */}
            <div>
              <div
                onClick={() => handleNav('home')}
                className="spring-hover"
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '10px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-brand)', fontSize: '22px', color: '#ffffff', fontWeight: 600 }}>
                  Sri Ramajayam
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--gold)', fontWeight: 700, border: '1px solid var(--gold)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(200, 169, 107, 0.15)' }}>
                  LUXE
                </span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#848e9c', margin: '0 0 16px', maxWidth: '270px' }}>
                Serene 5-star executive lodge stays & majestic architectural banquet celebrations.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { icon: Globe, label: 'Website' },
                  { icon: Share2, label: 'Network' },
                  { icon: MessageCircle, label: 'Support' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href="#contact"
                      aria-label={item.label}
                      className="spring-hover"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c5cdd8',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(200, 169, 107, 0.2)';
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.color = 'var(--gold)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.color = '#c5cdd8';
                      }}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Col 2: Essential Quick Links */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '12.5px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '14px' }}>
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                {[
                  { label: 'Overview & Stays', id: 'home' },
                  { label: 'Executive Lodge Suites', id: 'lodge' },
                  { label: 'Grand Party Halls', id: 'party-hall' },
                  { label: 'Architectural Gallery', id: 'gallery' },
                  { label: '24/7 Concierge Desk', id: 'contact' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className="hover-underline-slide"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#848e9c',
                        cursor: 'pointer',
                        fontSize: '13px',
                        padding: 0,
                        textAlign: 'left',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#848e9c')}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Compact Headquarters Desk */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '12.5px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '14px' }}>
                Headquarters
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#848e9c' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <MapPin size={15} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ lineHeight: 1.4 }}>108, Royal Heritage Road, Tamil Nadu — 600001</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <PhoneCall size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
                  <span>+91 98765 43210 (24/7 Desk)</span>
                </div>
              </div>

              <div style={{ marginTop: '14px' }}>
                <span className="gradient-text-gold" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  ✦ 100% Secure Valet Parking Bay
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Minimalist Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px',
            color: '#64707d',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <div style={{ width: isMobile ? '100%' : 'auto' }}>
            © {new Date().getFullYear()} <strong>Sri Ramajayam Luxe Pvt. Ltd.</strong> All rights reserved.
          </div>
          <div style={{ width: isMobile ? '100%' : 'auto' }}>
            ISO 9001:2015 Certified Hospitality | Tamil Nadu
          </div>
        </div>
      </div>
    </footer>
  );
}
