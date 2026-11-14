
import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Heart,
  Menu,
  X
} from 'lucide-react';

const collections = [
  {
    number: '01',
    name: 'Birthday Cakes',
    note: 'Make a wish, make it sweet.',
    tone: 'rose'
  },
  {
    number: '02',
    name: 'Celebration Cakes',
    note: 'For every little milestone.',
    tone: 'cream'
  },
  {
    number: '03',
    name: 'Sweet Treats',
    note: 'A little joy in every bite.',
    tone: 'chocolate'
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="header" id="home">
        <a
          href="#home"
          className="brand"
          onClick={close}
          aria-label="Cakes to Crumbs, home"
        >
          <span className="brand-main">
            Cakes <i>to</i> Crumbs
          </span>
          <span className="brand-sub">
            B A K E D &nbsp; W I T H &nbsp; L O V E
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={menuOpen ? 'navigation open' : 'navigation'}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={close}>HOME</a>
          <a href="#cakes" onClick={close}>OUR CAKES</a>
          <a href="#story" onClick={close}>OUR STORY</a>
          <a href="#contact" onClick={close}>CONTACT</a>
        </nav>

        <a href="#contact" className="header-action">
          LET'S CELEBRATE <ArrowRight size={15} />
        </a>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="eyebrow">
              <span className="small-flower">✳</span>
              THE SWEETEST LITTLE THINGS
            </p>

            <h1 id="hero-title">
              A little cake,<br />
              <em>a lot of love.</em>
            </h1>

            <div className="rule">
              <span>♥</span>
            </div>

            <p className="hero-copy">
              Whimsical cakes and sweet creations,
              thoughtfully made to turn your special
              moments into beautiful memories.
            </p>

            <div className="hero-links">
              <a className="button button-primary" href="#cakes">
                EXPLORE OUR CAKES <ArrowRight size={17} />
              </a>

              <a className="button button-secondary" href="#story">
                OUR STORY
              </a>
            </div>

            <div className="hero-footer">
              a little sweetness goes a long way
              <span>✦</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-backdrop"></div>

            <img
              src="/bunny-cake.jpg"
              alt="Pastel bunny birthday cake with flowers"
            />

            <div className="hero-seal">
              <span>MADE</span>
              <span>WITH ♡</span>
              <span>LOVE</span>
            </div>

            <span className="visual-caption">
              made for magical moments ✳
            </span>
          </div>
        </section>

        {/* PROMISE STRIP */}
        <section className="promise" aria-label="Our promise">
          <span>♡ &nbsp; MADE WITH LOVE</span>
          <span>✳ &nbsp; BAKED FOR YOUR MOMENTS</span>
          <span>♡ &nbsp; SWEET AS CAN BE</span>
        </section>

        {/* COLLECTIONS */}
        <section className="collections section-wrap" id="cakes">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                SOMETHING FOR EVERY CELEBRATION
              </p>
              <h2>
                Made to be <em>remembered.</em>
              </h2>
            </div>

            <p>
              From birthdays to just-because days,
              every sweet treat has a little story to tell.
            </p>
          </div>

          <div className="collection-grid">
            {collections.map((item) => (
              <a
                key={item.number}
                href="#contact"
                className={`collection-card ${item.tone}`}
              >
                <span className="collection-number">
                  {item.number} / THE COLLECTION
                </span>

                <span className="collection-flower" aria-hidden="true">
                  {item.tone === 'cream'
                    ? '✿'
                    : item.tone === 'chocolate'
                    ? '♡'
                    : '❀'}
                </span>

                <span className="collection-bottom">
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.note}</small>
                  </span>

                  <ArrowDownRight
                    size={25}
                    strokeWidth={1.3}
                  />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* OUR STORY */}
        <section className="story" id="story">
          <div className="story-decoration">✿</div>

          <div className="story-content">
            <p className="eyebrow">
              THE HEART BEHIND THE SWEETS
            </p>

            <h2>
              Baked with care,<br />
              <em>shared with love.</em>
            </h2>

            <p>
              At Cakes to Crumbs, we believe the sweetest
              moments deserve something special. Every cake
              is an invitation to celebrate, smile, and make
              memories together.
            </p>

            <a href="#contact" className="text-link">
              LET'S MAKE SOMETHING SWEET
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section-wrap" id="contact">
          <Heart size={28} strokeWidth={1.3} />

          <p className="eyebrow">
            YOUR NEXT CELEBRATION STARTS HERE
          </p>

          <h2>
            Have a sweet idea <em>in mind?</em>
          </h2>

          <p>
            We'd love to create something lovely
            for your special occasion.
          </p>

          <span className="contact-note">
            Add your business email, social link, or
            ordering form here when you're ready
            to accept inquiries.
          </span>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <span>
          Cakes <i>to</i> Crumbs
        </span>

        <small>
          MADE WITH ♡ &nbsp; • &nbsp; ALL RIGHTS RESERVED
        </small>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
