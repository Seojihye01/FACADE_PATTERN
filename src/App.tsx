import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";

import Main from './components/Main';
import Collection from './components/Collection';
import ProductDetail from './components/ProductDetail';
import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartProvider } from './CartContext'; // 1. CartProvider 불러오기

function App() {
  const location = useLocation();

  return (
    /* 2. 전체를 CartProvider로 감싸줍니다 */
    <CartProvider>
      <Header />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;