import React from "react";
import { CartContext } from "../pages/cartcontext";
import { WishlistContext } from "./WishlistProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
function AllProducts() {
  const { products } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlistItems } = useContext(WishlistContext);

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <div className="all-products-header-row">
        <h1 style={{ margin: 0 }}>All Products</h1>
        <Link to="/" className="back-to-shop-btn">
          &larr; Back to Shop
        </Link>
      </div>
      <div className="flash-minimal-products">
        {products.slice(0, 20).map((item) => {
          const oldPrice = Math.floor(item.price * 1.25);
          const discount = Math.round(
            ((oldPrice - item.price) / oldPrice) * 100
          );
          const isInWishlist = wishlistItems && wishlistItems[item.id];
          return (
            <div className="flash-minimal-card" key={item.id}>
              <div className="flash-minimal-img-wrap">
                <img
                  src={
                    Array.isArray(item.images) ? item.images[0] : item.images
                  }
                  alt={item.title}
                  className="flash-minimal-img"
                />
                <span className="flash-minimal-discount">-{discount}%</span>
                <div className="flash-minimal-icons">
                  <button
                    className="flash-minimal-wishlist"
                    title={
                      isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"
                    }
                    onClick={() => addToWishlist(item)}
                  >
                    <Heart
                      size={18}
                      color={isInWishlist ? "#e53935" : "#bbb"}
                      fill={isInWishlist ? "#e53935" : "none"}
                    />
                  </button>
                  <Link
                    to={`/product/${item.id}`}
                    className="flash-minimal-view"
                    title="View Details"
                  >
                    <span role="img" aria-label="View">
                      👁️
                    </span>
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
                  className="flash-minimal-cart"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .flash-minimal-products {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          justify-content: center;
          padding-bottom: 8px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
          margin-bottom: 18px;
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
        .flash-minimal-wishlist {
          position: absolute;
          top: 30px;
        }
        .flash-minimal-wishlist:hover, .flash-minimal-view:hover {
          background: #ffeaea;
          transform: scale(1.12);
        }
        .flash-minimal-info {
        justify-content: space-between;
          flex-direction: column;
          display: flex;
          height: 100%;
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
        .flash-minimal-cart:hover {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
          transform: translateY(-2px) scale(1.04);
        }
        .all-products-header-row {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 600px) {
          .all-products-header-row {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .back-to-shop-btn {
            width: 100%;
            text-align: center;
          }
          h1 {
            text-align: center;
            font-size: 1.5rem;
          }
        }
        .back-to-shop-btn {
          display: inline-block;
          padding: 10px 28px;
          font-size: 1.08rem;
          font-weight: 600;
          color: #1976d2;
          background: #e3f2fd;
          border-radius: 22px;
          text-decoration: none;
          border: none;
          box-shadow: 0 2px 8px rgba(25, 118, 210, 0.07);
          transition: background 0.18s, color 0.18s;
          margin-bottom: 0;
        }
        .back-to-shop-btn:hover {
          background: #1976d2;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
export default AllProducts;
