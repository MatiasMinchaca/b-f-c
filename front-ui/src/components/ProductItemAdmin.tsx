import React from 'react';

interface ProductItemProps {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  onDelete: () => void;
  onEdit: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onDelete, onEdit }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button className="edit-button" onClick={onEdit}>Editar</button>
      <button className="delete-button" onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default ProductItem;
