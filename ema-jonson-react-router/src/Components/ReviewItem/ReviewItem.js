import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {

    const { name, price, shipping, quantity } = props.product
    return (
        <div>
            <h3>Name:{name}</h3>
        </div>
    );
};

export default ReviewItem;