import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // getting all products from api 

    const [products,setProducts] = useState([]);
    useEffect(function (){
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])
  


    
    return (
        <div className='shop-container'>
                {/* products container  */}
            <div className="shop-product">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>


                {/* cart container  */}
            <div className="shop-cart">
                <h1>Order Summary </h1>
            </div>
        </div>
    );
};

export default Shop;