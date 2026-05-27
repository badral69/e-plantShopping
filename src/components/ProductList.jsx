import { useState } from "react";
import { plants, categories } from "../data/plants";
import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? plants
      : plants.filter((p) => p.category === activeCategory);

  return (
    <div className="product-list-wrapper">
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

      <p className="results-count">
        Showing <strong>{filtered.length}</strong>{" "}
        {filtered.length === 1 ? "plant" : "plants"}
        {activeCategory !== "All" && ` in ${activeCategory}`}
      </p>

      <div className="products-grid">
        {filtered.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
