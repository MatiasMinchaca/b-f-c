import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container"> 
      <h1 className="home-title">Panel Principal</h1> 
      <nav className="home-nav">
        <ul className='home-ul'> 
          <li className="home-li"><Link to="/admin">Administración de Productos</Link></li>
          <li className="home-li"><Link to="/productlist">Lista de Productos</Link></li>
          <li className="home-li"><Link to="/orderlist">Lista de Órdenes</Link></li>
          <li className="home-li"><Link to="/create-order">Crear Ordenes</Link></li>
          <li className="home-li"><Link to="/create-restaurant">Crear Ordenes</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
