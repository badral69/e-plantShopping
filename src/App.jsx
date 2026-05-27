import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./Header";
import LandingPage from "./LandingPage";
import ProductListingPage from "./ProductListingPage";
import CartPage from "./CartPage";
import AboutUs from "./AboutUs";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "plants", element: <ProductListingPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "about", element: <AboutUs /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
