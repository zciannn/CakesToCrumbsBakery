
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter
} from 'react-icons/fa6';

import { FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">

      {/* LOGO AND SOCIAL MEDIA */}
      <div className="logo-container">
        <a
          className="logo"
          href="#home"
          aria-label="Cakes to Crumbs home"
        >
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
        <a
          href="/" onClick={closeMenu}
        >
          HOME
        </a>

        <a href="/our-cakes" onClick={closeMenu}>
          OUR CAKES
        </a>

        <a href="#crumbs" onClick={closeMenu}>
          CRUMBS
        </a>

        <a href="#flavors" onClick={closeMenu}>
          FLAVORS
        </a>

        <a href="#story" onClick={closeMenu}>
          OUR STORY
        </a>

        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>

        <a
          href="#contact"
          className="nav-order"
          onClick={closeMenu}
        >
          GET A QUOTE
        </a>
      </nav>

      {/* MOBILE MENU */}
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
  );
}
