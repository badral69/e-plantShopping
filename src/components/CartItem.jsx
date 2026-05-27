import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice.jsx";
import "./CartItem.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
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
              <span className="unit-price">${item.price.toFixed(2)} each</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
