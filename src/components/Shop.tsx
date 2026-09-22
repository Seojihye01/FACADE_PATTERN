import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Shop.module.css';
import { PRODUCTS_DATA } from '../data/products';
import { CustomSelect } from '../components/CustomSelect';

const CATEGORIES = [
  'All',
  'Signature',
  'Best Seller',
  'Outerwear',
  'Top',
  'Knitwear',
  'Shirts & Blouses',
  'Trousers & Denim',
  'Skirts & Dress',
  'Shoes',
  'Bag',
  'Acc & Life Style'
];

// 검색어/세부 키워드를 상위 대표 카테고리와 매핑하는 객체
const KEYWORD_TO_CATEGORY_MAP: Record<string, string> = {
  'leather boots': 'Shoes',
  'minimal bag': 'Bag',
  'signature coat': 'Outerwear',
};

export const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 1. URL의 query string 읽기
  const queryCategory = searchParams.get('category') || 'All';

  // 2. 입력받은 queryCategory가 CATEGORIES에 있는지 확인 후 매핑 처리
  const getValidCategory = (queryParam: string) => {
    // CATEGORIES 배열에 정확히 있는 경우 (대소문자 무시)
    const exactMatch = CATEGORIES.find(
      (cat) => cat.toLowerCase() === queryParam.toLowerCase()
    );
    if (exactMatch) return exactMatch;

    // KEYWORD_TO_CATEGORY_MAP에 정의된 검색어인 경우 대표 카테고리로 반환
    const mappedCategory = KEYWORD_TO_CATEGORY_MAP[queryParam.toLowerCase()];
    if (mappedCategory) return mappedCategory;

    // 아무것도 해당하지 않는 검색어의 경우 기본값 'All'
    return 'All';
  };

  // Select 헤더에 표시할 안전한 카테고리 명칭 ('Shoes', 'Outerwear' 등)
  const currentCategory = getValidCategory(queryCategory);

  const [selectedSort, setSelectedSort] = useState<string>('NEWEST');
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // 카테고리 변경 처리 핸들러
  const handleCategoryChange = (selected: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', selected);
    navigate(`/shop?${params.toString()}`);
  };

  // 3. 필터링 로직: raw 검색 쿼리(queryCategory) 또는 대표 카테고리(currentCategory) 기준 매칭
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (!queryCategory || currentCategory === 'All') {
      return true;
    }

    // A. 상품의 categories 배열에 'Shoes' 등이 들어있는 경우
    const hasCategoryMatch = product.categories?.some(
      (cat) => cat.toLowerCase() === currentCategory.toLowerCase()
    );

    // B. 상품 이름(product.name)에 검색 키워드가 포함되어 있는 경우
    const hasNameMatch = product.name
      .toLowerCase()
      .includes(queryCategory.toLowerCase());

    return hasCategoryMatch || hasNameMatch;
  });

  // 정렬 적용
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === 'PRICE_LOW') return a.price - b.price;
    if (selectedSort === 'PRICE_HIGH') return b.price - a.price;
    return 0;
  });

  return (
    <div className={styles.shopContainer}>
      {/* 상단 서브 헤더: CATEGORIES에 존재하는 정식 카테고리 이름만 표시 */}
      <header className={styles.shopHeader}>
        <div className={styles.categoryDropdownWrapper}>
          <CustomSelect
            value={currentCategory}
            options={CATEGORIES}
            onChange={(val) => {
              handleCategoryChange(val);
            }}
          />
        </div>

        <div className={styles.sortWrapper}>
          <CustomSelect
            value={
              selectedSort === 'PRICE_LOW'
                ? 'PRICE: LOW TO HIGH'
                : selectedSort === 'PRICE_HIGH'
                ? 'PRICE: HIGH TO LOW'
                : 'NEWEST'
            }
            options={['NEWEST', 'PRICE: LOW TO HIGH', 'PRICE: HIGH TO LOW']}
            onChange={(val) => {
              if (val === 'PRICE: LOW TO HIGH') setSelectedSort('PRICE_LOW');
              else if (val === 'PRICE: HIGH TO LOW') setSelectedSort('PRICE_HIGH');
              else setSelectedSort('NEWEST');
            }}
          />
        </div>
      </header>

      {/* 상품 목록 메인 영역 */}
      <main className={styles.shopMain}>
        {sortedProducts.length > 0 ? (
          <div className={styles.productGrid}>
            {sortedProducts.map((product) => {
              const displayImg =
                hoveredProductId === product.lookNo &&
                Array.isArray(product.imgUrl) &&
                product.imgUrl[1]
                  ? product.imgUrl[1]
                  : Array.isArray(product.imgUrl)
                  ? product.imgUrl[0]
                  : product.imgUrl;

              return (
                <article
                  key={product.lookNo}
                  className={styles.productCard}
                  onClick={() => navigate(`/product/${product.lookNo}`)}
                  onMouseEnter={() => setHoveredProductId(product.lookNo)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={displayImg}
                      alt={product.name}
                      className={styles.productImg}
                    />
                  </div>

                  <div className={styles.productMeta}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <span className={styles.productPrice}>
                      ₩{product.price.toLocaleString()}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyContainer}>
            <p className={styles.emptyTitle}>NO PRODUCTS FOUND</p>
            <p className={styles.emptySub}>준비된 상품이 없습니다.</p>
          </div>
        )}
      </main>
    </div>
  );
};