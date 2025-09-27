import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../pages/cartcontext";
import { WishlistContext } from "./WishlistProvider";
import { Heart } from "lucide-react";

function ProductDetails() {
  const { addToCart, products } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { id: paramId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => String(item.id) === String(paramId));
  const isInWishlist = product && wishlistItems && wishlistItems[product.id];

  const handleWishlistClick = () => {
    if (!product) return;
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="product-details-redesign">
      <div className="product-details-main">
        <div className="product-image-col">
          <img
            src={product.images}
            alt={product.title}
            className="product-main-img"
          />
        </div>
        <div className="product-info-col">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-price-row">
            <span className="product-price">${product.price}</span>
            <button
              className="wishlist-btn"
              onClick={handleWishlistClick}
              title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <Heart
                size={28}
                color={isInWishlist ? "#e53935" : "#bbb"}
                fill={isInWishlist ? "#e53935" : "none"}
                style={{ verticalAlign: "middle" }}
              />
            </button>
          </div>
          <div className="product-rating-row">
            <span className="product-stars">
              {"★".repeat(Math.round(product.rating || 4))}
            </span>
            <span className="product-reviews">
              ({product.reviews || 0} reviews)
            </span>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-actions-row">
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="back-to-shop-btn"
              onClick={() => navigate("/home")}
            >
              Back to Shop
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .product-details-redesign {
          max-width: 1000px;
          margin: 48px auto;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 6px 32px rgba(40,44,63,0.10);
          padding: 36px 28px 32px 28px;
          font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
        }
        .product-details-main {
          display: flex;
          gap: 44px;
          flex-wrap: wrap;
        }
        .product-image-col {
          flex: 1 1 340px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .product-main-img {
          width: 340px;
          height: 340px;
          object-fit: contain;
          border-radius: 16px;
          background: #f7f8fa;
          box-shadow: 0 2px 12px rgba(40,44,63,0.07);
        }
        .product-info-col {
          flex: 2 1 400px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .product-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 18px;
          color: #222;
        }
        .product-price-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 12px;
        }
        .product-price {
          color: #e53935;
          font-size: 2rem;
          font-weight: 700;
        }
        .wishlist-btn {
          background: #fff;
          border: 2.5px solid #fff;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.18s, border 0.18s, transform 0.13s;
        }
        .wishlist-btn:hover {
          transform: scale(1.08);
        }
        .product-rating-row {
          color: #ffb400;
          font-size: 1.18rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .product-stars {
          margin-right: 8px;
        }
        .product-reviews {
          color: #888;
          font-size: 1.05rem;
        }
        .product-description {
          margin: 18px 0 24px 0;
          font-size: 1.13rem;
          color: #444;
          line-height: 1.7;
        }
        .product-actions-row {
          display: flex;
          gap: 18px;
        }
        .add-to-cart-btn {
          background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px 38px;
          font-weight: 700;
          font-size: 1.13rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(25, 118, 210, 0.10);
          transition: background 0.18s, transform 0.13s;
        }
        .add-to-cart-btn:hover {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
          transform: translateY(-2px) scale(1.04);
        }
        .back-to-shop-btn {
          background: #fff;
          color: #1976d2;
          border: 2px solid #1976d2;
          border-radius: 10px;
          padding: 14px 38px;
          font-weight: 700;
          font-size: 1.13rem;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border 0.18s, transform 0.13s;
          display: inline-block;
        }
        .back-to-shop-btn:hover {
          background: #1976d2;
          color: #fff;
          border: 2px solid #1976d2;
          transform: translateY(-2px) scale(1.04);
        }
        @media (max-width: 900px) {
          .product-details-main {
            flex-direction: column;
            gap: 24px;
          }
          .product-main-img {
            width: 100%;
            height: 220px;
          }
          .product-actions-row {
            flex-direction: column;
            gap: 12px;
          }
          .add-to-cart-btn,
          .back-to-shop-btn {
            width: 100%;
            min-width: 0;
            padding: 14px 0;
            font-size: 1.05rem;
            box-sizing: border-box;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductDetails;
