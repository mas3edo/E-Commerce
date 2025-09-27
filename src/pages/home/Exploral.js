import React, { useContext, useRef } from "react";
import { CartContext } from "../cartcontext";
import { WishlistContext } from "../WishlistProvider";
import { Link } from "react-router-dom";
import { Eye, Heart } from "lucide-react";
import { Icon } from "@iconify/react";

function ExploreProducts() {
  const { products, addToCart, isLoading } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const scrollerRef = useRef(null);

  const handleWishlistClick = (item) => {
    if (!item) return;
    if (wishlistItems && wishlistItems[item.id]) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
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
      <div className="bestselling-header-modern">
        <div className="bestselling-header-left">
          <span className="bestselling-header-label">This Month</span>
          <h2 className="bestselling-header-title">Our Courses</h2>
        </div>
        <Link to="/products" className="bestselling-header-viewall">
          View All
        </Link>
      </div>
      <div className="flash-minimal-arrows" style={{ marginBottom: 18 }}>
        <button aria-label="Previous" onClick={() => scroll("left")}>
          {" "}
          <Icon
            icon="mdi:arrow-left"
            width={22}
            height={22}
            color="#e53935"
          />{" "}
        </button>
        <button aria-label="Next" onClick={() => scroll("right")}>
          {" "}
          <Icon
            icon="mdi:arrow-right"
            width={22}
            height={22}
            color="#e53935"
          />{" "}
        </button>
      </div>
      <div className="flash-minimal-products" ref={scrollerRef}>
        {isLoading ? (
          <div className="flash-minimal-loading">Loading...</div>
        ) : (
          products.slice(5, 20).map((item, idx) => {
            // Assign a default rating if missing
            const rating = item.rating?.rate ?? 3.5 + (idx % 2);
            const isInWishlist = wishlistItems && wishlistItems[item.id];
            return (
              <div className="flash-minimal-card" key={item.id}>
                <div
                  className="flash-minimal-img-wrap"
                  style={{ position: "relative" }}
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="flash-minimal-img"
                  />
                  <div
                    className="flash-minimal-icons"
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      display: "flex",
                      gap: 7,
                    }}
                  >
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
                  <div
                    className="flash-minimal-rating"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      margin: "6px 0",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        icon={
                          i < Math.round(rating)
                            ? "mdi:star"
                            : "mdi:star-outline"
                        }
                        color="#FFD700"
                        width={16}
                        height={16}
                      />
                    ))}
                    <span
                      style={{
                        fontSize: "0.95em",
                        color: "#888",
                        marginLeft: 4,
                      }}
                    >
                      {rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flash-minimal-price">${item.price}</div>
                  <button
                    className="flash-minimal-cart"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
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
      {/* Styles are inherited from flash-minimal-section and bestselling-header for visual consistency */}
    </section>
  );
}

export default ExploreProducts;
