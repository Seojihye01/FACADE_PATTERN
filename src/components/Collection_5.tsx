import React from 'react';
import styles from './Collection_5.module.css';

const Collection_5: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* 노이즈 배경 이미지 */}
      <div className={styles.noiseOverlay} />

      {/* 불규칙 격자선 Overlay */}
      <svg className={styles.linesOverlay} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* 세로선 */}
        <line x1="6.5%" y1="0" x2="6.5%" y2="100%" className={`${styles.line} ${styles.colLine1}`} />
        <line x1="39%" y1="0" x2="39%" y2="100%" className={`${styles.line} ${styles.colLine2}`} />
        <line x1="39.6%" y1="0" x2="39.6%" y2="100%" className={`${styles.line} ${styles.colLine3}`} />
        <line x1="60.5%" y1="0" x2="60.5%" y2="100%" className={`${styles.line} ${styles.colLine4}`} />
        <line x1="86.8%" y1="0" x2="86.8%" y2="100%" className={`${styles.line} ${styles.colLine5}`} />
        <line x1="88%" y1="0" x2="88%" y2="100%" className={`${styles.line} ${styles.colLine6}`} />

        {/* 가로선 */}
        <line x1="0" y1="19%" x2="100%" y2="19%" className={`${styles.line} ${styles.rowLine1}`} />
        <line x1="0" y1="21.5%" x2="100%" y2="21.5%" className={`${styles.line} ${styles.rowLine2}`} />
        <line x1="0" y1="33.5%" x2="100%" y2="33.5%" className={`${styles.line} ${styles.rowLine3}`} />
        <line x1="0" y1="41%" x2="100%" y2="41%" className={`${styles.line} ${styles.rowLine4}`} />
        <line x1="0" y1="63%" x2="100%" y2="63%" className={`${styles.line} ${styles.rowLine5}`} />
        <line x1="0" y1="75.5%" x2="100%" y2="75.5%" className={`${styles.line} ${styles.rowLine6}`} />
        <line x1="0" y1="88.5%" x2="100%" y2="88.5%" className={`${styles.line} ${styles.rowLine7}`} />
      </svg>

      {/* 텍스트 요소 레이어 */}
      <div className={styles.contentLayer}>
        {/* 1. SEPTEMBER, 2026 (중앙 윗줄 세로선 우측 붙임) */}
        <div className={styles.dateBox}>
          <span className={styles.dateText}>SEPTEMBER, 2026</span>
        </div>

        {/* 2. After Summer 컬렉션 서브타이틀 */}
        <div className={styles.collectionBox}>
          <span className={styles.collectionText}>2026 Pre-Fall Collection</span>
        </div>

        {/* 3. 브랜드 로고 영역 */}
        <div className={styles.brandCard}>
          <span className={styles.brandLogo}>
            FACADE<br className={styles.mobileBr} /> PATTERN
          </span>
        </div>

        {/* 4. 하단 이전 컬렉션 버튼 */}
        <div className={styles.prevCollectionBox}>
          <button type="button" className={styles.prevCollectionBtn}>
            <img src="/media/Icon/Arrow.svg" alt="" className={styles.arrowIcon} />
            <span>2026 Summer Collection</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collection_5;