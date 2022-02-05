import React from 'react';
import './Product.css';

const Product = (props) => {
    const {key,name,stock,img} = props.product;
    return (
        <div>
            <h1>Name:{name}</h1>
            <h1>Stock:{stock}</h1>
        </div>
    );
};

export default Product;