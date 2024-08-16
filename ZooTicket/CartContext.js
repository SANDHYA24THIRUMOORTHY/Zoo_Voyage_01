import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addTicketToCart = (ticket) => {
    setCart([...cart, ticket]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addTicketToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
