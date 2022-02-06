import React from 'react';
import './Product.css';

const Product = (props) => {
    const {key,name,stock,img,seller,price,star,features} = props.product;
    return (
        <div className='product-container'>
            
            <div className="product-image">
                <img src={img} alt="" srcset="" />
            </div>

            <div className="product-details">
                <h3>Name:{name}</h3>
                <p>by:{seller}</p>
                <p>price:{price}</p>
                <p><small>Only {stock} left in stock,order soon </small></p>
                <div>
                    <p>star:{star}</p>
                    <div>
                    {features.map(feature => <p>{feature.description}:{feature.value}</p>)}
                     </div>
                </div>
                <button>Add to cart</button>

            </div>
            
        </div>
    );
};

export default Product;