import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Collection_3.module.css';
import { PRODUCTS_DATA } from '../data/products'; 
import type { Product } from '../data/products';

const Collection_3: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [catalogPage, setCatalogPage] = useState<number>(1);
  const [isStripView, setIsStripView] = useState<boolean>(false);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(PRODUCTS_DATA.length / itemsPerPage);

  const currentItems = PRODUCTS_DATA.slice(
    (catalogPage - 1) * itemsPerPage,
    catalogPage * itemsPerPage
  );

  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS_DATA[0]);
  const [selectedColor, setSelectedColor] = useState<string>(PRODUCTS_DATA[0]?.colour[0]?.name || '');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 페이지 전환 처리
  const handlePageChange = (page: number) => {
    setCatalogPage(page);
    setIsStripView(false);
    const firstItem = PRODUCTS_DATA[(page - 1) * itemsPerPage];
    if (firstItem) {
      setSelectedProduct(firstItem);
      setSelectedColor(firstItem.colour[0]?.name || '');
    }
    setSelectedId(null);
  };

  // 우측 아이템 클릭
  const handleItemClick = (product: Product) => {
    setIsStripView(false);
    setSelectedProduct(product);
    setSelectedColor(product.colour[0]?.name || '');
    
    // 기능만 수행, 클릭 정보(좌측 화면)는 유지
    if (selectedId === product.lookNo) {
      setSelectedId(null);
    } else {
      setSelectedId(product.lookNo);
    }

    const productIndex = PRODUCTS_DATA.findIndex((p) => p.lookNo === product.lookNo);
    if (productIndex !== -1) {
      setCatalogPage(Math.floor(productIndex / itemsPerPage) + 1);
    }
  };

  // 마지막 배너 카드 클릭 
  const handleBannerClick = () => {
    setIsStripView(true);

    // 기능 해제만 수행, 선택된 좌측 배너 화면은 유지
    if (selectedId === 'BANNER') {
      setSelectedId(null);
    } else {
      setSelectedId('BANNER');
    }
  };

  const handleColorClick = (colorName: string) => {
    setSelectedColor(colorName);
  };

  const handleViewDetails = () => {
    if (selectedProduct && selectedProduct.lookNo) {
      navigate(`/product/${selectedProduct.lookNo}`);
    }
  };

  const handleExploreNext = () => {
    if (sectionRef.current) {
      const nextElement = sectionRef.current.nextElementSibling;
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // 다음 형제 요소가 없을 경우 화면 높이만큼 아래로 스크롤
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className={`${styles.catalogWrapper} ${isVisible ? styles.fadeInUp : ''}`}
    >
      <div className={styles.catalogCard}>
        <div className={styles.mainCatalogSection}>
          
          <div className={styles.leftSection}>
            {!isStripView && (
              <div className={styles.topHeader}>
                <div className={styles.brandSubtitle}>
                  FACADE PATTERN | 2026 Pre-Fall Collection
                </div>
                <h1 className={styles.title}>After Summer</h1>
              </div>
            )}

            {isStripView ? (
              <div className={styles.bannerMainContent}>
                <div className={styles.bannerMainInner}>
                  <span className={styles.bannerMainSub}>2026 Pre-Fall Collection</span>
                  <div className={styles.bannerMainDivider} />
                  <h2 className={styles.bannerMainTitle}>After Summer</h2>
                  <button 
                    className={styles.exploreBtn} 
                    onClick={handleExploreNext}
                  >
                    EXPLORE LOOKBOOK
                  </button>
                  <span className={styles.bannerMainDate}>SEPTEMBER, 2026</span>
                </div>
              </div>
            ) : (
              <div className={styles.mainContent}>
                <div className={styles.leftBrandCol}>
                  <div className={styles.btnRow}>
                    <button className={styles.viewDetailsBtn} onClick={handleViewDetails}>
                      View Details
                    </button>
                  </div>
                  <div className={styles.mainImgWrapper}>
                    <img 
                      src={selectedProduct.imgUrl} 
                      alt={selectedProduct.name} 
                      className={styles.mainImg}
                    />
                  </div>
                </div>

                <div className={styles.infoWrapper}>
                  <div className={styles.productDetails}>
                    <div className={styles.lookRow}>
                      <span className={styles.lookLabel}>LOOK N°</span>
                      <span className={styles.lookVal}>{selectedProduct.lookNo}</span>
                    </div>

                    <div className={styles.productName}>{selectedProduct.name}</div>

                    <div className={styles.detailMeta}>
                      <div className={styles.metaRow}>{selectedProduct.category}</div>

                      <div className={styles.metaRow}>
                        <div className={styles.colorGroup}>
                          {selectedProduct.colour.map((colorObj) => {
                            const isSelected = selectedColor === colorObj.name;
                            return (
                              <div 
                                key={colorObj.name} 
                                className={styles.colorOption}
                                onClick={() => handleColorClick(colorObj.name)}
                              >
                                <span 
                                  className={styles.colorChip} 
                                  style={{ backgroundColor: colorObj.hex }}
                                />
                                <span className={`${styles.colorName} ${isSelected ? styles.underline : ''}`}>
                                  {colorObj.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className={styles.metaRow}>{selectedProduct.fabric}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Catalog 페이지네이션 */}
            <div className={styles.bottomCatalogControl}>
              <span className={styles.catalogLabel}>Catalog</span>
              <div className={styles.pageButtons}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button 
                    key={page}
                    className={`${styles.pageBtn} ${catalogPage === page ? styles.activePage : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= 우측 전단지 영역 ================= */}
          <div className={styles.rightSection}>
            {currentItems.map((item) => (
              <FlyerItem 
                key={item.lookNo} 
                item={item} 
                isSelected={selectedId === item.lookNo && !isStripView}
                onClick={() => handleItemClick(item)} 
              />
            ))}

            {catalogPage === totalPages && (
              <div 
                className={`${styles.brandBannerCard} ${selectedId === 'BANNER' && isStripView ? styles.tornOff : ''}`}
                onClick={handleBannerClick}
              >
                <div className={styles.bannerSimpleText}>FACADE PATTERN</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

interface FlyerItemProps {
  item: Product;
  isSelected: boolean;
  onClick: () => void;
}

const FlyerItem: React.FC<FlyerItemProps> = ({ item, isSelected, onClick }) => {
  return (
    <div 
      className={`${styles.flyerCard} ${isSelected ? styles.tornOff : ''}`}
      onClick={onClick}
    >
      <div className={styles.flyerHeader}>
        <span className={styles.flyerNo}>{item.lookNo}</span>
      </div>
      <div className={styles.flyerBody}>
        <img src={item.imgUrl} alt={item.name} className={styles.flyerImg} />
        <span className={styles.flyerNameText}>{item.name}</span>
      </div>
    </div>
  );
};

export default Collection_3;