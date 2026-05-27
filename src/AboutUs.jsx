import "./AboutUs.css";

export default function AboutUs({ onBack }) {
  return (
    <div className="about-us-container">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="about-hero">
        <span className="about-badge">🌿 Our Story</span>
        <h1>We Believe Everyone Deserves a Green Space</h1>
        <p className="about-intro">
          Paradise Nursery was born in 2018 from a single balcony garden and a
          big idea — that plants make life better. Today we ship hundreds of
          lovingly grown plants every week to homes and offices across the country.
        </p>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We exist to connect people with nature. Whether you're a seasoned
          plant parent or just starting your green journey, we have the perfect
          plant for you — along with all the knowledge you need to help it thrive.
        </p>
        <p>
          From air-purifying wonders to fragrant aromatics and natural insect
          repellents, our collection is curated to bring real, tangible benefits
          to your everyday life.
        </p>
      </div>

      <div className="about-values">
        <h2>What We Stand For</h2>
        <div className="values-grid">
          <div className="value-card">
            <span>🌱</span>
            <h3>Sustainably Grown</h3>
            <p>Every plant is grown using eco-friendly practices with minimal environmental impact.</p>
          </div>
          <div className="value-card">
            <span>💚</span>
            <h3>Community First</h3>
            <p>We donate 5% of every purchase to urban greening projects in local communities.</p>
          </div>
          <div className="value-card">
            <span>🔬</span>
            <h3>Expert Knowledge</h3>
            <p>Our team of botanists hand-selects and quality-checks every plant before it ships.</p>
          </div>
          <div className="value-card">
            <span>📦</span>
            <h3>Guaranteed Fresh</h3>
            <p>Plants are packed the morning of shipping and backed by our freshness guarantee.</p>
          </div>
        </div>
      </div>

      <div className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <span>👩‍🌾</span>
            <h3>Sarah Green</h3>
            <span className="role">Head Horticulturist</span>
            <p>15 years of experience cultivating rare and exotic plants.</p>
          </div>
          <div className="team-card">
            <span>🧑‍🔬</span>
            <h3>Marcus Root</h3>
            <span className="role">Plant Care Specialist</span>
            <p>A botanist passionate about helping customers find their perfect plant.</p>
          </div>
          <div className="team-card">
            <span>👩‍💼</span>
            <h3>Lily Chen</h3>
            <span className="role">Founder & CEO</span>
            <p>Founded Paradise Nursery to make nature accessible to every home.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
