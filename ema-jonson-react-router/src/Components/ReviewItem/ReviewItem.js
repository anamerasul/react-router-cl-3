import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {

    const { name, img, price, shipping, quantity } = props.product
    return (
        <div className='border-2 my-2 flex'>
            <div className='w-1/4'>
                <img className='' src={img} alt="img" />
            </div>

            <div className="review-detail-container flex justify-between w-full">
                <div className="reviewDetails">
                    <p title={name}>name:{name.length > 20 ? name.slice(0, 15) + '...' : name}</p>
                    <p>Price: <span>{price}</span></p>
                    <p><small>shipping:{shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-container ml-20 my-10">
                    <button className='rounded-full bg-black text-white w-24'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;