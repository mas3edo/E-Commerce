// src/pages/Home.js

import React from "react";
// THE FIX: Use the correct path to the 'components' folder
import HeroSection from "../pages/home/HeroSection";
import BrowseByCategory from "../pages/home/categories";
import FlashDeals from "../pages/home/flash";
import BestSellingProducts from "../pages/home/BestSellingProducts";
import Tailer from "../pages/home/tailer";
import ExploreProducts from "./home/Exploral";

function Home() {
  const sectionDivider = {
    border: 0,
    height: "1px",
    backgroundColor: "#ddd",
    margin: "60px 0",
  };
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      <HeroSection />
      <FlashDeals />
      <BrowseByCategory />
      <BestSellingProducts />
      <Tailer />
      <ExploreProducts />
      {/* <Finish /> */}
    </main>
  );
}

export default Home;
