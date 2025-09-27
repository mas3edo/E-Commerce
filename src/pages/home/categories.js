// src/components/BrowseByCategory.js

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const categories = [
  { name: "Phones", icon: "tabler:device-mobile" },
  { name: "Computers", icon: "tabler:device-imac" },
  { name: "SmartWatch", icon: "tabler:device-watch" },
  { name: "Camera", icon: "tabler:camera" },
  { name: "HeadPhones", icon: "tabler:headphones" },
  { name: "Gaming", icon: "tabler:device-gamepad-2" },
  { name: "Speakers", icon: "tabler:speakerphone" },
  { name: "Tablets", icon: "tabler:device-tablet" },
];

function BrowseByCategory() {
  const [activeCategory, setActiveCategory] = useState("Camera");
  const scrollerRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  });

  const checkScrollPosition = () => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      const canScrollLeft = scrollLeft > 0;
      const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
      setScrollState({ canScrollLeft, canScrollRight });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  const scroll = (direction) => {
    if (scrollerRef.current) {
      const scrollAmount = scrollerRef.current.clientWidth / 2;
      scrollerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="category-section">
      <div className="section-header">
        <div className="write">
          <div className="category-title-container">
            <span className="category-title-decorator"></span>
            <p className="category-title">Categories</p>
          </div>
          <h2>Browse By Category</h2>
        </div>
        <div className="nav-arrows">
          <button
            aria-label="Previous Category"
            onClick={() => scroll("left")}
            disabled={!scrollState.canScrollLeft}
          >
            <Icon icon="mdi:arrow-left" />
          </button>
          <button
            aria-label="Next Category"
            onClick={() => scroll("right")}
            disabled={!scrollState.canScrollRight}
          >
            <Icon icon="mdi:arrow-right" />
          </button>
        </div>
      </div>

      <div
        className="category-scroller"
        ref={scrollerRef}
        onScroll={checkScrollPosition}
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${
              activeCategory === category.name ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.name)}
            role="button"
            tabIndex="0"
          >
            <Icon icon={category.icon} className="category-icon" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <style>{`
        /* Modern, compact, responsive styles for BrowseByCategory */
        .category-section {
          padding: 40px 0 30px 0;
          font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .category-title-container {
          display: flex;
          align-items: center;
          margin-bottom: 6px;
        }
        .category-title-decorator {
          width: 14px;
          height: 28px;
          background-color: #DB4444;
          border-radius: 4px;
          margin-right: 10px;
        }
        .category-title {
          color: #DB4444;
          font-weight: 600;
          font-size: 15px;
          margin: 0;
          letter-spacing: 0.5px;
        }
        .section-header h2 {
          font-size: 1.7rem;
          font-weight: 700;
          color: #222;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .nav-arrows {
          display: flex;
          gap: 8px;
        }
        .nav-arrows button {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background-color: #f5f5f5;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: background-color 0.2s, color 0.2s;
        }
        .nav-arrows button:hover:not(:disabled) {
          background-color: #DB4444;
          color: #fff;
        }
        .nav-arrows button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background-color: #f5f5f5;
        }
        .category-scroller {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 10px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .category-scroller::-webkit-scrollbar {
          display: none;
        }
        .category-item {
          min-width: 120px;
          flex-shrink: 0;
          border: 1.5px solid #e0e0e0;
          border-radius: 8px;
          padding: 16px 0 12px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
          background: #fff;
          transition: all 0.25s cubic-bezier(.4,0,.2,1);
          box-shadow: 0 1px 6px rgba(0,0,0,0.03);
          user-select: none;
        }
        .category-icon {
          font-size: 1.7rem;
          color: #222;
          transition: color 0.2s;
        }
        .category-item p {
          margin: 0;
          font-size: 0.98rem;
          color: #222;
          font-weight: 500;
          letter-spacing: 0.1px;
          transition: color 0.2s;
        }
        .category-item:hover, .category-item.active {
          background: #DB4444;
          border-color: #DB4444;
          box-shadow: 0 4px 16px rgba(219,68,68,0.10);
        }
        .category-item:hover .category-icon, .category-item.active .category-icon,
        .category-item:hover p, .category-item.active p {
          color: #fff;
        }
        @media (max-width: 900px) {
          .category-section {
            padding: 22px 0 12px 0;
          }
          .section-header {
            margin-bottom: 12px;
            gap: 4px;
          }
          .section-header h2 {
            font-size: 1.1rem;
          }
            .write{
            width:100%;
            }
          .category-title {
            font-size: 0.9rem;
          }
          .category-title-decorator {
            width: 8px;
            height: 18px;
            margin-right: 6px;
          }
          .category-icon {
            font-size: 1.1rem;
          }
          .category-item {
            min-width: 80px;
            padding: 10px 0 7px 0;
            gap: 3px;
          }
          .category-item p {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}

export default BrowseByCategory;
