import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

// 모달, 모바일 컴포넌트 Import
import { SearchModal } from './modals/SearchModal';
import { LoginModal } from './modals/LoginModal';
import { CartModal } from './modals/CartModal';
import { BenefitsModal } from './modals/BenefitsModal';

import { MobileDrawer } from './MobileDrawer/MobileDrawer';
import { useCart } from '../CartContext';

type DesktopModalType = 'none' | 'sub1' | 'sub2' | 'search' | 'login' | 'cart' | 'bene';
type MobileViewType = 'default' | 'search' | 'login' | 'cart' | 'bene' | 'collection' | 'shop';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);

  // 모바일 드로어 상태
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<MobileViewType>('default');

  // 데스크톱 모달/드롭다운 상태
  const [desktopModal, setDesktopModal] = useState<DesktopModalType>('none');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const closeAll = () => {
    setIsMobileOpen(false);
    setMobileView('default');
    setDesktopModal('none');
    setSelectedCategory('');
  };

  const handleLogoClick = () => {
    closeAll();
    navigate('/');
  };

  const handleCategoryClick = (categoryPath: string) => {

    if (categoryPath === 'Previous Collection') {
      return;
    }

    setSelectedCategory(categoryPath);
    closeAll(); 

    if (categoryPath === '2026 Pre-Fall Collection') {
      navigate('/collection');
    } else {
      navigate(`/shop?category=${encodeURIComponent(categoryPath)}`);
    }
  };

  const { totalCount } = useCart();

  /* 메뉴 토글 핸들러 추가 */
  const handleTopNavClick = (view: 'search' | 'login' | 'cart' | 'bene') => {
    setMobileView(prev => (prev === view ? 'default' : view));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 드롭다운 서브메뉴('sub1', 'sub2')가 열려있을 때만 작동
      if (desktopModal === 'sub1' || desktopModal === 'sub2') {
        // 클릭한 대상이 headerRef 내부가 아니라면 닫기
        if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
          setDesktopModal('none');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopModal]);

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 768;

      // 1. 웹 -> 모바일 전환
      if (isMobileSize && ['search', 'login', 'cart', 'bene'].includes(desktopModal)) {
        const currentModal = desktopModal as 'search' | 'login' | 'cart' | 'bene';
        setDesktopModal('none');
        setIsMobileOpen(true);
        setMobileView(currentModal);
      }

      // 2. 모바일 -> 웹 전환
      if (!isMobileSize && isMobileOpen) {
        if (['search', 'login', 'cart', 'bene'].includes(mobileView)) {
          const currentView = mobileView as DesktopModalType;
          setIsMobileOpen(false);
          setMobileView('default');
          setDesktopModal(currentView);
        } else {
          // collection/shop 등 서브 메뉴인 경우 모바일 드로어만 닫기
          setIsMobileOpen(false);
          setMobileView('default');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopModal, isMobileOpen, mobileView]);
  
  return (
    <>
      <header ref={headerRef} className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div className={styles.logo} onClick={handleLogoClick}>
            FACADE PATTERN
          </div>

          {/* Web / Tablet 전용 메뉴 */}
          <nav className={styles.desktopNav}>
            <div className={styles.leftNav}>
              <button
                className={desktopModal === 'sub1' ? styles.activeBtn : ''}
                onClick={() => setDesktopModal(desktopModal === 'sub1' ? 'none' : 'sub1')}
              >
                Collection
              </button>
              <button
                className={desktopModal === 'sub2' ? styles.activeBtn : ''}
                onClick={() => setDesktopModal(desktopModal === 'sub2' ? 'none' : 'sub2')}
              >
                Shop
              </button>
            </div>

            <div className={styles.rightNav}>
              <button
                className={desktopModal === 'search' ? styles.activeBtn : ''}
                onClick={() => setDesktopModal('search')}
              >
                Search
              </button>
              <button
                className={desktopModal === 'login' ? styles.activeBtn : ''}
                onClick={() => setDesktopModal('login')}
              >
                Login
              </button>
              <button
                className={desktopModal === 'cart' ? styles.activeBtn : ''}
                onClick={() => setDesktopModal('cart')}
              >
                Cart ({totalCount})
              </button>
              <button
                className={desktopModal === 'bene' ? styles.activeBtn : ''}
                onClick={() => setDesktopModal('bene')}
              >
                Benefits
              </button>
            </div>
          </nav>

          {/* Collection 드롭다운 패널 */}
          {desktopModal === 'sub1' && (
            <div className={styles.dropdownPanel}>
              <div className={styles.subCategoryModal}>
                {['2026 Pre-Fall Collection', 'Previous Collection'].map((item) => (
                  <p
                    key={item}
                    className={`${selectedCategory === item ? styles.activeItem : ''} ${
                      item === 'Previous Collection' ? styles.disabledItem : ''
                    }`}
                    onClick={() => handleCategoryClick(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Shop 드롭다운 패널 */}
          {desktopModal === 'sub2' && (
            <div className={styles.dropdownPanel}>
              <div className={styles.subCategoryGrid}>
                <div className={styles.categoryColumn}>
                  {['All', 'Signature', 'Best Seller'].map((item) => (
                    <span
                      key={item}
                      className={selectedCategory === item ? styles.activeItem : ''}
                      onClick={() => handleCategoryClick(item)}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className={styles.categoryColumn}>
                  {['Outerwear', 'Top', 'Knitwear', 'Shirts & Blouses'].map((item) => (
                    <span
                      key={item}
                      className={selectedCategory === item ? styles.activeItem : ''}
                      onClick={() => handleCategoryClick(item)}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className={styles.categoryColumn}>
                  {['Trousers & Denim', 'Skirts & Dress', 'Shoes', 'Bag', 'Acc & Life Style'].map((item) => (
                    <span
                      key={item}
                      className={selectedCategory === item ? styles.activeItem : ''}
                      onClick={() => handleCategoryClick(item)}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile 햄버거 버튼 */}
          <button
            className={styles.hamburgerBtn}
            onClick={() => {
              setIsMobileOpen(true);
              setMobileView('default');
            }}
          >
            <img src="/media/Icon/Hamburger.svg" alt="Menu" />
          </button>
        </div>
      </header>

      {/* WEB & TABLET OVERLAYS */}
      {['search', 'login', 'cart', 'bene'].includes(desktopModal) && (
        <div className={styles.overlayBackdrop} onClick={closeAll}>
          <div className={styles.rightDrawerContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeAll}>
              <img src="/media/Icon/Close.svg" alt="Close" />
            </button>

            {desktopModal === 'search' && (
              <SearchModal onClose={closeAll} onCategoryClick={handleCategoryClick} />
            )}
            {desktopModal === 'login' && <LoginModal />}
            {desktopModal === 'cart' && (
              <CartModal 
                onClose={closeAll}  
              />
            )}
            {desktopModal === 'bene' && <BenefitsModal />}
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      <MobileDrawer
        isOpen={isMobileOpen}
        mobileView={mobileView}
        cartCount={totalCount}
        onClose={closeAll}
        onTopNavClick={handleTopNavClick}
        onCategoryClick={handleCategoryClick}
        onLogoClick={handleLogoClick}
        setMobileView={setMobileView}
      />
    </>
  );
};