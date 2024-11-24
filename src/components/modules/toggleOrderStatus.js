const toggleOrderStatus = (orders, id) =>{
    return orders.map((order) =>{
        order.id == id ?{ ...order, status: order.status === 'finished' ? 'unfinished' : 'finished' }
        : order
    })
}
export default toggleOrderStatus