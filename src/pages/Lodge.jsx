import React, { useState } from 'react';
import { Building2, Wifi, Tv, Coffee, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Car, Wind, Sparkles } from 'lucide-react';

export default function Lodge({ setActivePage }) {
  const [filter, setFilter] = useState('All');

  const rooms = [
    {
      id: 1,
      title: 'Executive Deluxe Suite',
      category: 'Executive',
      price: '₹3,500 / Night',
      size: '380 sq.ft',
      bed: '1 King Bed',
      guests: '2 Adults, 1 Child',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
      desc: 'Spacious executive room for corporate travelers and couples seeking tranquility with automated climate control and ergonomic workspace.',
      tags: ['❄️ Central AC', '📶 100 Mbps Wi-Fi', '📺 Smart LED TV', '🍽️ 24/7 Room Service'],
    },
    {
      id: 2,
      title: 'Twin Family Luxury Suite',
      category: 'Family',
      price: '₹5,200 / Night',
      size: '550 sq.ft',
      bed: '2 Queen Beds',
      guests: '4 Adults, 2 Children',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
      desc: 'An expansive suite tailored for families attending weddings or vacationing in comfort with separate sitting lounge and dual vanities.',
      tags: ['🛏️ 2 Queen Beds', '🛋️ Sitting Lounge', '☕ Buffet Breakfast', '👔 Express Laundry'],
    },
    {
      id: 3,
      title: 'The Presidential Emerald Suite',
      category: 'Presidential',
      price: '₹8,500 / Night',
      size: '850 sq.ft',
      bed: '1 King Royal Bed',
      guests: '2 Adults, 2 Children',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      desc: 'Our flagship VIP lodge accommodation offering panoramic garden views, private balcony, luxury jacuzzi bath, and dedicated butler assistance.',
      tags: ['🌿 Garden Balcony', '🛁 Luxury Jacuzzi', '🤵 24-Hr Butler', '🚗 Free Station Transfer'],
    },
    {
      id: 4,
      title: 'Superior Corporate Single',
      category: 'Executive',
      price: '₹2,800 / Night',
      size: '280 sq.ft',
      bed: '1 Queen Bed',
      guests: '1 or 2 Adults',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
      desc: 'Smart, efficient comfort with soundproof windows, high-speed Wi-Fi, and express check-in/check-out for busy professionals.',
      tags: ['🔕 Soundproof Windows', '💻 Ergonomic Desk', '📶 High-Speed Wi-Fi', '🚿 Power Shower'],
    },
  ];

  const filteredRooms = filter === 'All' ? rooms : rooms.filter(r => r.category === filter);

  return (
    <div className="animate-fade-in">
      {/* ---------- HEADER BANNER WITH GOLD SHIMMER & FLOATING ORB ---------- */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--emerald-950) 0%, var(--emerald-800) 100%)',
          color: '#fff',
          padding: '80px 0 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="animate-float" style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(200, 169, 107, 0.25) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="animate-float" style={{ position: 'absolute', bottom: '-80px', left: '-50px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(29, 104, 82, 0.3) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none', animationDelay: '-2s' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
          <span className="eyebrow eyebrow-gold" style={{ background: 'rgba(200, 169, 107, 0.2)', boxShadow: '0 0 15px rgba(200, 169, 107, 0.25)' }}>
            <Sparkles size={14} color="var(--gold)" />
            Serene Five-Star Comfort
          </span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', color: '#fff', marginBottom: '14px' }}>
            <span className="gold-shimmer-text">Luxury Lodge</span> Accommodations
          </h1>
          <p style={{ fontSize: 'clamp(14.5px, 2.3vw, 17px)', color: '#dcd1c1', fontWeight: 300, lineHeight: 1.6 }}>
            Designed for discerning travelers and wedding guests who value peaceful rest, pristine hygiene, and warm personalized hospitality.
          </p>
        </div>
      </section>

      {/* ---------- ROOM CATEGORY FILTER TABS WITH GLOW ---------- */}
      <section style={{ padding: '26px 0', background: 'var(--ivory)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {['All', 'Executive', 'Family', 'Presidential'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: filter === cat ? 'var(--emerald-800)' : '#fff',
                color: filter === cat ? '#fff' : 'var(--charcoal)',
                border: filter === cat ? '1px solid var(--emerald-800)' : '1px solid rgba(0,0,0,0.1)',
                boxShadow: filter === cat ? '0 8px 20px rgba(15, 56, 44, 0.3), 0 0 15px rgba(38, 133, 105, 0.2)' : '0 2px 6px rgba(0,0,0,0.04)',
                transform: filter === cat ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {cat === 'All' ? '✨ All Suite Types' : `${cat} Suites`}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- ROOMS GRID (MEDIUM COMPACT CARDS) ---------- */}
      <section style={{ padding: '50px 0', background: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="glass-card"
                style={{
                  background: '#fff',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                {/* Image & Price Tag */}
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img
                    src={room.image}
                    alt={room.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(7, 23, 44, 0.88)', backdropFilter: 'blur(8px)', color: 'var(--gold)', padding: '4px 14px', borderRadius: '30px', fontSize: '12.5px', fontWeight: 700, border: '1px solid var(--gold)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
                    {room.price}
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '12px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', color: '#fff', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', display: 'flex', gap: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <span>📐 {room.size}</span>
                    <span>🛏️ {room.bed}</span>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1, justifyItems: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--emerald-600)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      ✦ {room.category} Collection
                    </span>
                    <h3 style={{ fontSize: '20px', color: 'var(--sapphire-900)', margin: '4px 0 8px' }}>
                      {room.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: 1.55, marginBottom: '16px' }}>
                      {room.desc}
                    </p>

                    {/* Compact Tags Pill Grid */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                      {room.tags.map((tag, i) => (
                        <span key={i} style={{ fontSize: '11.5px', background: 'var(--emerald-50)', color: 'var(--emerald-800)', padding: '4px 10px', borderRadius: '6px', fontWeight: 600, border: '1px solid rgba(29, 104, 82, 0.15)', transition: 'all 0.2s ease' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '14px', marginTop: 'auto' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      <strong>Max:</strong> {room.guests}
                    </div>
                    <button
                      onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="btn btn-emerald"
                      style={{ padding: '8px 16px', fontSize: '12px', flex: '1 1 120px' }}
                    >
                      Inquire Reserve <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOSPITALITY STANDARDS GRID (WITH ATTRACTIVE HOVER GLOW) ---------- */}
      <section style={{ padding: '60px 0', background: 'var(--beige)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '36px' }}>
            <span className="eyebrow eyebrow-emerald">Lodge Hospitality</span>
            <h2>Our Standards of Comfort & Service</h2>
            <p style={{ fontSize: '15px' }}>Every lodge guest enjoys complimentary access to our signature five-star amenities.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { icon: Wifi, title: 'Complimentary High-Speed Wi-Fi', desc: 'Seamless 100 Mbps fiber connectivity across all suites and common areas.' },
              { icon: UserCheck, title: '24/7 Room Service & Dining', desc: 'Round-the-clock room dining service featuring South Indian & Continental menus.' },
              { icon: Wind, title: 'Climate Controlled Air Conditioning', desc: 'Pre-cooled rooms and individual temperature control in every suite.' },
              { icon: ShieldCheck, title: '100% Sanitized Hygiene', desc: 'Daily deep sanitization and fresh organic cotton linens changed daily.' },
              { icon: Car, title: 'Valet & Secure Car Parking', desc: 'Ample on-site parking with 24-hour CCTV surveillance and security staff.' },
              { icon: Coffee, title: 'Complimentary Morning Breakfast', desc: 'Freshly prepared traditional idli, dosa, and filter coffee served every morning.' },
            ].map((am, idx) => {
              const IconComp = am.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    background: '#fff',
                    padding: '22px',
                    borderRadius: '16px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    cursor: 'default',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--emerald-100)', color: 'var(--emerald-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(15, 56, 44, 0.1)' }}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', color: 'var(--sapphire-900)', marginBottom: '4px' }}>{am.title}</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{am.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
