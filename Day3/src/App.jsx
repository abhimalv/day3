const sneakers = [
  {
    name: 'Volt Ultra',
    description: 'Lace-up street style with responsive cushioning.',
    price: '$188',
    image: 'https://images.unsplash.com/photo-1519741491974-1c9ee548542c?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Neon Flash',
    description: 'Action-ready build with shine and edge.',
    price: '$214',
    image: 'https://images.unsplash.com/photo-1528701800489-20b9a223a39b?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Infra Red',
    description: 'High-performance traction for on-the-go athletes.',
    price: '$170',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  }
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">Strive</div>
          <div className="links">
            <a href="#featured">Featured</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#launch">Launch</a>
          </div>
        </nav>

        <div className="hero-content">
          <div>
            <span className="eyebrow">Premium streetwear drops</span>
            <h1>The future of sneaker culture is here.</h1>
            <p>
              Browse the latest curated sneaker drops, luminous colorways, and bold
              comfort engineered for every move.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#featured">Shop the Drop</a>
              <a className="btn btn-secondary" href="#lookbook">View Lookbook</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="price-tag">New Drop</div>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
              alt="Sneaker showcase"
            />
            <div className="hero-card-body">
              <span>Strive Volt</span>
              <strong>$199</strong>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="featured" className="featured-section">
          <div className="section-header">
            <span>Featured silhouettes</span>
            <h2>Step into premium performance.</h2>
          </div>

          <div className="card-grid">
            {sneakers.map((shoe) => (
              <article key={shoe.name} className="product-card">
                <img src={shoe.image} alt={shoe.name} />
                <div className="card-body">
                  <h3>{shoe.name}</h3>
                  <p>{shoe.description}</p>
                  <div className="card-footer">
                    <strong>{shoe.price}</strong>
                    <button className="btn btn-tertiary">Quick Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="lookbook" className="lookbook-section">
          <div className="lookbook-panel">
            <span>Trendsetters only</span>
            <h2>Elevate your fit with dynamic silhouettes.</h2>
            <p>
              High-voltage styling meets premium comfort. Discover a selection of
              bold sneakers designed for life in motion.
            </p>
            <a className="btn btn-primary" href="#launch">Explore the Collection</a>
          </div>
          <div className="lookbook-images">
            <div className="look-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741491974-1c9ee548542c?auto=format&fit=crop&w=900&q=80)' }} />
            <div className="look-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1528701800489-20b9a223a39b?auto=format&fit=crop&w=900&q=80)' }} />
          </div>
        </section>

        <section id="launch" className="launch-section">
          <div className="launch-card">
            <span>Limited edition</span>
            <h2>Drop Alert: Neon City Runner</h2>
            <p>Secure your pair from the newest launch and lock in exclusive style.</p>
            <div className="launch-actions">
              <button className="btn btn-primary">Reserve Now</button>
              <button className="btn btn-secondary">Notify Me</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
