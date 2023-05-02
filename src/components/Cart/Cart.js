import React from 'react';

const Cart = (props) => {
    const cost = props.cart.reduce((total,prd) => total + prd.price, 0)
    const vat = cost/10
    const total = cost + vat + 50

    const formatNumber = num =>{
        const precision = num.toFixed(2)
        return Number(precision)
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {props.cart.length}</p>
            <p>Cost: {formatNumber(cost)}</p>
            <p>Shipping Cost: {50}</p>
            <p>10% VAT: {formatNumber(vat)}</p>
            <p>Total Cost: {formatNumber(total)}</p>
        </div>
    );
};

export default Cart;