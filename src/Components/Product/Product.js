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
                <h3>{name}</h3>
                <p>by:{seller}</p>
                <div className='product-others-details'>
                    <div>
                        <p>price:{price}</p>
                        <p><small>Only {stock} left in stock,order soon </small></p>
                        <button className='style-btn'>Add to cart</button>

                    </div>
                    <div>
                        <p>star:{star}</p>
                        <div>
                            {features.map(feature => <p>{feature.description}:{feature.value}</p>)}
                        </div>
                    </div>
                </div>
                

            </div>
            
        </div>
    );
};

export default Product;