
import { ArrowRight } from 'lucide-react';

export default function OurStory() {
  return (
    <main className="story-page">

      {/* OUR STORY */}
      <section className="story-section" id="story">
        <div className="story-graphic">
          C<span>♡</span>C
        </div>

        <div className="story-text">
          <p className="eyebrow">
            A NOTE FROM OUR KITCHEN
          </p>

          <h1>
            Made with care,<br />
            <em>shared with love.</em>
          </h1>

          <p>
            At Cakes to Crumbs, we believe the
            sweetest moments deserve something
            special. Every cake is made to bring
            a little joy to your day, from first
            look to final crumb.
          </p>

          <a href="/faq" className="story-link">
            LET'S MAKE SOMETHING SWEET
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </main>
  );
}
