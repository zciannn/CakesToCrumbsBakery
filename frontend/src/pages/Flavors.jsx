
const flavors = [
  {
    name: 'Classic Vanilla',
    description: 'Soft, delicate, and timeless.',
    color: 'vanilla'
  },
  {
    name: 'Rich Chocolate',
    description: 'A little chocolate happiness.',
    color: 'chocolate'
  },
  {
    name: 'Red Velvet',
    description: 'A beautiful celebration classic.',
    color: 'velvet'
  },
  {
    name: 'Strawberry',
    description: 'Sweet and fruity inspiration.',
    color: 'strawberry'
  }
];

export default function Flavors() {
  return (
    <main className="flavors-page">
      <section className="flavors-intro">
        <p className="eyebrow">
          A LITTLE TASTE OF HAPPINESS
        </p>

        <h1>
          Made to taste <em>as sweet as it looks.</em>
        </h1>

        <p>
          Explore flavor ideas for your next
          special celebration.
        </p>
      </section>

      <section className="flavors-section">
        <p className="eyebrow">FIND YOUR FAVORITE</p>

        <h2>
          Sweet little <em>possibilities.</em>
        </h2>

        <div className="flavors-grid">
          {flavors.map((flavor, index) => (
            <div
              className={`flavor-card ${flavor.color}`}
              key={flavor.name}
            >
              <span className="flavor-number">
                0{index + 1} / FLAVOR
              </span>

              <div className="flavor-decoration">
                {index % 2 === 0 ? '✿' : '♡'}
              </div>

              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flavors-bottom">
        <p className="eyebrow">
          SOMETHING JUST FOR YOU
        </p>

        <h2>
          Have a flavor <em>in mind?</em>
        </h2>

        <p>
          Reach out to discuss flavor options
          for your custom cake.
        </p>

        <a href="/faq#contact" className="btn btn-primary">
          GET IN TOUCH
        </a>
      </section>
    </main>
  );
}
