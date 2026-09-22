import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Header.module.css';
import { PRODUCTS_DATA, type Product } from '../../data/products';

interface SearchModalProps {
  onClose: () => void;
  onCategoryClick?: (categoryPath: string) => void;
}

const CATEGORY_MAP: Record<string, string> = {
  'Outerwear': 'Outerwear',
  'Signature Coat': 'Outerwear', 
  'Leather Boots': 'Shoes',      
  'Minimal Bag': 'Bags',        
};

export const SearchModal: React.FC<SearchModalProps> = ({ onClose, onCategoryClick }) => {
  const navigate = useNavigate();
  const [recommendIndex, setRecommendIndex] = useState<number>(0);

  // PRODUCTS_DATA에서 상위 6개 제품을 추천 상품으로 사용
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
    const targetCategory = CATEGORY_MAP[keyword] || keyword;
    
    if (onCategoryClick) {
      onCategoryClick(keyword);
    }
    onClose();
    navigate(`/shop?category=${encodeURIComponent(keyword)}`);
  };

  return (
    <div className={styles.searchModal}>
      <div className={styles.searchInputWrapper}>
        <input type="text" placeholder="검색어를 입력하세요" autoFocus />
      </div>

      <hr className={styles.searchDivider} />

      <div className={styles.searchBody}>
        {/* 좌측 Recommendation 영역 */}
        <div className={styles.recommendSection}>
          <h4>Recommendation</h4>
          <div className={styles.productGrid}>
            {recommendProducts
              .slice(recommendIndex, recommendIndex + 3)
              .map((product: Product) => (
                <div
                  key={product.lookNo}
                  className={styles.productCard}
                  onClick={() => {
                    onClose();
                    navigate(`/product/${product.lookNo}`);
                  }}
                >
                  <img src={product.imgUrl} alt={product.name} />
                </div>
              ))}
          </div>
          <div className={styles.carouselArrows}>
            <button
              className={styles.arrowBtn}
              onClick={handlePrevRecommend}
              disabled={recommendIndex === 0}
              aria-label="Previous"
            >
              <img src="/media/Icon/Arrow.svg" alt="Before" />
            </button>
            <button
              className={`${styles.arrowBtn} ${styles.arrowNext}`}
              onClick={handleNextRecommend}
              disabled={recommendIndex + 3 >= recommendProducts.length}
              aria-label="Next"
            >
              <img src="/media/Icon/Arrow.svg" alt="After" />
            </button>
          </div>
        </div>

        {/* 우측 Trending 영역 */}
        <div className={styles.trendingSection}>
          <h4>Trending</h4>
          <ul className={styles.trendingList}>
            {trendingList.map((item, idx) => (
              <li key={idx} onClick={() => handleTrendingClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};