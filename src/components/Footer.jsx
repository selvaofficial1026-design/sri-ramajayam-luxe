import React from 'react';
import { Globe, Share2, MessageCircle, MapPin, PhoneCall, Mail } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--sapphire-950)',
        color: '#a0aab8',
        paddingTop: '64px',
        paddingBottom: '28px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="container" style={{ maxWidth: '1180px' }}>
        {/* Main Grid Layout - MNC Minimalist Style */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '52px',
          }}
        >
          {/* Col 1: Corporate Identity */}
          <div style={{ paddingRight: '12px' }}>
            <div
              onClick={() => handleNav('home')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '14px',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontFamily: 'var(--font-brand)', fontSize: '24px', color: '#ffffff', fontWeight: 600, letterSpacing: '0.02em' }}>
                Sri Ramajayam
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--gold)', fontWeight: 700, border: '1px solid var(--gold)', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.1em' }}>
                LUXE
              </span>
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#848e9c', marginBottom: '20px', maxWidth: '280px', fontWeight: 400 }}>
              Premier hospitality destination featuring five-star executive lodge accommodations and expansive architectural banquets.
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
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c5cdd8',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(200, 169, 107, 0.15)';
                      e.currentTarget.style.borderColor = 'var(--gold)';
                      e.currentTarget.style.color = 'var(--gold)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.color = '#c5cdd8';
                    }}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700, marginBottom: '20px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              {[
                { label: 'Overview & Stays', id: 'home' },
                { label: 'Executive Lodge Suites', id: 'lodge' },
                { label: 'Grand Banquet Halls', id: 'party-hall' },
                { label: 'Architectural Gallery', id: 'gallery' },
                { label: 'Concierge Inquiry Desk', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#848e9c',
                      cursor: 'pointer',
                      fontSize: '13.5px',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.2s ease',
                      fontWeight: 400,
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

          {/* Col 3: Corporate & Compliance */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700, marginBottom: '20px' }}>
              Corporate
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              {['Corporate Governance', 'Guest Privacy Policy', 'Terms of Reservation', 'Safety & Hygiene Standards', 'Environmental Sustainability'].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('contact')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#848e9c',
                      cursor: 'pointer',
                      fontSize: '13.5px',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.2s ease',
                      fontWeight: 400,
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#848e9c')}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Minimalist Contact Desk */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700, marginBottom: '20px' }}>
              Headquarters Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#848e9c' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: 1.5 }}>108, Royal Heritage Road, City Center, Tamil Nadu — 600001, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <PhoneCall size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span>+91 98765 43210 (24/7 Desk)</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span>reservations@sriramajayamluxe.com</span>
              </div>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed rgba(255, 255, 255, 0.1)' }}>
              <span style={{ fontSize: '11.5px', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                ✦ 100% Secure Valet Parking
              </span>
            </div>
          </div>
        </div>

        {/* Minimalist MNC Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12.5px',
            color: '#64707d',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Sri Ramajayam Luxe Hospitality Pvt. Ltd.</strong> All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span>ISO 9001:2015 Certified Hospitality Brand</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <span>Made in Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
