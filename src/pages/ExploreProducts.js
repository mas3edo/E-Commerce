import React, { useContext } from "react";
import { CartContext } from "../cartcontext";
import { Link } from "react-router-dom";

function ExploreProducts() {
  const { products, addToCart, isLoading } = useContext(CartContext);

  return (
    <section className="explore-products-section">
      <div className="explore-products-header">
        <h2 className="explore-products-title">Explore Our Products</h2>
        <div className="explore-products-subtitle">Our Products</div>
      </div>
      <div className="explore-products-list">
        {isLoading ? (
          <div className="explore-products-loading">Loading...</div>
        ) : (
          products.slice(5, 20).map((item) => (
            <div className="explore-products-card" key={item.id}>
              <img
                src={item.images[0]}
                alt={item.title}
                className="explore-products-img"
              />
              <div className="explore-products-info">
                <div className="explore-products-name">{item.title}</div>
                <div className="explore-products-price">${item.price}</div>
                <button
                  className="explore-products-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="explore-products-viewall">
        <Link to="/products" className="explore-products-viewall-btn">
          View All Products
        </Link>
      </div>
      <style>{`
        .explore-products-section {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.07);
          padding: 32px 18px 24px 18px;
          margin-bottom: 32px;
        }
        .explore-products-header {
          text-align: center;
          margin-bottom: 18px;
        }
        .explore-products-title {
          font-size: 2rem;
          font-weight: 700;
          color: #e53935;
          margin-bottom: 6px;
        }
        .explore-products-subtitle {
          font-size: 1.18rem;
          font-weight: 600;
          color: #222;
        }
        .explore-products-list {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          justify-content: center;
        }
        .explore-products-card {
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
        .explore-products-card:hover {
          box-shadow: 0 10px 36px rgba(25,118,210,0.13);
          transform: translateY(-6px) scale(1.04);
        }
        .explore-products-img {
          width: 100%;
          height: 140px;
          object-fit: contain;
          border-radius: 10px;
          background: #fff;
          margin-bottom: 12px;
        }
        .explore-products-info {
          width: 100%;
          text-align: left;
        }
        .explore-products-name {
          font-size: 1.08rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: #222;
        }
        .explore-products-price {
          color: #e53935;
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .explore-products-cart-btn {
          width: 100%;
          background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px 0;
          font-weight: 700;
          font-size: 1.01rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
          transition: background 0.18s, transform 0.13s;
        }
        .explore-products-cart-btn:hover {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
          transform: translateY(-2px) scale(1.04);
        }
        .explore-products-viewall {
          display: flex;
          justify-content: center;
          margin-top: 18px;
        }
        .explore-products-viewall-btn {
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 38px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration:none;
        }
        .explore-products-viewall-btn:hover {
          background: #b83232;
        }
        @media (max-width: 900px) {
          .explore-products-section {
            padding: 16px 2px 12px 2px;
          }
          .explore-products-list {
            gap: 10px;
          }
        }
        @media (max-width: 600px) {
          .explore-products-card {
            min-width: 160px;
            max-width: 180px;
            padding: 10px 6px 10px 6px;
          }
          .explore-products-img {
            height: 90px;
          }
        }
      `}</style>
    </section>
  );
}

export default ExploreProducts;
