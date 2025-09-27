import React, { createContext, useState } from "react";

export const CartsaddContext = createContext();

export function CartsaddProvider({ children }) {
  const [cartaddItems, setCartaddItems] = useState([]);
  const [modalState, setModalState] = useState({ isOpen: false, item: null });

  const addToCart = (item) => {
    setCartaddItems((prev) => {
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

  return (
    <CartsaddContext.Provider
      value={{
        cartaddItems,
        setCartaddItems,
        addToCart,
        modalState,
        closeModal,
      }}
    >
      {children}
    </CartsaddContext.Provider>
  );
}
