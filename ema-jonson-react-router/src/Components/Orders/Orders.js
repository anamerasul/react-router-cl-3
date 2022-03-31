import React from 'react';
import UseCart from '../Hooks/UseCart';
import UseProducts from '../Hooks/UseProduct';
import './Orders.css'
const Orders = () => {
    const [product, setProducts] = UseProducts()
    const [cart, setCart] = UseCart(product)
    return (
        <div>
            <h2 className="bg-primary"> this is Orders {product.length}</h2>
            <p>cart has {cart.length}</p>
        </div>
    );
};

export default Orders;