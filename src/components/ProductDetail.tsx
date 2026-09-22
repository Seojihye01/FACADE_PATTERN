import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS_DATA, type Product, type ProductColor } from '../data/products';
import { useCart } from '../CartContext'; 
import styles from './ProductDetail.module.css';
import { CartModalAlert } from './CartModalAlert';

interface ProductDetailProps {
  lookNo?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { addToCart } = useCart(); // 전역 함수 가져오기
  const { id } = useParams<{ id: string }>();

  const product = PRODUCTS_DATA.find(
    (p) => p.lookNo === id
) || PRODUCTS_DATA[0];

  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colour[0] || { name: '', hex: '' }
  );
  const [selectedSize, setSelectedSize] = useState<string>(product.size[0] || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'details' | 'guide' | 'care' | 'recommend' | 'refund'>('details');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoverImage, setIsHoverImage] = useState(false);

  const imageListRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const imageList = [
    product.imgUrl,
    product.imgUrl,
    product.imgUrl,
    product.imgUrl,
    product.imgUrl,
  ];

  const handleQuantityChange = (type: 'plus' | 'minus') => {
    if (type === 'minus' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (type === 'plus') {
      setQuantity((prev) => prev + 1);
    }
  };


  const handleScroll = () => {
    if (!imageListRef.current) return;
    const { scrollTop, scrollLeft, clientHeight, clientWidth } = imageListRef.current;
    
    const isMobile = window.innerWidth <= 1024;
    const newIndex = isMobile
      ? Math.round(scrollLeft / clientWidth)
      : Math.round(scrollTop / clientHeight);

    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  const scrollToImage = (index: number) => {
    if (!imageListRef.current) return;
    const isMobile = window.innerWidth <= 1024;
    
    if (isMobile) {
      const width = imageListRef.current.clientWidth;
      imageListRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    } else {
      const height = imageListRef.current.clientHeight;
      imageListRef.current.scrollTo({ top: height * index, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const isMobile = window.innerWidth <= 1024;
    
    if (!isMobile) {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToImage(Math.min(currentImageIndex + 1, imageList.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToImage(Math.max(currentImageIndex - 1, 0));
      }
    } else {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToImage(Math.min(currentImageIndex + 1, imageList.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToImage(Math.max(currentImageIndex - 1, 0));
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHoverImage(true);
    if (sectionRef.current) {
      sectionRef.current.focus({ preventScroll: true });
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details': return product.productDetails;
      case 'guide': return product.sizeGuide;
      case 'care': return product.materialAndCare;
      case 'recommend': return product.recommendation;
      case 'refund': return product.exchangeAndRefund;
      default: return product.productDetails;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    
    // alert 제거 및 모달 활성화
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      {isHoverImage && (
        <div
          className={styles.customCursor}
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          Scroll ↕
        </div>
      )}

      <CartModalAlert
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
        productImg={product.imgUrl}
        selectedColor={selectedColor.name}
        selectedSize={selectedSize}
        quantity={quantity}
      />

      <div
        ref={sectionRef}
        tabIndex={0}
        className={styles.leftImageSection}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHoverImage(false)}
        onMouseMove={handleMouseMove}
        onKeyDown={handleKeyDown}
      >
        <div
          className={styles.imageList}
          ref={imageListRef}
          onScroll={handleScroll}
        >
          {imageList.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img src={img} alt={`${product.name} ${idx + 1}`} />
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          {imageList.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${idx === currentImageIndex ? styles.activeDot : ''}`}
              onClick={() => scrollToImage(idx)}
            />
          ))}
        </div>
      </div>

      <div className={styles.rightContentSection}>
        <div className={styles.stickyWrapper}>
          <div className={styles.mainInfoCol}>
            <h1 className={styles.productName}>{product.name}</h1>
            <div className={styles.price}>₩{product.price.toLocaleString()}</div>

            <div className={styles.colorSelector}>
              <div className={styles.colorGroup}>
                {product.colour.map((c) => {
                  const isSelected = selectedColor.name === c.name;
                  return (
                    <div
                      key={c.name}
                      className={styles.colorOption}
                      onClick={() => setSelectedColor(c)}
                    >
                      <span
                        className={styles.colorChip}
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className={`${styles.colorName} ${isSelected ? styles.underline : ''}`}>
                        {c.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.sizeGroup}>
              {product.size.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  className={`${styles.sizeBtn} ${selectedSize === sz ? styles.activeSize : ''}`}
                  onClick={() => setSelectedSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>

            <div className={styles.quantityControl}>
              <button type="button" onClick={() => handleQuantityChange('minus')}>-</button>
              <span>{quantity}</span>
              <button type="button" onClick={() => handleQuantityChange('plus')}>+</button>
            </div>

            <div className={styles.actionGroup}>
              <button type="button" className={styles.buyBtn}>Buy</button>
              <button
                type="button"
                className={styles.cartBtn}
                onClick={handleAddToCart}
              >
                Cart
              </button>
            </div>
          </div>

          <div className={styles.detailsCol}>
            <nav className={styles.tabNav}>
              {(['details', 'guide', 'care', 'recommend', 'refund'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={activeTab === tab ? styles.activeTab : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'details' && 'Product Details'}
                  {tab === 'guide' && 'Size Guide'}
                  {tab === 'care' && 'Material & Care'}
                  {tab === 'recommend' && 'Recommendation'}
                  {tab === 'refund' && 'Exchange & Refund'}
                </button>
              ))}
            </nav>

            <div className={styles.tabContentDescription}>
              <p key={activeTab} className={styles.fadeIn}>{renderTabContent()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;