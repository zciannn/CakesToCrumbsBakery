import { useState } from 'react';
import { ArrowRight, Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react';

const categories = [
  { name: 'Birthday Cakes', subtitle: 'Make every wish sweeter', className: 'dusty' },
  { name: 'Custom Cakes', subtitle: 'Made just for you', className: 'butter' },
  { name: 'Sweet Treats', subtitle: 'Little bites of happiness', className: 'cocoa' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="hero-shell" id="home">
        <header className="site-header">
          <a className="logo" href="#home" aria-label="Cakes to Crumbs home">
            <span>Cakes <em>to</em> Crumbs</span>
            
          </a>

          <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
            <a className="active" href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
            <a href="#cakes" onClick={() => setMenuOpen(false)}>OUR CAKES</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>OUR STORY</a>
            <a href="#journal" onClick={() => setMenuOpen(false)}>JOURNAL</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
          </nav>

          <div className="header-icons">
            <button aria-label="Search" onClick={() => setShowSearch(!showSearch)}><Search size={21}/></button>
            <a href="#contact" aria-label="Account and inquiries"><UserRound size={21}/></a>
            <a href="#cakes" aria-label="Browse cakes"><ShoppingBag size={22}/></a>
          </div>
          <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </header>

        {showSearch && (
          <div className="search-panel">
            <input autoFocus type="search" placeholder="Looking for a special cake?" aria-label="Search cakes" />
            <button onClick={() => setShowSearch(false)} aria-label="Close search"><X size={18}/></button>
          </div>
        )}

        <main>
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="eyebrow">TASTEFUL AND FANTASTIC</p>
              <h1 id="hero-heading">custom cakes ,<br/><em>and cupcake.</em></h1>
              <div className="heart-rule"><span></span><Heart size={17} fill="currentColor"/><span></span></div>
              <p className="hero-description">a taste that  lingers, and makes us remember one of the best memories of our lives
</p>
              <div className="hero-buttons">
                <a className="btn btn-primary" href="#cakes">EXPLORE OUR CAKES <ArrowRight size={18}/></a>
                <a className="btn btn-outline" href="#story">OUR STORY</a>
              </div>
            </div>
            <div className="hero-art">
              <img className="bunny" src="/bunny.png" alt="Bunny birthday cake with pastel pink and lavender frosting" />
              <div className="love-stamp" aria-hidden="true">MADE<br/>WITH<br/><span>♡</span><br/>LOVE</div>
            </div>
          </section>
        </main>
      </div>

      <div className="ticker"><span>BAKED WITH LOVE</span><span>✳</span><span>MADE FOR CELEBRATIONS</span><span>✳</span><span>A LITTLE BIT OF MAGIC</span></div>

      <section className="collections section" id="cakes">
        <p className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</p>
        <h2>Sweet things, <em>beautiful moments.</em></h2>
        <p className="section-intro">Thoughtfully made cakes and desserts for every kind of celebration.</p>
        <div className="collection-grid">
          {categories.map((cat, index) => (
            <a href="#contact" className={`collection-card ${cat.className}`} key={cat.name}>
              <span className="collection-no">0{index+1} / COLLECTION</span>
              <span className="collection-decoration">{index === 0 ? '✿' : index === 1 ? '♡' : '✳'}</span>
              <div><h3>{cat.name}</h3><p>{cat.subtitle}</p><ArrowRight size={20}/></div>
            </a>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-graphic">C<span>♡</span>C</div>
        <div className="story-text"><p className="eyebrow">A NOTE FROM OUR KITCHEN</p><h2>Made with care,<br/><em>shared with love.</em></h2><p>At Cakes to Crumbs, we believe the sweetest moments deserve something special. Every cake is made to bring a little joy to your day, from first look to final crumb.</p><a href="#contact" className="story-link">LET'S MAKE SOMETHING SWEET <ArrowRight size={16}/></a></div>
      </section>

      <section className="journal section" id="journal"><p className="eyebrow">FROM OUR LITTLE CORNER</p><h2>Love notes <em>&amp; sweet stories</em></h2><p>More bakery updates, behind-the-scenes moments, and cake inspiration coming soon.</p></section>
      <section className="contact-section" id="contact"><Heart size={25}/><p className="eyebrow">LET'S CELEBRATE TOGETHER</p><h2>Have a sweet idea <em>in mind?</em></h2><p>Get in touch to ask about a custom cake or your next celebration.</p><p className="contact-placeholder">Add your bakery email or order form link here.</p></section>
      <footer><a href="#home" className="footer-logo">Cakes <em>to</em> Crumbs</a><small>BAKED WITH LOVE ♡</small><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  );
}
