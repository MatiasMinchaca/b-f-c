import React from 'react';
import ProductList from '../components/ProductListAdmin';

const Admin: React.FC = () => {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <ProductList />
    </div>
  );
};

export default Admin;
