import React, { useState, useEffect, useContext } from "react";
// Removed dark mode import
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../pages/cartcontext";
import { WishlistContext } from "../pages/WishlistProvider";
function Navbar() {
  // Removed dark mode context
  const location = useLocation();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { products, cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  // Count items in wishlist and cart
  const wishlistCount = wishlistItems ? Object.keys(wishlistItems).length : 0;
  const cartCount = cartItems
    ? cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;
  useEffect(() => {
    // Map paths to active names
    const pathMap = {
      "/home": "home",
      "/contact": "contact",
      "/about": "about",
      "/signup": "signup",
      "/login": "login",
      "/wishlist": "wishlist",
    };
    const current = pathMap[location.pathname];
    setActive(current);
  }, [location.pathname]);
  function search(SearchTerm) {
    if (!SearchTerm) {
      setSearchResults([]);
      return;
    }
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(SearchTerm.toLowerCase())
    );
    setSearchResults(results);
  }
  return (
    <nav className="navbar">
      <div className="container">
        {/* Removed dark mode toggle button */}
        {/* Logo */}
        <div className="logo">Exclusive</div>
        {/* Links */}
        <div className={`links ${menuOpen ? "open" : ""}`}>
          <Link
            to="/home"
            className={active === "home" ? "active" : ""}
            onClick={() => {
              setActive("home");
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => {
              setActive("contact");
              setMenuOpen(false);
            }}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={active === "about" ? "active" : ""}
            onClick={() => {
              setActive("about");
              setMenuOpen(false);
            }}
          >
            About
          </Link>
          <Link
            to="/signup"
            className={active === "signup" ? "active" : ""}
            onClick={() => {
              setActive("signup");
              setMenuOpen(false);
            }}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className={active === "login" ? "active" : ""}
            onClick={() => {
              setActive("login");
              setMenuOpen(false);
            }}
          >
            Log In
          </Link>
        </div>{" "}
        {/* <-- Properly close the .links div here */}
        {/* Actions + Burger */}
        <div className="actions">
          {/* Search Box (Desktop) */}
          <div className="search-box desktop-search">
            <input
              className="search-box-input"
              onChange={(e) => search(e.target.value)}
              type="search"
              placeholder="Search..."
            />
            <Icon icon="mdi:magnify" width={20} height={20} />
          </div>
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <div key={result.id} className="search-result">
                  <Link
                    onClick={() => {
                      setMobileSearch(false);
                      setSearchResults([]);
                      document.getElementsByClassName(
                        "search-box-input"
                      )[0].value = "";
                    }}
                    to={`/product/${result.id}`}
                  >
                    <img src={result.images} alt={result.title} />
                    <span>{result.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {searchResults.length === 0 && mobileSearch && (
            <div className="no-results">No results found</div>
          )}
          {/* Favorites with badge */}
          <Link
            to="/wishlist"
            className={`icon-link wishlist-link${
              active === "wishlist" ? " active" : ""
            }`}
            aria-label="Wishlist"
            style={{ position: "relative" }}
          >
            <Icon icon="mdi:cards-heart-outline" width={22} height={22} />
            {wishlistCount > 0 && (
              <span className="circle-badge wishlist-badge">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart with badge */}
          <Link
            to="/cart"
            className={`icon-link cart-link${
              active === "cart" ? " active" : ""
            }`}
            aria-label="Cart"
            style={{ position: "relative" }}
          >
            <Icon icon="mdi:cart-outline" width={22} height={22} />
            {cartCount > 0 && (
              <span className="circle-badge cart-badge">{cartCount}</span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="profile-dropdown-wrapper">
            <button
              className={`icon-link ${""}`}
              onClick={(e) => {
                e.preventDefault();
                setShowProfileMenu(!showProfileMenu);
              }}
            >
              <Icon icon="mdi:account-circle-outline" width={22} height={22} />
            </button>

            <div className={`profile-menu ${showProfileMenu ? "open" : ""}`}>
              <Link onClick={() => setShowProfileMenu(false)} to="/profile">
                👤 Manage My Account
              </Link>
              <Link onClick={() => setShowProfileMenu(false)} to="/cart">
                📦 My Order
              </Link>
              <Link
                onClick={() => setShowProfileMenu(false)}
                to="/cancellations"
              >
                ❌ My Cancellations
              </Link>
              <Link onClick={() => setShowProfileMenu(false)} to="/reviews">
                ⭐ My Reviews
              </Link>
              <Link onClick={() => setShowProfileMenu(false)} to="/logout">
                ↩️ Logout
              </Link>
            </div>
          </div>

          {/* Search Icon (Mobile) */}
          <button
            className="icon-link mobile-search-icon"
            onClick={() => setMobileSearch(true)}
          >
            <Icon icon="mdi:magnify" width={22} height={22} />
          </button>

          {/* Burger Menu */}
          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              width={28}
              height={28}
            />
          </button>
        </div>
        {/* Mobile Search Overlay */}
        {mobileSearch && (
          <div className="mobile-search-overlay">
            <input
              onChange={(e) => {
                search(e.target.value);
              }}
              type="text"
              placeholder="Search..."
              autoFocus
            />
            {searchResults.length > 0 && (
              <div className="search-resultsmobile">
                {searchResults.map((result) => (
                  <div key={result.id} className="search-resultmobile2">
                    <Link
                      onClick={() => {
                        setMobileSearch(false);
                        setSearchResults([]);
                      }}
                      to={`/product/${result.id}`}
                    >
                      <img src={result.images} alt={result.title} />
                      <span>{result.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {searchResults.length === 0 && mobileSearch && (
              <div className="no-results">No results found</div>
            )}
            <button
              className="close-btn"
              onClick={() => {
                setMobileSearch(false);
                setSearchResults([]);
              }}
              aria-label="Close Search"
            >
              <Icon icon="mdi:close" width={28} height={28} />
            </button>
          </div>
        )}
      </div>

      {/* CSS Styles */}
      <style>{`
        .circle-badge {
          position: absolute;
          top: -7px;
          right: -7px;
          min-width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #fff 0%, #f7f7f7 100%);
          color: #e53935;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.08rem;
          font-weight: 800;
          box-shadow: 0 4px 16px rgba(229,57,53,0.18), 0 1.5px 4px rgba(25,118,210,0.08);
          z-index: 2;
          padding: 0 7px;
          border: 2.5px solid #fff;
          pointer-events: none;
          transition: background 0.18s, color 0.18s, transform 0.18s;
          animation: badge-pop 0.35s cubic-bezier(.36,1.56,.64,1) both;
        }
        .wishlist-link .circle-badge {
          color: #e53935;
          border-color: #fff;
          background: linear-gradient(135deg, #ffeaea 0%, #fff 100%);
        }
        .cart-link .circle-badge {
          color: #1976d2;
          border-color: #fff;
          background: linear-gradient(135deg, #e3f2fd 0%, #fff 100%);
        }
        @keyframes badge-pop {
          0% { transform: scale(0.7); }
          60% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }

        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          background: #fff;
          border-radius: 0 0 16px 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07), 0 1.5px 4px rgba(0,0,0,0.03);
          margin: 0;
          border: none;
        }
        .navbar .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;

        }
        .logo {
          font-weight: 800;
          font-size: 26px;
          letter-spacing: 1px;
          color: #6b4c8d;
        }
        .links {
          display: flex;
          gap: 36px;
        }
        .links a {
          text-decoration: none;
          color: #222;
          font-size: 17px;
          position: relative;
          padding-bottom: 4px;
          font-weight: 500;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
        }
        .links a.active,
        .links a:hover {
          background: #f3e9ff;
          color: #6b4c8d;
        }
        .links a.active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #6b4c8d;
          border-radius: 2px;
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .search-box {
          flex: 1;
          max-width: 220px;
          display: flex;
          align-items: center;
          background: #f3f4f6;
          border-radius: 8px;
          padding: 7px 12px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }
        .search-box input {
          flex: 1;
          min-width: 60px;
          border: none;
          outline: none;
          background: transparent;
          font-size: 15px;
          color: #222;
        }
        .icon-link {
          color: #6b4c8d;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          transition: background 0.2s, color 0.2s;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .icon-link:hover,
        .icon-link.active {
          background: #6b4c8d;
          color: #fff;
        }
        .burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #6b4c8d;
        }
        .mobile-search-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: #fff;
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 12px;
          border-bottom: 1px solid #e5e7eb;
        }
        .mobile-search-overlay input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          padding: 8px;
        }
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #6b4c8d;
        }
        .profile-dropdown-wrapper {
          position: relative;
        }
        .profile-menu {
          position: absolute;
          top: 42px;
          right: 0;
          background: linear-gradient(to bottom right, #6b4c8d, #2c2c2c);
          color: white;
          border-radius: 10px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
          width: 210px;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }
        .profile-menu.open {
          max-height: 500px;
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .profile-menu a {
          padding: 13px 18px;
          text-decoration: none;
          color: white;
          font-size: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.3s;
        }
        .profile-menu a:hover {
          background: rgba(255,255,255,0.13);
        }
        .profile-menu a:last-child {
          border-bottom: none;
        }
        .search-results {
          position: absolute;
          top: 48px;
          left: 0;
            width: 100%;
            max-height: 300px;
            background: #fff;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow-y: auto;
            z-index: 1000;
          }
        .search-result {
          display: flex;
          align-items: center;
        }
        .search-result img {
          width: 40px;
          height: 40px;
        }
        .search-result span {
          margin-left: 12px;
          font-size: 14px;
        }
        .search-results a {
        width: 100%;
          text-decoration: none;
          color: inherit;
          align-items: center;
          display: flex;
          padding: 8px 12px;
          border-bottom: 1px solid #f3f4f6;
        }
        .search-results a:hover {
          background: #f3e9ff;
        }
        .search-resultsmobile {
          top: 60px;
          display: flex;
          align-items: center;
          position: absolute;
          top: 48px;
          left: 0;
          width: 100%;
          max-height: 300px;
    background: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow-y: auto;
    z-index: 1000;
    flex-direction: column;
        }
        .search-resultmobile2 img {
          width: 40px;
          height: 40px;
        }
        .search-resultmobile2 span {
          margin-left: 12px;
          font-size: 14px;
        }
        .search-resultsmobile a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: inherit;
          align-items: center;
          display: flex;
          padding: 8px 12px;
          border-bottom: 1px solid #f3f4f6;
        }
        .search-resultsmobile2 a:hover {
          background: #f3e9ff;
        }
        .no-results {
          position: absolute;
          top: 48px;
          left: 0;
          width: 100%;
          background: #fff;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          border-radius: 8px;
          padding: 12px;
        }
        .search-resultmobile2 {
          width: 100%;
        }
        @media (min-width: 1024px) {
          .search-results {
            display: flex;
            flex-direction: column;
            gap: 12px;
            position: absolute;
            left: 67%;
            
          }


        }
        @media (max-width: 900px) {
          .navbar .container {
            flex-direction: row;
            padding: 10px 8px;
          }
          .links {
            flex-direction: column;
            gap: 16px;
            background: #fff;
            position: absolute;
            top: 60px;
            right: 0;
            width: 210px;
            border: 1px solid #e5e7eb;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.08);
            max-height: 0;
            overflow-y: auto;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1001;
          }
          .links.open {
            max-height: 400px;
            opacity: 1;
            transform: translateY(0);
            padding: 10px 10px;
            border-radius: 12px;
          }
          .search-box.desktop-search {
            max-width: 120px;
          }
          .actions {
            gap: 4px;
          }
          .burger {
            display: block;
          }
        }
        .mobile-search-icon {
          display: none;
        }
        @media (max-width: 700px) {
          .navbar .container {
            align-items: stretch;
            padding: 6px 4vw;
          }
          .logo {
            font-size: 20px;
            margin-bottom: 6px;
            margin-top: 5px;
          }
          .actions {
            flex-wrap: wrap;
            gap: 2px;
            justify-content: flex-end;
          }
          .links {
            width: 100vw;
            right: 0;
            left: 0;
            top: 54px;
            border-radius: 0 0 12px 12px;
          }
          .links.open {
            padding: 12px 5px;
          }
        }
        @media (max-width: 600px) {
          .desktop-search {
            display: none;
          }
          .mobile-search-icon {
            display: flex;
          }
          .navbar .container {
            padding: 4px 4vw;
          }
          .logo {
            font-size: 17px;
          }
          .profile-menu {
            right: 2vw;
            width: 57vw;
            min-width: 0;
          }
        }
      `}</style>
    </nav>
  );
}
export default Navbar;
