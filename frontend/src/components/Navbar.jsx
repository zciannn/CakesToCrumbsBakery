
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

  const activeClass = ({ isActive }) =>
    isActive ? 'active' : '';

  return (
    <header className="site-header">

      {/* LOGO AND SOCIAL MEDIA */}
      <div className="logo-container">
        <Link
          className="logo"
          to="/"
          onClick={closeMenu}
          aria-label="Cakes to Crumbs home"
        >
          <span className="logo-script">Cakes to</span>
          <span className="logo-serif">CRUMBS</span>
        </Link>

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
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={activeClass}
        >
          HOME
        </NavLink>

        <NavLink
          to="/our-cakes"
          onClick={closeMenu}
          className={activeClass}
        >
          OUR CAKES
        </NavLink>

        <NavLink
          to="/crumbs"
          onClick={closeMenu}
          className={activeClass}
        >
          CRUMBS
        </NavLink>

        <NavLink
          to="/flavors"
          onClick={closeMenu}
          className={activeClass}
        >
          FLAVORS
        </NavLink>

        <NavLink
          to="/our-story"
          onClick={closeMenu}
          className={activeClass}
        >
          OUR STORY
        </NavLink>

        <NavLink
          to="/faq"
          onClick={closeMenu}
          className={activeClass}
        >
          FAQ
        </NavLink>

        <Link
          to="/faq#contact"
          className="nav-order"
          onClick={closeMenu}
        >
          GET A QUOTE
        </Link>
      </nav>

      {/* MOBILE MENU */}
      <button
        className="mobile-menu"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
