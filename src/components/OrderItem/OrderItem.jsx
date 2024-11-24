import React, { useState } from 'react';
import './OrderItem.scss';
const OrderItem = ({order, onToggleStatus}) =>{
    return(
       
            <ul className='list-group'>
                <li className='list-group-item'>
                    <div className='order-content'> 
                        <p>Order: {order.title} Status: {order.status}</p>
                    </div>
                    <button className='btn btn-primary' onClick={() => onToggleStatus(order.id)}>
                        Complete
                    </button>
                </li>
            </ul>
       
        
    )
}
export default OrderItem