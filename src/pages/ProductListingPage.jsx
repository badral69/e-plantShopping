import { useState } from "react";
import { plants, categories } from "../data/plants";
import ProductCard from "../components/ProductCard";
import "./ProductListingPage.css";

export default function ProductListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? plants
      : plants.filter((p) => p.category === activeCategory);

  return (
    <div className="listing-page">
      <div className="listing-hero">
        <h1 className="listing-title">Our Plant Collection</h1>
        <p className="listing-subtitle">
          {plants.length} carefully selected plants to transform your space
        </p>
      </div>

      <div className="listing-inner">
        {/* Category filter */}
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

        {/* Results count */}
        <p className="results-count">
          Showing <strong>{filtered.length}</strong>{" "}
          {filtered.length === 1 ? "plant" : "plants"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>

        {/* Grid */}
        <div className="products-grid">
          {filtered.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}
