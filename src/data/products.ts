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
  material: string; // 소재 상세
  materialAndCare: string; // 세탁 및 관리 방법
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
    productDetails: '클래식한 더블 브레스티드 라인의 울 테일러드 재킷입니다. 구조적인 숄더 패드와 정교하게 재단된 라펠이 단정하면서도 모던한 실루엣을 완성합니다. 내부 전체 라이닝 처리로 착용감이 부드러우며, 측면 플랩 포켓과 내부 입술 포켓으로 실용성을 더했습니다.',
    sizeGuide: '정사이즈 구매를 추천합니다. 어깨 라인이 잡혀 있는 정핏 디자인으로, 더 두꺼운 이너와 함께 착용하시거나 여유로운 핏을 원하시면 한 사이즈 업을 고려해보세요.\n\nS: 어깨 42cm / 가슴 50cm / 소매 61cm / 총장 72cm\nM: 어깨 44cm / 가슴 52.5cm / 소매 62cm / 총장 74cm',
    material: '겉감: Wool 80%, Polyester 20%\n안감: Polyester 100%\n프리미엄 울 혼방 원단으로 밀도감이 높고 형태 변형이 적으며 한겨울까지 착용 가능한 두께감입니다.',
    materialAndCare: '드라이클리닝 전용 제품입니다. 마찰 시 보풀이 발생할 수 있으므로 착용 후 전용 브러시로 결을 정돈해주시고, 착용하지 않을 때에는 어깨가 넓은 옷걸이에 걸어 보관하세요.',
    recommendation: '동일한 소재의 Wool Mix Pintuck Slacks와 셋업으로 매치하여 격식 있는 포멀 룩을 연출해보세요. 또는 Classic Cotton Shirt 위에 무심하게 걸쳐 세련된 데일리 미니멀 룩을 완성할 수 있습니다.',
    exchangeAndRefund: '상품 수령 후 7일 이내 교환 및 반품 신청이 가능합니다. 착용 흔적, 향수/탈취제 냄새, 착용으로 인한 오염이나 라벨/택 훼손 시 교환 및 반품이 제한될 수 있습니다.',
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
    productDetails: '부드러운 터치감의 파인 울 100% 소재로 제작된 미니멀한 하이넥 니트입니다. 목을 압박하지 않고 자연스럽게 감싸주는 넥 라인과 립 조직 마감이 인상적입니다. 단품은 물론 아우터 안의 이너웨어로도 뛰어난 활용도를 자랑합니다.',
    sizeGuide: '슬림~슬림슬랙스 핏감의 정사이즈입니다. 체형을 자연스럽게 감싸주는 라인으로 적당한 여유감을 부여합니다.\n\nS: 어깨 38cm / 가슴 45cm / 소매 60cm / 총장 59cm\nM: 어깨 40cm / 가슴 47.5cm / 소매 61cm / 총장 61cm',
    material: 'Superfine Merino Wool 100%\n가볍고 기분 좋은 촉감을 선사하며 자극이 적어 피부가 민감하신 분들도 무리 없이 착용하실 수 있습니다.',
    materialAndCare: '울 전용 세제를 사용하여 30도 이하의 찬물에서 미온수 손세탁 또는 드라이클리닝을 권장합니다. 건조기 사용은 원단 축소의 원인이 되므로 그늘진 평평한 곳에 펴서 건조하세요.',
    recommendation: 'Deep Tuck Wide Trousers와 매치하여 우아하면서도 무심한 실루엣을 연출해보세요. 셔츠 레이어드 이너로도 훌륭합니다.',
    exchangeAndRefund: '제품 수령 후 7일 이내 접수 건에 한하여 교환 및 반품이 가능합니다. 니트 특성상 올 풀림이나 마찰 오염이 발생하기 쉬우므로 미착용 상태를 유지해주셔야 합니다.',
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
    productDetails: '탄탄한 고밀도 60수 코튼 원단으로 제작된 클래식 셔츠입니다. 은은한 광택감과 바삭한 주름감이 어우러져 고급스러운 드레이프를 형성합니다. 카라 라인의 심지를 정교하게 잡아 여러 번 세탁해도 형태 유지가 뛰어납니다.',
    sizeGuide: '자연스럽게 떨어지는 드롭 숄더의 릴렉스드 핏입니다. 체형에 관계없이 여유롭고 스타일리시한 실루엣이 연출됩니다.\n\nS: 어깨 46cm / 가슴 54cm / 소매 58cm / 총장 71cm\nM: 어깨 48cm / 가슴 56.5cm / 소매 59.5cm / 총장 73cm',
    material: 'High-Density Premium Cotton 100%\n내구성이 뛰어나고 통기성이 우수한 최고급 고밀도 면 원단을 사용하였습니다.',
    materialAndCare: '30도 이하 찬물에서 단독 손세탁 또는 세탁망에 넣어 드라이 코스로 세탁하세요. 건조기 사용을 피하고 가볍게 탈수 후 그늘에서 건조한 뒤 낮은 온도에서 다림질해 주세요.',
    recommendation: '단품으로 슬랙스에 입거나, Fine Wool High-Neck 니트 위에 겹쳐 입는 아우터형 레이어드로 연출하기 좋습니다.',
    exchangeAndRefund: '수령 후 7일 이내 교환 및 반품이 가능합니다. 흰색/밝은 색상의 셔츠는 시착 시 화장품이나 오염에 주의해주시기 바랍니다.',
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
    productDetails: '허리 라인에 잡힌 깊은 2-턱 디테일이 특징인 롱 앤 와이드 트라우저입니다. 하이웨이스트 라인으로 다리가 길어 보이며, 발등을 덮는 드레이프 라인이 세련된 아웃핏을 만들어줍니다.',
    sizeGuide: '하이웨이스트 핏으로 허리 치수를 기준으로 선택하는 것을 권장합니다. 신발을 살짝 덮는 롱한 기장감입니다.\n\nS: 허리 33cm / 힙 48cm / 밑위 34cm / 허벅지 32cm / 총장 104cm\nM: 허리 35cm / 힙 50cm / 밑위 35cm / 허벅지 33.5cm / 총장 105cm\nL: 허리 37.5cm / 힙 52.5cm / 밑위 36cm / 허벅지 35cm / 총장 106cm',
    material: 'Wool 50%, Polyester 45%, Polyurethane 5%\n울의 은은한 결감과 스판 소재의 신축성이 더해져 주름이 적고 활동성이 매우 뛰어납니다.',
    materialAndCare: '형태 유지를 위하여 드라이클리닝을 권장합니다. 다림질 시 얇은 천을 덮고 중간 온도에서 다려주세요.',
    recommendation: 'Classic Buckle Leather Loafers와 조합하면 모던한 오피스 룩을, 미니멀한 샌들과 맞추면 감각적인 썸머 레이어드 룩을 완성할 수 있습니다.',
    exchangeAndRefund: '수령일 기준 7일 이내 교환/반품 가능합니다. 바지 밑단 수선이나 세탁을 한 경우 교환 및 반품이 불가능합니다.',
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
    productDetails: '밑단 전면에 섬세하게 배치된 프론트 슬릿 디테일이 움직일 때마다 매력적인 신발 포인트를 드러내는 와이드 팬츠입니다. 차르르하게 떨어지는 원단감과 밴딩 처리된 깔끔한 허리선이 편안한 착용감을 부여합니다.',
    sizeGuide: '전체적으로 넉넉한 핏입니다. 허리는 정사이즈이며, 슬릿 디테일 덕분에 움직임이 자유롭습니다.\n\nS: 허리 32.5cm / 힙 47cm / 밑위 32cm / 슬릿길이 22cm / 총장 102cm\nM: 허리 34.5cm / 힙 49cm / 밑위 33cm / 슬릿길이 22cm / 총장 103cm',
    material: 'Polyester 70%, Rayon 25%, Polyurethane 5%\n터치감이 매끄럽고 찰랑이는 구김 방지 특수 원단을 사용하여 보관 및 관리가 매우 용이합니다.',
    materialAndCare: '찬물에 중성세제를 이용해 단독 세탁하거나 드라이클리닝 하세요. 잦은 마찰은 원단 마모의 원인이 되므로 주의하세요.',
    recommendation: 'Pointed Leather Chelsea Boots 같은 슈즈와 스타일링할 때 슬릿 사이로 드러나는 풋웨어 라인이 더욱 매력적입니다.',
    exchangeAndRefund: '7일 이내 반품 및 교환 신청이 가능합니다. 화이트/크림 계열 특성상 오염 발생 시 반품이 어려우니 유의해 주세요.',
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
    productDetails: '정교한 핀턱 센터라인이 잡혀 있어 세탁 후에도 선명한 핏을 유지하는 울 블렌드 슬랙스입니다. 고급스러운 멜란지 톤의 원단이 인상적이며 체형을 직선으로 길어 보이게 잡아줍니다.',
    sizeGuide: '스트레이트 세미 와이드 핏으로 정사이즈 구매를 추천합니다.\n\nS: 허리 33.5cm / 힙 46.5cm / 밑위 31cm / 총장 101cm\nM: 허리 35.5cm / 힙 48.5cm / 밑위 32cm / 총장 102cm',
    material: 'Rayon 60%, Polyester 35%, Polyurethane 5%\n부드러운 레이온과 내구성 좋은 폴리, 스판이 혼방되어 탄력 있고 부드러운 촉감을 제공합니다.',
    materialAndCare: '원단의 핏 유지를 위해 드라이클리닝을 강력히 권장합니다. 스팀 다림질 시 다리미가 직접 닿지 않도록 약간 떨어뜨려 사용하세요.',
    recommendation: 'Wool Double Tailored Jacket과 한 쌍의 셋업으로 코디하거나, 심플한 티셔츠 하나에 클리퍼/첼시 부츠를 매치하기 좋습니다.',
    exchangeAndRefund: '수령 후 7일 이내 교환 신청이 가능합니다. 착용 후 허리 구김이나 밑단 끌림 흔적이 없어야 합니다.',
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
    productDetails: '얇고 섬세한 3개의 스트랩 라인이 발등을 미니멀하게 감싸주는 가죽 샌들입니다. 쿠셔닝 인솔을 내장하여 오랫동안 착화해도 발의 피로도가 적습니다.',
    sizeGuide: '정사이즈로 출시되었습니다. 발볼이 넓거나 발등이 높은 편이시라면 반 사이즈 업을 추천드립니다. (굽 높이: 3cm)',
    material: '갑피: 천연 소가죽 (Cowhide 100%)\n내피: 합성피혁\n창: 이탈리아 라버 솔\n은은한 광택과 유연한 질감의 소가죽을 사용하여 가죽 고유의 멋이 살아있습니다.',
    materialAndCare: '가죽 전용 클리너로 오염을 닦아내세요. 물에 젖었을 경우 직사광선을 피하고 통풍이 잘 되는 그늘에서 말려주셔야 가죽 경화를 막을 수 있습니다.',
    recommendation: '와이드 트라우저 밑단 아래로 살짝 보이는 미니멀 스트랩이 매력적이며, 여름철 드레스나 리넨 팬츠에도 가볍게 어울립니다.',
    exchangeAndRefund: '실내 착화 테스트만 마친 상태(야외 착화 흔적 및 가죽 주름 없음)에서만 수령 후 7일 이내 교환 및 반품이 가능합니다.',
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
    productDetails: '클래식한 은장 버클 디테일과 세련된 라운드 토가 조화를 이루는 프리미엄 레더 로퍼입니다. 수제화 공정으로 신을수록 발 모양에 맞추어 편안하게 길들어집니다.',
    sizeGuide: '정사이즈입니다. 양말과 함께 착용하시려면 평소 신으시는 정사이즈를 선택하세요. (굽 높이: 3.5cm)',
    material: '갑피: 천연 소가죽 (Cowhide 100%)\n외피 및 내피 모두 질 좋은 천연 소가죽을 사용하여 땀 흡수와 통기성이 우수합니다.',
    materialAndCare: '착용 후 슈키퍼를 사용하여 형태를 유지해 주시고, 한 달에 한 번 가죽 영양 크림을 발라주시면 오래도록 광택을 유지할 수 있습니다.',
    recommendation: '데님 팬츠를 롤업하여 버클 디테일을 드러내거나, 양말과 함께 스커트/와이드 슬랙스에 클래식하게 스타일링하세요.',
    exchangeAndRefund: '실외 착화 흔적이 없고 발등 가죽에 접힘 주름이 생기지 않은 경우에 한해 7일 이내 교환/반품 가능합니다.',
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
    productDetails: '날렵하고 날카로운 포인티드 토 라인이 돋보이는 화이트 첼시 부츠입니다. 신축성이 뛰어난 밴딩 처리로 착탈화가 편리하며 시크한 느낌을 연출합니다.',
    sizeGuide: '앞코가 좁아지는 포인티드 토 특성상 한 사이즈 업(5mm)을 권장합니다. (굽 높이: 4.5cm)',
    material: '갑피: 양가죽 (Sheepskin 100%)\n소가죽에 비해 훨씬 유연하고 가벼운 양가죽을 적용하여 발을 부드럽게 감싸줍니다.',
    materialAndCare: '밝은 색상의 가죽 특성상 이염에 주의하세요. 오염 발생 시 양가죽 전용 에센스나 클리너를 부드러운 천에 묻혀 가볍게 문질러 주어야 합니다.',
    recommendation: 'Front Slit Wide Pants나 롱 드레스 아래에 매치해 스타일리시하면서도 시크한 포인트를 주기 좋습니다.',
    exchangeAndRefund: '시착 시 가죽 특성상 발등에 심한 주름이 발생한 경우 반품 및 교환이 불가하니 착용에 주의해 주세요.',
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
    productDetails: '각이 단단하게 잡힌 미니멀한 스퀘어 숄더백입니다. 은은한 버건디와 클래식 블랙 컬러로 구성되어 있으며, 자석 스냅 버클로 소지품 수납이 편리합니다.',
    sizeGuide: '가로 22cm x 세로 18cm x 폭 7.5cm / 스트랩 길이: 48-56cm (조절 가능)\n소형 소지품(지갑, 쿠션, 립스틱, 스마트폰 등)이 여유 있게 들어가는 미니~미디움 사이즈입니다.',
    material: '천연 소가죽 (Cowhide 100%)\n스크래치에 강한 은가공 소가죽 원단을 사용하여 실용성을 극대화했습니다.',
    materialAndCare: '직사광선과 습기를 피하고 보관 시 내부 보충재를 채워 전용 더스트 백에 넣어 보관하세요.',
    recommendation: '모노톤이나 무채색 의상에 버건디 컬러 가방을 매치하면 감각적인 포인트 스타일링이 완성됩니다.',
    exchangeAndRefund: '버클 부분의 보호 비닐 미제거 및 가죽 스크래치가 없는 미사용 상태일 경우 수령 후 7일 이내 교환 가능합니다.',
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
    productDetails: '자연스럽게 처지는 슬라우치 실루엣이 매력적인 호보백입니다. 넉넉한 수납공간과 보이지 않는 내장 지퍼 포켓으로 데일리백으로 높은 활용도를 자랑합니다.',
    sizeGuide: '가로 34cm x 세로 28cm x 폭 11cm\nA4 용지와 태블릿 PC 수납이 가능한 넉넉한 데일리 사이즈입니다.',
    material: 'Soft Cowhide 100%\n오일 가공을 거친 매우 부드럽고 촉촉한 터치감의 슈렁큰 소가죽을 사용하였습니다.',
    materialAndCare: '가죽 오염 시 마른 천으로 부드럽게 닦아주시고, 가죽 에센스로 정기적인 케어를 해주시면 가죽 결이 오랫동안 유지됩니다.',
    recommendation: '재킷이나 코트 등 어떤 아우터와도 잘 어울리며 natural 한 코디를 연출할 때 최적의 아이템입니다.',
    exchangeAndRefund: '7일 이내 교환 및 반품이 가능하나, 가죽 가방 특성상 모서리 마모나 스크래치 발생 시 반품이 제한될 수 있습니다.',
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
    productDetails: '빈티지한 호박색 패턴이 인상적인 아세테이트 프레임 안경입니다. 고품질 아세테이트 재질로 깊이 있는 광택감을 자랑하며, 미니멀한 룩에 지적이고 클래식한 분위기를 더해줍니다.',
    sizeGuide: '전체 가로 145mm / 렌즈 가로 48mm / 렌즈 세로 42mm / 브릿지 20mm / 템플 길 148mm',
    material: 'High-Grade Acetate 100%\n플라스틱보다 견고하고 열 조절을 통한 피팅 수정이 용이한 고급 아세테이트 소재입니다.',
    materialAndCare: '안경 렌즈와 테는 동봉된 극세사 천으로 닦아주세요. 열에 민감하므로 여름철 차량 내부 등 고온의 장소에 노출시키지 마세요.',
    recommendation: 'Classic Cotton Shirt 및 니트와 함께 착용하여 클래식하고 지적인 룩을 완성해 보세요.',
    exchangeAndRefund: '렌즈 보호 필름 제거 시 또는 안경 다리 불균형 피팅 조절 후에는 반품 및 교환이 불가합니다.',
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
    productDetails: '부드러운 오벌(타원형) 은장 버클 디테일이 돋보이는 얇은 미니멀 레더 벨트입니다. 정교하게 마감된 가죽 에지 코트와 깔끔한 벨트 고리로 완성도를 높였습니다.',
    sizeGuide: '폭 2.5cm / 총장 105cm (24인치~30인치까지 착용 가능하도록 버클 홀이 위치해 있습니다.)',
    material: '천연 소가죽 (Cowhide 100%)\n단단하면서도 유연하여 착용할수록 허리 라인에 맞춰 가죽이 부드럽게 감깁니다.',
    materialAndCare: '가죽에 물이 닿지 않도록 주의하시고, 보관 시 구부러지지 않게 걸어두거나 크게 말아 보관하세요.',
    recommendation: 'Deep Tuck Wide Trousers나 슬랙스는 물론, 셔츠/원피스 위에 허리 라인을 잡는 용도로 매치하면 세련된 포인트가 됩니다.',
    exchangeAndRefund: '가죽 홀 구멍 사용 흔적이 없는 미착용 제품에 한하여 수령 후 7일 이내 반품 가능합니다.',
    imgUrl: '/media/Product/Acc002.png'
  }
];