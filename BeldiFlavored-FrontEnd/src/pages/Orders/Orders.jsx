import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";
import Sidebar from '../../components/AdminSidebar/Sidebar'
import { ToastContainer } from 'react-toastify';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const url = "http://localhost:8080";

    const fetchAllOrders = async () => {
        try {
            const response = await axios.get(`${url}/api/orders/list`);
            if (response.data) {
                setOrders(response.data);
            } else {
                toast.error("Error");
            }
        } catch (error) {
            toast.error("Error");
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        <>
        <div>
      <ToastContainer />
      
      <hr />
      <div className="app-content">
        <Sidebar />

        <div className='order add'>
           
            <h3>Order Page</h3>
            <div className='order-list'>
                {orders.map((order, index) => (
                    <div key={index} className='order-item'>
                        <img src={assets.parcel_icon} alt="" />
                        <div>
                            <p className='order-item-food'>
                                {order.items.map((item, idx) => {
                                    if (idx === order.items.length - 1) {
                                        return `${item.name} x ${item.quantity}`;
                                    } else {
                                        return `${item.name} x ${item.quantity}, `;
                                    }
                                })}
                            </p>
                            <p className="order-item-name">{`${order.address.firstName} ${order.address.lastName}`}</p>
                            <div className="order-item-address">
                                <p>{`${order.address.street},`}</p>
                                <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}</p>
                            </div>
                            <p className='order-item-phone'>{order.address.phone}</p>
                        </div>
                        <p>Items : {order.items.length}</p>
                        <p>${order.amount}</p>
                        <select>
                            <option value="Food Processing">Food Processing</option>
                            <option value="Out for delivery">Out for delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default Orders;
