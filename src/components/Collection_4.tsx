import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Collection_4.module.css';
import { PRODUCTS_DATA } from '../data/products';

const Collection_4: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // 시안 기준 3개 모델 룩북 이미지
  const modelImages = [
    '/media/Product/Model001.png',
    '/media/Product/Model002.png',
    '/media/Product/Model003.png',
  ];

  // 메인 룩북 대표 상품 번호 (001, 002, 005)
  const mainLookNumbers = ['002', '001', '006'];

  // PRODUCTS_DATA의 lookItems 기반으로 착장 데이터 동적 매핑
  const lookBookData = mainLookNumbers.map((lookNo, index) => {
    const mainProduct = PRODUCTS_DATA.find((p) => p.lookNo === lookNo);

    // products.ts 내 해당 상품의 lookItems 배열을 가져와 PRODUCTS_DATA와 연결
    const items = (mainProduct?.lookItems || []).map((itemName) => {
      const matchedProduct = PRODUCTS_DATA.find((p) => p.name === itemName);
      return {
        name: itemName,
        product: matchedProduct || null,
      };
    });

    return {
      id: `look-${lookNo}`,
      modelImg: modelImages[index],
      items,
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleItemClick = (lookNo: string) => {
    navigate(`/product/${lookNo}`);
  };

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.inner}>
        
        {/* 좌측 헤더 영역 */}
        <div className={styles.leftSection}>
          <div className={styles.titleGroup}>
            <h2 className={styles.title}>After Summer</h2>
            <p className={styles.subtitle}>Find your timeless style</p>
          </div>
          <div className={styles.dateText}>SEPTEMBER, 2026</div>
        </div>

        {/* 우측 그리드 영역 */}
        <div className={styles.rightSection}>
          {lookBookData.map((look, index) => (
            <div key={look.id} className={styles.cardColumn}>
              
              {/* 모델 이미지 카드 */}
              <div
                className={`${styles.imageWrapper} ${isVisible ? styles.animated : ''}`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <img
                  src={look.modelImg}
                  alt={`Lookbook Model ${index + 1}`}
                  className={styles.productImg}
                />
              </div>

              {/* products.ts의 lookItems 배열 기반으로 전체 착장 리스트 출력 */}
              <div className={styles.infoList}>
                {look.items.map((item, idx) => {
                  const isClickable = Boolean(item.product);

                  return (
                    <p
                      key={idx}
                      className={`${styles.infoItem} ${isClickable ? styles.clickable : ''}`}
                      onClick={() => {
                        if (item.product) {
                          handleItemClick(item.product.lookNo);
                        }
                      }}
                    >
                      {item.name}
                    </p>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collection_4;