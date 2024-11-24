const filterOrders = (orders, filter ) =>{
    return orders.filter((order) => {
        if (filter === 'all') return true;
        return order.status === filter;
      });
}
export default filterOrders