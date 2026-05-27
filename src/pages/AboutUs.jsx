import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const team = [
  {
    name: "Sarah Green",
    role: "Head Horticulturist",
    emoji: "👩‍🌾",
    bio: "15 years of experience cultivating rare and exotic plants. Sarah curates every plant in our collection.",
  },
  {
    name: "Marcus Root",
    role: "Plant Care Specialist",
    emoji: "🧑‍🔬",
    bio: "A botanist passionate about helping customers find the perfect plant match for their living space.",
  },
  {
    name: "Lily Chen",
    role: "Founder & CEO",
    emoji: "👩‍💼",
    bio: "Founded Paradise Nursery with the mission of making nature accessible to every home and office.",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Sustainably Grown",
    desc: "Every plant is grown using eco-friendly practices with minimal environmental impact.",
  },
  {
    icon: "💚",
    title: "Community First",
    desc: "We donate 5% of every purchase to urban greening projects in local communities.",
  },
  {
    icon: "🔬",
    title: "Expert Knowledge",
    desc: "Our team of botanists hand-selects and quality-checks every plant before it ships.",
  },
  {
    icon: "📦",
    title: "Guaranteed Fresh",
    desc: "Plants are packed the morning of shipping and backed by our freshness guarantee.",
  },
];

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <span className="about-badge">🌿 Our Story</span>
        <h1 className="about-title">We Believe Everyone Deserves a Green Space</h1>
        <p className="about-intro">
          Paradise Nursery was born in 2018 from a single balcony garden and a
          big idea — that plants make life better. Today we ship hundreds of
          lovingly grown plants every week to homes and offices across the
          country.
        </p>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-inner">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We exist to connect people with nature. Whether you're a seasoned
              plant parent or just starting your green journey, we have the
              perfect plant for you — along with all the knowledge you need to
              help it thrive.
            </p>
            <p>
              From air-purifying wonders to fragrant aromatics and natural
              insect repellents, our collection is curated to bring real,
              tangible benefits to your everyday life.
            </p>
            <button className="about-cta-btn" onClick={() => navigate("/plants")}>
              Explore Our Plants
            </button>
          </div>
          <div className="mission-visual">
            <div className="mission-emoji-grid">
              <span>🌿</span>
              <span>🌺</span>
              <span>🌵</span>
              <span>🌸</span>
              <span>🍃</span>
              <span>🌻</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-inner">
          <h2 className="section-heading">What We Stand For</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="about-inner">
          <h2 className="section-heading">Meet the Team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <span className="team-emoji">{member.emoji}</span>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-bottom-cta">
        <h2>Ready to Start Your Plant Journey?</h2>
        <p>Browse our full collection and find your perfect green companion.</p>
        <button className="about-cta-btn" onClick={() => navigate("/plants")}>
          Shop Now
        </button>
      </section>
    </div>
  );
}
