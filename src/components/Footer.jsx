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
        paddingTop: isMobile ? '40px' : '60px',
        paddingBottom: '28px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="container" style={{ maxWidth: '1120px' }}>
        {/* Standard Professional Responsive Grid (Like Taj / Oberoi / Marriott) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: isMobile ? '36px' : '48px',
            marginBottom: '40px',
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

        {/* Minimalist Copyright Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '12.5px',
            color: '#64707d',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <div style={{ width: isMobile ? '100%' : 'auto' }}>
            © {new Date().getFullYear()} <strong>Sri Ramajayam Luxe Pvt. Ltd.</strong> All rights reserved.
          </div>
          <div style={{ width: isMobile ? '100%' : 'auto' }}>
            ISO 9001:2015 Certified Hospitality | Tamil Nadu, India
          </div>
        </div>
      </div>
    </footer>
  );
}
