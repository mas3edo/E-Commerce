// src/context/WishlistProvider.js

import React, { createContext, useState } from "react";

export const WishlistContext = createContext({
  wishlistItems: {},
  setWishlistItems: () => {},
  addToWishlist: () => {},
  wishlistPopup: () => {},
  removeFromWishlist: () => {},
});

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState({});
  const [popup, setPopup] = useState({ isOpen: false, product: null });

  function addToWishlist(product) {
    setWishlistItems((prev) => ({ ...prev, [product.id]: product }));
    setPopup({ isOpen: true, product });
  }
  function closeWishlistPopup() {
    setPopup({ isOpen: false, product: null });
  }
  function removeFromWishlist(productId) {
    setWishlistItems((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        setWishlistItems,
        addToWishlist,
        popup,
        closeWishlistPopup,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
