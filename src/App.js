// src/App.js

import React, {
  Suspense,
  lazy,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

// Providers
import CartProvider, { CartContext } from "./pages/cartcontext";
import AuthProvider from "./pages/contaxt";
import { WishlistProvider } from "./pages/WishlistProvider";
import AllProducts from "./pages/Allprouducts";
import ProductDetails from "./pages/productdtails";
// Removed dark mode imports
import Header from "./componant/header";
// Components & Pages
import AddToCartModal from "./pages/popup";
import Navbar from "./componant/navbar";
import Footer from "./componant/footer";
import NotFound from "./pages/error";
import Checkout from "./pages/checkout";
// Remove LoadingSpinner import if file does not exist
import Profile from "./pages/Profile";
const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const SignupForm = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));
const Wishlist = lazy(() => import("./pages/wishlist"));
const Carts = lazy(() => import("./pages/carts"));
function AppContent() {
  const { isLoading, modalState, closeModal, totalPrice, totalItems } =
    useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600); // Simulate loading
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Header />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
      <Footer />
      <AddToCartModal
        isOpen={modalState.isOpen}
        item={modalState.item}
        onClose={closeModal}
        totalPrice={totalPrice}
        totalItems={totalItems}
      />
      {loading && (
        <div className="global-spinner-overlay">
          <div className="global-spinner"></div>
          <div className="loader-text">Loading...</div>
          <style>{`
            .global-spinner-overlay {
              position: fixed;
              top: 0; left: 0; right: 0; bottom: 0;
              background: rgba(255,255,255,0.7);
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
            .global-spinner {
              border: 6px solid #eee;
              border-top: 6px solid #db4444;
              border-radius: 50%;
              width: 54px;
              height: 54px;
              animation: spin 1s linear infinite;
              margin-bottom: 16px;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .loader-text {
              font-size: 1.1rem;
              color: #db4444;
              font-weight: 600;
              letter-spacing: 0.02em;
              opacity: 0.85;
              text-align: center;
            }
          `}</style>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;
