import React, { useEffect } from "react";
import { createContext, useState } from "react";
// import axios from "axios"; // Commenting out the duplicate import
import axios from "axios";
// import { data } from "react-router-dom"; // Removed unused import

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]); // Store product data from API
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, item: null });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data || []); // Save product data
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  // Add to cart logic unified here
  const addToCart = (item) => {
    setCartItems((prev) => {
      const found = prev.find((cartItem) => cartItem.id === item.id);
      if (found) {
        // Increase quantity if already in cart
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    setModalState({ isOpen: true, item });
  };

  const closeModal = () => setModalState({ isOpen: false, item: null });
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        products, // Expose products to consumers
        addToCart,
        isLoading,
        setIsLoading, // Expose setIsLoading for loader control
        modalState,
        closeModal,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
