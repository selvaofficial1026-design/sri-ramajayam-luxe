import React, { useState, useEffect } from 'react';
import { Building2, Wifi, Tv, Coffee, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Car, Wind, Sparkles, ZoomIn, X, Users, Maximize2 } from 'lucide-react';

export default function Lodge({ setActivePage }) {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const [lightboxRoom, setLightboxRoom] = useState(null);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        document.querySelectorAll('.scroll-reveal, .reveal-up, .reveal-left, .reveal-right').forEach((el) => {
          el.classList.add('reveal-active');
        });
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [filter, loading]);

  const handleFilterChange = (cat) => {
    if (filter === cat) return;
    setLoading(true);
    setFilter(cat);
    setTimeout(() => setLoading(false), 450); // Simulate brief shimmer loader for effect #8
  };


  const rooms = [
    {
      id: 1,
      title: 'Executive Deluxe Suite',
      category: 'Executive',
      price: '₹3,500 / Night',
      size: '380 sq.ft',
      bed: '1 King Bed',
      guests: '2 Adults, 1 Child',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop',
      desc: 'Spacious executive room for corporate travelers seeking tranquility with automated climate control and workspace.',
      tags: ['❄️ Central AC', '📶 100 Mbps Wi-Fi', '📺 Smart TV', '🍽️ 24/7 Room Service'],
    },
    {
      id: 2,
      title: 'Twin Family Luxury Suite',
      category: 'Family',
      price: '₹5,200 / Night',
      size: '550 sq.ft',
      bed: '2 Queen Beds',
      guests: '4 Adults, 2 Children',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      desc: 'An expansive suite tailored for families attending weddings or vacationing in comfort with sitting lounge.',
      tags: ['🛏️ 2 Queen Beds', '🛋️ Lounge Area', '☕ Buffet Breakfast', '👔 Express Laundry'],
    },
    {
      id: 3,
      title: 'The Presidential Emerald Suite',
      category: 'Presidential',
      price: '₹8,500 / Night',
      size: '850 sq.ft',
      bed: '1 King Royal Bed',
      guests: '2 Adults, 2 Children',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      desc: 'Our flagship VIP lodge accommodation offering panoramic garden views, private balcony, and jacuzzi bath.',
      tags: ['🌿 Balcony View', '🛁 Jacuzzi Bath', '🤵 24-Hr Butler', '🚗 Airport Transfer'],
    },
    {
      id: 4,
      title: 'Superior Corporate Single',
      category: 'Executive',
      price: '₹2,800 / Night',
      size: '280 sq.ft',
      bed: '1 Queen Bed',
      guests: '1 or 2 Adults',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      desc: 'Smart, efficient comfort with soundproof windows, high-speed Wi-Fi, and express check-in for busy professionals.',
      tags: ['🔕 Soundproof', '💻 Desk Workstation', '📶 Fast Wi-Fi', '🚿 Power Shower'],
    },
  ];

  const filteredRooms = filter === 'All' ? rooms : rooms.filter(r => r.category === filter);

  return (
    <div className="animate-fade-in">
      {/* ---------- HEADER BANNER WITH TEXT REVEAL MASKS & AMBIENT ORBS ---------- */}
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
            <span className="text-mask-container"><span className="text-mask-reveal"><span className="gold-shimmer-text">Luxury Lodge</span> Accommodations</span></span>
          </h1>
          <p style={{ fontSize: 'clamp(14.5px, 2.3vw, 17px)', color: '#dcd1c1', fontWeight: 300, lineHeight: 1.6 }}>
            Designed for discerning travelers and wedding guests who value peaceful rest, pristine hygiene, and warm personalized hospitality.
          </p>
        </div>
      </section>

      {/* ---------- ROOM CATEGORY FILTER TABS WITH CUBIC BEZIER HOVER ---------- */}
      <section style={{ padding: '26px 0', background: 'var(--ivory)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {['All', 'Executive', 'Family', 'Presidential'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className="spring-hover"
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
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

      {/* ---------- ROOMS GRID: EQUAL WIDTH & HEIGHT (COMPACT MEDIUM SQUARE CARDS) ---------- */}
      <section style={{ padding: '50px 0', background: 'var(--ivory)' }}>
        <div className="container" style={{ maxWidth: '1150px' }}>
          {loading ? (
            /* Effect #8: Skeleton Screen Shimmer Loaders */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 360px))', justifyContent: 'center', gap: '26px' }}>
              {[1, 2, 3].map((n) => (
                <div key={n} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', padding: '16px', border: '1px solid rgba(0,0,0,0.06)', height: '360px' }}>
                  <div className="skeleton-loader" style={{ height: '160px', marginBottom: '14px' }} />
                  <div className="skeleton-loader" style={{ height: '20px', width: '70%', marginBottom: '10px' }} />
                  <div className="skeleton-loader" style={{ height: '14px', width: '90%', marginBottom: '16px' }} />
                  <div className="skeleton-loader" style={{ height: '38px', width: '100%' }} />
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 360px))',
                justifyContent: 'center',
                gap: '26px',
              }}
            >
              {filteredRooms.map((room) => (
                <div
                  key={room.id}
                  className="glass-card scroll-reveal"
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(0,0,0,0.08)',
                    width: '100%',
                    maxWidth: '360px',
                    height: '370px',
                    margin: '0 auto',
                  }}
                >
                  {/* Compact Clickable Image Header (150px height) */}
                  <div
                    onClick={() => setLightboxRoom(room)}
                    className="img-zoom-container spring-hover"
                    style={{
                      height: '150px',
                      flexShrink: 0,
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                    title="Click to zoom image & view specifications"
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                    />
                    
                    {/* Zoom icon hint in top-left */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)', zIndex: 2 }}>
                      <ZoomIn size={14} color="var(--gold)" />
                    </div>

                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(7, 23, 44, 0.9)', backdropFilter: 'blur(8px)', color: 'var(--gold)', padding: '3px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, border: '1px solid var(--gold)', boxShadow: '0 2px 8px rgba(0,0,0,0.4)', zIndex: 2 }}>
                      {room.price}
                    </div>
                    
                    <div style={{ position: 'absolute', bottom: '8px', left: '10px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', color: '#fff', padding: '2px 8px', borderRadius: '6px', fontSize: '10.5px', display: 'flex', gap: '8px', border: '1px solid rgba(255,255,255,0.15)', zIndex: 2 }}>
                      <span>📐 {room.size}</span>
                      <span>🛏️ {room.bed}</span>
                    </div>
                  </div>

                  {/* Compact Body Content */}
                  <div style={{ padding: '16px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, justifyItems: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontSize: '10.5px', color: 'var(--emerald-600)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          ✦ {room.category}
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          Max: <strong>{room.guests}</strong>
                        </span>
                      </div>

                      <h3
                        onClick={() => setLightboxRoom(room)}
                        className="hover-underline-slide"
                        style={{ fontSize: '17.5px', color: 'var(--sapphire-900)', margin: '0 0 6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer', display: 'inline-block' }}
                      >
                        {room.title}
                      </h3>
                      
                      {/* Strictly limited to 2 lines for equal height ratio */}
                      <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', lineHeight: 1.45, marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '36px' }}>
                        {room.desc}
                      </p>

                      {/* Single row compact tags */}
                      <div style={{ display: 'flex', gap: '5px', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '12px' }}>
                        {room.tags.map((tag, i) => (
                          <span key={i} style={{ fontSize: '10.5px', background: 'var(--emerald-50)', color: 'var(--emerald-800)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, border: '1px solid rgba(29, 104, 82, 0.15)', flexShrink: 0 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compact Footer Button */}
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '10px', marginTop: 'auto' }}>
                      <button
                        onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="btn btn-emerald spring-hover"
                        style={{ width: '100%', padding: '8px 16px', fontSize: '12px', justifyContent: 'center' }}
                      >
                        Inquire & Reserve Suite <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- HOSPITALITY STANDARDS (BENTO GRID CARD HOVER GLOWS #9) ---------- */}
      <section style={{ padding: '60px 0', background: 'var(--beige)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '36px', overflow: 'hidden' }}>
            <span className="eyebrow eyebrow-emerald reveal-left" style={{ display: 'inline-block' }}>Lodge Hospitality</span>
            <h2 className="reveal-left" style={{ transitionDelay: '100ms' }}>Our Standards of Comfort & Service</h2>
            <p className="reveal-right" style={{ fontSize: '15px', transitionDelay: '200ms' }}>Every lodge guest enjoys complimentary access to our signature five-star amenities.</p>
          </div>


          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '26px' }}>
            {[
              { icon: Wifi, title: 'Complimentary 100 Mbps Wi-Fi', desc: 'Seamless high-speed fiber connectivity across all executive suites and common lounge areas for business & leisure.', badge: '⚡ High Speed' },
              { icon: UserCheck, title: '24/7 Room Service & Dining', desc: 'Round-the-clock personalized room dining featuring authentic South Indian delicacies and Continental menus.', badge: '🍽️ Always On' },
              { icon: Wind, title: 'Automated Climate AC', desc: 'Pre-cooled luxury suites with smart individual temperature and air-quality control in every room.', badge: '❄️ Smart Cooling' },
              { icon: ShieldCheck, title: '100% Sanitized Luxury Hygiene', desc: 'Daily deep UV sanitization, premium organic cotton linens, and imported herbal bath amenities.', badge: '🛡️ Certified Safe' },
            ].map((am, idx) => {
              const IconComp = am.icon;
              return (
                <div
                  key={idx}
                  className="bento-card spring-hover scroll-reveal"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    alignItems: 'flex-start',
                    background: 'linear-gradient(145deg, #ffffff 0%, var(--emerald-50) 100%)',
                    border: '1.5px solid rgba(29, 104, 82, 0.22)',
                    borderRadius: '22px',
                    padding: '24px',
                    boxShadow: '0 12px 30px rgba(15, 56, 44, 0.08), 0 0 15px rgba(29, 104, 82, 0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(180deg, var(--emerald-800) 0%, var(--gold) 100%)' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, var(--emerald-800) 0%, var(--emerald-950) 100%)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 15px rgba(15, 56, 44, 0.25)' }}>
                      <IconComp size={22} />
                    </div>
                    <span style={{ fontSize: '11px', background: '#fff', color: 'var(--emerald-800)', padding: '4px 12px', borderRadius: '20px', fontWeight: 700, border: '1px solid rgba(29, 104, 82, 0.2)', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                      {am.badge}
                    </span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '17px', color: 'var(--sapphire-950)', marginBottom: '6px', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>{am.title}</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--charcoal)', margin: 0, lineHeight: 1.6 }}>{am.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- MOBILE-RESPONSIVE COMPACT LIGHTBOX POP-UP MODAL ---------- */}
      {lightboxRoom && (
        <div
          onClick={() => setLightboxRoom(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(4, 13, 26, 0.94)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(12px, 3vw, 24px)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in layered-shadow-lg"
            style={{
              position: 'relative',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--sapphire-950)',
              borderRadius: '20px',
              border: '2px solid var(--gold)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(200, 169, 107, 0.35)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Compact Close Button */}
            <button
              onClick={() => setLightboxRoom(null)}
              className="spring-hover"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.78)',
                border: '1px solid var(--gold)',
                color: '#fff',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Compact High Resolution Image Preview (Capped height for mobile safety) */}
            <div style={{ position: 'relative', maxHeight: 'clamp(200px, 42vh, 420px)', background: '#040d1a', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={lightboxRoom.image}
                alt={lightboxRoom.title}
                style={{ width: '100%', height: '100%', maxHeight: 'clamp(200px, 42vh, 420px)', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '12px', left: '16px', background: 'rgba(7, 23, 44, 0.92)', backdropFilter: 'blur(8px)', color: 'var(--gold)', padding: '4px 14px', borderRadius: '20px', fontSize: '13.5px', fontWeight: 700, border: '1px solid var(--gold)', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                {lightboxRoom.price}
              </div>
            </div>

            {/* Compact Suite Specs & Actions */}
            <div style={{ padding: 'clamp(18px, 4vw, 28px)', background: 'linear-gradient(180deg, var(--sapphire-950) 0%, #07192f 100%)', color: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '2px' }}>
                    ✦ {lightboxRoom.category} Collection
                  </span>
                  <h3 style={{ fontSize: 'clamp(20px, 3.8vw, 26px)', color: '#fff', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>
                    {lightboxRoom.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#dcd1c1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Maximize2 size={13} color="var(--gold)" /> <strong>{lightboxRoom.size}</strong>
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                  <span style={{ color: '#dcd1c1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={13} color="var(--gold)" /> <strong>{lightboxRoom.guests}</strong>
                  </span>
                </div>
              </div>

              <p style={{ color: '#c5cdd8', fontSize: '13.5px', lineHeight: 1.55, marginBottom: '16px', fontWeight: 300 }}>
                {lightboxRoom.desc} Every suite features luxury custom orthopedic mattresses, high-speed fiber internet, and automated climate control for rejuvenating rest.
              </p>

              {/* All Tags Pill Grid (Compact) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {lightboxRoom.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: '11.5px', background: 'rgba(200, 169, 107, 0.15)', color: 'var(--gold-light)', padding: '4px 12px', borderRadius: '20px', fontWeight: 600, border: '1px solid rgba(200, 169, 107, 0.3)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Compact Bottom Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '16px' }}>
                <span style={{ fontSize: '12px', color: '#a0aab8' }}>
                  💡 <strong>Need Custom Tariff?</strong> Chat with our Concierge.
                </span>
                <button
                  onClick={() => { setLightboxRoom(null); setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="btn btn-gold spring-hover"
                  style={{ padding: '10px 22px', fontSize: '12.5px', flex: '1 1 180px', justifyContent: 'center' }}
                >
                  Proceed to Inquire <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
