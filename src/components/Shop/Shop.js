import React, { useEffect, useState } from 'react';
import data from '../../fakeData/products.JSON';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setProducts(data));
        }, []);

    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => setCart([...cart, product])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                
                {
                    products.map(product => 
                        <Product 
                            key={product.key} 
                            product={product}
                            handleAddProduct={handleAddProduct}
                        ></Product>)
                }
                
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;