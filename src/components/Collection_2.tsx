import React, { useState, useEffect, useRef } from 'react';
import styles from './Collection_2.module.css';
import { PRODUCTS_DATA } from '../data/products';

const Collection_2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // 전체 상품
  const items = PRODUCTS_DATA.slice(0, 13);
  
  // 페이징 상태 (0: 1~9번, 1: 10~13번)
  const [gridPage, setGridPage] = useState<number>(0);
  const totalPages = Math.ceil(items.length / 9);

  // 현재 페이지의 9개 상품 추출
  const currentPageItems = items.slice(gridPage * 9, (gridPage + 1) * 9);

  // 활성화된 아이템 (기본: 현재 페이지의 첫 번째 상품)
  const [activeItem, setActiveItem] = useState<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 이전/다음 그리드 페이지 이동 핸들러
  const handlePrevGrid = () => {
    setActiveItem(null); // 페이지 이동 시 호버 상태 리셋
    setGridPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextGrid = () => {
    setActiveItem(null); 
    setGridPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // 9개 틀 유지용 (모자란 개수만큼 빈 카드 생성)
  const emptySlotsCount = 9 - currentPageItems.length;

  return (
    <section ref={sectionRef} className={styles.container}>
      {/* 상단 타이틀 헤더 */}
      <div className={styles.header}>
        <span className={styles.title}>After Summer</span>
        <span className={styles.subtitle}>2026 Pre-Fall Collection</span>
      </div>

      {/* 9개 고정 그리드 바 */}
      <div className={`${styles.imageGrid} ${isVisible ? styles.animated : ''}`}
           onMouseLeave={() => setActiveItem(null)}>
        {currentPageItems.map((item, index) => {
          const isActive = activeItem?.lookNo === item.lookNo;

          return (
            <div
              key={item.lookNo || index}
              className={`${styles.imageCard} ${
                activeItem 
                  ? (isActive ? styles.activeCard : styles.inactiveCard) 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.04}s` }}
              onMouseEnter={() => setActiveItem(item)}
              onClick={() => setActiveItem(item)}
            >
              <img
                src={Array.isArray(item.imgUrl) ? item.imgUrl[0] : item.imgUrl}
                alt={item.name}
                className={styles.productImg}
                loading="lazy"      
                decoding="async"
              />
            </div>
          );
        })}

        {/* 9개 미만일 때 비율/높이 고정을 위한 투명 빈 슬롯 */}
        {Array.from({ length: emptySlotsCount }).map((_, idx) => (
          <div key={`empty-${idx}`} className={styles.emptyCard} />
        ))}
      </div>

      {/* 하단 고정 정보 영역 (화살표 2개 좌우 배치 + 고정 폭) */}
      <div className={styles.infoFooter}>
        <div className={styles.infoWrapper}>
          <span className={styles.lookNo}>
            LOOK N°&nbsp;&nbsp;{String(activeItem?.lookNo || 1).padStart(3, '0')}
          </span>
          <span className={styles.productName}>{activeItem?.name}</span>
          
          <div className={styles.arrowControls}>
            {/* 좌측 화살표 (이전) */}
            <button
              className={styles.navBtn}
              onClick={handlePrevGrid}
              aria-label="Previous Grid"
            >
              <img
                src="/media/Icon/Arrow.svg"
                alt="Prev"
                className={styles.arrowIcon}
              />
            </button>

            {/* 우측 화살표 (다음) */}
            <button
              className={styles.navBtn}
              onClick={handleNextGrid}
              aria-label="Next Grid"
            >
              <img
                src="/media/Icon/Arrow.svg"
                alt="Next"
                className={`${styles.arrowIcon} ${styles.nextArrow}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection_2;