import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
  clearCart,
  selectCartItems,
  selectCartTotal,
} from "./cartSlice.jsx";
import "./CartItem.css";

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const totalCartAmount = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <span className="empty-icon">🛒</span>
        <h2>Your cart is empty</h2>
        <p>Go back and add some plants!</p>
        <button className="continue-btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="continue-btn" onClick={onContinueShopping}>
          ← Continue Shopping
        </button>
      </div>

      <div className="cart-items-list">
        {items.map((item) => {
          const itemTotal = item.quantity * item.price;
          return (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-unit-price">
                  Unit Price: ${item.price.toFixed(2)}
                </p>
                <div className="qty-control">
                  <button
                    className="qty-btn"
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                    }
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                    }
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-total">
                  Total: <strong>${itemTotal.toFixed(2)}</strong>
                </p>
              </div>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(item.id))}
              >
                ✕ Remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal ({items.length} {items.length === 1 ? "item" : "items"})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span className="free">Free</span>
        </div>
        <div className="summary-row">
          <span>Tax (8%)</span>
          <span>${(total * 0.08).toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Total Cart Amount</span>
          <span>${totalCartAmount.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
        <button
          className="clear-cart-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
