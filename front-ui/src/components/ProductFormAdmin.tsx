import React, { useEffect, useState } from 'react';
//import '../styles/ProductForm.css'; 

interface ProductFormProps {
  productId?: string | null;
  onSuccess: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ productId, onSuccess }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [restaurantId, setRestaurantId] = useState<string>(''); // Nuevo campo para el ID del restaurante

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        const response = await fetch(`http://localhost:3001/api/products/${productId}`);
        const data = await response.json();
        setName(data.name);
        setPrice(data.price);
        setRestaurantId(data.restaurantId);
      }
    };
    
    fetchProduct();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = productId ? 'PUT' : 'POST';
    const url = productId ? `http://localhost:3001/api/products/${productId}` : 'http://localhost:3001/api/products/';

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, restaurantId }), // Incluimos el restaurantId
    });

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nombre del producto" 
        required 
        className="product-form__input"
      />
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="Precio" 
        required 
        className="product-form__input"
      />
      <input 
        type="text" 
        value={restaurantId} 
        onChange={(e) => setRestaurantId(e.target.value)} 
        placeholder="ID del Restaurante" 
        required 
        className="product-form__input"
      />
      <button type="submit" className="product-form__button">
        {productId ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
};

export default ProductForm;
