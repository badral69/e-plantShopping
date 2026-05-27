import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plants, categories } from "./plants";
import { addItem, updateQuantity, removeItem, selectCartItems, selectCartCount } from "./cartSlice.jsx";
import "./ProductList.css";

export default function ProductList({ onCartClick }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  const filtered =
    activeCategory === "All"
      ? plants
      : plants.filter((p) => p.category === activeCategory);

  const getCartItem = (id) => cartItems.find((i) => i.id === id);

  return (
    <div className="product-list-page">
      <div className="product-list-header">
        <h2>Paradise Nursery — Plant Collection</h2>
        <button className="cart-icon-btn" onClick={onCartClick}>
          🛒 Cart {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
        </button>
      </div>

      <div className="category-bar">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {categories
        .filter((cat) => activeCategory === "All" || activeCategory === cat)
        .map((cat) => {
          const categoryPlants = plants.filter((p) => p.category === cat);
          return (
            <div key={cat} className="category-section">
              <h3 className="category-title">{cat}</h3>
              <div className="plants-grid">
                {categoryPlants.map((plant) => {
                  const cartItem = getCartItem(plant.id);
                  return (
                    <div key={plant.id} className="plant-card">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-thumbnail"
                      />
                      <div className="plant-info">
                        <h4 className="plant-name">{plant.name}</h4>
                        <p className="plant-desc">{plant.description}</p>
                        <p className="plant-price">${plant.price.toFixed(2)}</p>
                        {cartItem ? (
                          <div className="qty-control">
                            <button
                              className="qty-btn"
                              onClick={() =>
                                dispatch(updateQuantity({ id: plant.id, quantity: cartItem.quantity - 1 }))
                              }
                            >
                              −
                            </button>
                            <span className="qty-value">{cartItem.quantity}</span>
                            <button
                              className="qty-btn"
                              onClick={() =>
                                dispatch(updateQuantity({ id: plant.id, quantity: cartItem.quantity + 1 }))
                              }
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            className="add-to-cart-btn"
                            onClick={() => dispatch(addItem(plant))}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
