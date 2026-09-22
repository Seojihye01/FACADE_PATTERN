import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Header.module.css';
import { PRODUCTS_DATA, type Product } from '../../data/products';

interface MobileSearchProps {
  onCategoryClick?: (category: string) => void;
  onClose?: () => void;
}

export const MobileSearch: React.FC<MobileSearchProps> = ({ onCategoryClick, onClose }) => {
  const navigate = useNavigate();
  const [recommendIndex, setRecommendIndex] = useState<number>(0);

  const recommendProducts: Product[] = PRODUCTS_DATA.slice(0, 6);
  const trendingList = ['Outerwear', 'Signature Coat', 'Leather Boots', 'Minimal Bag'];

  const handlePrevRecommend = () => {
    setRecommendIndex((prev) => Math.max(prev - 3, 0));
  };

  const handleNextRecommend = () => {
    setRecommendIndex((prev) =>
      prev + 3 < recommendProducts.length ? prev + 3 : prev
    );
  };

  // Trending 키워드 클릭 시 해당 카테고리/검색 페이지로 이동
  const handleTrendingClick = (keyword: string) => {
    if (onCategoryClick) {
      onCategoryClick(keyword);
    }
    onClose?.();
    // 쿼리 스트링을 통해 Shop 페이지로 이동합니다 (프로젝트 경로 구조에 맞춰 수정 가능)
    navigate(`/shop?category=${encodeURIComponent(keyword)}`);
  };

  return (
    <div className={styles.mobileSearchSection}>
      <div className={styles.mobileSearchInputWrapper}>
        <input type="text" placeholder="검색어를 입력하세요" autoFocus />
      </div>

      {/* Recommendation 영역 */}
      <div className={styles.mobileRecommendSection}>
        <span className={styles.mobileSectionTitle}>Recommendation</span>
        <div className={styles.mobileSliderContainer}>
          <button
            className={styles.mobileSlideArrow}
            onClick={handlePrevRecommend}
            disabled={recommendIndex === 0}
            aria-label="Previous"
          >
            <img src="/media/Icon/Arrow.svg" alt="Before" />
          </button>

          <div className={styles.mobileThumbList}>
            {recommendProducts
              .slice(recommendIndex, recommendIndex + 3)
              .map((product: Product) => (
                <div
                  key={product.lookNo}
                  className={styles.productCard}
                  onClick={() => {
                    onClose?.();
                    navigate(`/product/${product.lookNo}`);
                  }}
                >
                  <img src={product.imgUrl} alt={product.name} />
                </div>
              ))}
          </div>

          <button
            className={styles.mobileSlideArrow}
            onClick={handleNextRecommend}
            disabled={recommendIndex + 3 >= recommendProducts.length}
            aria-label="Next"
          >
            <img src="/media/Icon/Arrow.svg" alt="After" style={{ transform: 'rotate(180deg)' }} />
          </button>
        </div>
      </div>

      {/* Trending 영역 */}
      <div className={styles.mobileTrendingSection}>
        <span className={styles.mobileSectionTitle}>Trending</span>
        <div className={styles.mobileTrendingGrid}>
          {trendingList.map((item, idx) => (
            <span key={idx} onClick={() => handleTrendingClick(item)}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};