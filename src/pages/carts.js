import { useContext } from "react";
import { CartContext } from "./cartcontext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function Carts() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  function handleQuantityChange(itemId, amount) {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(1, item.quantity + amount);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  }
  function handleRemove(itemId) {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-modern">
        <div className="cart-empty-illustration">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="56" fill="#e3f2fd" />
            <rect
              x="32"
              y="50"
              width="56"
              height="32"
              rx="8"
              fill="#fff"
              stroke="#1976d2"
              strokeWidth="2"
            />
            <rect x="44" y="62" width="8" height="8" rx="2" fill="#1976d2" />
            <rect x="68" y="62" width="8" height="8" rx="2" fill="#1976d2" />
            <rect x="56" y="62" width="8" height="8" rx="2" fill="#1976d2" />
          </svg>
        </div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/home" className="cart-empty-shop-btn">
          Go to Shop
        </Link>
        <style>{`
          .cart-empty-modern {
            min-height: 70vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #f7f8fa;
            border-radius: 18px;
            margin: 32px auto;
            max-width: 420px;
            box-shadow: 0 4px 24px rgba(40,44,63,0.07);
            padding: 48px 18px 38px 18px;
          }
          .cart-empty-illustration {
            margin-bottom: 18px;
          }
          .cart-empty-modern h2 {
            margin: 0;
            font-weight: 700;
            font-size: 2rem;
            color: #1976d2;
          }
          .cart-empty-modern p {
            color: #888;
            font-size: 1.08rem;
            margin: 16px 0 0 0;
            text-align: center;
          }
          .cart-empty-shop-btn {
            margin-top: 28px;
            padding: 14px 40px;
            font-size: 1.08rem;
            font-weight: 700;
            border-radius: 10px;
            background: linear-gradient(90deg, #1976d2 60%, #1565c0 100%);
            color: #fff;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 6px 24px rgba(25, 118, 210, 0.13);
            transition: background 0.22s, box-shadow 0.22s, transform 0.18s;
          }
          .cart-empty-shop-btn:hover {
            background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="cart-modern-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: 18,
        }}
      >
        <Link to="/home" className="back-to-shop-btn">
          &larr; Back to Shop
        </Link>
      </div>
      <h1 className="cart-modern-title">Shopping Cart</h1>
      <div className="cart-modern-content">
        <div className="cart-modern-list">
          {cartItems.map((item) => (
            <div className="cart-modern-item" key={item.id}>
              <img
                src={
                  Array.isArray(item.images) && item.images[0]
                    ? item.images[0]
                    : "https://via.placeholder.com/70x70?text=No+Image"
                }
                alt={item.title}
                className="cart-modern-img"
              />
              <div className="cart-modern-info">
                <div className="cart-modern-name">{item.title}</div>
                <div className="cart-modern-price">
                  ${item.price.toFixed(2)}
                </div>
                <div className="cart-modern-qty">
                  <button
                    className="cart-modern-qty-btn"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="cart-modern-qty-value">{item.quantity}</span>
                  <button
                    className="cart-modern-qty-btn"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-modern-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="cart-modern-remove"
                onClick={() => handleRemove(item.id)}
                title="Remove"
              >
                <Icon icon="mdi:delete-outline" width={22} height={22} />
              </button>
            </div>
          ))}
        </div>
        <div className="cart-modern-summary">
          <h2>Order Summary</h2>
          <div className="cart-modern-summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-modern-summary-row">
            <span>Shipping</span>
            <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}</span>
          </div>
          <div className="cart-modern-summary-row cart-modern-summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="cart-modern-checkout"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
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
        .cart-modern-wrapper {
          max-width: 1100px;
          margin: 32px auto;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(40,44,63,0.07);
          padding: 32px 18px 38px 18px;
        }
        .cart-modern-title {
          font-size: 2.1rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 28px;
          text-align: center;
        }
        .cart-modern-content {
          display: flex;
          gap: 38px;
        }
        .cart-modern-list {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .cart-modern-item {
          display: flex;
          align-items: center;
          background: #f7f8fa;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(40,44,63,0.04);
          padding: 18px 18px;
          gap: 18px;
          position: relative;
        }
        .cart-modern-img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 1px 4px rgba(40,44,63,0.07);
        }
        .cart-modern-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .cart-modern-name {
          font-size: 1.13rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        .cart-modern-price {
          color: #db4444;
          font-weight: 700;
          font-size: 1.05rem;
        }
        .cart-modern-qty {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cart-modern-qty-btn {
          width: 32px;
          height: 32px;
          border: 1.5px solid #eee;
          border-radius: 6px;
          background: #fff;
          color: #222;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
        }
        .cart-modern-qty-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .cart-modern-qty-btn:hover:not(:disabled) {
          background: #db4444;
          color: #fff;
        }
        .cart-modern-qty-value {
          min-width: 28px;
          text-align: center;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .cart-modern-subtotal {
          font-size: 1.08rem;
          font-weight: 600;
          color: #222;
          min-width: 90px;
          text-align: right;
        }
        .cart-modern-remove {
          background: none;
          border: none;
          color: #db4444;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
          transition: background 0.18s, color 0.18s;
        }
        .cart-modern-remove:hover {
          background: #ffeaea;
          color: #b83232;
        }
        .cart-modern-summary {
          flex: 1;
          background: #f7f8fa;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(40,44,63,0.04);
          padding: 28px 22px 22px 22px;
          min-width: 260px;
        }
        .cart-modern-summary h2 {
          font-size: 1.18rem;
          font-weight: 700;
          margin-bottom: 18px;
          color: #222;
        }
        .cart-modern-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.04rem;
          margin-bottom: 10px;
        }
        .cart-modern-summary-total {
          font-weight: 700;
          color: #db4444;
          font-size: 1.13rem;
        }
        .cart-modern-checkout {
          width: 100%;
          margin-top: 18px;
          font-size: 1.08rem;
          padding: 12px 0;
          background: linear-gradient(90deg, #db4444 60%, #b83232 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s, box-shadow 0.18s;
        }
        .cart-modern-checkout:hover {
          background: linear-gradient(90deg, #b83232 60%, #db4444 100%);
          box-shadow: 0 4px 16px rgba(219,68,68,0.16);
        }
        /* Empty State */
        .cart-empty-modern {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f7f8fa;
          margin: 32px auto;
          max-width: 420px;
          box-shadow: 0 4px 24px rgba(40,44,63,0.07);
          padding: 48px 18px 38px 18px;
        }
        .cart-empty-illustration {
          margin-bottom: 18px;
        }
        .cart-empty-modern h2 {
          margin: 0;
          font-weight: 700;
          font-size: 2rem;
          color: #1976d2;
        }
        .cart-empty-modern p {
          color: #888;
          font-size: 1.08rem;
          margin: 16px 0 0 0;
        }
        .cart-empty-shop-btn {
          margin-top: 28px;
          padding: 14px 40px;
          font-size: 1.08rem;
          font-weight: 700;
          border-radius: 10px;
          background: linear-gradient(90deg, #1976d2 60%, #1565c0 100%);
          color: #fff;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 6px 24px rgba(25, 118, 210, 0.13);
          transition: background 0.22s, box-shadow 0.22s, transform 0.18s;
        }
        .cart-empty-shop-btn:hover {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
        }
        .back-to-shop-btn {
          display: flex;
          width: fit-content;
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
        /* Responsive */
        @media (max-width: 900px) {
          .cart-modern-content {
            flex-direction: column;
            gap: 28px;
          }
          .cart-modern-summary {
            min-width: 0;
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .cart-modern-wrapper {
            padding: 10px 2vw 18px 2vw;
          }
          .cart-modern-title {
            font-size: 1.3rem;
            margin-bottom: 16px;
          }
          .cart-modern-item {
            gap: 10px;
            padding: 10px 6px;
          }
          .cart-modern-img {
            width: 54px;
            height: 54px;
          }
          .cart-modern-summary {
            padding: 14px 8px 12px 8px;
          }
        }
      `}</style>
    </div>
  );
}

export default Carts;
