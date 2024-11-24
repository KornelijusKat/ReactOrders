import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import OrderForm from './components/OderFrom/OrderForm'
import OrderList from './components/OrderList/OrderList'
import filterOrders from './components/modules/filterOrders'
function App() {
  const [orders, setOrders] = useState([]);
  const[filter, setFilter] = useState('all')
  const addOrder = (title) => {
    setOrders((prev) => [
      ...prev,
      { id: Date.now(), title, status: 'unfinished' },
    ]);
  };
  const toggleOrderStatus = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status: order.status === 'finished' ? 'unfinished' : 'finished' }
          : order
      )
    );
  };
  return (
    <div className="container">
      <h1>Order management system</h1>
      <OrderForm onAddOrder={addOrder} />
      <div className="card">
        <div className="card-buttons d-flex justify-content-center">
          <div className="filter-buttons">
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('finished')}>finished</button>
            <button onClick={() => setFilter('unfinished')}>Unfinished</button>
          </div>
        </div>
        <OrderList orders={filterOrders(orders,filter)} onToggleStatus={toggleOrderStatus} />
      </div>
    </div>
  );
}

export default App
