import React from 'react';
import Cart from '../Cart/Cart';
import UseCart from '../Hooks/UseCart';
import UseProducts from '../Hooks/UseProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [product, setProduct] = UseProducts()
    const [cart, setCart] = UseCart(product);

    const handleRemoveProduct = product => {
        console.log(product);

        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
    }
    return (
        <div className='grid lg:grid-cols-[4fr,1fr] sm:grid-cols-[3fr,1fr] grid-cols-[1fr,1fr]'>
            <div className='sm:mx-[100px] sm:my-[50px] grid grid-cols-1 lg:gap-[25px] ml-auto'>
                {
                    cart.map(product => <ReviewItem
                        handleRemoveProduct={handleRemoveProduct}
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }


            </div>
            <div className='bg-orange-400 sticky top-0 h-[900px] ml-auto'>
                <Cart cart={cart}></Cart>
            </div>

            {/* <h2 className="bg-primary"> this is Orders {product.length}</h2>
            <p>cart has {cart.length}</p> */}
        </div>
    );
};

export default Orders;