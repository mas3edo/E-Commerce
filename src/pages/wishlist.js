import { useContext } from "react";
import { WishlistContext } from "./WishlistProvider";
import { CartContext } from "./cartcontext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { addToCart } = useContext(CartContext);
  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
  const navigate = useNavigate();
  function removeFromWishlist(itemId) {
    setWishlistItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  }
  console.log(wishlistItems);

  const isEmpty = Object.keys(wishlistItems).length === 0;

  return (
    <div className="wishlist-redesign-bg">
      <div className="wishlist-redesign-container">
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 18 }}
        >
          <Link to="/home" className="wishlist-back-btn">
            <Icon
              icon="mdi:arrow-left"
              style={{ marginRight: 8, fontSize: 20 }}
            />
            Back to Shop
          </Link>
        </div>
        <h1 className="wishlist-redesign-title">My Wishlist</h1>
        {isEmpty ? (
          <div className="wishlist-empty-fullscreen">
            <img
              src="/public/empty-wishlist-character.png"
              alt="Empty Wishlist"
              className="wishlist-empty-img"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <Icon
              icon="mdi:heart-outline"
              style={{
                fontSize: "90px",
                color: "#bbb",
                marginBottom: 18,
                textAlign: "center",
              }}
            />
            <h2>Your wishlist is empty</h2>
            <p>Save your favorite products to see them here!</p>
            <Link to="/" className="wishlist-shop-btn">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="wishlist-redesign-grid">
            {Object.values(wishlistItems).map((item) => (
              <div key={item.id} className="wishlist-redesign-card">
                <div className="wishlist-redesign-img-wrap">
                  <img src={item.images[0]} alt={item.title} />
                </div>
                <div className="wishlist-redesign-info">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className="wishlist-redesign-actions">
                    <button
                      className="wishlist-redesign-add"
                      onClick={() => addToCart(item)}
                    >
                      <Icon icon="mdi:cart-plus" style={{ marginRight: 8 }} />
                      Add to Cart
                    </button>
                    <button
                      className="wishlist-redesign-remove"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Icon icon="mdi:delete" style={{ marginRight: 6 }} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginTop: 32, textAlign: "center" }}></div>
        <style>{`
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
      <style>
        {`
        .wishlist-back-btn {
          display: inline-flex;
          align-items: center;
          background: #f5f5f5;
          color: #1976d2;
          border: none;
          border-radius: 8px;
          padding: 8px 18px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          margin-bottom: 8px;
          transition: background 0.18s, color 0.18s;
        }
        .wishlist-back-btn:hover {
          background: #e3f2fd;
          color: #1565c0;
        }
        .wishlist-redesign-bg {
          min-height: 100vh;
          background: linear-gradient(120deg, #f7f8fa 60%, #e3e6ee 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 40px;
        }
        .wishlist-redesign-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 12px 0 12px;
        }
        .wishlist-redesign-title {
          text-align: center;
          font-size: 2.3rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 32px;
          letter-spacing: 0.01em;
        }
        .wishlist-empty-fullscreen {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 6px 32px rgba(40,44,63,0.08);
          margin: 0 auto;
          max-width: 420px;
          padding: 48px 24px 40px 24px;
        }
        .wishlist-empty-img {
          width: 180px;
          height: 180px;
          object-fit: contain;
          margin-bottom: 24px;
        }
        .wishlist-empty-fullscreen h2 {
          margin: 0;
          font-weight: 700;
          font-size: 2rem;
          color: #222;
          text-align: center;
        }
        .wishlist-empty-fullscreen p {
          color: #888;
          font-size: 1.13rem;
          margin: 18px 0 0 0;
          text-align: center;
        }
        .wishlist-shop-btn {
          margin-top: 32px;
          padding: 14px 44px;
          font-size: 1.13rem;
          font-weight: 700;
          border-radius: 12px;
          background: linear-gradient(90deg, #1976d2 60%, #1565c0 100%);
          color: #fff;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 6px 24px rgba(25, 118, 210, 0.13);
          transition: background 0.22s, box-shadow 0.22s, transform 0.18s;
        }
        .wishlist-shop-btn:hover {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
          color: #fff;
          box-shadow: 0 10px 32px rgba(25, 118, 210, 0.18);
          transform: translateY(-2px) scale(1.04);
        }
        .wishlist-redesign-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 28px;
          padding-bottom: 40px;
        }
        .wishlist-redesign-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(40,44,63,0.07);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 18px 22px 18px;
          transition: box-shadow 0.22s, transform 0.18s;
          position: relative;
        }
        .wishlist-redesign-card:hover {
          box-shadow: 0 12px 40px rgba(25, 118, 210, 0.13);
          transform: translateY(-3px) scale(1.025);
        }
        .wishlist-redesign-img-wrap {
          width: 120px;
          height: 120px;
          background: #f7f8fa;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 2px 8px rgba(40,44,63,0.07);
        }
        .wishlist-redesign-img-wrap img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 12px;
        }
        .wishlist-redesign-info {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .wishlist-redesign-info h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0 0 6px 0;
          color: #1a1a1a;
          text-align: center;
        }
        .wishlist-redesign-info p {
          font-size: 1.08rem;
          color: #db4444;
          font-weight: 700;
          margin: 0 0 12px 0;
        }
        .wishlist-redesign-actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .wishlist-redesign-add {
          background: linear-gradient(90deg, #1976d2 60%, #1565c0 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 22px;
          font-size: 1.03rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(25, 118, 210, 0.10);
          transition: background 0.18s, box-shadow 0.18s, transform 0.14s;
          outline: none;
          display: flex;
          align-items: center;
        }
        .wishlist-redesign-add:hover {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
          box-shadow: 0 6px 18px rgba(25, 118, 210, 0.18);
          transform: scale(1.045);
        }
        .wishlist-redesign-remove {
          background: #f7f8fa;
          color: #db4444;
          border: 2px solid #db4444;
          border-radius: 8px;
          padding: 10px 18px;
          font-size: 1.03rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.18s, color 0.18s, border 0.18s, transform 0.14s;
          outline: none;
        }
        .wishlist-redesign-remove:hover {
          background: #ffeaea;
          color: #b83232;
          border-color: #b83232;
          transform: scale(1.045);
        }
        @media (max-width: 700px) {
          .wishlist-redesign-container {
            padding: 18px 2vw 0 2vw;
          }
          .wishlist-redesign-title {
            font-size: 1.5rem;
            margin-bottom: 18px;
          }
          .wishlist-redesign-grid {
            gap: 14px;
            padding-bottom: 18px;
          }
          .wishlist-redesign-card {
            padding: 14px 6px 12px 6px;
          }
          .wishlist-redesign-img-wrap {
            width: 70px;
            height: 70px;
            margin-bottom: 10px;
          }
          .wishlist-redesign-img-wrap img {
            width: 54px;
            height: 54px;
          }
          .wishlist-redesign-info h3 {
            font-size: 1rem;
          }
          .wishlist-redesign-info p {
            font-size: 0.95rem;
          }
          .wishlist-redesign-add,
          .wishlist-redesign-remove {
            font-size: 0.95rem;
            padding: 8px 10px;
          }
        }
        `}
      </style>
    </div>
  );
}

export default Wishlist;
