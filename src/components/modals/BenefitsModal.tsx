import React, { useState } from 'react';
import styles from '../Header.module.css';

type BeneTabType = 'intro' | '01' | '02' | '03' | '04' | '05' | '06';

interface BeneItem {
  id: BeneTabType;
  num: string;
  title: string;
  content: React.ReactNode;
}

const BENE_ITEMS: BeneItem[] = [
  { id: '01', num: '01', title: 'Welcome Coupon', content: <p>신규 가입 시 10% 할인 쿠폰이 자동 발급되며,<br />첫 구매 완료 후 감사의 마음을 담은 10% 할인 쿠폰이 추가로 발급됩니다.</p> },
  { id: '02', num: '02', title: 'Free Exchange', content: <p>온라인 구매로 제품을 수령하신 후 사이즈 또는 컬러 교환을 원하실 경우 무료로 진행하고 있습니다.<br />교환 및 반품은 상품 수령 후 7일 이내에 접수 가능하며, 반품 시에는 반품 배송비가 부과됩니다.</p> },
  { id: '03', num: '03', title: 'Free Shipping', content: <p>모든 회원에게는 무료 배송 혜택을 제공하며, 비회원은 7만 원 이상 구매 시 무료 배송이 적용됩니다.<br />예약배송 상품이 아닌 경우, 오후 2시 이전 결제 건은 1-2일 내 순차 출고됩니다.<br />배송은 지역 택배사 사정에 따라 다소 지연될 수 있으며, 배송이 시작되면 고객님의 연락처로 알림톡을 보내드립니다.</p> },
  { id: '04', num: '04', title: 'Blue Membership', content: <p>최근 6개월간의 실 결제금액을 반영하여 매월 1일 새로운 등급이 부여됩니다.</p> },
  { id: '05', num: '05', title: 'Birthday Coupon', content: <p>마이페이지 회원 정보에서 생년월일을 입력하시면, 생일 당일에 10% 할인 쿠폰이 제공됩니다.</p> },
  { id: '06', num: '06', title: 'Holiday Gift', content: <p>FACADE BLUE 등급 고객에게는 연말에 감사의 마음을 담은 Holiday Gift를 발송해 드립니다.</p> },
];

export const BenefitsModal: React.FC = () => {
  const [beneTab, setBeneTab] = useState<BeneTabType>('intro');

  return (
    <div className={styles.beneModal}>
      {/* 좌측 메뉴 영역 */}
      <div className={styles.beneLeftCol}>
        <div 
          className={styles.beneTitleArea} 
          onClick={() => setBeneTab('intro')}
          style={{ cursor: 'pointer' }}
        >
          <span>To Our Customer</span>
          <div className={styles.beneTitleDivider} />
        </div>
        
        <div className={styles.beneList}>
          {BENE_ITEMS.map((item) => {
            const isActive = beneTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.beneTabBtn} ${isActive ? styles.activeTab : ''}`}
                onClick={() => setBeneTab(item.id)}
              >
                <span className={styles.beneNum}>{item.num}</span>
                <span className={styles.beneLabel}>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 우측 내용 카드 영역 */}
      <div className={styles.beneCard}>
        {beneTab === 'intro' ? (
          <h4 className={styles.introLogo}>FACADE PATTERN</h4>
        ) : (
          BENE_ITEMS.find((item) => item.id === beneTab)?.content
        )}
      </div>
    </div>
  );
};