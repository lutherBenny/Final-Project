import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import CategoryProductDetail from './components/CategoryProductDetail';
import SalePage from './pages/SalePage'; // Adjust the path if necessary


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} /> {/* Assuming this is a products list */}
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Correct route for product details */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/category/:categoryName/:subCategoryName" element={<CategoryPage />} />
        <Route path="/category/:categoryName/product/:productId" element={<CategoryProductDetail />} />
        <Route path="/sale" element={<SalePage />} /> {/* Corrected here */}

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
