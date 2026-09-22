import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Header.module.css';
import { PRODUCTS_DATA, type Product, type ProductColor } from '../../data/products';
import { useCart } from '../../CartContext';
import { CustomSelect } from '../CustomSelect';

interface CartModalProps {
  onClose: () => void;
  onCountChange?: (count: number) => void;
}

// 장바구니 아이템 타입 (Product 데이터 확장)
interface CartItem extends Product {
  id: string;
  quantity: number;
  selectedColor: ProductColor | string;
  selectedSize: string;
}

export const CartModal: React.FC<CartModalProps> = ({ onClose, onCountChange }) => {
  const navigate = useNavigate();
  const [cartPage, setCartPage] = useState<number>(1);
  const [selectedCartIds, setSelectedCartIds] = useState<string[]>([]);
  const { cartItems, deleteSelectedItems, updateCartItem, totalCount, totalPrice } = useCart();

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.max(1, Math.ceil(cartItems.length / ITEMS_PER_PAGE));
  const currentCartItems = cartItems.slice((cartPage - 1) * ITEMS_PER_PAGE, cartPage * ITEMS_PER_PAGE);

  // 장바구니 내 상품 클릭 이벤트
  const handleGoToDetail = (productId: string) => {
    onClose();
    navigate(`/product/${productId}`);
  };
  // 상위 Header로 카운트 전달
  useEffect(() => {
    if (onCountChange) {
      onCountChange(totalCount);
    }
  }, [totalCount, onCountChange]);

  // 페이지 오버플로우 방지
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

  // 수량 변경 핸들러
  const handleQuantityChange = (id: string, currentQty: number, delta: number) => {
    const newQty = currentQty + delta;
    if (newQty > 0) {
      updateCartItem(id, { quantity: newQty });
    }
  };

  // 색상 변경 핸들러
  const handleColorChange = (id: string, color: string) => {
    updateCartItem(id, { selectedColor: color });
  };

  // 사이즈 변경 핸들러
  const handleSizeChange = (id: string, size: string) => {
    updateCartItem(id, { selectedSize: size });
  };

  // 고정 3열을 맞추기 위한 빈 더미 셀 갯수 계산
  const emptySlotsCount = ITEMS_PER_PAGE - currentCartItems.length;

  return (
    <div className={styles.cartModal}>
      <div className={styles.cartLeftCol}>
        <button className={styles.cartDeleteBtn} onClick={handleDeleteSelected}>
          Delete
        </button>
        <div className={styles.cartPagination}>
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
      </div>

      <div className={styles.cartCenterCol}>
        {currentCartItems.map((item) => {
          const colorName = typeof item.selectedColor === 'object' ? item.selectedColor.name : item.selectedColor;

          return (
          <div key={item.id} className={styles.cartItemRow}>
            <div
              className={`${styles.checkboxBox} ${selectedCartIds.includes(item.id) ? styles.checked : ''}`}
              onClick={() => handleCheckItem(item.id)}
            >
              {selectedCartIds.includes(item.id) && <img src="/media/Icon/Check.svg" alt="Check" />}
            </div>

            <div
              className={styles.cartThumb}
              onClick={() => handleGoToDetail(item.lookNo)}
            >
              <img src={item.imgUrl} alt={item.name} />
            </div>

            <div className={styles.cartItemInfo}>
              <div className={styles.cartItemMeta}>
                <div className={styles.qtyControl}>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
                </div>

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
              <div className={styles.cartItemPrice}>
                ₩{item.price.toLocaleString()}
              </div>
            </div>
          </div>
          );
        })}

        {/* 3열 고정 배치를 위한 빈 슬롯 레퍼 */}
        {Array.from({ length: emptySlotsCount }).map((_, idx) => (
          <div key={`empty-${idx}`} className={styles.emptyCartRow} />
        ))}
      </div>

      <div className={styles.cartDivider} />

      <div className={styles.cartRightCol}>
        <div className={styles.cartTotalWrapper}>
          <span className={styles.totalTitle}>Total</span>
          <span className={styles.totalCount}>{totalCount} Items</span>
          <span className={styles.totalPrice}>₩{totalPrice.toLocaleString()}</span>
        </div>

        <div className={styles.cartCtaWrapper}>
          <button className={styles.quickBuyBtn}>Quick Buy</button>
        </div>
      </div>
    </div>
  );
};


interface MobileCartProps {
  onClose: () => void;
  onCountChange?: (count: number) => void;
}

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
    if (newQty > 0) updateCartItem(id, { quantity: newQty });
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
                  navigate(`/shop/detail/${item.lookNo}`);
                }}
              >
                <img src={item.imgUrl} alt={item.name} />
              </div>

              <div className={styles.mobileCartItemMeta}>
                <div className={styles.qtyControl}>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
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