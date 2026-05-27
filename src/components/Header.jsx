import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice.jsx";
import "./Header.css";

export default function Header() {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">🌿</span>
          <div className="logo-text">
            <span className="logo-name">Paradise Nursery</span>
            <span className="logo-tagline">Where Green Meets Serenity</span>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/plants" className="nav-link">
            Plants
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <button className="cart-btn" onClick={() => navigate("/cart")}>
            <span className="cart-icon">🛒</span>
            <span className="cart-label">Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
