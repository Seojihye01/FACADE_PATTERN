import React, { useState } from 'react';
import styles from '../Header.module.css';

export const MobileLogin: React.FC = () => {
  const [isSaveAccount, setIsSaveAccount] = useState<boolean>(false);

  return (
    <div className={styles.mobileLoginSection}>
      <div className={styles.mobileLoginInputWrapper}>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
      </div>

      <button className={styles.mobileLoginActionBtn}>로그인</button>

      <div className={styles.mobileLoginOptions}>
        <div
          className={styles.customCheckboxWrapper}
          onClick={() => setIsSaveAccount(!isSaveAccount)}
        >
          <div className={`${styles.checkboxBox} ${isSaveAccount ? styles.checked : ''}`}>
            {isSaveAccount && <img src="/media/Icon/Check.svg" alt="Check" />}
          </div>
          <span>계정 저장</span>
        </div>

        <div className={styles.mobileLoginLinksRight}>
          <span className={styles.textLink}>아이디/비밀번호 찾기</span>
          <span className={styles.textLink}>회원가입</span>
        </div>
      </div>

      <div className={styles.mobileLoginFooter}>
        <div className={styles.socialButtons}>
          <span className={styles.textLink}>네이버 로그인</span>
          <span className={styles.textLink}>카카오 로그인</span>
        </div>
        <span className={styles.textLink}>비회원 주문조회</span>
      </div>
    </div>
  );
};