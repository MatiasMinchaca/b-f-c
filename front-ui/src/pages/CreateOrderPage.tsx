import React, { useEffect, useState } from 'react';
import CreateOrder from '../components/CreateOrder';
//import '../styles/CreateOrder.css';

const CreateOrderPage: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [orderItems, setOrderItems] = useState<{ productId: string; quantity: number }[]>([]);

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:3001/api/products');
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSubmitOrder = async () => {
        if (orderItems.length === 0) {
            alert('No hay productos en la orden.');
            return;
        }
    
        const productsForOrder = orderItems.map(item => ({
            product: item.productId,
            quantity: item.quantity,
        }));
    
        const response = await fetch('http://localhost:3001/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ products: productsForOrder }),
        });
    
        if (response.ok) {
            alert('Orden creada!');
            setOrderItems([]);
        } else {
            alert('Error al crear la orden.');
        }
    };    

    return (
        <div className="create-order-page">
            <h1>Crear Orden</h1>
            <CreateOrder
                products={products}
                orderItems={orderItems}
                setOrderItems={setOrderItems}
                handleSubmitOrder={handleSubmitOrder}
            />
        </div>
    );
};

export default CreateOrderPage;
