import React, { useState } from 'react';
import OrderItem from '../OrderItem/OrderItem';
const OrderList = ({orders, onToggleStatus}) =>{
    if (orders.length === 0) {
        return <p>No orders. Add a new order!</p>;
      }
      return (
        <div className="order-list">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} onToggleStatus={onToggleStatus} />
          ))}
        </div>
      );
}
export default OrderList