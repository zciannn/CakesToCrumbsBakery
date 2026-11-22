
import CollectionCard from '../components/CollectionCard';

const categories = [
  {
    name: 'Birthday Cakes',
    subtitle: 'Make every wish sweeter',
    className: 'dusty'
  },
  {
    name: 'Custom Cakes',
    subtitle: 'Made just for you',
    className: 'butter'
  },
  {
    name: 'Sweet Treats',
    subtitle: 'Little bites of happiness',
    className: 'cocoa'
  }
];

export default function OurCakes() {
  return (
    <main className="cakes-page">

      {/* PAGE HEADING */}
      <section className="cakes-intro">
        <p className="eyebrow">
          A LITTLE SOMETHING FOR EVERYONE
        </p>

        <h1>
          Sweet things, <em>beautiful moments.</em>
        </h1>

        <p className="section-intro">
          Thoughtfully made cakes and desserts
          for every kind of celebration.
        </p>
      </section>

      {/* CAKE COLLECTIONS */}
      <section
        className="collections section"
        id="cakes"
      >
        <div className="collection-grid">
          {categories.map((category, index) => (
            <CollectionCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* BOTTOM MESSAGE */}
      <section className="cakes-bottom">
        <p className="eyebrow">
          MADE WITH LOVE, JUST FOR YOU
        </p>

        <h2>
          Every celebration deserves
          <em> something sweet.</em>
        </h2>

        <a href="/#contact" className="btn btn-primary">
          GET A QUOTE
        </a>
      </section>

    </main>
  );
}
