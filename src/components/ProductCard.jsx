import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
} from "../store/cartSlice";
import "./ProductCard.css";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems.find((i) => i.id === plant.id);

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={plant.image} alt={plant.name} className="product-img" />
        <span className="product-category">{plant.category}</span>
      </div>
      <div className="product-body">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-desc">{plant.description}</p>
        <div className="product-footer">
          <span className="product-price">${plant.price.toFixed(2)}</span>
          {cartItem ? (
            <div className="qty-control">
              <button
                className="qty-btn"
                onClick={() => dispatch(decreaseQuantity(plant.id))}
              >
                −
              </button>
              <span className="qty-value">{cartItem.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => dispatch(increaseQuantity(plant.id))}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="add-btn"
              onClick={() => dispatch(addToCart(plant))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
