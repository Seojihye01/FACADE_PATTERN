import React, { useEffect } from 'react';
import styles from './CartModalAlert.module.css';

interface CartModalAlertProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImg: string;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export const CartModalAlert: React.FC<CartModalAlertProps> = ({
  isOpen,
  onClose,
  productName,
  productImg,
  selectedColor,
  selectedSize,
  quantity,
}) => {
  // 3.5초 후 자동 닫힘
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toastHeader}>
        <span className={styles.badge}>Added To Cart</span>
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      </div>
      
      <div className={styles.toastBody}>
        <img src={productImg} alt={productName} className={styles.thumb} />
        <div className={styles.info}>
          <p className={styles.title}>{productName}</p>
          <p className={styles.spec}>
            {selectedColor} / {selectedSize} / {quantity}개
          </p>
        </div>
      </div>
    </div>
  );
};