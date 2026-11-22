
import { ArrowRight, Heart } from 'lucide-react';
import CakeSlideshow from '../components/CakeSlideshow';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-shell" id="home">
        <main>
          <section
            className="hero"
            aria-labelledby="hero-heading"
          >
            <div className="hero-copy">
              <p className="eyebrow">
                TASTEFUL AND FANTASTIC
              </p>

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
                a taste that lingers, and makes us
                remember one of the best memories
                of our lives
              </p>

              <div className="hero-buttons">
                <a
                  className="btn btn-primary"
                  href="/our-cakes"
                >
                  EXPLORE OUR CAKES
                  <ArrowRight size={18} />
                </a>

                <a
                  className="btn btn-outline"
                  href="#story"
                >
                  OUR STORY
                </a>
              </div>
            </div>

            {/* CAKE SLIDESHOW */}
            <CakeSlideshow />

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

      {/* OUR STORY */}
      <section className="story-section" id="story">
        <div className="story-graphic">
          C<span>♡</span>C
        </div>

        <div className="story-text">
          <p className="eyebrow">
            A NOTE FROM OUR KITCHEN
          </p>

          <h2>
            Made with care,<br />
            <em>shared with love.</em>
          </h2>

          <p>
            At Cakes to Crumbs, we believe the
            sweetest moments deserve something
            special. Every cake is made to bring
            a little joy to your day, from first
            look to final crumb.
          </p>

          <a href="#contact" className="story-link">
            LET'S MAKE SOMETHING SWEET
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal section" id="journal">
        <p className="eyebrow">
          FROM OUR LITTLE CORNER
        </p>

        <h2>
          Love notes <em>&amp; sweet stories</em>
        </h2>

        <p>
          More bakery updates, behind-the-scenes
          moments, and cake inspiration coming soon.
        </p>
      </section>

      {/* CONTACT */}
      <section
        className="contact-section"
        id="contact"
      >
        <Heart size={25} />

        <p className="eyebrow">
          LET'S CELEBRATE TOGETHER
        </p>

        <h2>
          Have a sweet idea <em>in mind?</em>
        </h2>

        <p>
          Get in touch to ask about a custom cake
          or your next celebration.
        </p>

        <p className="contact-placeholder">
          Add your bakery email or order form
          link here.
        </p>
      </section>
    </>
  );
}
