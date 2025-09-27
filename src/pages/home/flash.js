// src/pages/home/flash.js

import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../cartcontext";
import { WishlistContext } from "../WishlistProvider";
import {
  Heart,
  Eye,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function FlashDeals() {
  const { products, addToCart, isLoading } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const [clickedId, setClickedId] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const scrollerRef = useRef(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 4);
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleWishlistClick = (item) => {
    if (!item) return;
    if (wishlistItems && wishlistItems[item.id]) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  const handleAddToCart = (item) => {
    setClickedId(item.id);
    addToCart(item);
    setTimeout(() => setClickedId(null), 600);
  };

  const scroll = (direction) => {
    if (scrollerRef.current) {
      const scrollAmount = 320;
      scrollerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flash-minimal-section">
      <div className="section-header">
        <div className="write">
          <div className="category-title-container">
            <span
              className="category-title-decorator"
              style={{ backgroundColor: "#DB4444" }}
            ></span>
            <p className="category-title" style={{ color: "#DB4444" }}>
              Today's
            </p>
          </div>
          <h2>Flash Deals</h2>
        </div>
        <div className="nav-arrows">
          <button aria-label="Previous" onClick={() => scroll("left")}>
            <Icon
              icon="mdi:arrow-left"
              width={22}
              height={22}
              color="#e53935"
            />
          </button>
          <button aria-label="Next" onClick={() => scroll("right")}>
            <Icon
              icon="mdi:arrow-right"
              width={22}
              height={22}
              color="#e53935"
            />
          </button>
        </div>
      </div>
      <div
        className="heather-categories"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
        }}
      >
        <div className="flash-minimal-timer">
          <span>{String(timeLeft.days).padStart(2, "0")}</span>:
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
        {/* Removed arrows for cleaner look */}
      </div>
      <div className="flash-minimal-products" ref={scrollerRef}>
        {isLoading ? (
          <div className="flash-minimal-loading">Loading...</div>
        ) : products.length === 0 ? (
          <div className="flash-minimal-loading">No products found</div>
        ) : (
          products.slice(0, 10).map((item) => {
            const oldPrice = Math.floor(item.price * 1.25);
            const discount = Math.round(
              ((oldPrice - item.price) / oldPrice) * 100
            );
            const isInWishlist = wishlistItems && wishlistItems[item.id];
            return (
              <div className="flash-minimal-card" key={item.id}>
                <div className="flash-minimal-img-wrap">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="flash-minimal-img"
                  />
                  <span className="flash-minimal-discount">-{discount}%</span>
                  <div className="flash-minimal-icons">
                    <button
                      className="flash-minimal-wishlist"
                      title={
                        isInWishlist
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"
                      }
                      onClick={() => handleWishlistClick(item)}
                    >
                      <Heart
                        size={18}
                        color={isInWishlist ? "#e53935" : "#000"}
                        fill={isInWishlist ? "#e53935" : "none"}
                      />
                    </button>
                    <Link
                      to={`/product/${item.id}`}
                      className="flash-minimal-view"
                      title="View Details"
                    >
                      <Eye size={18} color="#000" />
                    </Link>
                  </div>
                </div>
                <div className="flash-minimal-info">
                  <div className="flash-minimal-title-row">{item.title}</div>
                  <div className="flash-minimal-prices">
                    <span className="flash-minimal-price">${item.price}</span>
                    <span className="flash-minimal-oldprice">${oldPrice}</span>
                  </div>
                  <div className="flash-minimal-rating">
                    <span className="flash-minimal-stars">
                      {"★".repeat(Math.round(item.rating || 4))}
                    </span>
                    <span className="flash-minimal-reviews">
                      ({item.reviews || 0})
                    </span>
                  </div>
                  <button
                    className={`flash-minimal-cart${
                      clickedId === item.id ? " flash-minimal-cart-anim" : ""
                    }`}
                    onClick={() => handleAddToCart(item)}
                    disabled={clickedId === item.id}
                  >
                    <ShoppingCart size={16} style={{ marginRight: 7 }} />
                    {clickedId === item.id ? "Added!" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flash-minimal-viewall">
        <Link to="/products" className="flash-minimal-viewall-btn">
          View All Products
        </Link>
      </div>
      <style>{`
      
        .flash-minimal-section {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.07);
          padding: 32px 18px 24px 18px;
          margin-bottom: 32px;
        }
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .write {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .category-title-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .category-title-decorator {
          width: 4px;
          height: 24px;
          border-radius: 2px;
        }
        .category-title {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
        }
        h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
          color: #222;
        }
        .nav-arrows {
          display: flex;
          gap: 8px;
        }
        .flash-minimal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .flash-minimal-title {
          font-size: 2rem;
          font-weight: 700;
          color: #e53935;
          letter-spacing: 0.02em;
        }
        .flash-minimal-timer {
          font-size: 1.1rem;
          font-weight: 600;
          color: #222;
          background: #f7f8fa;
          border-radius: 8px;
          padding: 6px 18px;
          display: flex;
          gap: 8px;
        }
        .flash-minimal-arrows button {
          background: #f5f5f5;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 1.2rem;
          color: #e53935;
          cursor: pointer;
          margin-left: 8px;
          transition: background 0.18s, color 0.18s;
        }
        .flash-minimal-arrows button:hover {
          background: #ffeaea;
          color: #b71c1c;
        }
        @media (max-width: 700px) {
          .flash-minimal-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .flash-minimal-title {
            font-size: 1.3rem;
            margin-bottom: 0;
          }
          .flash-minimal-timer {
            font-size: 0.98rem;
            padding: 4px 10px;
            margin-bottom: 0;
          }
          .flash-minimal-arrows {
            margin-top: 4px;
            align-self: flex-end;
          }
        }
        @media (max-width: 480px) {
          .flash-minimal-header {
            flex-direction: column;
            align-items: stretch;
            gap: 7px;
          }
          .flash-minimal-title {
            font-size: 1.05rem;
          }
          .flash-minimal-timer {
            font-size: 0.89rem;
            padding: 3px 6px;
          }
          .flash-minimal-arrows button {
            width: 28px;
            height: 28px;
            font-size: 1rem;
            margin-left: 4px;
          }
        }
        .flash-minimal-products {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-behavior: smooth;
        }
        .flash-minimal-card {
          background: #fafbfc;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          min-width: 220px;
          max-width: 240px;
          flex: 0 0 220px;
          padding: 18px 14px 14px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          transition: box-shadow 0.18s, transform 0.13s;
        }
        .flash-minimal-card:hover {
          box-shadow: 0 10px 36px rgba(25,118,210,0.13);
          transform: translateY(-6px) scale(1.04);
        }
        .flash-minimal-img-wrap {
          position: relative;
          width: 100%;
          height: 193px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .flash-minimal-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
          background: #fff;
        }
        .flash-minimal-discount {
          position: absolute;
          top: 8px;
          left: 8px;
          background: #e53935;
          color: #fff;
          font-size: 0.98rem;
          font-weight: 700;
          border-radius: 7px;
          padding: 2px 10px;
          z-index: 2;
        }
        .flash-minimal-icons {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          flex-direction: row;
          gap: 7px;
          z-index: 3;
        }
        .flash-minimal-wishlist, .flash-minimal-view {
          
          background: #fff;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: background 0.15s, transform 0.13s;
        }
           .flash-minimal-wishlist
           {
           position: absolute;
           top: 30px;
           }
        .flash-minimal-wishlist:hover, .flash-minimal-view:hover {
          background: #ffeaea;
          transform: scale(1.12);
        }
        .flash-minimal-info {
          width: 100%;
          text-align: left;
        }
        .flash-minimal-title-row {
          font-size: 1.08rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: #222;
        }
        .flash-minimal-prices {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .flash-minimal-price {
          color: #e53935;
          font-weight: 700;
          font-size: 1.05rem;
        }
        .flash-minimal-oldprice {
          color: #aaa;
          text-decoration: line-through;
          font-size: 0.95rem;
        }
        .flash-minimal-rating {
          color: #ffb400;
          font-size: 1.01rem;
          font-weight: 600;
        }
        .flash-minimal-reviews {
          color: #888;
          font-size: 0.93rem;
          margin-left: 5px;
        }
        .flash-minimal-cart {
          width: 100%;
          margin-top: 10px;
          background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px 0;
          font-weight: 700;
          font-size: 1.01rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
          transition: background 0.18s, transform 0.13s;
        }
        .flash-minimal-cart:disabled {
          background: #bdbdbd;
          cursor: not-allowed;
        }
        .flash-minimal-cart:hover:not(:disabled) {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
          transform: translateY(-2px) scale(1.04);
        }
        .flash-minimal-cart-anim {
          animation: flash-minimal-cart-pop 0.45s cubic-bezier(.36,1.56,.64,1) both;
          background: linear-gradient(90deg, #43e97b 60%, #38f9d7 100%);
          color: #fff;
          box-shadow: 0 8px 32px rgba(67, 233, 123, 0.18);
        }
        @keyframes flash-minimal-cart-pop {
          0% { transform: scale(1); }
          40% { transform: scale(1.13); }
          70% { transform: scale(0.97); }
          100% { transform: scale(1); }
        }
        .flash-minimal-viewall {
          display: flex;
          justify-content: center;
          margin-top: 18px;
        }
        .flash-minimal-viewall-btn {
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 38px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .flash-minimal-viewall-btn:hover {
          background: #b83232;
        }
        @media (max-width: 900px) {
          .flash-minimal-section {
            padding: 16px 2px 12px 2px;
          }
          .flash-minimal-products {
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}

export default FlashDeals;
