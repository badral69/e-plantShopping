import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  clearCart,
} from "../store/cartSlice.jsx";
import CartItem from "../components/CartItem.jsx";
import "./CartPage.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <span className="empty-icon">🛒</span>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any plants yet.</p>
        <button className="continue-btn" onClick={() => navigate("/plants")}>
          Browse Plants
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header-bar">
        <h1 className="cart-title">Shopping Cart</h1>
        <span className="cart-count">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-rows">
            {items.map((item) => (
              <div key={item.id} className="summary-row">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-subtotal">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-row muted">
            <span>Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="summary-row muted">
            <span>Tax (8%)</span>
            <span>${(total * 0.08).toFixed(2)}</span>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <span>Total</span>
            <span>${(total * 1.08).toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
          <button
            className="continue-shopping-btn"
            onClick={() => navigate("/plants")}
          >
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
