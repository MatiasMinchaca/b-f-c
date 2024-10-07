import React from 'react';
//import '../styles/CreateOrder.css'; 

const OrderItem: React.FC<{
  product: any;
  onAdd: () => void;
  onRemove: () => void;
  quantity: number;
}> = ({ product, onAdd, onRemove, quantity }) => {
  return (
    <li className="product-item">
      <span>{product.name} - ${product.price}</span>
      <div>
        <button onClick={onAdd}>+</button>
        <button onClick={onRemove}>-</button>
        {quantity > 0 && <span> (Cantidad: {quantity})</span>}
      </div>
    </li>
  );
};

const CreateOrder: React.FC<{
  products: any[];
  orderItems: { productId: string; quantity: number }[];
  setOrderItems: React.Dispatch<React.SetStateAction<{ productId: string; quantity: number }[]>>;
  handleSubmitOrder: () => Promise<void>;
}> = ({ products, orderItems, setOrderItems, handleSubmitOrder }) => {
  
  const handleAddToOrder = (productId: string) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find(item => item.productId === productId);
      if (existingItem) {
        return prevItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { productId, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromOrder = (productId: string) => {
    setOrderItems((prevItems) => {
      return prevItems.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0); // Filtrar productos con cantidad > 0
    });
  };

  return (
    <div className="create-order-container">
      <h2 className="create-order-header">Productos</h2>
      <ul className="product-list">
        {products.map((product) => {
          const orderItem = orderItems.find(item => item.productId === product._id);
          return (
            <OrderItem
              key={product._id}
              product={product}
              onAdd={() => handleAddToOrder(product._id)}
              onRemove={() => handleRemoveFromOrder(product._id)}
              quantity={orderItem ? orderItem.quantity : 0}
            />
          );
        })}
      </ul>
      <h2 className="create-order-header">Productos en la Orden</h2>
      <ul className="order-list">
        {orderItems.map((item) => (
          <li key={item.productId} className="order-item">
            {item.productId} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
      <button className="create-order-button" onClick={handleSubmitOrder}>Crear Orden</button>
    </div>
  );
};

export default CreateOrder;
