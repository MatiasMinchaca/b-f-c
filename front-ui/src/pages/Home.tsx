import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container"> {/* Agrega una clase a la div principal */}
      <h1 className="home-title">Panel Principal</h1> {/* Aplica la clase del título */}
      <nav className="home-nav"> {/* Aplica la clase al nav */}
        <ul className='home-ul'> {/* Aplica la clase a la lista */}
          <li className="home-li"><Link to="/admin">Administración de Productos</Link></li>
          <li className="home-li"><Link to="/productlist">Lista de Productos</Link></li>
          <li className="home-li"><Link to="/orderlist">Lista de Órdenes</Link></li>
          <li className="home-li"><Link to="/create-order">Crear Ordenes</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
