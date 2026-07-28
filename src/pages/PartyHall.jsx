import React, { useState } from 'react';
import { PartyPopper, Users, Sparkles, Utensils, Music, Heart, ShieldCheck, CheckCircle2, ArrowRight, Car, Maximize2, Award, Calendar, ZoomIn, X } from 'lucide-react';

export default function PartyHall({ setActivePage }) {
  const [lightboxHall, setLightboxHall] = useState(null);

  const halls = [
    {
      id: 1,
      title: 'The Grand Ramajayam Ballroom',
      capacity: '500 — 800 Guests',
      idealFor: 'Royal Weddings & Galas',
      size: '8,500 sq.ft Pillarless',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
      tag: 'Flagship Ballroom',
      desc: 'Our premier celebration jewel engineered with 24-foot ceilings and zero obstructive columns. Featuring imported crystal chandeliers and acoustic audio.',
      highlight: '✨ Includes 2 VIP Bridal Green Rooms & Stage Decor Support',
      tags: ['🏛️ Zero Pillar View', '👰 2 VIP Bridal Suites', '🎵 Bose Audio', '❄️ 30-Ton AC'],
    },
    {
      id: 2,
      title: 'The Sapphire Banquet Lounge',
      capacity: '150 — 300 Guests',
      idealFor: 'Birthdays & Engagements',
      size: '3,800 sq.ft Executive Space',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
      tag: 'Intimate Elegance',
      desc: 'A masterfully curated lounge environment designed for high-profile engagement ceremonies, milestone birthdays, and networking dinners.',
      highlight: '✨ Equipped with 4K Laser Projection & LED Mood Lighting',
      tags: ['📽️ 4K Projector', '💡 LED Moods', '🪑 Custom Layouts', '☕ Buffet Dining'],
    },
    {
      id: 3,
      title: 'The Emerald Starlit Lawn',
      capacity: '200 — 450 Guests',
      idealFor: 'Open-Air Sangeet & Cocktail',
      size: '6,000 sq.ft Lush Turf',
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop',
      tag: 'Nature-Infused Luxury',
      desc: 'Celebrate under the open evening sky surrounded by manicured emerald grass turfs, exotic royal palms, and a romantic canopy of warm fairy lights.',
      highlight: '✨ Features Custom Live Cooking Counters & Canopy Support',
      tags: ['🌿 Grass Turf', '✨ Fairy Lights', '🍳 Live Cooking', '🚗 Valet Access'],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* ---------- HEADER BANNER WITH TEXT REVEAL MASKS & AMBIENT ORBS ---------- */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--sapphire-950) 0%, var(--sapphire-800) 100%)',
          color: '#fff',
          padding: '80px 0 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="animate-float" style={{ position: 'absolute', top: '-50px', left: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(200, 169, 107, 0.28) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="animate-float" style={{ position: 'absolute', bottom: '-80px', right: '-50px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(24, 78, 143, 0.35) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none', animationDelay: '-1.5s' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <span className="eyebrow eyebrow-gold" style={{ background: 'rgba(200, 169, 107, 0.2)', boxShadow: '0 0 15px rgba(200, 169, 107, 0.25)' }}>
            <Sparkles size={14} color="var(--gold)" />
            Majestic Banquets & Celebrations
          </span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', color: '#fff', marginBottom: '14px' }}>
            <span className="text-mask-container"><span className="text-mask-reveal">The <span className="gold-shimmer-text">Grand Party & Banquet</span> Halls</span></span>
          </h1>
          <p style={{ fontSize: 'clamp(14.5px, 2.3vw, 17px)', color: '#dcd1c1', fontWeight: 300, lineHeight: 1.6 }}>
            Where life's greatest milestones are celebrated in royal grandeur. Engineered as expansive architectural spaces with zero obstructive pillars and tailored gourmet experiences.
          </p>
        </div>
      </section>

      {/* ---------- UNIQUE ARCHITECTURAL SHOWCASE: MEDIUM SIZE COMPACT SPLIT LAYOUT ---------- */}
      <section style={{ padding: '60px 0', background: 'var(--ivory)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="section-head scroll-reveal" style={{ marginBottom: '40px' }}>
            <span className="eyebrow eyebrow-sapphire">Architectural Digest</span>
            <h2>Our Signature Celebration Venues</h2>
            <p style={{ fontSize: '15px' }}>Unlike standard hotel rooms, our banquets are grand architectural arenas crafted for panoramic views and flawless acoustics.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {halls.map((hall, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={hall.id}
                  className="glass-card layered-shadow-lg scroll-reveal"
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(200, 169, 107, 0.35)',
                    display: 'flex',
                    flexDirection: isEven ? 'row-reverse' : 'row',
                    flexWrap: 'wrap',
                    boxShadow: '0 12px 30px rgba(7, 23, 44, 0.08), 0 0 20px rgba(200, 169, 107, 0.1)',
                  }}
                >
                  {/* Medium Compact Clickable Image Stage (approx 280px height) */}
                  <div
                    onClick={() => setLightboxHall(hall)}
                    className="img-zoom-container spring-hover"
                    style={{
                      flex: '1 1 340px',
                      height: '280px',
                      position: 'relative',
                      background: '#040d1a',
                      cursor: 'pointer',
                    }}
                    title="Click to zoom image & view venue layout"
                  >
                    <img
                      src={hall.image}
                      alt={hall.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    
                    {/* Zoom icon hint in top-right */}
                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.25)', zIndex: 2 }}>
                      <ZoomIn size={15} color="var(--gold)" />
                    </div>

                    {/* Floating Glass Badges */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(7, 23, 44, 0.88)', backdropFilter: 'blur(8px)', color: 'var(--gold)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid var(--gold)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)', zIndex: 2 }}>
                      {hall.tag}
                    </div>

                    <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', color: '#fff', padding: '6px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 6px 15px rgba(0,0,0,0.5)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', fontWeight: 700, color: 'var(--gold)' }}>
                        <Users size={13} />
                        {hall.capacity}
                      </div>
                      <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', fontWeight: 600, color: '#dcd1c1' }}>
                        <Maximize2 size={13} />
                        {hall.size}
                      </div>
                    </div>
                  </div>

                  {/* Medium Compact Content Pane */}
                  <div
                    style={{
                      flex: '1 1 360px',
                      padding: '22px 26px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      background: 'linear-gradient(145deg, #ffffff 0%, var(--beige) 100%)',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '10.5px', color: 'var(--sapphire-700)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '4px' }}>
                        ✦ {hall.idealFor}
                      </span>

                      <h3
                        onClick={() => setLightboxHall(hall)}
                        className="hover-underline-slide"
                        style={{ fontSize: '20px', color: 'var(--sapphire-950)', margin: '0 0 8px', fontFamily: 'var(--font-serif)', lineHeight: 1.2, cursor: 'pointer', display: 'inline-block' }}
                      >
                        {hall.title}
                      </h3>

                      {/* Line clamped to 2 lines for compact height */}
                      <p style={{ color: 'var(--charcoal)', fontSize: '12.5px', lineHeight: 1.5, marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {hall.desc}
                      </p>

                      {/* Super Compact VIP Highlight Strip */}
                      <div
                        style={{
                          background: 'rgba(200, 169, 107, 0.15)',
                          borderLeft: '2.5px solid var(--gold)',
                          padding: '6px 10px',
                          borderRadius: '0 6px 6px 0',
                          marginBottom: '12px',
                          fontSize: '11.5px',
                          color: 'var(--sapphire-900)',
                          fontWeight: 600,
                        }}
                      >
                        {hall.highlight}
                      </div>

                      {/* Single Row Compact Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                        {hall.tags.map((tag, i) => (
                          <span key={i} style={{ fontSize: '10.5px', background: '#fff', color: 'var(--sapphire-900)', padding: '3px 10px', borderRadius: '20px', fontWeight: 600, border: '1px solid rgba(11, 37, 69, 0.15)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compact Action Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '12px', marginTop: 'auto' }}>
                      <button
                        onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="btn btn-gold spring-hover"
                        style={{ padding: '8px 18px', fontSize: '12px', flex: '1 1 150px' }}
                      >
                        <Calendar size={14} />
                        Check Availability
                      </button>
                      <button
                        onClick={() => setLightboxHall(hall)}
                        className="hover-underline-slide"
                        style={{ background: 'transparent', border: 'none', color: 'var(--sapphire-900)', fontWeight: 700, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        View High-Res Photo <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- EVENT SERVICES & CATERING (WITH BENTO GRID CARD HOVER GLOWS #9) ---------- */}
      <section style={{ padding: '60px 0', background: 'var(--beige)' }}>
        <div className="container">
          <div className="section-head scroll-reveal" style={{ marginBottom: '36px' }}>
            <span className="eyebrow eyebrow-sapphire">Turnkey Event Services</span>
            <h2>Everything Needed for a Flawless Event</h2>
            <p style={{ fontSize: '15px' }}>We provide complete event management assistance from decor selection to traditional feasts.</p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {[
              { icon: Utensils, title: 'Royal Gourmet Catering', desc: 'Traditional Banana Leaf South Indian wedding feasts, North Indian buffets, and live dessert counters cooked by master chefs.' },
              { icon: Sparkles, title: 'Custom Stage Decor', desc: 'Collaborate with our empanelled decorators for traditional floral mandaps, contemporary backdrops, and LED arches.' },
              { icon: Music, title: 'Acoustic Sound & Lighting', desc: 'Pre-installed professional sound systems, wireless microphones, and intelligent mood lighting for speeches.' },
              { icon: Heart, title: 'VIP Bridal Green Rooms', desc: 'Air-conditioned luxury dressing suites with full-length mirrors and attached restrooms for the bride and groom.' },
              { icon: Car, title: 'Valet Parking & Support', desc: 'Dedicated parking bays for over 200 cars with trained security and valet drivers for effortless arrivals.' },
              { icon: ShieldCheck, title: '100% Power Backup', desc: 'Uninterrupted heavy-duty generator backup ensuring your lights, ACs, and music never fade for a second.' },
            ].map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="bento-card scroll-reveal"
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--sapphire-100)', color: 'var(--sapphire-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(11, 37, 69, 0.1)' }}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', color: 'var(--sapphire-900)', marginBottom: '4px' }}>{srv.title}</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- BOTTOM CALL TO ACTION ---------- */}
      <section className="scroll-reveal" style={{ background: 'linear-gradient(135deg, var(--sapphire-900) 0%, var(--emerald-900) 100%)', color: '#fff', padding: '60px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="animate-float" style={{ position: 'absolute', top: '-50px', right: '10%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(200, 169, 107, 0.25) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 36px)', color: '#fff', marginBottom: '14px' }}>Planning an <span className="gold-shimmer-text">Auspicious Wedding</span> or Gala?</h2>
          <p style={{ color: '#dcd1c1', fontSize: '15.5px', marginBottom: '24px', fontWeight: 300 }}>
            Our event planners are ready to take your guest count and date requirements to craft an all-inclusive customized proposal.
          </p>
          <button
            onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn btn-gold spring-hover"
            style={{ padding: '12px 26px', fontSize: '13px' }}
          >
            Check Hall Availability Now <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* ---------- MOBILE-RESPONSIVE COMPACT LIGHTBOX POP-UP MODAL (PARTY HALLS) ---------- */}
      {lightboxHall && (
        <div
          onClick={() => setLightboxHall(null)}
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
              onClick={() => setLightboxHall(null)}
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
                src={lightboxHall.image}
                alt={lightboxHall.title}
                style={{ width: '100%', height: '100%', maxHeight: 'clamp(200px, 42vh, 420px)', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '12px', left: '16px', background: 'rgba(7, 23, 44, 0.92)', backdropFilter: 'blur(8px)', color: 'var(--gold)', padding: '4px 14px', borderRadius: '20px', fontSize: '13.5px', fontWeight: 700, border: '1px solid var(--gold)', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                {lightboxHall.capacity}
              </div>
            </div>

            {/* Compact Hall Specs & Actions */}
            <div style={{ padding: 'clamp(18px, 4vw, 28px)', background: 'linear-gradient(180deg, var(--sapphire-950) 0%, #07192f 100%)', color: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '2px' }}>
                    ✦ {lightboxHall.idealFor}
                  </span>
                  <h3 style={{ fontSize: 'clamp(20px, 3.8vw, 26px)', color: '#fff', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>
                    {lightboxHall.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#dcd1c1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Maximize2 size={13} color="var(--gold)" /> <strong>{lightboxHall.size}</strong>
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                  <span style={{ color: '#dcd1c1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={13} color="var(--gold)" /> <strong>{lightboxHall.capacity}</strong>
                  </span>
                </div>
              </div>

              <p style={{ color: '#c5cdd8', fontSize: '13.5px', lineHeight: 1.55, marginBottom: '14px', fontWeight: 300 }}>
                {lightboxHall.desc}
              </p>

              <div style={{ background: 'rgba(200, 169, 107, 0.15)', borderLeft: '2.5px solid var(--gold)', padding: '8px 12px', borderRadius: '0 6px 6px 0', marginBottom: '18px', fontSize: '12.5px', color: '#dfc898', fontWeight: 600 }}>
                {lightboxHall.highlight}
              </div>

              {/* All Tags Pill Grid (Compact) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {lightboxHall.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: '11.5px', background: 'rgba(200, 169, 107, 0.15)', color: 'var(--gold-light)', padding: '4px 12px', borderRadius: '20px', fontWeight: 600, border: '1px solid rgba(200, 169, 107, 0.3)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Compact Bottom Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '16px' }}>
                <span style={{ fontSize: '12px', color: '#a0aab8' }}>
                  💡 <strong>Need Date Inspection?</strong> Chat with Banquet Manager.
                </span>
                <button
                  onClick={() => { setLightboxHall(null); setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="btn btn-gold spring-hover"
                  style={{ padding: '10px 22px', fontSize: '12.5px', flex: '1 1 180px', justifyContent: 'center' }}
                >
                  Proceed to Check Dates <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
