import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className='product-name'>
                <h4>{props.product.name}</h4>
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <p><small>Only {props.product.stock} left in stock - Order Soon</small></p>
                <button  
                    className='cart-button'
                    onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;