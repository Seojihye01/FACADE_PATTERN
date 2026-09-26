import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';

const Main_1: React.FC = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainInner}>
        {/* 좌측 이미지 비주얼 영역 */}
        <div className={styles.visualSection}>
          <div className={styles.leftImageWrapper}>
            <img 
              src="/media/Product/Main_1.jpg" 
              alt="2026 Pre-Fall Collection 1" 
              className={styles.mainImg}
              loading="lazy"      
              decoding="async"
            />
          </div>
          <div className={styles.rightImageWrapper}>
            <img 
              src="/media/Product/Main_2.png" 
              alt="2026 Pre-Fall Collection 2" 
              className={styles.mainImg}
              loading="lazy"      
              decoding="async"
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>

        {/* 우측 CTA 영역 */}
        <Link to="/collection" className={styles.ctaSection}>
          <div className={styles.ctaHeader}>
            <span>2026 Pre-Fall Collection</span>
          </div>

          <div className={styles.ctaCenter}>
            <span className={styles.dateText}>SEPTEMBER, 2026</span>
            <h2 className={styles.brandTitle}>FACADE PATTERN</h2>
            <span className={styles.seasonText}>IN AUTUMN</span>
          </div>

          <div className={styles.ctaFooter}>
            <div className={styles.lookbookLink}>
              <span>LOOKBOOK</span>
              {/* 깔끔한 SVG 화살표 적용 */}
              <div className={styles.arrowContainer}>
                <svg 
                  className={styles.arrowSvg} 
                  viewBox="0 0 160 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="6" x2="158" y2="6" stroke="#1A1A1A" strokeWidth="1" />
                  <path d="M152 1L158 6L152 11" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <p className={styles.subDescription}>
              Find your timeless style<br />
              in our 2026 Autumn<br />
              Collection
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Main_1;