import React from "react";
import "./Header.css"; // Adjust if your styles are elsewhere

const responsiveStyles = {
  arrivalGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: 24,
    marginBottom: 0,
  },
  arrivalFeatures: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 48,
    gap: 24,
    background: "#f8f8f8",
    borderRadius: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    padding: "32px 0",
    flexWrap: "wrap",
  },
};

// Responsive helper
const useResponsive = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const Finish = () => {
  const isMobile = useResponsive();
  return (
    <div
      className="new-arrival-section"
      style={{ background: "#fff", padding: isMobile ? "24px 0" : "40px 0" }}
    >
      <div
        style={{
          maxWidth: isMobile ? "100%" : "1100px",
          margin: "0 auto",
          padding: isMobile ? "0 8px" : "0",
        }}
      >
        <div
          style={{
            marginBottom: 16,
            color: "#e74c3c",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Featured
        </div>
        <h2
          style={{
            fontWeight: 600,
            fontSize: isMobile ? 22 : 28,
            marginBottom: 32,
          }}
        >
          New Arrival
        </h2>
        <div
          className="arrival-grid"
          style={
            isMobile
              ? { display: "flex", flexDirection: "column", gap: 16 }
              : responsiveStyles.arrivalGrid
          }
        >
          <div
            className="arrival-card"
            style={{
              background: "#111",
              color: "#fff",
              borderRadius: 12,
              padding: isMobile ? 16 : 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: isMobile ? 12 : 0,
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/PlayStation_5_console_and_controller.jpg"
              alt="PlayStation 5"
              style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "60px" : "80px",
                marginBottom: 16,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
            <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 600 }}>
              PlayStation 5
            </h3>
            <p style={{ fontSize: isMobile ? 12 : 14, margin: "8px 0 16px" }}>
              Black and White version of the PS5 coming out on sale.
            </p>
            <button
              className="shop-btn"
              style={{
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: isMobile ? "8px 16px" : "10px 22px",
                fontWeight: 600,
                fontSize: isMobile ? 13 : 15,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(231,76,60,0.08)",
                transition: "background 0.2s",
              }}
            >
              Shop Now
            </button>
          </div>
          <div
            className="arrival-card"
            style={{
              background: "#222",
              color: "#fff",
              borderRadius: 12,
              padding: isMobile ? 16 : 24,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              marginBottom: isMobile ? 12 : 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Women's Collections"
              style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "60px" : "80px",
                marginBottom: 16,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
            <h3 style={{ fontSize: isMobile ? 15 : 18, fontWeight: 600 }}>
              Women's Collections
            </h3>
            <p style={{ fontSize: isMobile ? 11 : 13, margin: "8px 0 16px" }}>
              Featured woman collections that give you another vibe.
            </p>
            <button
              className="shop-btn"
              style={{
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: isMobile ? "8px 16px" : "10px 22px",
                fontWeight: 600,
                fontSize: isMobile ? 13 : 15,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(231,76,60,0.08)",
                transition: "background 0.2s",
              }}
            >
              Shop Now
            </button>
          </div>
          <div
            style={
              isMobile
                ? { display: "flex", flexDirection: "column", gap: 12 }
                : { display: "flex", flexDirection: "column", gap: 24 }
            }
          >
            <div
              className="arrival-card"
              style={{
                background: "#333",
                color: "#fff",
                borderRadius: 12,
                padding: isMobile ? 16 : 24,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                marginBottom: isMobile ? 12 : 0,
              }}
            >
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71yqQyG9bYL._AC_SL1500_.jpg"
                alt="Speakers"
                style={{
                  width: isMobile ? "50px" : "70px",
                  height: isMobile ? "50px" : "70px",
                  marginBottom: 14,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              <h3 style={{ fontSize: isMobile ? 13 : 16, fontWeight: 600 }}>
                Speakers
              </h3>
              <p style={{ fontSize: isMobile ? 10 : 13, margin: "8px 0 16px" }}>
                Amazon wireless speakers
              </p>
              <button
                className="shop-btn"
                style={{
                  background: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: isMobile ? "8px 16px" : "10px 22px",
                  fontWeight: 600,
                  fontSize: isMobile ? 13 : 15,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(231,76,60,0.08)",
                  transition: "background 0.2s",
                }}
              >
                Shop Now
              </button>
            </div>
            <div
              className="arrival-card"
              style={{
                background: "#444",
                color: "#fff",
                borderRadius: 12,
                padding: isMobile ? 16 : 24,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
                alt="Perfume"
                style={{
                  width: isMobile ? "50px" : "70px",
                  height: isMobile ? "50px" : "70px",
                  marginBottom: 14,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              <h3 style={{ fontSize: isMobile ? 13 : 16, fontWeight: 600 }}>
                Perfume
              </h3>
              <p style={{ fontSize: isMobile ? 10 : 13, margin: "8px 0 16px" }}>
                GUCCI INTENSE OUD EDP
              </p>
              <button
                className="shop-btn"
                style={{
                  background: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: isMobile ? "8px 16px" : "10px 22px",
                  fontWeight: 600,
                  fontSize: isMobile ? 13 : 15,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(231,76,60,0.08)",
                  transition: "background 0.2s",
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="arrival-features"
          style={
            isMobile
              ? {
                  ...responsiveStyles.arrivalFeatures,
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "18px 0",
                  gap: 16,
                }
              : responsiveStyles.arrivalFeatures
          }
        >
          <div
            style={{
              textAlign: "center",
              flex: 1,
              minWidth: isMobile ? "180px" : "0",
              marginBottom: isMobile ? 12 : 0,
            }}
          >
            <div style={{ fontSize: isMobile ? 26 : 32, marginBottom: 8 }}>
              🚚
            </div>
            <div style={{ fontWeight: 600, fontSize: isMobile ? 13 : 15 }}>
              FREE AND FAST DELIVERY
            </div>
            <div style={{ fontSize: isMobile ? 11 : 13, color: "#555" }}>
              Free delivery for all orders over $140
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              flex: 1,
              minWidth: isMobile ? "180px" : "0",
              marginBottom: isMobile ? 12 : 0,
            }}
          >
            <div style={{ fontSize: isMobile ? 26 : 32, marginBottom: 8 }}>
              🎧
            </div>
            <div style={{ fontWeight: 600, fontSize: isMobile ? 13 : 15 }}>
              24/7 CUSTOMER SERVICE
            </div>
            <div style={{ fontSize: isMobile ? 11 : 13, color: "#555" }}>
              Friendly 24/7 customer support
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              flex: 1,
              minWidth: isMobile ? "180px" : "0",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: isMobile ? 13 : 15 }}>
              MONEY BACK GUARANTEE
            </div>
            <div style={{ fontSize: isMobile ? 11 : 13, color: "#555" }}>
              We return money within 30 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
