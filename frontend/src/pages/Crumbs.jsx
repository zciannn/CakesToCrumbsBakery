
import { ArrowRight } from 'lucide-react';

const treats = [
  {
    name: 'Cupcakes',
    description: 'Little cakes, lots of love.',
    className: 'cupcakes',
    decoration: '✿'
  },
  {
    name: 'Cake Pops',
    description: 'Sweet little bites for every occasion.',
    className: 'cake-pops',
    decoration: '♡'
  },
  {
    name: 'Other Sweet Treats',
    description: 'A little something extra to make your day sweeter.',
    className: 'sweet-treats',
    decoration: '✳'
  }
];

export default function Crumbs() {
  return (
    <main className="crumbs-page">
      <section className="crumbs-intro">
        <p className="eyebrow">LITTLE BITES OF HAPPINESS</p>

        <h1>
          Small treats, <em>big love.</em>
        </h1>

        <p>
          From cupcakes to cake pops, discover little
          sweets made for your special moments.
        </p>
      </section>

      <section className="crumbs-collection">
        <p className="eyebrow">MADE WITH LOVE</p>

        <h2>
          Our little <em>sweet treats.</em>
        </h2>

        <div className="crumbs-grid">
          {treats.map((treat, index) => (
            <div
              className={`crumbs-card ${treat.className}`}
              key={treat.name}
            >
              <span className="crumbs-number">
                0{index + 1} / TREATS
              </span>

              <span className="crumbs-card-decoration">
                {treat.decoration}
              </span>

              <div className="crumbs-card-content">
                <h3>{treat.name}</h3>
                <p>{treat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="crumbs-bottom">
        <p className="eyebrow">
          SOMETHING SWEET FOR EVERYONE
        </p>

        <h2>
          A little treat <em>just for you.</em>
        </h2>

        <p>
          Have something special in mind?
          We'd love to hear about it!
        </p>

        <a href="/faq#contact" className="btn btn-primary">
          GET A QUOTE <ArrowRight size={17} />
        </a>
      </section>
    </main>
  );
}
