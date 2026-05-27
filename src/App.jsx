import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  return (
    <Provider store={store}>
      <div className="app">
        {!showProductList && !showAbout ? (
          <div className="background-image">
            <div className="landing-overlay">
              <h1 className="company-name">Welcome to Paradise Nursery</h1>
              <p className="company-tagline">Where Every Plant Finds a Home</p>
              <div className="landing-buttons">
                <button
                  className="get-started-btn"
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
                <button
                  className="about-btn"
                  onClick={() => { setShowAbout(true); setShowProductList(false); }}
                >
                  About Us
                </button>
              </div>
            </div>
          </div>
        ) : showAbout ? (
          <AboutUs onBack={() => { setShowAbout(false); }} />
        ) : showCart ? (
          <CartItem onContinueShopping={() => setShowCart(false)} />
        ) : (
          <ProductList onCartClick={() => setShowCart(true)} />
        )}
      </div>
    </Provider>
  );
}

export default App;
