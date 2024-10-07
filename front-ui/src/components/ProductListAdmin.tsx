import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItemAdmin';
import ProductForm from './ProductFormAdmin';
//import '../styles/ProductList.css';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3001/api/products');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:3001/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  const handleEdit = (id: string) => {
    setIsEditing(true);
    setEditingProductId(id);
  };

  const handleSuccess = () => {
    setIsEditing(false);
    setEditingProductId(null);
    fetchProducts();
  };

  return (
    <div className="product-list-container">
      <h1>Lista de Productos</h1>
      <div className="product-form-container">
        {isEditing ? (
          <ProductForm productId={editingProductId} onSuccess={handleSuccess} />
        ) : (
          <ProductForm onSuccess={handleSuccess} />
        )}
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem 
            key={product._id} 
            product={product} 
            onDelete={() => handleDelete(product._id)} 
            onEdit={() => handleEdit(product._id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;