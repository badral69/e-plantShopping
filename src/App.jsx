import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./Header";
import LandingPage from "./LandingPage";
import ProductListingPage from "./ProductListingPage";
import CartPage from "./CartPage";
import AboutUs from "./AboutUs";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/plants" element={<ProductListingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}
