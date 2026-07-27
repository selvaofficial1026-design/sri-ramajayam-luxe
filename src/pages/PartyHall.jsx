import React from 'react';
import { PartyPopper, Users, Sparkles, Utensils, Music, Heart, ShieldCheck, CheckCircle2, ArrowRight, Car } from 'lucide-react';

export default function PartyHall({ setActivePage }) {
  const halls = [
    {
      id: 1,
      title: 'The Grand Ramajayam Ballroom',
      capacity: '500 - 800 Guests',
      idealFor: 'Weddings & Grand Galas',
      size: '8,500 sq.ft',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
      tag: 'Flagship Venue',
      desc: 'Our premier pillarless celebration hall designed for majestic weddings with crystal chandeliers and VIP green rooms.',
      tags: ['🏛️ Pillarless Architecture', '👰 2 VIP Green Rooms', '🎵 Acoustic Sound'],
    },
    {
      id: 2,
      title: 'The Sapphire Banquet Hall',
      capacity: '150 - 300 Guests',
      idealFor: 'Birthdays & Engagements',
      size: '3,800 sq.ft',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
      tag: 'Intimate Elegance',
      desc: 'An intimate, sophisticated space perfect for engagement ceremonies, milestone birthdays, and networking dinners.',
      tags: ['📽️ Built-in HD Projector', '🪑 Flexible Seating', '✨ Ambient Lighting'],
    },
    {
      id: 3,
      title: 'The Emerald Lawn & Garden',
      capacity: '200 - 450 Guests',
      idealFor: 'Outdoor Parties & Sangeet',
      size: '6,000 sq.ft',
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop',
      tag: 'Open Air Luxury',
      desc: 'Celebrate under the starlit sky surrounded by lush emerald green foliage and fairy lights for cocktail evenings.',
      tags: ['🌿 Natural Grass Turf', '💡 Fairy Light Canopy', '🍳 Live Cooking Counters'],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* ---------- HEADER BANNER WITH GOLD SHIMMER & FLOATING ORBS ---------- */}
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
            The <span className="gold-shimmer-text">Grand Party & Banquet</span> Halls
          </h1>
          <p style={{ fontSize: 'clamp(14.5px, 2.3vw, 17px)', color: '#dcd1c1', fontWeight: 300, lineHeight: 1.6 }}>
            Where life's greatest milestones are celebrated in royal grandeur. Featuring expansive pillarless spaces, custom stage decoration, and gourmet catering.
          </p>
        </div>
      </section>

      {/* ---------- VENUE SHOWCASE CARDS (MEDIUM COMPACT GRID) ---------- */}
      <section style={{ padding: '50px 0', background: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '26px' }}>
            {halls.map((hall) => (
              <div
                key={hall.id}
                className="glass-card"
                style={{
                  background: '#fff',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid rgba(11, 37, 69, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={hall.image}
                    alt={hall.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--sapphire-800)', color: '#fff', padding: '4px 14px', borderRadius: '30px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                    {hall.tag}
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '12px', background: 'rgba(0, 0, 0, 0.78)', backdropFilter: 'blur(6px)', color: 'var(--gold)', padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(200, 169, 107, 0.4)' }}>
                    <Users size={14} color="var(--gold)" />
                    {hall.capacity}
                  </div>
                </div>

                {/* Copy */}
                <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', flex: 1, justifyItems: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--sapphire-600)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      ✦ {hall.idealFor}
                    </span>
                    <h3 style={{ fontSize: '21px', color: 'var(--sapphire-900)', margin: '4px 0 8px' }}>
                      {hall.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: 1.55, marginBottom: '16px' }}>
                      {hall.desc}
                    </p>

                    {/* Compact Tags Pill Grid */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {hall.tags.map((tag, i) => (
                        <span key={i} style={{ fontSize: '11.5px', background: 'var(--sapphire-50)', color: 'var(--sapphire-800)', padding: '4px 10px', borderRadius: '6px', fontWeight: 600, border: '1px solid rgba(17, 56, 102, 0.15)', transition: 'all 0.2s ease' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '14px', marginTop: 'auto' }}>
                    <button
                      onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="btn btn-sapphire"
                      style={{ width: '100%', padding: '10px 18px', fontSize: '12.5px', justifyContent: 'center' }}
                    >
                      Inquire Date & Pricing <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EVENT SERVICES & CATERING WITH GLASS AURA CARDS ---------- */}
      <section style={{ padding: '60px 0', background: 'var(--beige)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '36px' }}>
            <span className="eyebrow eyebrow-sapphire">Turnkey Event Services</span>
            <h2>Everything Needed for a Flawless Event</h2>
            <p style={{ fontSize: '15px' }}>We provide complete event management assistance from decor selection to traditional feasts.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
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
                  className="glass-card"
                  style={{
                    background: '#fff',
                    padding: '22px',
                    borderRadius: '16px',
                    border: '1px solid rgba(11, 37, 69, 0.08)',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    cursor: 'default',
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
      <section style={{ background: 'linear-gradient(135deg, var(--sapphire-900) 0%, var(--emerald-900) 100%)', color: '#fff', padding: '60px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="animate-float" style={{ position: 'absolute', top: '-50px', right: '10%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(200, 169, 107, 0.25) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 36px)', color: '#fff', marginBottom: '14px' }}>Planning an <span className="gold-shimmer-text">Auspicious Wedding</span> or Gala?</h2>
          <p style={{ color: '#dcd1c1', fontSize: '15.5px', marginBottom: '24px', fontWeight: 300 }}>
            Our event planners are ready to take your guest count and date requirements to craft an all-inclusive customized proposal.
          </p>
          <button
            onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn btn-gold"
            style={{ padding: '12px 26px', fontSize: '13px' }}
          >
            Check Hall Availability Now <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
