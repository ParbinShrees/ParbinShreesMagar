import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// Import setup photos
import setup1 from '../projectpictures/setup1.jpg';
import setup2 from '../projectpictures/setup2.jpg';

// ─────────────────────────────────────────────
//  Data
// ─────────────────────────────────────────────
const galleryPhotos = [
  { src: setup1, alt: 'Night coding setup with Razer peripherals',  caption: 'Night Mode', description: 'Deep-focus session with Razer green glow.' },
  { src: setup2, alt: 'Dual-monitor workstation with Razer gear',   caption: 'Workstation', description: 'Dual-display setup — laptop + external monitor.' },
];

const hobbies = [
  { icon: 'fa-laptop-code',    label: 'Full-Stack Dev' },
  { icon: 'fa-microchip',      label: 'Arduino / Embedded' },
  { icon: 'fa-gamepad',        label: 'PC Gaming' },
  { icon: 'fa-camera',         label: 'Photography' },
  { icon: 'fa-desktop',        label: 'Minimalist Setup' },
  { icon: 'fa-bolt',           label: 'Hardware Hacking' },
];

const interests = [
  {
    icon: 'fa-microchip',
    title: 'Hardware Hacks',
    desc: 'Custom circuits, Arduino builds, and embedded projects that blur the line between software and the physical world.',
    color: '#0071e3',
  },
  {
    icon: 'fa-gamepad',
    title: 'PC Gaming',
    desc: 'A Razer-powered battlestation built for high-FPS competitive gaming and immersive single-player experiences.',
    color: '#34c759',
  },
  {
    icon: 'fa-desktop',
    title: 'Workspace Gear',
    desc: 'Obsessed with clean, minimal desk setups. Every peripheral is chosen for both aesthetics and peak performance.',
    color: '#ff9f0a',
  },
];

// ─────────────────────────────────────────────
//  Gallery Slider
// ─────────────────────────────────────────────
const GallerySlider = () => {
  const [current, setCurrent]     = useState(0);
  const [lightbox, setLightbox]   = useState(null);
  const total = galleryPhotos.length;

  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (lightbox) {
        if (e.key === 'Escape')      setLightbox(null);
        if (e.key === 'ArrowLeft')   prev();
        if (e.key === 'ArrowRight')  next();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  return (
    <>
      {/* ── Slider ── */}
      <div className="parbin-gallery-wrapper">
        <button className="parbin-gallery-btn parbin-gallery-prev" onClick={prev} aria-label="Previous">
          <i className="fas fa-chevron-left" />
        </button>

        <div className="parbin-gallery-stage">
          {galleryPhotos.map((photo, idx) => {
            const offset = idx - current;
            const isActive  = offset === 0;
            const isPrev    = offset === -1 || (current === 0 && idx === total - 1 && offset !== 0);
            const isNext    = offset === 1  || (current === total - 1 && idx === 0 && offset !== 0);

            let zIndex   = 1;
            let scale    = 0.82;
            let opacity  = 0;
            let translateX = 0;
            let rotate   = 0;

            if (isActive) { zIndex = 10; scale = 1; opacity = 1; }
            else if (isPrev || offset === -1) { zIndex = 5; scale = 0.88; opacity = 0.55; translateX = -38; rotate = -5; }
            else if (isNext || offset === 1)  { zIndex = 5; scale = 0.88; opacity = 0.55; translateX =  38; rotate =  5; }

            return (
              <div
                key={idx}
                className="parbin-photo-card"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale}) rotate(${rotate}deg)`,
                  zIndex,
                  opacity,
                  transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
                }}
                onClick={() => { if (isActive) setLightbox(photo); else if (offset < 0) prev(); else next(); }}
              >
                <img src={photo.src} alt={photo.alt} className="parbin-photo-img" />
                {isActive && (
                  <div className="parbin-photo-caption">
                    <span className="parbin-caption-title">{photo.caption}</span>
                    <span className="parbin-caption-desc">{photo.description}</span>
                    <span className="parbin-caption-open"><i className="fas fa-expand-alt" /> Click to enlarge</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="parbin-gallery-btn parbin-gallery-next" onClick={next} aria-label="Next">
          <i className="fas fa-chevron-right" />
        </button>
      </div>

      {/* Dots */}
      <div className="parbin-gallery-dots">
        {galleryPhotos.map((_, idx) => (
          <button
            key={idx}
            className={`parbin-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Photo ${idx + 1}`}
          />
        ))}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="parbin-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="parbin-lightbox-inner"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="parbin-lightbox-close" onClick={() => setLightbox(null)}>
                <i className="fas fa-times" />
              </button>
              <img src={lightbox.src} alt={lightbox.alt} className="parbin-lightbox-img" />
              <p className="parbin-lightbox-caption">{lightbox.caption} — {lightbox.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ─────────────────────────────────────────────
//  Main Page
// ─────────────────────────────────────────────
const ParbinPage = () => {
  return (
    <PageTransition>
      <div className="parbin-page">

        {/* ── Hero Header ── */}
        <header className="parbin-hero">
          <div className="parbin-container">
            <motion.span
              className="parbin-kicker"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Behind the Code
            </motion.span>
            <motion.h1
              className="parbin-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My Story &amp; Passions
            </motion.h1>
            <motion.p
              className="parbin-hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A look into my creative background, physical setup configuration, and what inspires me outside of development.
            </motion.p>
          </div>
        </header>

        <main className="parbin-container parbin-main-sections">

          {/* ── Story + Workstation Grid ── */}
          <section className="parbin-story-grid">

            {/* Bio card */}
            <motion.div
              className="parbin-bio-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Hi, I'm <strong>Parbin Shrees Magar</strong>. I'm a Full-Stack Developer with a sharp eye for design and a deep passion for both software and hardware engineering. My academic and professional life revolves around tech, but in my free time I balance that logical mindset with PC gaming and hands-on hardware projects.
              </p>
              <p>
                I'm a firm believer that your environment directly impacts your focus. That's why I've built a clean, Razer-powered workspace that is functional, minimal, and intentional — every detail from the peripherals to the cable management reflects my approach to engineering: deliberate and precise. Whether I'm shipping a React app, wiring up an Arduino, or deep in a gaming session, I thrive in spaces where clean design meets raw technology.
              </p>

              {/* Tag badges */}
              <div className="parbin-tags">
                {hobbies.map(({ icon, label }) => (
                  <span key={label} className="parbin-tag">
                    <i className={`fas ${icon}`} /> {label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Workstation spec card */}
            <motion.div
              className="parbin-setup-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Setup image */}
              <div className="parbin-setup-img-wrap">
                <img
                  src={setup2}
                  alt="Parbin's workstation"
                  className="parbin-setup-img"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>

              <h3 className="parbin-setup-title">
                <i className="fas fa-desktop" /> Workstation Configuration
              </h3>

              <ul className="parbin-spec-list">
                {[
                  ['Laptop',       'Acer Predator Helios Neo 16'],
                  ['CPU / GPU',    'Intel Core i5 13th Gen / NVIDIA RTX 4060'],
                  ['Memory',       '16GB DDR5 RAM / 1TB NVMe SSD'],
                  ['Peripherals',  'Razer Keyboard · Razer Mouse · External Monitor'],
                ].map(([label, val]) => (
                  <li key={label} className="parbin-spec-row">
                    <span className="parbin-spec-label">{label}</span>
                    <span className="parbin-spec-val">{val}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>

          {/* ── Gallery Section ── */}
          <section id="gallery" className="parbin-section">
            <div className="parbin-section-header">
              <p className="parbin-kicker">Gallery</p>
              <h2 className="parbin-section-title">Through My Lens</h2>
            </div>
            <GallerySlider />
          </section>

          {/* ── Interests Section ── */}
          <section id="interests" className="parbin-section">
            <div className="parbin-section-header">
              <p className="parbin-kicker">Interests</p>
              <h2 className="parbin-section-title">Things I Build, Play &amp; Collect</h2>
            </div>

            <div className="parbin-interests-grid">
              {interests.map(({ icon, title, desc, color }, idx) => (
                <motion.div
                  key={title}
                  className="parbin-interest-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="parbin-interest-icon" style={{ '--icon-color': color }}>
                    <i className={`fas ${icon}`} />
                  </div>
                  <h3 className="parbin-interest-title">{title}</h3>
                  <p className="parbin-interest-desc">{desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* ── Page-scoped styles ── */}
      <style>{`
        /* ─── Layout ─── */
        .parbin-page { background: #f5f5f7; min-height: 100vh; }
        .parbin-container { max-width: 1120px; margin: 0 auto; padding: 0 1.5rem; }

        /* ─── Hero ─── */
        .parbin-hero {
          padding: 9rem 0 5rem;
          background: linear-gradient(160deg, #ffffff 0%, #f0f4ff 100%);
          border-bottom: 1px solid #d2d2d7;
          text-align: center;
        }
        .parbin-kicker {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0071e3;
          margin-bottom: 1rem;
        }
        .parbin-hero-title {
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .parbin-hero-sub {
          font-size: 1.2rem;
          color: #86868b;
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ─── Main sections container ─── */
        .parbin-main-sections { padding: 5rem 1.5rem 6rem; display: flex; flex-direction: column; gap: 6rem; }

        /* ─── Story grid ─── */
        .parbin-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 860px) { .parbin-story-grid { grid-template-columns: 1fr; } }

        /* Bio card */
        .parbin-bio-card {
          background: #ffffff;
          border: 1px solid #d2d2d7;
          border-radius: 1.5rem;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          font-size: 1rem;
          line-height: 1.75;
          color: #1d1d1f;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
        }
        .parbin-bio-card strong { color: #0071e3; }

        /* Tags */
        .parbin-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.5rem; }
        .parbin-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #f0f6ff;
          border: 1px solid #bcd4f8;
          color: #0055b3;
          border-radius: 99px;
          padding: 0.4rem 0.85rem;
          font-size: 0.82rem;
          font-weight: 600;
          transition: background 0.2s, transform 0.2s;
        }
        .parbin-tag:hover { background: #dceeff; transform: translateY(-2px); }
        .parbin-tag i { font-size: 0.8rem; }

        /* Setup card */
        .parbin-setup-card {
          background: #ffffff;
          border: 1px solid #d2d2d7;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .parbin-setup-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.10); }

        .parbin-setup-img-wrap {
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #1a1a1a;
        }
        .parbin-setup-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .parbin-setup-card:hover .parbin-setup-img { transform: scale(1.04); }

        .parbin-setup-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: #1d1d1f;
          padding: 1.5rem 1.75rem 1rem;
          border-bottom: 1px solid #d2d2d7;
        }
        .parbin-setup-title i { color: #0071e3; }

        .parbin-spec-list { list-style: none; margin: 0; padding: 0 1.75rem 1.75rem; }
        .parbin-spec-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f3;
          font-size: 0.9rem;
        }
        .parbin-spec-row:last-child { border-bottom: none; }
        .parbin-spec-label { color: #86868b; font-weight: 600; flex-shrink: 0; }
        .parbin-spec-val { color: #1d1d1f; font-weight: 700; text-align: right; }

        /* ─── Section headers ─── */
        .parbin-section { display: flex; flex-direction: column; gap: 2.5rem; }
        .parbin-section-header { border-bottom: 1px solid #d2d2d7; padding-bottom: 1rem; }
        .parbin-section-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          margin-top: 0.4rem;
        }

        /* ─── Gallery ─── */
        .parbin-gallery-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 420px;
          overflow: visible;
        }
        .parbin-gallery-stage {
          position: relative;
          width: 100%;
          max-width: 680px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .parbin-photo-card {
          position: absolute;
          width: 88%;
          max-width: 560px;
          border-radius: 1.25rem;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
          will-change: transform, opacity;
        }
        .parbin-photo-img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          display: block;
        }
        .parbin-photo-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.75));
          padding: 2rem 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .parbin-caption-title { font-size: 1.05rem; font-weight: 700; color: #fff; }
        .parbin-caption-desc  { font-size: 0.85rem; color: rgba(255,255,255,0.8); }
        .parbin-caption-open  { font-size: 0.75rem; color: rgba(255,255,255,0.55); margin-top: 0.25rem; }

        .parbin-gallery-btn {
          position: absolute;
          z-index: 20;
          background: rgba(255,255,255,0.9);
          border: 1px solid #d2d2d7;
          border-radius: 50%;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          transition: background 0.2s, transform 0.2s;
          color: #1d1d1f;
          font-size: 0.9rem;
        }
        .parbin-gallery-btn:hover { background: #fff; transform: scale(1.08); }
        .parbin-gallery-prev { left: 0; }
        .parbin-gallery-next { right: 0; }

        .parbin-gallery-dots { display: flex; justify-content: center; gap: 0.5rem; margin-top: -0.5rem; }
        .parbin-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          border: none;
          background: #d2d2d7;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .parbin-dot.active { background: #0071e3; transform: scale(1.3); }

        /* ─── Lightbox ─── */
        .parbin-lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.88);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          backdrop-filter: blur(8px);
        }
        .parbin-lightbox-inner {
          position: relative;
          max-width: 900px;
          width: 100%;
          border-radius: 1.25rem;
          overflow: hidden;
          background: #1a1a1a;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
        }
        .parbin-lightbox-img { width: 100%; max-height: 75vh; object-fit: contain; display: block; }
        .parbin-lightbox-caption {
          padding: 1rem 1.5rem;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          text-align: center;
        }
        .parbin-lightbox-close {
          position: absolute;
          top: 0.75rem; right: 0.75rem;
          background: rgba(0,0,0,0.5);
          border: none;
          color: #fff;
          border-radius: 50%;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s;
          z-index: 10;
        }
        .parbin-lightbox-close:hover { background: rgba(255,255,255,0.2); }

        /* ─── Interests grid ─── */
        .parbin-interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .parbin-interest-card {
          background: #fff;
          border: 1px solid #d2d2d7;
          border-radius: 1.5rem;
          padding: 2rem 1.75rem;
          cursor: default;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: box-shadow 0.3s;
        }
        .parbin-interest-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.10); }
        .parbin-interest-icon {
          width: 52px; height: 52px;
          background: color-mix(in srgb, var(--icon-color) 12%, transparent);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.1rem;
          font-size: 1.35rem;
          color: var(--icon-color);
        }
        .parbin-interest-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 0.5rem;
        }
        .parbin-interest-desc {
          font-size: 0.9rem;
          color: #86868b;
          line-height: 1.65;
        }

        /* ─── Responsive ─── */
        @media (max-width: 600px) {
          .parbin-hero { padding: 7rem 0 3rem; }
          .parbin-gallery-wrapper { height: 300px; }
          .parbin-photo-img { height: 260px; }
          .parbin-main-sections { padding: 3rem 1rem 4rem; gap: 4rem; }
        }
      `}</style>
    </PageTransition>
  );
};

export default ParbinPage;
