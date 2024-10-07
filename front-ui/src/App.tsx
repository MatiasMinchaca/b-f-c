import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ProductListPage from './pages/ProductListPage';
import OrderListPage from './pages/OrderListPage';
import CreateOrderPage from './pages/CreateOrderPage';
//import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <header className="app-header">
          <h1 className="app-title">SuperSano</h1>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/productlist" element={<ProductListPage />} />
            <Route path="/orderlist" element={<OrderListPage />} />
            <Route path="/create-order" element={<CreateOrderPage />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Ven a SuperSano, un restaurant con buena comida. 😉</p>
        </footer>
      </Router>
    </div>
  );
};

export default App;
