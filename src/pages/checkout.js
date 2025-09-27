import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartcontext";

function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);
  // Calculate subtotal (before shipping/coupons)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );
  return (
    <div className="checkout-responsive-container">
      {/* Billing Details Form */}
      <form className="checkout-form-section">
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 28 }}>
          Billing Details
        </h2>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>
            First Name<span style={{ color: "#e53935" }}>*</span>
          </label>
          <input type="text" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Company Name</label>
          <input type="text" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>
            Street Address<span style={{ color: "#e53935" }}>*</span>
          </label>
          <input type="text" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Apartment, floor, etc. (optional)</label>
          <input type="text" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>
            Town/City<span style={{ color: "#e53935" }}>*</span>
          </label>
          <input type="text" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>
            Phone Number<span style={{ color: "#e53935" }}>*</span>
          </label>
          <input type="text" style={inputStyle} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>
            Email Address<span style={{ color: "#e53935" }}>*</span>
          </label>
          <input type="email" style={inputStyle} />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <input
            type="checkbox"
            id="save-info"
            style={{
              accentColor: "#e53935",
              width: 18,
              height: 18,
              marginRight: 8,
            }}
          />
          <label htmlFor="save-info" style={{ fontSize: 14, color: "#222" }}>
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
      {/* Order Summary Card */}
      <div className="checkout-summary-section">
        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div style={{ color: "#888", textAlign: "center", marginBottom: 18 }}>
            Your cart is empty.
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <img
                src={Array.isArray(item.images) ? item.images[0] : item.images}
                alt={item.title}
                style={{
                  width: 38,
                  height: 38,
                  objectFit: "contain",
                  marginRight: 12,
                  borderRadius: 6,
                  background: "#f3f4f6",
                }}
              />
              <span style={{ flex: 1 }}>{item.title}</span>
              <span style={{ fontWeight: 500 }}>
                ${item.price} x {item.quantity}
              </span>
            </div>
          ))
        )}
        <div style={{ borderTop: "1px solid #eee", margin: "18px 0 10px 0" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 600,
            marginBottom: 18,
          }}
        >
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div style={{ marginBottom: 18 }}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
          >
            <input
              type="radio"
              id="bank"
              name="payment"
              style={{ accentColor: "#e53935", marginRight: 8 }}
            />
            <label htmlFor="bank" style={{ fontSize: 15, marginRight: 12 }}>
              Bank
            </label>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              style={{ width: 32, marginRight: 4 }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Mastercard-logo.svg"
              alt="Mastercard"
              style={{ width: 32, marginRight: 4 }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/PayPal.svg"
              alt="PayPal"
              style={{ width: 32, marginRight: 4 }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Maestro_2016.svg"
              alt="Maestro"
              style={{ width: 32 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              id="cod"
              name="payment"
              defaultChecked
              style={{ accentColor: "#e53935", marginRight: 8 }}
            />
            <label htmlFor="cod" style={{ fontSize: 15 }}>
              Cash on delivery
            </label>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
          <input
            type="text"
            placeholder="Coupon Code"
            style={{ ...inputStyle, flex: 1, marginBottom: 0 }}
          />
          <button type="button" style={couponBtnStyle}>
            Apply Coupon
          </button>
        </div>
        <Link to="/order-success" style={placeOrderBtnStyle}>
          Place Order
        </Link>
      </div>
      <style>{`
        .checkout-responsive-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          background: #fff;
          padding: 40px 0;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }
        .checkout-form-section {
          flex: 1;
          max-width: 400px;
          margin-right: 48px;
        }
        .checkout-summary-section {
          flex: 1;
          max-width: 400px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 18px rgba(0,0,0,0.06);
          padding: 32px;
          min-width: 320px;
        }
        @media (max-width: 900px) {
          .checkout-responsive-container {
            max-width: 100vw;
            padding: 12px;
            gap: 16px;
          }
          .checkout-form-section {
            margin-right: 0;
            max-width: 100%;
          }
          .checkout-summary-section {
            max-width: 100%;
            margin-top: 24px;
            padding: 16px;
          }
        }
        @media (max-width: 600px) {
          .checkout-responsive-container {
            flex-direction: column;
            box-shadow: none;
            border-radius: 0;
            min-height: unset;
            padding: 0 0 24px 0;
          }
          .checkout-form-section {
            padding: 16px 8px;
            margin-right: 0;
            max-width: 100%;
          }
          .checkout-summary-section {
            max-width: 100%;
            margin-top: 0;
            box-shadow: none;
            border-radius: 0;
            padding: 16px 8px;
          }
        }
        label {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 6px;
          display: block;
          color: #222;
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #eee",
  borderRadius: 6,
  background: "#fafbfc",
  fontSize: 15,
  marginTop: 6,
  marginBottom: 0,
  outline: "none",
  fontWeight: 500,
  color: "#222",
};

const labelStyle = {
  fontWeight: 600,
  fontSize: 14,
  marginBottom: 4,
  display: "block",
};

const couponBtnStyle = {
  background: "#e53935",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "12px 18px",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const placeOrderBtnStyle = {
  display: "block",
  width: "100%",
  background: "#e53935",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "14px 0",
  fontWeight: 600,
  fontSize: 16,
  cursor: "pointer",
  textAlign: "center",
  textDecoration: "none",
  marginTop: 10,
};

export default Checkout;
