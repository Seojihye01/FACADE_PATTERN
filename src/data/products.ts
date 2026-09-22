export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id?: string;
  lookNo: string;
  name: string;
  category: string;
  categories: string[];
  colour: ProductColor[];
  fabric: string;
  price: number;
  size: string[];
  productDetails: string;
  sizeGuide: string;
  materialAndCare: string;
  recommendation: string;
  exchangeAndRefund: string;
  imgUrl: string;
  lookItems?: string[];
}

export const PRODUCTS_DATA: Product[] = [
  {
    lookNo: '001',
    name: 'Wool Double Tailored Jacket',
    category: 'Outerwear',
    categories: ["All", "Outerwear", "Signature"],
    colour: [
      { name: 'Black', hex: '#000000' }
    ],
    fabric: 'Wool 80%, Polyester 20%',
    price: 268000,
    size: ['S', 'M'],
    productDetails: '클래식한 더블 브레스티드 라인의 울 테일러드 재킷입니다.',
    sizeGuide: '정사이즈 추천드립니다.',
    materialAndCare: 'Wool 80% / 드라이클리닝 전용',
    recommendation: 'Wool Mix Pintuck Slacks와 셋업으로 매치해보세요.',
    exchangeAndRefund: '수령 후 7일 이내 교환 가능합니다.',
    imgUrl: '/media/Product/Outerwear001.png',
    lookItems: [
      'Wool Double Tailored Jacket',
      'Classic Cotton Shirt',
      'Wool Mix Pintuck Slacks',
      'Pointed Leather Chelsea Boots'
    ]
  },
  {
    lookNo: '002',
    name: 'Fine Wool High-Neck',
    category: 'Knitwear',
    categories: ["All", "Signature", "Top", "Knitwear"],
    colour: [
      { name: 'Black', hex: '#000000' },
      { name: 'Charcoal', hex: '#363636' }
    ],
    fabric: 'Wool 100%',
    price: 128000,
    size: ['S', 'M'],
    productDetails: '부드러운 터치감의 파인 울 소재로 제작된 하이넥 니트입니다.',
    sizeGuide: '정사이즈 추천드립니다.',
    materialAndCare: 'Wool 100% / 드라이클리닝 전용',
    recommendation: 'Deep Tuck Wide Trousers와 매치해보세요.',
    exchangeAndRefund: '수령 후 7일 이내 교환 가능합니다.',
    imgUrl: '/media/Product/Knitwear001.png',
    lookItems: [
      'Fine Wool High-Neck',
      'Deep Tuck Wide Trousers',
      'Classic Buckle Leather Loafers',
      'Slouchy Leather Hobo Bag',
      'Tortoise Shell Glasses'
    ]
  },
  {
    lookNo: '003',
    name: 'Classic Cotton Shirt',
    category: 'Shirts & Blouses',
    categories: ["All", "Signature", "Shirts & Blouses"],
    colour: [
      { name: 'Sky Blue', hex: '#A0C4DF' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    fabric: 'Cotton 100%',
    price: 108000,
    size: ['S', 'M'],
    productDetails: '탄탄한 고밀도 코튼 소재로 제작된 클래식 셔츠입니다.',
    sizeGuide: '여유 있는 릴렉스드 핏입니다.',
    materialAndCare: 'Cotton 100% / 손세탁 권장',
    recommendation: 'Fine Wool High-Neck 이너 레이어드로 좋습니다.',
    exchangeAndRefund: '수령 후 7일 이내 교환 가능합니다.',
    imgUrl: '/media/Product/Shirts001.png'
  },
  {
    lookNo: '004',
    name: 'Deep Tuck Wide Trousers',
    category: 'Trousers & Denim',
    categories: ["All", "Best Seller", "Trousers & Denim"],
    colour: [
      { name: 'Beige', hex: '#E3D7C5' },
      { name: 'Black', hex: '#000000' }
    ],
    fabric: 'Wool 50%, Polyester 45%, Polyurethane 5%',
    price: 148000,
    size: ['S', 'M', 'L'],
    productDetails: '깊은 턱 잡힘의 와이드 트라우저입니다.',
    sizeGuide: '하이웨이스트 디자인입니다.',
    materialAndCare: 'Rayon 60% / 드라이클리닝',
    recommendation: 'Loafers와 매치하세요.',
    exchangeAndRefund: '7일 이내 교환 가능합니다.',
    imgUrl: '/media/Product/Trousers001.png'
  },
  {
    lookNo: '005',
    name: 'Front Slit Wide Pants',
    category: 'Trousers & Denim',
    categories: ["All", "Best Seller", "Trousers & Denim"],
    colour: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Cream', hex: '#F5F5DC' }
    ],
    fabric: 'Polyester 70%, Rayon 25%, Polyurethane 5%',
    price: 138000,
    size: ['S', 'M'],
    productDetails: '밑단 프론트 슬릿 디테일 팬츠입니다.',
    sizeGuide: '여유로운 와이드 핏입니다.',
    materialAndCare: 'Poly 70% / 드라이클리닝',
    recommendation: '어두운 레더 슈즈와 매치해보세요.',
    exchangeAndRefund: '7일 이내 반품 가능합니다.',
    imgUrl: '/media/Product/Trousers002.png'
  },
  {
    lookNo: '006',
    name: 'Wool Mix Pintuck Slacks',
    category: 'Trousers & Denim',
    categories: ["All", "Signature", "Trousers & Denim"],
    colour: [
      { name: 'Light Beige', hex: '#E5D9C5' },
      { name: 'Melange Grey', hex: '#888888' }
    ],
    fabric: 'Rayon 60%, Polyester 35%, Polyurethane 5%',
    price: 135000,
    size: ['S', 'M'],
    productDetails: '정교한 핀턱 디테일의 울 블렌드 슬랙스입니다.',
    sizeGuide: '정사이즈 구매를 권장합니다.',
    materialAndCare: 'Wool 50% / 드라이클리닝 권장',
    recommendation: 'Chelsea Boots와 스타일링해보세요.',
    exchangeAndRefund: '7일 이내 교환 가능합니다.',
    imgUrl: '/media/Product/Trousers003.png',
    lookItems: [
      'Classic Cotton Shirt',
      'Front Slit Wide Pants',
      'Minimal Three-Strap Sandals',
      'Square Bag'
    ]
  },
  {
    lookNo: '007',
    name: 'Minimal Three-Strap Sandals',
    category: 'Shoes',
    categories: ["All", "Best Seller", "Shoes"],
    colour: [{ name: 'Black', hex: '#000000' }],
    fabric: 'Cowhide 100% (Leather)',
    price: 168000,
    size: ['230', '235', '240', '245', '250'],
    productDetails: '쓰리 스트랩 미니멀 샌들입니다.',
    sizeGuide: '정사이즈 추천드립니다.',
    materialAndCare: 'Cowhide 100%',
    recommendation: '와이드 트라우저와 잘 어울립니다.',
    exchangeAndRefund: '실내 착화만 반품 가능합니다.',
    imgUrl: '/media/Product/Shoes001.png'
  },
  {
    lookNo: '008',
    name: 'Classic Buckle Leather Loafers',
    category: 'Shoes',
    categories: ["All", "Best Seller", "Shoes"],
    colour: [{ name: 'Black', hex: '#000000' }],
    fabric: 'Cowhide 100% (Leather)',
    price: 188000,
    size: ['230', '235', '240', '245', '250'],
    productDetails: '클래식 버클 디테일의 레더 로퍼입니다.',
    sizeGuide: '정사이즈 추천드립니다.',
    materialAndCare: 'Cowhide 100%',
    recommendation: '데님 팬츠나 슬랙스와 연출하세요.',
    exchangeAndRefund: '7일 이내 반품 가능합니다.',
    imgUrl: '/media/Product/Shoes002.png'
  },
  {
    lookNo: '009',
    name: 'Pointed Leather Chelsea Boots',
    category: 'Shoes',
    categories: ["All", "Signature", "Shoes"],
    colour: [{ name: 'White', hex: '#FFFFFF' }],
    fabric: 'Sheepskin 100% (Leather)',
    price: 158000,
    size: ['230', '235', '240', '245', '250'],
    productDetails: '포인티드 토 첼시 부츠입니다.',
    sizeGuide: '한 사이즈 업을 추천드립니다.',
    materialAndCare: 'Sheepskin 100%',
    recommendation: 'Front Slit Pants와 스타일링해보세요.',
    exchangeAndRefund: '주름 발생 시 반품 불가합니다.',
    imgUrl: '/media/Product/Shoes003.png'
  },
  {
    lookNo: '010',
    name: 'Square Bag',
    category: 'Bag',
    categories: ["All", "Best Seller", "Bag"],
    colour: [
      { name: 'Burgundy', hex: '#800020' },
      { name: 'Black', hex: '#000000' }
    ],
    fabric: 'Cowhide 100% (Leather)',
    price: 178000,
    size: ['One Size'],
    productDetails: '버건디 스퀘어 숄더백입니다.',
    sizeGuide: '가로 22cm x 세로 18cm',
    materialAndCare: 'Cowhide 100%',
    recommendation: '모노톤 룩에 포인트로 연출해보세요.',
    exchangeAndRefund: '보호 비닐 미제거 시 반품 가능.',
    imgUrl: '/media/Product/Bag001.png'
  },
  {
    lookNo: '011',
    name: 'Slouchy Leather Hobo Bag',
    category: 'Bag',
    categories: ["All", "Bag"],
    colour: [
      { name: 'Dark Brown', hex: '#3E2723' },
      { name: 'Black', hex: '#000000' }
    ],
    fabric: 'Cowhide 100% (Leather)',
    price: 218000,
    size: ['One Size'],
    productDetails: '딥 브라운 호보백입니다.',
    sizeGuide: '가로 34cm x 세로 28cm',
    materialAndCare: 'Cowhide 100%',
    recommendation: '올라운드 데일리 백입니다.',
    exchangeAndRefund: '7일 이내 교환 가능합니다.',
    imgUrl: '/media/Product/Bag002.jpeg'
  },
  {
    lookNo: '012',
    name: 'Tortoise Shell Glasses',
    category: 'Acc & Life Style',
    categories: ["All", "Acc & Life Style"],
    colour: [
      { name: 'Tortoise', hex: '#8B5A2B' },
      { name: 'Black', hex: '#000000' }
    ],
    fabric: 'Acetate 100%',
    price: 89000,
    size: ['One Size'],
    productDetails: '아세테이트 클래식 안경입니다.',
    sizeGuide: '프레임 145mm',
    materialAndCare: 'Acetate 100%',
    recommendation: 'Classic Shirt와 스타일링 해보세요.',
    exchangeAndRefund: '필름 제거 시 반품 불가.',
    imgUrl: '/media/Product/Acc001.png'
  },
  {
    lookNo: '013',
    name: 'Oval Buckle Leather Belt',
    category: 'Acc & Life Style',
    categories: ["All", "Acc & Life Style"],
    colour: [{ name: 'Black', hex: '#000000' }],
    fabric: 'Cowhide 100%',
    price: 69000,
    size: ['One Size'],
    productDetails: '오벌 은장 버클 디테일의 미니멀 레더 벨트입니다.',
    sizeGuide: '폭 2.5cm / 총장 105cm',
    materialAndCare: 'Cowhide 100%',
    recommendation: '슬랙스나 데님 팬츠에 함께 연출해보세요.',
    exchangeAndRefund: '가죽 구멍 사용 흔적 없을 시 반품 가능.',
    imgUrl: '/media/Product/Acc002.png'
  }
];