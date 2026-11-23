
import { ArrowRight, CakeSlice } from 'lucide-react';
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

              {/* SMALL HEADING */}
              <p className="eyebrow">
            
              </p>

              {/* MAIN HEADING */}
              <h1 id="hero-heading">
                custom cakes<br />
                and cupcakes for<br />
                <em>every event!</em>
              </h1>

              {/* CAKE DIVIDER */}
              <div className="heart-rule">
                <span></span>
                <CakeSlice size={22} strokeWidth={1.7} />
                <span></span>
              </div>

              {/* DESCRIPTION */}
              <p className="hero-description">
                Thank you for considering Cakes to Crumbs for your special occasion! 
                We custom prepare cakes, cupcakes and other baked goods for every event. 
                Sit back and take a look around.
              </p>

              {/* BUTTONS */}
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
                  href="/our-story"
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

    </>
  );
}
