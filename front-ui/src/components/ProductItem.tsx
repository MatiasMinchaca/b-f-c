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
    </div>
  );
};

export default ProductItem;
