
import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Menu, X } from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter
} from 'react-icons/fa6';

import { FaEnvelope } from 'react-icons/fa';

const cakeImages = [
  '/bunny.png',
  '/bake1.png',
  '/bake2.png',
  '/bake4.png',
  '/bake5.png',
  '/bake6.png',
];

const categories = [
  { name: 'Birthday Cakes', subtitle: 'Make every wish sweeter', className: 'dusty' },
  { name: 'Custom Cakes', subtitle: 'Made just for you', className: 'butter' },
  { name: 'Sweet Treats', subtitle: 'Little bites of happiness', className: 'cocoa' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentCake, setCurrentCake] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCake((prev) => (prev + 1) % cakeImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-shell" id="home">
        <header className="site-header">

          {/* LOGO AND SOCIAL MEDIA */}
          <div className="logo-container">
            <a className="logo" href="#home" aria-label="Cakes to Crumbs home">
              <span className="logo-script">Cakes to</span>
              <span className="logo-serif">CRUMBS</span>
            </a>

            <div className="logo-socials">
              <a
                href="mailto:CakesToCrumbs@gmail.com"
                aria-label="Email Cakes to Crumbs"
                title="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.facebook.com/CakesToCrumbsBakery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/cakestocrumbsbakery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.pinterest.com/CakestoCrumbsBakery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                title="Pinterest"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://x.com/cakestocrumbs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav
            className={menuOpen ? 'nav open' : 'nav'}
            aria-label="Main navigation"
          >
            <a className="active" href="#home" onClick={() => setMenuOpen(false)}>
              HOME
            </a>
            <a href="#cakes" onClick={() => setMenuOpen(false)}>
              OUR CAKES
            </a>
            <a href="#crumbs" onClick={() => setMenuOpen(false)}>
              CRUMBS
            </a>
            <a href="#flavors" onClick={() => setMenuOpen(false)}>
              FLAVORS
            </a>
            <a href="#story" onClick={() => setMenuOpen(false)}>
              OUR STORY
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a
              href="#contact"
              className="nav-order"
              onClick={() => setMenuOpen(false)}
            >
              GET A QUOTE
            </a>
          </nav>

          <button
            className="mobile-menu"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <main>
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="eyebrow">TASTEFUL AND FANTASTIC</p>

              <h1 id="hero-heading">
                custom cakes ,<br />
                <em>and cupcakes.</em>
              </h1>

              <div className="heart-rule">
                <span></span>
                <Heart size={17} fill="currentColor" />
                <span></span>
              </div>

              <p className="hero-description">
                a taste that lingers, and makes us remember one of the
                best memories of our lives
              </p>

              <div className="hero-buttons">
                <a className="btn btn-primary" href="#cakes">
                  EXPLORE OUR CAKES <ArrowRight size={18} />
                </a>

                <a className="btn btn-outline" href="#story">
                  OUR STORY
                </a>
              </div>
            </div>

            {/* CAKE SLIDESHOW */}
            <div className="hero-art">
              <img
                className="bunny"
                src={cakeImages[currentCake]}
                alt={
                  currentCake === 0
                    ? 'Bunny birthday cake with pastel pink and lavender frosting'
                    : `Custom cake design ${currentCake}`
                }
              />

              <div className="love-stamp" aria-hidden="true">
                MADE<br />
                WITH<br />
                <span>♡</span>
                <br />
                LOVE
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* TICKER */}
      <div className="ticker">
        <span>BAKED WITH LOVE</span>
        <span>✳</span>
        <span>MADE FOR CELEBRATIONS</span>
        <span>✳</span>
        <span>A LITTLE BIT OF MAGIC</span>
      </div>

      {/* COLLECTIONS */}
      <section className="collections section" id="cakes">
        <p className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</p>

        <h2>
          Sweet things, <em>beautiful moments.</em>
        </h2>

        <p className="section-intro">
          Thoughtfully made cakes and desserts for every kind of celebration.
        </p>

        <div className="collection-grid">
          {categories.map((cat, index) => (
            <a
              href="#contact"
              className={`collection-card ${cat.className}`}
              key={cat.name}
            >
              <span className="collection-no">
                0{index + 1} / COLLECTION
              </span>

              <span className="collection-decoration">
                {index === 0 ? '✿' : index === 1 ? '♡' : '✳'}
              </span>

              <div>
                <h3>{cat.name}</h3>
                <p>{cat.subtitle}</p>
                <ArrowRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="story-section" id="story">
        <div className="story-graphic">
          C<span>♡</span>C
        </div>

        <div className="story-text">
          <p className="eyebrow">A NOTE FROM OUR KITCHEN</p>

          <h2>
            Made with care,<br />
            <em>shared with love.</em>
          </h2>

          <p>
            At Cakes to Crumbs, we believe the sweetest moments
            deserve something special. Every cake is made to bring
            a little joy to your day, from first look to final crumb.
          </p>

          <a href="#contact" className="story-link">
            LET'S MAKE SOMETHING SWEET <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal section" id="journal">
        <p className="eyebrow">FROM OUR LITTLE CORNER</p>

        <h2>
          Love notes <em>&amp; sweet stories</em>
        </h2>

        <p>
          More bakery updates, behind-the-scenes moments,
          and cake inspiration coming soon.
        </p>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <Heart size={25} />

        <p className="eyebrow">LET'S CELEBRATE TOGETHER</p>

        <h2>
          Have a sweet idea <em>in mind?</em>
        </h2>

        <p>
          Get in touch to ask about a custom cake or
          your next celebration.
        </p>

        <p className="contact-placeholder">
          Add your bakery email or order form link here.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="footer-logo">
          Cakes <em>to</em> Crumbs
        </a>

        <small>BAKED WITH LOVE ♡</small>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
