import React from 'react';

const OrderList = (props) => {
    console.log(props)
    const { orders } = props;
    let count = 0;
    for (const meal of orders) {
        count = count + meal.quantity;
    }

    return (
        <div>
            <h2>Order List</h2>
            <h4>Items Ordered: {count}</h4>
            <h4>Name:{ }</h4>

        </div>
    );
};

export default OrderList;