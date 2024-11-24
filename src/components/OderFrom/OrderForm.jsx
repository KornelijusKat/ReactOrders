import React, {useState} from 'react'

const OrderForm = ({onAddOrder}) =>{
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') return;
        onAddOrder(title); 
        setTitle(''); 
      };
    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter order'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className="ms-2 mb-2"type="submit">Add Order</button>
        </form>
    )
}
export default OrderForm