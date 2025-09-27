import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { Icon } from "@iconify/react";
import { CartContext } from "../cartcontext";
import { WishlistContext } from "../WishlistProvider";

function BestSellingProducts() {
  const { products, addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, wishlistItems } =
    useContext(WishlistContext);
  const [clickedId, setClickedId] = useState(null);
  const scrollerRef = React.useRef(null);

  const isInWishlist = (id) => wishlistItems && wishlistItems[id];
  const handleWishlistClick = (item) => {
    if (isInWishlist(item.id)) {
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
    <>
      <section className="bestselling-section">
        <div className="bestselling-header-modern">
          <div className="bestselling-header-left">
            <span className="bestselling-header-label">This Month</span>
            <h2 className="bestselling-header-title">Best Selling Products</h2>
          </div>
          <Link to="/all-products" className="bestselling-header-viewall">
            View All
          </Link>
        </div>
        <div className="bestselling-products-toggle-row">
          <button
            className="bestselling-arrow-btn"
            aria-label="Previous"
            onClick={() => scroll("left")}
          >
            <Icon icon="mdi:chevron-left" width="22" height="22" />
          </button>
          <div className="bestselling-products-row" ref={scrollerRef}>
            {products &&
              products.slice(0, 7).map((item) => {
                const oldPrice = Math.floor(item.price * 1.25);
                const discount = Math.round(
                  ((oldPrice - item.price) / oldPrice) * 100
                );
                return (
                  <div
                    className="bestselling-card flash-minimal-card"
                    key={item.id}
                  >
                    <div className="bestselling-img-wrap flash-minimal-img-wrap">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="flash-minimal-img"
                      />
                      <span className="flash-minimal-discount">
                        -{discount}%
                      </span>
                      <div className="flash-minimal-icons">
                        <button
                          className="flash-minimal-wishlist"
                          title={
                            isInWishlist(item.id)
                              ? "Remove from Wishlist"
                              : "Add to Wishlist"
                          }
                          onClick={() => handleWishlistClick(item)}
                        >
                          <Heart
                            size={18}
                            color={isInWishlist(item.id) ? "#e53935" : "#000"}
                            fill={isInWishlist(item.id) ? "#e53935" : "none"}
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
                    <div className="bestselling-info flash-minimal-info">
                      <div className="bestselling-title-row flash-minimal-title-row">
                        {item.title}
                      </div>
                      <div className="bestselling-price-row flash-minimal-prices">
                        <span className="bestselling-price flash-minimal-price">
                          ${item.price}
                        </span>
                        <span className="bestselling-oldprice flash-minimal-oldprice">
                          ${oldPrice}
                        </span>
                      </div>
                      <div className="bestselling-rating-row flash-minimal-rating">
                        <span className="bestselling-stars flash-minimal-stars">
                          {"★".repeat(Math.round(item.rating || 4))}
                        </span>
                        <span className="bestselling-reviews flash-minimal-reviews">
                          ({item.reviews || 0})
                        </span>
                      </div>
                      <button
                        className={`flash-minimal-cart${
                          clickedId === item.id
                            ? " flash-minimal-cart-anim"
                            : ""
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
              })}
          </div>
          <button
            className="bestselling-arrow-btn"
            aria-label="Next"
            onClick={() => scroll("right")}
          >
            <Icon icon="mdi:chevron-right" width="22" height="22" />
          </button>
        </div>
      </section>
      <style>{`
        /* --- Modern header styles --- */
        .bestselling-header-modern {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .bestselling-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .bestselling-header-label {
          background: #f7f8fa;
          color: #e53935;
          font-size: 1.05rem;
          font-weight: 700;
          border-radius: 8px;
          padding: 6px 18px;
          letter-spacing: 0.02em;
        }
        .bestselling-header-title {
          font-size: 2rem;
          font-weight: 700;
          color: #222;
          margin: 0;
          letter-spacing: 0.01em;
        }
        .bestselling-header-viewall {
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 7px;
          padding: 6px 16px;
          font-weight: 600;
          font-size: 0.97rem;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s, box-shadow 0.18s;
          box-shadow: 0 1.5px 5px rgba(229,57,53,0.08);
          min-width: 70px;
          text-align: center;
        }
        .bestselling-header-viewall:hover {
          background: #b71c1c;
          box-shadow: 0 4px 18px rgba(229,57,53,0.18);
        }
        @media (max-width: 900px) {
          .bestselling-header-modern {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .bestselling-header-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
          }
          .bestselling-header-title {
            font-size: 1.3rem;
          }
          .bestselling-header-label {
            font-size: 0.98rem;
            padding: 4px 10px;
          }
          .bestselling-header-viewall {
            font-size: 0.97rem;
            padding: 8px 0;
            width: 100%;
            min-width: unset;
            border-radius: 9px;
          }
        }
        @media (max-width: 600px) {
          .bestselling-header-modern {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .bestselling-header-title {
            font-size: 1.08rem;
          }
          .bestselling-header-label {
            font-size: 0.89rem;
            padding: 3px 7px;
          }
          .bestselling-header-viewall {
            font-size: 0.92rem;
            padding: 5px 0;
            width: 100%;
            border-radius: 7px;
            min-width: unset;
          }
          @media (max-width: 600px) {
            .bestselling-header-viewall {
              font-size: 0.78rem;
              padding: 3px 0;
              border-radius: 5px;
              min-width: unset;
              max-width: 90px;
            }
          }
        }
  /* --- Card styles from flash deals for visual match --- */
  .bestselling-products-toggle-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .bestselling-arrow-btn {
    background: #f5f5f5;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
    color: #e53935;
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  .bestselling-arrow-btn:hover {
    background: #ffeaea;
    color: #b71c1c;
  }
  .bestselling-products-row {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    flex: 1;
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
          border-radius: 15px;
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
        .flash-minimal-wishlist:hover, .flash-minimal-view:hover {
          background: #ffeaea;
          transform: scale(1.12);
        }
        .flash-minimal-info {
        height: 100%;
        display: flex;
          flex-direction: column;
          justify-content: space-between;
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
        .flash-minimal-stars {
          color: #ffb400;
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
      `}</style>
    </>
  );
}

export default BestSellingProducts;
