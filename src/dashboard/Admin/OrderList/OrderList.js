import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './OrderList.css';

const OrderList = () => {

    const [orderList, setOrderList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/order-list')
        .then(res => res.json())
        .then(data => {
            setOrderList(data)
        })
    }, [])

    const orderOption = [
        {'value': 'pending', 'label': 'Pending'},
        {'value': 'done', 'label': 'Done'}
    ];

    const handleOrderStatus = (e, order) =>{
        const orderStatus = e.target.value;
        const URL = `http://localhost:5000/update-order-status/${order._id}`;
        fetch(URL, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: orderStatus})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                Swal.fire({
                    icon: 'success',
                    title: 'Order Status Update Successfully',
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        })
    }

    return (
        <>
            <div id="orderlist">
                <div className="table-responsivee">
                    <table class="table">
                        <thead class="orderlist__header">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className='orderlist__body'>
                            {
                                orderList.map(order => <tr key={order._id}>
                                    <td>{order.fullName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.bookingService.title}</td>
                                    <td>Creadit Card</td>
                                    <td>
                                        <select onChange={(e)=>handleOrderStatus(e, order)}>
                                            {
                                                orderOption.map(op => <option key={op} selected={order.bookingStatus === op.value} value={op.value}>{op.label}</option> )
                                            }
                                        </select>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>  
                </div>  
            </div>
        </>
    );
};

export default OrderList;