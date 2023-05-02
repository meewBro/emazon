import React, { useEffect, useState } from 'react';
import data from '../../fakeData/products.JSON';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setProducts(data));
        }, []);
    return (
        <div className='shop-container'>
            <div className='product-container'>
                
                {
                    products.map(product => <Product key={product.key} product={product}></Product>)
                }
                
            </div>
            <div className='cart-container'>
                <h3>THIS IS Cart</h3>
            </div>
        </div>
    );
};

export default Shop;