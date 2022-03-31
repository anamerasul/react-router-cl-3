import React from 'react';
import UseProducts from '../Hooks/UseProduct';
import './Orders.css'
const Orders = () => {
    const [product, setProducts] = UseProducts()
    return (
        <div>
            <h2 className="bg-primary"> this is Orders {product.length}</h2>
        </div>
    );
};

export default Orders;