// src/components/HeroSection.js

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const categoriesData = [
  { name: "Woman's Fashion", hasSubmenu: true },
  { name: "Men's Fashion", hasSubmenu: true },
  { name: "Electronics", hasSubmenu: false },
  { name: "Home & Lifestyle", hasSubmenu: false },
  { name: "Medicine", hasSubmenu: false },
  { name: "Sports & Outdoor", hasSubmenu: false },
  { name: "Baby's & Toys", hasSubmenu: false },
  { name: "Groceries & Pets", hasSubmenu: false },
  { name: "Health & Beauty", hasSubmenu: false },
];

const slidesData = [
  {
    id: 1,
    brandIcon: "ic:baseline-apple",
    series: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    image: "https://i.imgur.com/tG2zW1x.png",
  },
  {
    id: 2,
    brandIcon: "simple-icons:samsung",
    series: "Galaxy S23 Ultra",
    title: "Launch Offer Available Now",
    image: "https://i.imgur.com/k2j2j2H.png",
  },
];

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-main-content">
        <div className="sidebar-container">
          <ul className="categories-sidebar">
            {categoriesData.map((category) => (
              <li key={category.name}>
                <a href="#">
                  {category.name}
                  {category.hasSubmenu && <Icon icon="mdi:chevron-right" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="divider"></div>
        </div>
        <nav className="mobile-categories">
          {categoriesData.map((category) => (
            <a href="#" key={category.name}>
              {category.name}
            </a>
          ))}
        </nav>
        <div className="banner-slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slidesData.map((slide) => (
              <div className="slide" key={slide.id}>
                <div className="slide-content">
                  <div className="brand-info">
                    <Icon icon={slide.brandIcon} />
                    <span>{slide.series}</span>
                  </div>
                  <h1>{slide.title}</h1>
                  <a href="#" className="shop-now-link">
                    Shop Now <Icon icon="mdi:arrow-right" />
                  </a>
                </div>
                <div className="slide-image">
                  <img src={slide.image} alt={slide.series} />
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {slidesData.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeSlide === index ? "active" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        /* Styles for HeroSection Component */
        .hero-section { padding-top: 40px; font-family: sans-serif; }
        .hero-main-content { display: flex; }
        .sidebar-container { display: flex; gap: 40px; }
        .categories-sidebar { list-style: none; padding: 0; margin: 0; width: 220px; flex-shrink: 0; }
        .categories-sidebar li a { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; text-decoration: none; color: #000; font-size: 16px; transition: color 0.2s; }
        .categories-sidebar li a:hover { color: #DB4444; }
        .divider { width: 1px; background-color: #e0e0e0; }
        .mobile-categories { display: none; }
        .banner-slider { flex-grow: 1; position: relative; overflow: hidden; background-color: #000; min-height: 380px; }
        .slider-track { display: flex; height: 100%; transition: transform 0.5s ease-in-out; }
        .slide { min-width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; padding: 40px 60px; color: #fff; }
        .slide-content { max-width: 50%; }
        .brand-info { display: flex; align-items: center; gap: 12px; font-size: 24px; margin-bottom: 20px; }
        .slide-content h1 { font-size: 48px; line-height: 1.2; margin: 0 0 20px; font-weight: 600; }
        .shop-now-link { display: inline-flex; align-items: center; gap: 8px; color: #fff; text-decoration: underline; font-size: 16px; font-weight: 500; }
        .slide-image img { max-width: 100%; max-height: 340px; object-fit: contain; }
        .slider-dots { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; }
        .dot { width: 12px; height: 12px; border-radius: 50%; border: none; background-color: #888; cursor: pointer; padding: 0; transition: background-color 0.3s; }
        .dot.active { background-color: #DB4444; }
        @media (max-width: 992px) { .hero-main-content { flex-direction: column; } .sidebar-container { display: none; } .mobile-categories { display: flex; overflow-x: auto; gap: 12px; padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid #e0e0e0; scrollbar-width: none; } .mobile-categories::-webkit-scrollbar { display: none; } .mobile-categories a { white-space: nowrap; padding: 8px 16px; border-radius: 20px; text-decoration: none; color: #333; background-color: #f5f5f5; font-size: 14px; transition: background-color 0.2s, color 0.2s; } .mobile-categories a:hover { background-color: #DB4444; color: #fff; } }
        @media (max-width: 768px) { .slide { flex-direction: column-reverse; text-align: center; gap: 20px; padding: 30px; } .slide-content { max-width: 100%; } .slide-content h1 { font-size: 32px; } .shop-now-link { justify-content: center; } .slide-image img { max-height: 200px; } }
      `}</style>
    </section>
  );
}

export default HeroSection;
