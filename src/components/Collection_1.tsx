import React from 'react';
import styles from './Collection_1.module.css';

const Collection_1: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* 좌측 이미지 영역 */}
      <div className={styles.imageSection}>
        <img 
          src="/media/Product/Collection_Main.png" 
          alt="2026 Pre-Fall Collection Main" 
          className={styles.mainImage} 
          loading="lazy"      
          decoding="async"
        />
      </div>

      {/* 우측 텍스트 정보 영역 */}
      <div className={styles.textSection}>
        <div className={styles.topHeader}>
          <span className={styles.subSubtitle}>Find your timeless style</span>
          <span className={styles.dateText}>SEPTEMBER, 2026</span>
          <span className={styles.brandTitle}>FACADE PATTERN | 2026 Pre-Fall Collection</span>
        </div>

        <h1 className={styles.mainTitle}>After Summer</h1>

        <div className={styles.descriptionGroup}>
          <p className={styles.highlightText}>뜨거운 계절이 남긴 잔상 위로 가늘게 스며드는 서늘한 바람</p>
          <p className={styles.descText}>자유로웠던 계절의 여운을 품은 채</p>
          <p className={styles.descText}>한층 정돈된 옷차림으로 새로운 계절을 맞이하세요</p>
        </div>
      </div>
    </section>
  );
};

export default Collection_1;