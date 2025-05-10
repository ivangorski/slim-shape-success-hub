
import React, { createContext, useContext, useState } from "react";

export type ProgramType = {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
};

interface CartContextType {
  selectedProgram: ProgramType | null;
  setSelectedProgram: (program: ProgramType | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(null);

  return (
    <CartContext.Provider
      value={{
        selectedProgram,
        setSelectedProgram
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
