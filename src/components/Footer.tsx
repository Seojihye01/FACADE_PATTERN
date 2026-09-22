import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>
        {/* 상단 텍스트 & 링크 영역 */}
        <div className={styles.topRow}>
          <div className={styles.copyright}>
            ©2026 FACADE PATTERN. Redesigned for Portfolio Purposes by E
          </div>
          
          <div className={styles.linkGroup}>
            <div className={styles.leftLinks}>
              <a href="#newsletter">Newsletter</a>
              <a href="#about">About</a>
            </div>
            <div className={styles.rightLinks}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="#kakao">Kakao Talk</a>
            </div>
          </div>
        </div>

        {/* 하단 기업 정보 영역 */}
        <div className={styles.bottomRow}>
          <span className={styles.infoItem}>상호 : 주식회사 파사드패턴</span>
          <span className={styles.infoItem}>대표자명 : 임소연</span>
          <span className={styles.infoItem}>사업자등록번호 : 549-86-02244</span>
          <span className={styles.infoItem}>통신판매업 신고번호 : 제 2022-서울성동-00840호</span>
          <span className={styles.infoItem}>주소 : 서울 성동구 성수일로6길 53, 8층</span>
          <span className={styles.infoItem}>고객센터 : 1688-1594</span>
          <span className={styles.infoItem}>개인정보보호책임자 : 이봉건</span>
          <div className={styles.infoItem}>
            <a href="#terms" className={styles.policyLink}>이용약관</a>
            <a href="#privacy" className={styles.policyLink}>개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};