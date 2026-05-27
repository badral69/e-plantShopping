import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const features = [
  {
    icon: "🌱",
    title: "Carefully Curated",
    desc: "Each plant is hand-selected by our expert horticulturists for quality and health.",
  },
  {
    icon: "🚚",
    title: "Safe Delivery",
    desc: "Specially packaged to ensure your plants arrive fresh and vibrant at your door.",
  },
  {
    icon: "💚",
    title: "Expert Support",
    desc: "Our plant care specialists are always here to help your green companions thrive.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🌿 Welcome to Paradise</span>
          <h1 className="hero-title">
            Bring Nature <br />
            <span className="hero-accent">Into Your Home</span>
          </h1>
          <p className="hero-desc">
            Discover our handpicked collection of beautiful, air-purifying, and
            fragrant plants. Transform your living space into a lush sanctuary
            of calm and beauty.
          </p>
          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={() => navigate("/plants")}>
              Shop Plants
            </button>
            <button className="hero-btn-secondary" onClick={() => navigate("/plants")}>
              Explore Categories →
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">18+</span>
              <span className="stat-label">Plant Varieties</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-grid">
            <div className="hero-img-card large">🌿</div>
            <div className="hero-img-card">🌺</div>
            <div className="hero-img-card">🌵</div>
            <div className="hero-img-card">🌸</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-inner">
          <h2 className="section-title">Why Choose Paradise Nursery?</h2>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to Start Your Green Journey?</h2>
          <p className="cta-desc">
            Browse our full collection of air purifying, aromatic, and insect
            repellent plants.
          </p>
          <button className="hero-btn-primary" onClick={() => navigate("/plants")}>
            Browse All Plants
          </button>
        </div>
      </section>
    </div>
  );
}
