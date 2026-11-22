
import { useState, useEffect } from 'react';

const cakeImages = [
  '/bunny.png',
  '/bake1.png',
  '/bake2.png',
  '/bake4.png',
  '/bake5.png',
  '/bake6.png',
];

export default function CakeSlideshow() {
  const [currentCake, setCurrentCake] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCake((prev) => (prev + 1) % cakeImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-art">
      <img
        className="bunny"
        src={cakeImages[currentCake]}
        alt={
          currentCake === 0
            ? 'Bunny birthday cake with pastel pink and lavender frosting'
            : `Custom cake design ${currentCake}`
        }
      />

      <div className="love-stamp" aria-hidden="true">
        MADE<br />
        WITH<br />
        <span>♡</span>
        LOVE
      </div>
    </div>
  );
}
