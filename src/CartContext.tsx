import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS_DATA, type Product, type ProductColor } from './data/products';

export interface CartItem extends Product {
  id: string;
  quantity: number;
  selectedColor: ProductColor | string;
  selectedSize: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  deleteSelectedItems: (ids: string[]) => void;
  updateCartItem: (id: string, updates: Partial<Omit<CartItem, 'id'>>) => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// 초기 더미 데이터 설정
const initialCartItems: CartItem[] = PRODUCTS_DATA.slice(0, 5).map((product, index) => ({
  ...product,
  id: `cart-${product.lookNo}-${index}`,
  quantity: 1,
  selectedColor: product.colour[0] || 'Default',
  selectedSize: product.size[0] || 'FREE',
}));

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  // 상품 추가 (동일 상품/옵션 존재 시 수량 합산)
  const addToCart = (newItem: Omit<CartItem, 'id'>) => {
    setCartItems((prev) => {
      const colorName = typeof newItem.selectedColor === 'object' ? newItem.selectedColor.name : newItem.selectedColor;
      const existingIndex = prev.findIndex(
        (item) =>
          item.lookNo === newItem.lookNo &&
          (typeof item.selectedColor === 'object' ? item.selectedColor.name : item.selectedColor) === colorName &&
          item.selectedSize === newItem.selectedSize
      );

      if (existingIndex > -1) {
        return prev.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      const newCartItem: CartItem = {
        ...newItem,
        id: `cart-${newItem.lookNo}-${Date.now()}`,
      };
      return [newCartItem, ...prev];
    });
  };

  // 선택 삭제
  const deleteSelectedItems = (ids: string[]) => {
    setCartItems((prev) => prev.filter((item) => !ids.includes(item.id)));
  };

  // 상품 옵션 및 수량 수정
  const updateCartItem = (id: string, updates: Partial<Omit<CartItem, 'id'>>) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteSelectedItems, updateCartItem, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};