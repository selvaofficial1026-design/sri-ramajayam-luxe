import React, { useState } from 'react';
import { Camera, X, ZoomIn, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (cat) => {
    if (filter === cat) return;
    setLoading(true);
    setFilter(cat);
    setTimeout(() => setLoading(false), 450); // Simulate brief shimmer loader for effect #8
  };

  const images = [
    {
      id: 1,
      title: 'Grand Ramajayam Ballroom Wedding Setup',
      category: 'Banquets',
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop',
      tag: 'Grand Banquet',
    },
    {
      id: 2,
      title: 'Presidential Emerald Suite Bedroom',
      category: 'Rooms',
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
      tag: 'Lodge Suite',
    },
    {
      id: 3,
      title: 'Royal Mandap & Stage Flower Decoration',
      category: 'Weddings',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
      tag: 'Wedding Decor',
    },
    {
      id: 4,
      title: 'Executive Deluxe Suite Interior',
      category: 'Rooms',
      url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',
      tag: 'Lodge Stay',
    },
    {
      id: 5,
      title: 'Open-Air Emerald Lawn Cocktail Dinner',
      category: 'Banquets',
      url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop',
      tag: 'Lawn Party',
    },
    {
      id: 6,
      title: 'Luxury Front Desk & Reception Lounge',
      category: 'Lounge',
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
      tag: 'Front Desk',
    },
    {
      id: 7,
      title: 'Royal South Indian Banana Leaf Dining Hall',
      category: 'Dining',
      url: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop',
      tag: 'Gourmet Feast',
    },
    {
      id: 8,
      title: 'Sapphire Corporate Seminar Setup',
      category: 'Banquets',
      url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop',
      tag: 'Corporate Hall',
    },
    {
      id: 9,
      title: 'Twin Family Luxury Suite Lounge',
      category: 'Rooms',
      url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
      tag: 'Family Stay',
    },
  ];

  const filteredImages = filter === 'All' ? images : images.filter((img) => img.category === filter);

  return (
    <div className="animate-fade-in">
      {/* ---------- HEADER BANNER WITH TEXT REVEAL MASKS & AMBIENT ORBS ---------- */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--emerald-900) 0%, var(--sapphire-900) 100%)',
          color: '#fff',
          padding: '80px 0 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="animate-float" style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(200, 169, 107, 0.28) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="animate-float" style={{ position: 'absolute', bottom: '-80px', left: '-50px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(29, 104, 82, 0.35) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none', animationDelay: '-1s' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
          <span className="eyebrow eyebrow-gold" style={{ background: 'rgba(200, 169, 107, 0.2)', boxShadow: '0 0 15px rgba(200, 169, 107, 0.25)' }}>
            <Sparkles size={14} color="var(--gold)" />
            Visual Tour & Highlights
          </span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', color: '#fff', marginBottom: '14px' }}>
            <span className="text-mask-container"><span className="text-mask-reveal">The <span className="gold-shimmer-text">Sri Ramajayam Luxe</span> Gallery</span></span>
          </h1>
          <p style={{ fontSize: 'clamp(14.5px, 2.3vw, 17px)', color: '#dcd1c1', fontWeight: 300, lineHeight: 1.6 }}>
            Explore our architectural grandeur, serene lodge suites, opulent banquet decorations, and joyous celebrations captured through our lens.
          </p>
        </div>
      </section>

      {/* ---------- FILTER TABS WITH CUBIC BEZIER HOVER ---------- */}
      <section style={{ padding: '26px 0', background: 'var(--ivory)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {['All', 'Rooms', 'Banquets', 'Weddings', 'Dining', 'Lounge'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className="spring-hover"
              style={{
                padding: '8px 18px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                background: filter === cat ? 'var(--sapphire-800)' : '#fff',
                color: filter === cat ? '#fff' : 'var(--charcoal)',
                border: filter === cat ? '1px solid var(--sapphire-800)' : '1px solid rgba(0,0,0,0.1)',
                boxShadow: filter === cat ? '0 8px 20px rgba(11, 37, 69, 0.3), 0 0 15px rgba(32, 103, 186, 0.2)' : '0 2px 6px rgba(0,0,0,0.04)',
                transform: filter === cat ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {cat === 'All' ? '✨ All Photos' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- GALLERY GRID WITH SKELETON SHIMMER (#8) & SMOOTH ZOOM (#10) ---------- */}
      <section style={{ padding: '50px 0', background: 'var(--ivory)' }}>
        <div className="container">
          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} style={{ height: '250px', borderRadius: '18px', overflow: 'hidden' }}>
                  <div className="skeleton-loader" style={{ width: '100%', height: '100%' }} />
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setLightboxImage(img)}
                  className="glass-card img-zoom-container scroll-reveal"
                  style={{
                    position: 'relative',
                    height: '250px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#000',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    style={{ opacity: 0.9 }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(7, 23, 44, 0.85)', backdropFilter: 'blur(8px)', color: 'var(--gold)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid var(--gold)', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', zIndex: 2 }}>
                    {img.tag}
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(0deg, rgba(7, 23, 44, 0.95) 0%, rgba(7, 23, 44, 0.4) 60%, transparent 100%)', padding: '28px 16px 14px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', transition: 'padding 0.3s ease', zIndex: 2 }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 600, fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{img.title}</span>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(200, 169, 107, 0.2)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ZoomIn size={16} color="var(--gold)" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- LIGHTBOX MODAL ---------- */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(4, 13, 26, 0.94)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in layered-shadow-lg"
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--sapphire-950)',
              borderRadius: '20px',
              border: '2px solid var(--gold)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(200, 169, 107, 0.35)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="spring-hover"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.75)',
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
            <div style={{ position: 'relative', maxHeight: 'clamp(220px, 50vh, 520px)', background: '#040d1a', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                style={{ width: '100%', height: '100%', maxHeight: 'clamp(220px, 50vh, 520px)', objectFit: 'contain', background: '#040d1a' }}
              />
            </div>
            <div style={{ padding: 'clamp(14px, 3.5vw, 20px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                  ✦ {lightboxImage.tag}
                </span>
                <h3 style={{ fontSize: 'clamp(17px, 3.8vw, 22px)', color: '#fff', margin: 0, lineHeight: 1.25 }}>{lightboxImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
