import ProductList from "../components/ProductList";
import "./ProductListingPage.css";

export default function ProductListingPage() {
  return (
    <div className="listing-page">
      <div className="listing-hero">
        <h1 className="listing-title">Our Plant Collection</h1>
        <p className="listing-subtitle">
          18 carefully selected plants to transform your space
        </p>
      </div>
      <div className="listing-inner">
        <ProductList />
      </div>
    </div>
  );
}
