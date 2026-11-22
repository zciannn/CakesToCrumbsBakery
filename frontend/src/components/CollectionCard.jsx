
import { ArrowRight } from 'lucide-react';

export default function CollectionCard({ category, index }) {
  const decorations = ['✿', '♡', '✳'];

  return (
    <a
      href="/#contact"
      className={`collection-card ${category.className}`}
    >
      <span className="collection-no">
        0{index + 1} / COLLECTION
      </span>

      <span className="collection-decoration">
        {decorations[index]}
      </span>

      <div>
        <h3>{category.name}</h3>
        <p>{category.subtitle}</p>
        <ArrowRight size={20} />
      </div>
    </a>
  );
}
