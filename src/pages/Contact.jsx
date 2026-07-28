import React from 'react';
import { PhoneCall, MapPin, Mail, Clock, MessageSquare, Building2, PartyPopper, Sparkles, ShieldCheck, Car } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = (service) => {
    const text = `Hello Sri Ramajayam Luxe Team,%0A%0AI would like to inquire about *${service}*. Please share tariff and availability details.`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* ---------- COMPACT HEADER BANNER ---------- */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--sapphire-950) 0%, var(--emerald-950) 100%)',
          color: '#fff',
          padding: '60px 0 45px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="animate-float" style={{ position: 'absolute', top: '-60px', right: '10%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(200, 169, 107, 0.25) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="animate-float" style={{ position: 'absolute', bottom: '-70px', left: '10%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(38, 133, 105, 0.3) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none', animationDelay: '-1s' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '720px' }}>
          <span className="eyebrow eyebrow-gold" style={{ background: 'rgba(200, 169, 107, 0.2)', boxShadow: '0 0 15px rgba(200, 169, 107, 0.25)', marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={13} color="var(--gold)" />
            Concierge & Headquarters Desk
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#fff', marginBottom: '10px' }}>
            <span className="text-mask-container"><span className="text-mask-reveal">Direct <span className="gold-shimmer-text">24/7 Access</span> Channels</span></span>
          </h1>
          <p style={{ fontSize: '14.5px', color: '#dcd1c1', fontWeight: 300, lineHeight: 1.5, margin: 0 }}>
            We operate around the clock to provide instant reservation support, site inspection appointments, and customized banquet tariffs.
          </p>
        </div>
      </section>

      {/* ---------- COMPACT BENTO HEADQUARTERS GRID (NO FORM) ---------- */}
      <section style={{ padding: '50px 0 60px', background: 'var(--ivory)' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>
          {/* Top Compact Direct Contacts Grid */}
          <div
            className="bento-grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '20px',
              marginBottom: '26px',
            }}
          >
            {/* Card 1: Location */}
            <div className="bento-card scroll-reveal" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--emerald-100)', color: 'var(--emerald-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(15, 56, 44, 0.12)' }}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15.5px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Our Location</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.45 }}>
                  108, Royal Heritage Road, Opposite City Center Mall,<br />Tamil Nadu — 600001
                </p>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="bento-card scroll-reveal" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--sapphire-100)', color: 'var(--sapphire-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(11, 37, 69, 0.12)' }}>
                <PhoneCall size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15.5px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Call 24/7 Desk</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: '0 0 2px', fontWeight: 600 }}>+91 98765 43210 (Lodge)</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, fontWeight: 600 }}>+91 98765 43211 (Banquets)</p>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="bento-card scroll-reveal" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(200, 169, 107, 0.2)', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(200, 169, 107, 0.2)' }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15.5px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Email Support Desk</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', margin: '0 0 2px' }}>reservations@sriramajayam.com</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', margin: 0 }}>events@sriramajayam.com</p>
              </div>
            </div>

            {/* Card 4: Hours */}
            <div className="bento-card scroll-reveal" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--emerald-100)', color: 'var(--emerald-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(15, 56, 44, 0.12)' }}>
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15.5px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Operating Hours</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: '0 0 2px' }}>Front Desk: <strong>24 Hrs / 365 Days</strong></p>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>Hall Visits: <strong>9 AM — 8 PM Daily</strong></p>
              </div>
            </div>
          </div>

          {/* Bottom Compact WhatsApp & Instant Action Strip */}
          <div
            className="glass-card layered-shadow-lg scroll-reveal"
            style={{
              background: '#ffffff',
              padding: '24px 28px',
              borderRadius: '22px',
              border: '1px solid rgba(0,0,0,0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="eyebrow eyebrow-emerald" style={{ marginBottom: '6px' }}>Instant Concierge Chat</span>
              <h3 style={{ fontSize: '20px', color: 'var(--sapphire-900)', margin: '0 0 6px' }}>
                Prefer Instant WhatsApp Assistance?
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Chat directly with our front desk manager to check room availability or schedule a hall visit.
              </p>
            </div>

            {/* Quick Chat Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifySelf: 'end', width: '100%' }}>
              <button
                onClick={() => handleWhatsApp('Lodge Stays')}
                className="whatsapp-btn spring-hover"
                style={{ flex: '1 1 180px', padding: '12px 18px', fontSize: '13px', justifyContent: 'center' }}
              >
                <Building2 size={16} />
                Lodge WhatsApp Chat
              </button>
              <button
                onClick={() => handleWhatsApp('Grand Party Halls')}
                className="btn btn-sapphire spring-hover"
                style={{ flex: '1 1 180px', padding: '12px 18px', fontSize: '13px', justifyContent: 'center' }}
              >
                <PartyPopper size={16} />
                Banquet WhatsApp Chat
              </button>
            </div>
          </div>

          {/* Compact Trust Badges Strip */}
          <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '12.5px', fontWeight: 600 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="var(--emerald-600)" /> 100% Secure Valet Parking Bay
            </span>
            <span style={{ color: 'rgba(0,0,0,0.15)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Car size={16} color="var(--sapphire-600)" /> 200+ Car Valet Capacity
            </span>
            <span style={{ color: 'rgba(0,0,0,0.15)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="var(--gold-dark)" /> ISO 9001:2015 Certified Hospitality
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
