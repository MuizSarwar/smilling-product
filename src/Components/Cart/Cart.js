import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart-container'>
            <h2>Order Summary </h2>
            <h4>Items you ordered:0 </h4>
            
            <div>
                <span>Items:</span>
                <span>0</span>
            </div>
            <div>
                <span>Shipping and  Handling:</span>
                <span>0</span>
            </div>
            <div>
                <span>Total before taxt :</span>
                <span>0</span>
            </div>
            <div>
                <span>Estimated Tax:</span>
                <span>0</span>
            </div>
            <div>
                <h3>Order Total:</h3>
                <h3>0</h3>
            </div>
            <button>Review order</button>
        </div>
    );
};

export default Cart;