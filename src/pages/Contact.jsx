import React, { useState } from 'react';
import { PhoneCall, MapPin, Mail, Clock, MessageSquare, Send, CheckCircle2, Building2, PartyPopper, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Lodge Stay Suite',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Lodge Stay Suite',
        date: '',
        message: '',
      });
    }, 6000);
  };

  const handleWhatsApp = () => {
    const text = `Hello Sri Ramajayam Luxe Team,%0A%0AI am inquiring about: *${formData.serviceType}*.%0AName: ${formData.name || 'Guest'}%0APhone: ${formData.phone || 'N/A'}%0APreferred Date: ${formData.date || 'Flexible'}%0AMessage: ${formData.message || 'Please send details.'}`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* ---------- HEADER BANNER WITH GOLD SHIMMER & FLOATING ORBS ---------- */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--sapphire-950) 0%, var(--emerald-950) 100%)',
          color: '#fff',
          padding: '80px 0 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="animate-float" style={{ position: 'absolute', top: '-50px', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(200, 169, 107, 0.28) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="animate-float" style={{ position: 'absolute', bottom: '-80px', right: '-50px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(38, 133, 105, 0.35) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none', animationDelay: '-1s' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
          <span className="eyebrow eyebrow-gold" style={{ background: 'rgba(200, 169, 107, 0.2)', boxShadow: '0 0 15px rgba(200, 169, 107, 0.25)' }}>
            <Sparkles size={14} color="var(--gold)" />
            Connect With Our Concierge
          </span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', color: '#fff', marginBottom: '14px' }}>
            <span className="gold-shimmer-text">Inquiries & Reservations</span> Desk
          </h1>
          <p style={{ fontSize: 'clamp(14.5px, 2.3vw, 17px)', color: '#dcd1c1', fontWeight: 300, lineHeight: 1.6 }}>
            Whether you are booking room suites for your family or organizing a majestic banquet celebration, our dedicated team is here to assist you every step of the way.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT & INQUIRY FORM ---------- */}
      <section style={{ padding: '60px 0', background: 'var(--ivory)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {/* Left Info Col */}
          <div>
            <span className="eyebrow eyebrow-emerald">Direct Access</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: 'var(--sapphire-900)', marginBottom: '16px' }}>
              We Are Always Within Reach
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
              Our reservation desk operates 24 hours a day, 7 days a week. Feel free to call us directly for urgent booking assistance, custom tariff negotiations, or site inspection appointments.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div className="glass-card" style={{ padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--emerald-100)', color: 'var(--emerald-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(15, 56, 44, 0.15)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Our Location</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', margin: 0, lineHeight: 1.5 }}>
                    108, Royal Heritage Road, Opposite City Center Mall,<br />Tamil Nadu, India — 600001
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--sapphire-100)', color: 'var(--sapphire-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(11, 37, 69, 0.15)' }}>
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Call For Reservations</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', margin: 0 }}>+91 98765 43210 (Lodge Stays)</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', margin: 0 }}>+91 98765 43211 (Banquet Hall)</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(200, 169, 107, 0.2)', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(200, 169, 107, 0.2)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Email Desk</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', margin: 0 }}>reservations@sriramajayamluxe.com</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', margin: 0 }}>events@sriramajayamluxe.com</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--emerald-100)', color: 'var(--emerald-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(15, 56, 44, 0.15)' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Operating Hours</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', margin: 0 }}>Front Desk & Security: 24 Hours / 365 Days</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', margin: 0 }}>Banquet Site Visits: 9:00 AM — 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div
              className="glass-card"
              style={{
                marginTop: '26px',
                padding: '20px',
                background: '#fff',
                borderRadius: '16px',
                border: '1px solid rgba(37, 211, 102, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                boxShadow: '0 12px 30px rgba(37, 211, 102, 0.12)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '16px', color: 'var(--sapphire-900)', margin: '0 0 4px' }}>Prefer Instant WhatsApp Chat?</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>Chat directly with our front desk manager now.</p>
              </div>
              <button onClick={handleWhatsApp} className="whatsapp-btn" style={{ width: '100%', justifyContent: 'center', maxWidth: '240px' }}>
                <MessageSquare size={16} />
                Chat On WhatsApp
              </button>
            </div>
          </div>

          {/* Right Inquiry Form Col WITH GLASS AURA */}
          <div
            className="glass-card"
            style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '24px',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.08)',
            }}
          >
            <h3 style={{ fontSize: '24px', color: 'var(--sapphire-900)', marginBottom: '6px' }}>Send An Inquiry Request</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '22px' }}>
              Please fill out this form and our reservation manager will call you back within 15 minutes.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '32px 20px',
                  background: 'var(--emerald-50)',
                  borderRadius: '16px',
                  border: '1px solid var(--emerald-600)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <CheckCircle2 size={48} color="var(--emerald-600)" />
                <h4 style={{ fontSize: '20px', color: 'var(--emerald-800)', margin: 0 }}>Inquiry Received Successfully!</h4>
                <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name || 'Valued Guest'}</strong>. Our team is reviewing your request for <strong>{formData.serviceType}</strong> and will contact you shortly via phone/email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Requirement Type
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                    {[
                      { id: 'Lodge Stay Suite', label: 'Lodge Stay', icon: Building2 },
                      { id: 'Grand Banquet Hall', label: 'Party Hall', icon: PartyPopper },
                    ].map((type) => {
                      const Icon = type.icon;
                      const isSel = formData.serviceType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: type.id })}
                          style={{
                            padding: '10px 12px',
                            borderRadius: '12px',
                            border: isSel ? '2px solid var(--emerald-800)' : '1px solid rgba(0,0,0,0.15)',
                            background: isSel ? 'var(--emerald-50)' : '#fff',
                            color: isSel ? 'var(--emerald-800)' : 'var(--charcoal)',
                            fontWeight: isSel ? 700 : 500,
                            fontSize: '13px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            boxShadow: isSel ? '0 4px 12px rgba(15, 56, 44, 0.15)' : 'none',
                          }}
                        >
                          <Icon size={15} />
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '6px' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mr. Srikant Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.15)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border 0.3s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--emerald-600)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(0,0,0,0.15)')}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.15)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--emerald-600)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(0,0,0,0.15)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '6px' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.15)',
                        fontSize: '14px',
                        outline: 'none',
                        color: 'var(--charcoal)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.15)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--emerald-600)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(0,0,0,0.15)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '6px' }}>
                    Additional Message or Guest Count
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your approximate guest count, required room types, or event duration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.15)',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--emerald-600)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(0,0,0,0.15)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-emerald"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '13.5px',
                    marginTop: '8px',
                  }}
                >
                  <Send size={16} />
                  Submit Inquiry Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
