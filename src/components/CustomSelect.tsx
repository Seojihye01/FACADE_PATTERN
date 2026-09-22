import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';

interface CustomSelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.customSelectContainer} ref={containerRef}>
      {/* 현재 선택된 값 및 화살표 버튼 */}
      <button
        type="button"
        className={styles.customSelectTrigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{value}</span>
        <svg
          className={`${styles.selectArrow} ${isOpen ? styles.arrowOpen : ''}`}
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path d="M1 1L4 4L7 1" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* 커스텀 팝업 메뉴 목록 */}
      {isOpen && (
        <ul className={styles.customOptionList}>
          {options.map((opt) => (
            <li
              key={opt}
              className={`${styles.customOptionItem} ${opt === value ? styles.selectedOption : ''}`}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};