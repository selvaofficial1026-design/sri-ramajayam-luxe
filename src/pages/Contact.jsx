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
          {/* 4 Professional Executive Bento Contact Boxes */}
          <div
            className="bento-grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {/* Box 1: Location & Headquarters */}
            <div
              className="bento-card spring-hover scroll-reveal"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, var(--emerald-50) 100%)',
                border: '1.5px solid rgba(29, 104, 82, 0.2)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 10px 25px rgba(15, 56, 44, 0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--emerald-800) 0%, var(--emerald-950) 100%)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(15, 56, 44, 0.2)' }}>
                  <MapPin size={20} />
                </div>
                <span style={{ fontSize: '11px', background: '#fff', color: 'var(--emerald-800)', padding: '3px 10px', borderRadius: '20px', fontWeight: 700, border: '1px solid rgba(29, 104, 82, 0.2)' }}>
                  🏛️ ISO Certified
                </span>
              </div>
              <div>
                <h4 style={{ fontSize: '17px', color: 'var(--sapphire-950)', margin: '0 0 8px', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Headquarters & Estate</h4>
                <div style={{ color: 'var(--charcoal)', fontSize: '13.5px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span>📍 <strong>108, Royal Heritage Road</strong></span>
                  <span style={{ color: 'var(--text-muted)' }}>Opposite City Center Mall, Tamil Nadu — 600001</span>
                </div>
              </div>
            </div>

            {/* Box 2: Phone Concierge Desk */}
            <div
              className="bento-card spring-hover scroll-reveal"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, var(--sapphire-50) 100%)',
                border: '1.5px solid rgba(11, 37, 69, 0.2)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 10px 25px rgba(11, 37, 69, 0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--sapphire-800) 0%, var(--sapphire-950) 100%)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(11, 37, 69, 0.2)' }}>
                  <PhoneCall size={20} />
                </div>
                <span style={{ fontSize: '11px', background: '#fff', color: '#16a34a', padding: '3px 10px', borderRadius: '20px', fontWeight: 700, border: '1px solid #bbf7d0' }}>
                  🟢 Live 24/7 Desk
                </span>
              </div>
              <div>
                <h4 style={{ fontSize: '17px', color: 'var(--sapphire-950)', margin: '0 0 8px', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Direct Concierge Lines</h4>
                <div style={{ color: 'var(--charcoal)', fontSize: '13.5px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span>🏨 Lodge Desk: <strong>+91 98765 43210</strong></span>
                  <span>🏛️ Banquet Desk: <strong>+91 98765 43211</strong></span>
                </div>
              </div>
            </div>

            {/* Box 3: Email Support Desk */}
            <div
              className="bento-card spring-hover scroll-reveal"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #fffbeb 100%)',
                border: '1.5px solid rgba(200, 169, 107, 0.35)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 10px 25px rgba(200, 169, 107, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--gold-dark) 0%, #856937 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(200, 169, 107, 0.3)' }}>
                  <Mail size={20} />
                </div>
                <span style={{ fontSize: '11px', background: '#fff', color: 'var(--gold-dark)', padding: '3px 10px', borderRadius: '20px', fontWeight: 700, border: '1px solid rgba(200, 169, 107, 0.3)' }}>
                  📬 Fast Response
                </span>
              </div>
              <div>
                <h4 style={{ fontSize: '17px', color: 'var(--sapphire-950)', margin: '0 0 8px', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Executive Email Desk</h4>
                <div style={{ color: 'var(--charcoal)', fontSize: '12.5px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '4px', fontWeight: 600 }}>
                  <span>🛏️ reservations@sriramajayam.com</span>
                  <span>🎉 events@sriramajayam.com</span>
                </div>
              </div>
            </div>

            {/* Box 4: Operating Hours */}
            <div
              className="bento-card spring-hover scroll-reveal"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, var(--emerald-50) 100%)',
                border: '1.5px solid rgba(29, 104, 82, 0.2)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 10px 25px rgba(15, 56, 44, 0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--emerald-800) 0%, var(--emerald-950) 100%)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(15, 56, 44, 0.2)' }}>
                  <Clock size={20} />
                </div>
                <span style={{ fontSize: '11px', background: '#fff', color: 'var(--emerald-800)', padding: '3px 10px', borderRadius: '20px', fontWeight: 700, border: '1px solid rgba(29, 104, 82, 0.2)' }}>
                  ⚡ 365 Days
                </span>
              </div>
              <div>
                <h4 style={{ fontSize: '17px', color: 'var(--sapphire-950)', margin: '0 0 8px', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Operating Timetable</h4>
                <div style={{ color: 'var(--charcoal)', fontSize: '13px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span>🛎️ Front Desk: <strong>24 Hrs / 365 Days</strong></span>
                  <span>👁️ Hall Visits: <strong>9 AM — 8 PM Daily</strong></span>
                </div>
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
