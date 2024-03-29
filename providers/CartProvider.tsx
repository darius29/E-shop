"use client";
import { CartContextProvider } from "@/hooks/useCart";
import React from "react";

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  return (
    <div>
      <CartContextProvider>{children}</CartContextProvider>
    </div>
  );
};

export default CartProvider;
