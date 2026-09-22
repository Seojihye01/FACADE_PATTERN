import React from 'react';
import styles from '../Header.module.css';
import { MobileSearch } from './MobileSearch';
import { MobileLogin } from './MobileLogin';
import { MobileCart } from './MobileCart';
import { MobileBenefits } from './MobileBenefits';

interface MobileDrawerProps {
  isOpen: boolean;
  mobileView: string;
  cartCount: number;
  onClose: () => void;
  onTopNavClick: (view: 'search' | 'login' | 'cart' | 'bene') => void;
  onCategoryClick: (category: string) => void;
  onLogoClick: () => void;
  setMobileView: React.Dispatch<React.SetStateAction<any>>;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  mobileView,
  cartCount,
  onClose,
  onTopNavClick,
  onCategoryClick,
  onLogoClick,
  setMobileView,
}) => {
  if (!isOpen) return null;

  const isExpanded = mobileView === 'collection' || mobileView === 'shop';
  // TopNav 서브 메뉴(search, login, cart, bene) 중 하나가 켜져 있는지 확인
  const isTopNavContentOpen = ['search', 'login', 'cart', 'bene'].includes(mobileView);

  return (
    <div className={styles.mobileDrawerOverlay} onClick={onClose}>
      <div className={styles.mobileDrawerPanel} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src="/media/Icon/Close.svg" alt="Close" />
        </button>

        {/* 1. 상단 4대 메뉴 */}
        <div className={styles.mobileTopNav}>
          <button
            className={mobileView === 'search' ? styles.active : ''}
            onClick={() => onTopNavClick('search')}
          >
            Search
          </button>
          <button
            className={mobileView === 'login' ? styles.active : ''}
            onClick={() => onTopNavClick('login')}
          >
            Login
          </button>
          <button
            className={mobileView === 'cart' ? styles.active : ''}
            onClick={() => onTopNavClick('cart')}
          >
            Cart ({cartCount})
          </button>
          <button
            className={mobileView === 'bene' ? styles.active : ''}
            onClick={() => onTopNavClick('bene')}
          >
            Benefits
          </button>
        </div>

        {/* 2. 서브 콘텐츠 영역 */}
        <div className={`${styles.mobileBodyArea} ${isTopNavContentOpen ? styles.isOpen : ''}`}>
          <div className={styles.mobileBodyInner}>
            {mobileView === 'search' && <MobileSearch onCategoryClick={onCategoryClick} onClose={onClose} />}
            {mobileView === 'login' && <MobileLogin />}
            {mobileView === 'cart' && <MobileCart onClose={onClose} />}
            {mobileView === 'bene' && <MobileBenefits />}
          </div>
        </div>

        {/* 3. Collection & Shop 카테고리 */}
        <div className={`${styles.mobileBottomNav} ${!isExpanded && mobileView === 'default' ? styles.isCollapsed : ''}`}>
          <button
            className={mobileView === 'collection' ? styles.active : ''}
            onClick={() => setMobileView((prev: string) => (prev === 'collection' ? 'default' : 'collection'))}
          >
            Collection
          </button>
          {mobileView === 'collection' && (
            <div className={styles.mobileSubList}>
              {['2026 Pre-Fall Collection', 'Previous Collection'].map((item) => (
                <p key={item} onClick={() => onCategoryClick(item)}>{item}</p>
              ))}
            </div>
          )}

          <button
            className={mobileView === 'shop' ? styles.active : ''}
            onClick={() => setMobileView((prev: string) => (prev === 'shop' ? 'default' : 'shop'))}
          >
            Shop
          </button>
          {mobileView === 'shop' && (
            <div className={styles.mobileSubList}>
              {[
                'All', 'Signature', 'Best Seller', 'Outerwear', 'Top',
                'Knitwear', 'Shirts & Blouses', 'Trousers & Denim',
                'Skirts & Dress', 'Shoes', 'Bag', 'Acc & Life Style',
              ].map((item) => (
                <p key={item} onClick={() => onCategoryClick(item)}>{item}</p>
              ))}
            </div>
          )}
        </div>

        {/* 4. 하단 로고 */}
        <div className={styles.mobileLogo} onClick={onLogoClick}>
          FACADE PATTERN
        </div>
      </div>
    </div>
  );
};