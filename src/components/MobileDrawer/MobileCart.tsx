import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Header.module.css';
import { PRODUCTS_DATA, type Product, type ProductColor } from '../../data/products';
import { useCart } from '../../CartContext';
import { CustomSelect } from '../CustomSelect';

interface MobileCartProps {
  onClose: () => void;
  onCountChange?: (count: number) => void;
}

// CartItem 타입 정의
interface CartItem extends Product {
  id: string;
  quantity: number;
  selectedColor: ProductColor | string;
  selectedSize: string;
}

// PRODUCTS_DATA 기반 초기 장바구니 데이터 설정
const initialCartItems: CartItem[] = PRODUCTS_DATA.slice(0, 5).map((product, index) => ({
  ...product,
  id: `cart-${product.lookNo}-${index}`,
  quantity: 1,
  selectedColor: product.colour[0] || 'Default',
  selectedSize: product.size[0] || 'FREE',
}));

export const MobileCart: React.FC<MobileCartProps> = ({ onClose, onCountChange }) => {
  const navigate = useNavigate();
  const [cartPage, setCartPage] = useState<number>(1);
  const [selectedCartIds, setSelectedCartIds] = useState<string[]>([]);
  const { cartItems, deleteSelectedItems, updateCartItem, totalCount, totalPrice } = useCart();

  const ITEMS_PER_PAGE = 1;
  const totalPages = Math.max(1, Math.ceil(cartItems.length / ITEMS_PER_PAGE));
  const currentCartItems = cartItems.slice((cartPage - 1) * ITEMS_PER_PAGE, cartPage * ITEMS_PER_PAGE);

  useEffect(() => {
    if (onCountChange) {
      onCountChange(totalCount);
    }
  }, [totalCount, onCountChange]);

  useEffect(() => {
    if (cartPage > totalPages) {
      setCartPage(totalPages);
    }
  }, [cartItems.length, totalPages, cartPage]);

  const handleCheckItem = (id: string) => {
    setSelectedCartIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    deleteSelectedItems(selectedCartIds);
    setSelectedCartIds([]);
  };

  const handleQuantityChange = (id: string, currentQty: number, delta: number) => {
    const newQty = currentQty + delta;
    if (newQty > 0) {
      updateCartItem(id, { quantity: newQty });
    }
  };

  const handleColorChange = (id: string, color: string) => {
    updateCartItem(id, { selectedColor: color });
  };

  const handleSizeChange = (id: string, size: string) => {
    updateCartItem(id, { selectedSize: size });
  };

  return (
    <div className={styles.mobileCartSection}>
      {/* 장바구니 상품 2열 가로 배치 영역 */}
      <div className={styles.mobileCartItemsGrid}>
        {currentCartItems.map((item) => {
          const colorName = typeof item.selectedColor === 'object' ? item.selectedColor.name : item.selectedColor;
          
          return (
          <div key={item.id} className={styles.mobileCartCard}>
            <div
              className={`${styles.checkboxBox} ${selectedCartIds.includes(item.id) ? styles.checked : ''}`}
              onClick={() => handleCheckItem(item.id)}
            >
              {selectedCartIds.includes(item.id) && <img src="/media/Icon/Check.svg" alt="Check" />}
            </div>

            <div
              className={styles.mobileCartThumb}
              onClick={() => {
                onClose();
                navigate(`/product/${item.lookNo}`);
              }}
            >
              <img src={item.imgUrl} alt={item.name} />
            </div>

            <div className={styles.mobileCartItemMeta}>
              <div className={styles.qtyControl}>
                <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
              </div>

              <div className={styles.mobileSelectGroup}>
                {item.colour && item.colour.length > 0 && (
                  <CustomSelect
                    value={colorName}
                    options={item.colour.map((c) => (typeof c === 'object' ? c.name : c))}
                    onChange={(val) => handleColorChange(item.id, val)}
                  />
                )}

                {item.size && item.size.length > 0 && (
                  <CustomSelect
                    value={item.selectedSize}
                    options={item.size}
                    onChange={(val) => handleSizeChange(item.id, val)}
                  />
                )}
              </div>
              <p className={styles.mobileCartPrice}>₩{item.price.toLocaleString()}</p>
            </div>
          </div>
          );
        })}
      </div>

      {/* 페이지네이션 및 삭제 버튼 */}
      <div className={styles.mobileCartControls}>
        <div className={styles.mobileCartPagination}>
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
            <span
              key={page}
              className={cartPage === page ? styles.activePage : ''}
              onClick={() => setCartPage(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <button className={styles.mobileCartDeleteBtn} onClick={handleDeleteSelected}>
          Delete
        </button>
      </div>

      <div className={styles.mobileCartDashedDivider} />

      {/* 결제 정보 및 액션 버튼 */}
      <div className={styles.mobileCartSummarySection}>
        <div className={styles.mobileCartTotalWrapper}>
          <span className={styles.mobileTotalTitle}>Total</span>
          <span className={styles.mobileTotalCount}>{totalCount} Items</span>
          <span className={styles.mobileTotalPrice}>₩{totalPrice.toLocaleString()}</span>
        </div>

        <div className={styles.mobileCartCtaGroup}>
          <button className={styles.mobileQuickBuyBtn}>Quick Buy</button>
        </div>
      </div>
    </div>
  );
};