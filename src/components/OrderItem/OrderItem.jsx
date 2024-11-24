import React, { useState } from 'react';
import './OrderItem.scss';
const OrderItem = ({order, onToggleStatus}) =>{
    return(
       
            <ul className='list-group'>
                <li className='list-group-item'>
                    <div className='order-content'> 
                    <p>Order: {order.title} Status: {order.status}</p>
                    </div>
                    <button className='mt-2' onClick={() => onToggleStatus(order.id)}>
                        Change Status
                    </button>
                </li>
            </ul>
       
        
    )
}
export default OrderItem