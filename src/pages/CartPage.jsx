import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";
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
        <span className="cart-count">{count} {count === 1 ? "item" : "items"}</span>
      </div>

      <div className="cart-layout">
        {/* Items */}
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <div className="cart-item-top">
                  <div>
                    <h3 className="cart-item-name">{item.name}</h3>
                    <span className="cart-item-category">{item.category}</span>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
                <div className="cart-item-bottom">
                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <span className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                    {item.quantity > 1 && (
                      <span className="unit-price">
                        ${item.price.toFixed(2)} each
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>

        {/* Summary */}
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
