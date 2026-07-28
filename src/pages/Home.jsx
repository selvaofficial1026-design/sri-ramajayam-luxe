import React from 'react';
import { ShieldCheck, Sparkles, Building2, Utensils, Wifi, Clock, Star, ArrowRight, CheckCircle2, Award, Users, PartyPopper } from 'lucide-react';

export default function Home({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in">
      {/* ---------- HERO SECTION (WITH TEXT REVEAL MASKS & IMAGE REVEAL) ---------- */}
      <section
        style={{
          minHeight: '86vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--sapphire-950) 0%, var(--emerald-950) 100%)',
          color: '#fff',
          overflow: 'hidden',
          padding: '80px 0 100px',
        }}
      >
        <div className="img-reveal-animate" style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1600&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, rgba(4, 13, 26, 0.85) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200, 169, 107, 0.18)', border: '1px solid var(--gold)', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
            <Sparkles size={14} color="var(--gold)" />
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--gold-light)', textTransform: 'uppercase' }}>
              Welcome to Royal Tamil Nadu Hospitality
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 60px)', color: '#ffffff', fontWeight: 700, lineHeight: 1.15, marginBottom: '18px', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
            <span className="text-mask-container"><span className="text-mask-reveal">Stay in Comfort.</span></span><br />
            <span className="gold-shimmer-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>Celebrate in Grandeur.</span>
          </h1>

          <p style={{ fontSize: 'clamp(15px, 2.8vw, 18px)', color: '#dcd1c1', maxWidth: '660px', margin: '0 auto 34px', fontWeight: 300, lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Experience the pinnacle of luxury at Sri Ramajayam Luxe. Featuring serene, nature-infused lodge suites for peaceful stays and expansive pillarless banquet halls for your life's greatest milestones.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleNav('lodge')}
              className="btn btn-emerald spring-hover"
              style={{ padding: '14px 28px', fontSize: '13.5px', flex: '1 1 220px', maxWidth: '280px' }}
            >
              <Building2 size={16} />
              Explore Lodge Stays
            </button>
            <button
              onClick={() => handleNav('party-hall')}
              className="btn btn-sapphire spring-hover"
              style={{ padding: '14px 28px', fontSize: '13.5px', flex: '1 1 220px', maxWidth: '280px' }}
            >
              <PartyPopper size={16} />
              Grand Banquet Halls
            </button>
          </div>

          <div style={{ marginTop: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', color: '#b5a996', fontSize: '13px', fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="var(--gold)" /> 24/7 Concierge & Security</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="var(--gold)" /> 200+ Car Valet Parking</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="var(--gold)" /> Prime City Center Access</span>
          </div>
        </div>
      </section>

      {/* ---------- KEY STATS BAR (WITH GRADIENT TEXT CLIPPING) ---------- */}
      <section className="scroll-reveal" style={{ background: 'var(--sapphire-900)', borderTop: '1px solid rgba(200, 169, 107, 0.3)', borderBottom: '1px solid rgba(200, 169, 107, 0.3)', padding: '30px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {[
              { num: '4+', label: 'Luxury Suite Types' },
              { num: '800+', label: 'Banquet Guest Capacity' },
              { num: '100%', label: 'Power Backup & Comfort' },
              { num: '4.9 ★', label: 'Guest Satisfaction Score' },
            ].map((stat, idx) => (
              <div key={idx} style={{ padding: '8px' }}>
                <div className="gradient-text-gold" style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '4px' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '12px', color: '#dcd1c1', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DUAL SHOWCASE SECTION: EQUAL WIDTH & HEIGHT (COMPACT MEDIUM SQUARE) ---------- */}
      <section style={{ padding: '70px 0', background: 'var(--ivory)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-head scroll-reveal" style={{ marginBottom: '40px' }}>
            <span className="eyebrow eyebrow-gold">Tailored Experiences</span>
            <h2>Two Worlds of Excellence Under One Roof</h2>
            <p style={{ fontSize: '15px' }}>Whether you seek a tranquil retreat from your travels or a majestic venue to host guests, Sri Ramajayam Luxe is engineered for perfection.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 360px))', justifyContent: 'center', gap: '26px' }}>
            {/* Compact Medium Square Card 1: Lodge */}
            <div
              onClick={() => handleNav('lodge')}
              className="glass-card scroll-reveal"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(15, 56, 44, 0.12)',
                width: '100%',
                maxWidth: '360px',
                height: '370px', /* Equal height and width medium compact proportions */
                margin: '0 auto',
              }}
            >
              <div className="img-zoom-container" style={{ height: '150px', flexShrink: 0, position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
                  alt="Lodge Stays"
                />
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--emerald-800)', color: '#fff', padding: '3px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', zIndex: 2 }}>
                  Serene Stays
                </div>
              </div>
              <div style={{ padding: '16px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, justifyItems: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--emerald-900)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Building2 size={18} color="var(--emerald-700)" />
                    The Luxury Lodge
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', marginBottom: '12px', lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '36px' }}>
                    Immerse yourself in peaceful relaxation with our architect-designed executive rooms and family suites.
                  </p>
                  <div style={{ display: 'flex', gap: '5px', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '12px' }}>
                    <span style={{ fontSize: '10.5px', background: 'var(--emerald-50)', color: 'var(--emerald-800)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, flexShrink: 0 }}>✨ Smart LED TV</span>
                    <span style={{ fontSize: '10.5px', background: 'var(--emerald-50)', color: 'var(--emerald-800)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, flexShrink: 0 }}>🍽️ 24/7 Dining</span>
                    <span style={{ fontSize: '10.5px', background: 'var(--emerald-50)', color: 'var(--emerald-800)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, flexShrink: 0 }}>❄️ Central AC</span>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '10px', marginTop: 'auto' }}>
                  <span className="btn btn-outline-emerald spring-hover" style={{ width: '100%', padding: '8px 16px', fontSize: '12px', justifyContent: 'center' }}>
                    Explore Rooms <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>

            {/* Compact Medium Square Card 2: Party Hall */}
            <div
              onClick={() => handleNav('party-hall')}
              className="glass-card scroll-reveal"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(11, 37, 69, 0.12)',
                width: '100%',
                maxWidth: '360px',
                height: '370px', /* Equal height and width medium compact proportions */
                margin: '0 auto',
              }}
            >
              <div className="img-zoom-container" style={{ height: '150px', flexShrink: 0, position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop"
                  alt="Grand Party Hall"
                />
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--sapphire-800)', color: '#fff', padding: '3px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', zIndex: 2 }}>
                  Majestic Banquets
                </div>
              </div>
              <div style={{ padding: '16px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, justifyItems: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--sapphire-900)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <PartyPopper size={18} color="var(--sapphire-700)" />
                    The Grand Banquets
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', marginBottom: '12px', lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '36px' }}>
                    Host grand weddings, birthday receptions, corporate galas, and engagement ceremonies in our pillarless halls.
                  </p>
                  <div style={{ display: 'flex', gap: '5px', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '12px' }}>
                    <span style={{ fontSize: '10.5px', background: 'var(--sapphire-50)', color: 'var(--sapphire-800)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, flexShrink: 0 }}>🏛️ 800 Pax</span>
                    <span style={{ fontSize: '10.5px', background: 'var(--sapphire-50)', color: 'var(--sapphire-800)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, flexShrink: 0 }}>🎵 Bose Audio</span>
                    <span style={{ fontSize: '10.5px', background: 'var(--sapphire-50)', color: 'var(--sapphire-800)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, flexShrink: 0 }}>💐 Custom Decor</span>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '10px', marginTop: 'auto' }}>
                  <span className="btn btn-outline-sapphire spring-hover" style={{ width: '100%', padding: '8px 16px', fontSize: '12px', justifyContent: 'center' }}>
                    View Halls <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OUR HERITAGE STORY ---------- */}
      <section className="scroll-reveal" style={{ padding: '70px 0', background: 'var(--beige)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '44px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow eyebrow-sapphire">Our Heritage & Promise</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', color: 'var(--sapphire-900)', marginBottom: '16px' }}>
              Inspired by Timeless Standards of Excellence
            </h2>
            <p style={{ color: 'var(--charcoal)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
              Drawing inspiration from classic milestones in South Indian hospitality, <strong>Sri Ramajayam Luxe</strong> was conceptualized to combine <em>serene, five-star suite accommodations</em> with <em>world-class event celebration spaces</em> in one accessible location.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.7, marginBottom: '26px' }}>
              Every corner of our property is crafted with meticulous attention to detail—from our imported crystal chandeliers in the ballroom to the custom orthopedic mattresses in our guest suites.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div className="spring-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', flex: '1 1 180px' }}>
                <Award size={24} color="var(--gold-dark)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--sapphire-900)' }}>Certified Hygiene</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>100% Sanitized Suites</div>
                </div>
              </div>
              <div className="spring-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', flex: '1 1 180px' }}>
                <Users size={24} color="var(--sapphire-700)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--sapphire-900)' }}>Dedicated Concierge</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>24/7 Personalized Care</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="img-zoom-container" style={{ height: 'clamp(280px, 50vw, 400px)', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', border: '4px solid #fff' }}>
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                alt="Luxury Hotel Exterior"
              />
            </div>
            <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'var(--sapphire-900)', color: '#fff', padding: '14px 20px', borderRadius: '14px', border: '2px solid var(--gold)', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', maxWidth: '210px' }}>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--gold)', fontWeight: 700, lineHeight: 1 }}>10+ Years</div>
              <div style={{ fontSize: '12px', marginTop: '4px', fontWeight: 500, color: '#dcd1c1' }}>Of Hosting Auspicious Events & Happy Guests</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS (WITH BENTO GRID CARD HOVER GLOWS) ---------- */}
      <section style={{ padding: '70px 0', background: 'var(--ivory)' }}>
        <div className="container">
          <div className="section-head scroll-reveal" style={{ marginBottom: '40px' }}>
            <span className="eyebrow eyebrow-emerald">Guest Experiences</span>
            <h2>What Our Honored Guests Say</h2>
            <p style={{ fontSize: '15px' }}>Read genuine stories from families who celebrated weddings and travelers who found serene comfort.</p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { name: 'Mr. & Mrs. R. Karthik', event: 'Wedding Reception (Grand Ballroom)', review: 'We booked the Grand Ramajayam Ballroom for our daughter\'s reception with 700 guests. The pillarless view, acoustic sound, and traditional banana leaf catering were simply extraordinary!', rating: 5 },
              { name: 'Dr. Aravind Swamy', event: '3-Night Lodge Stay', review: 'Stayed in the Executive Suite during a medical conference. The rooms are spotless, Wi-Fi is super fast, and the 24/7 room service staff were polite and attentive.', rating: 5 },
              { name: 'Priya & Vignesh Kumar', event: 'Sangeet Party (Emerald Lawn)', review: 'The Emerald Lawn under the open starlit sky was magical for our sangeet! The stage decoration and valet parking support for 150 cars made everything effortless.', rating: 5 },
            ].map((test, idx) => (
              <div key={idx} className="bento-card scroll-reveal" style={{ display: 'flex', flexDirection: 'column', justifyItems: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--gold)" color="var(--gold)" />
                    ))}
                  </div>
                  <p style={{ color: 'var(--charcoal)', fontSize: '14px', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '18px' }}>
                    "{test.review}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--sapphire-100)', color: 'var(--sapphire-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px' }}>
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--sapphire-900)' }}>{test.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--emerald-700)', fontWeight: 600 }}>{test.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className="scroll-reveal" style={{ background: 'linear-gradient(135deg, var(--emerald-900) 0%, var(--sapphire-900) 100%)', color: '#fff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 38px)', color: '#fff', marginBottom: '14px' }}>Ready to Experience Sri Ramajayam Luxe?</h2>
          <p style={{ color: '#dcd1c1', fontSize: '15.5px', marginBottom: '26px', fontWeight: 300, lineHeight: 1.6 }}>
            Contact our 24/7 concierge desk today to inquire about lodge suite availability or schedule a site inspection.
          </p>
          <button onClick={() => handleNav('contact')} className="btn btn-gold spring-hover" style={{ padding: '12px 26px', fontSize: '13px' }}>
            Contact Inquiry Desk <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
