import { useEffect, useMemo, useState } from 'react';

const bouquets = [
  {
    name: 'Velvet Romance',
    description: 'Deep red roses with soft blush accents for timeless charm.',
    mood: 'Passion',
    accent: 'Rose-pink',
  },
  {
    name: 'Sunlit Bloom',
    description: 'Golden-toned roses wrapped in warm light and fresh greenery.',
    mood: 'Joy',
    accent: 'Golden glow',
  },
  {
    name: 'Soft Whisper',
    description: 'Creamy roses with airy petals for a graceful, dreamy gift.',
    mood: 'Calm',
    accent: 'Pearl white',
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % bouquets.length);
      setSecondsLeft(3);
    }, 3000);

    return () => window.clearInterval(rotation);
  }, []);

  useEffect(() => {
    const countdown = window.setInterval(() => {
      setSecondsLeft((value) => (value > 0 ? value - 1 : 3));
    }, 1000);

    return () => window.clearInterval(countdown);
  }, []);

  const activeBouquet = bouquets[activeIndex];

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning bloom';
    if (hour < 18) return 'Afternoon glow';
    return 'Evening romance';
  }, []);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Rose Atelier</p>
          <h1>Elegant roses, delivered with a little magic.</h1>
          <p>
            A soft, automated floral experience with rotating bouquets, daily inspiration,
            and a dreamy roses theme.
          </p>
          <div className="actions">
            <a className="primary" href="#collection">
              Explore collection
            </a>
            <button className="secondary" type="button">
              Schedule surprise
            </button>
          </div>
          <div className="status">
            <span>{greeting}</span>
            <span>Auto-rotating in {secondsLeft}s</span>
          </div>
        </div>

        <div className="hero-card">
          <p className="eyebrow">Featured bouquet</p>
          <h2>{activeBouquet.name}</h2>
          <p>{activeBouquet.description}</p>
          <div className="detail-row">
            <span>Mood: {activeBouquet.mood}</span>
            <span>Accent: {activeBouquet.accent}</span>
          </div>
        </div>
      </header>

      <main id="collection" className="collection">
        <div className="section-heading">
          <p className="eyebrow">Curated choices</p>
          <h3>Pick a bouquet that matches your mood.</h3>
        </div>

        <div className="cards">
          {bouquets.map((bouquet, index) => (
            <button
              key={bouquet.name}
              type="button"
              className={`bouquet-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setActiveIndex(index);
                setSecondsLeft(3);
              }}
            >
              <h4>{bouquet.name}</h4>
              <p>{bouquet.description}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
