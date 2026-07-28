import React, { useState, useEffect } from 'react';
import { Globe, Share2, MessageCircle, MapPin, PhoneCall, Sparkles } from 'lucide-react';

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

  return (
    <footer
      style={{
        background: 'var(--sapphire-950)',
        color: '#a0aab8',
        paddingTop: isMobile ? '22px' : '56px',
        paddingBottom: isMobile ? '16px' : '26px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="container" style={{ maxWidth: '1120px' }}>
        {isMobile ? (
          /* ==========================================================================
             ULTRA-COMPACT SIDE-BY-SIDE MOBILE FOOTER (SIMPLE & SMALL)
             ========================================================================== */
          <div style={{ marginBottom: '14px' }}>
            {/* Side-by-Side 2-Column Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '14px',
                alignItems: 'start',
                marginBottom: '14px',
                textAlign: 'left',
              }}
            >
              {/* Left Column: Brand & Direct Contact */}
              <div>
                <div
                  onClick={() => handleNav('home')}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginBottom: '6px',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-brand)', fontSize: '17px', color: '#ffffff', fontWeight: 600 }}>
                    Sri Ramajayam
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '9px', color: 'var(--gold)', fontWeight: 700, border: '1px solid var(--gold)', padding: '1px 4px', borderRadius: '3px', background: 'rgba(200, 169, 107, 0.15)' }}>
                    LUXE
                  </span>
                </div>
                <p style={{ fontSize: '11px', lineHeight: 1.4, color: '#848e9c', margin: '0 0 8px' }}>
                  5-star lodge suites & royal banquet venues.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '11px', color: '#c5cdd8' }}>
                  <a href="tel:+919876543210" style={{ color: '#5eead4', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <PhoneCall size={12} color="#5eead4" /> +91 98765 43210
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#848e9c' }}>
                    <MapPin size={12} color="var(--gold)" /> Royal Heritage Rd, TN
                  </div>
                </div>
              </div>

              {/* Right Column: Compact Navigation */}
              <div style={{ paddingLeft: '10px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ color: 'var(--gold)', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                  ✦ Quick Links
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px' }}>
                  {[
                    { label: 'Overview', id: 'home' },
                    { label: 'Lodge Suites', id: 'lodge' },
                    { label: 'Party Halls', id: 'party-hall' },
                    { label: 'Gallery Tour', id: 'gallery' },
                    { label: '24/7 Concierge', id: 'contact' },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNav(item.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#a0aab8',
                          cursor: 'pointer',
                          fontSize: '11.5px',
                          padding: 0,
                          textAlign: 'left',
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compact Inline Social & Valet Strip */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '7px 10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '10px', color: 'var(--gold-light)', fontWeight: 600 }}>
                ✨ 100% Secure Valet Parking Bay
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {[Globe, Share2, MessageCircle].map((Icon, idx) => (
                  <a key={idx} href="#contact" style={{ color: '#c5cdd8', padding: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={12} />
                  </a>
                ))}
              </div>
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
              gap: '40px',
              marginBottom: '38px',
              textAlign: 'left',
            }}
          >
            {/* Col 1: Brand Logo & Minimalist Promise */}
            <div>
              <div
                onClick={() => handleNav('home')}
                className="spring-hover"
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '14px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-brand)', fontSize: '24px', color: '#ffffff', fontWeight: 600 }}>
                  Sri Ramajayam
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--gold)', fontWeight: 700, border: '1px solid var(--gold)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(200, 169, 107, 0.15)' }}>
                  LUXE
                </span>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#848e9c', margin: '0 0 20px', maxWidth: '300px' }}>
                Experience the pinnacle of South Indian hospitality. Serene 5-star executive lodge stays and majestic architectural banquet venues under one roof.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
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
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
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
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.color = '#c5cdd8';
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Col 2: Essential Quick Links */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} color="var(--gold)" />
                Quick Navigation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
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
                        color: '#a0aab8',
                        cursor: 'pointer',
                        fontSize: '13.5px',
                        padding: 0,
                        textAlign: 'left',
                        fontWeight: 500,
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#a0aab8')}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Headquarters & Concierge Desk */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '18px' }}>
                Headquarters Desk
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#a0aab8' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ lineHeight: 1.5 }}>108, Royal Heritage Road, Opposite City Center Mall, Tamil Nadu — 600001</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <PhoneCall size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                  <span>+91 98765 43210 (24/7 Direct Line)</span>
                </div>
              </div>

              <div style={{ marginTop: '20px', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'inline-block' }}>
                <span className="gradient-text-gold" style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  ✦ 100% Secure Valet Parking Bay
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Minimalist Copyright Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: isMobile ? '12px' : '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: isMobile ? '6px' : '14px',
            fontSize: isMobile ? '11px' : '12.5px',
            color: '#64707d',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <div style={{ width: isMobile ? '100%' : 'auto' }}>
            © {new Date().getFullYear()} <strong>Sri Ramajayam Luxe Pvt. Ltd.</strong>
          </div>
          <div style={{ width: isMobile ? '100%' : 'auto' }}>
            ISO 9001:2015 Certified Hospitality | Tamil Nadu
          </div>
        </div>
      </div>
    </footer>
  );
}
