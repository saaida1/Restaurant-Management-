import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from 'react-toastify'
import Sidebar from '../../components/AdminSidebar/Sidebar'
import { ToastContainer } from 'react-toastify';

const List = () => {

    const [list,setList] = useState([]);
    const url = "http://localhost:8080"
    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data) {
                setList(response.data);
            } else {
                toast.error("Error");
            }
        } catch (error) {
            toast.error("Error");
        }
    }
    

    const removeFood = async (foodId) => {
        try {
            const response = await axios.delete(`${url}/api/food/remove/${foodId}`);
            if (response.status === 200) {
                await fetchList();
                toast.success("Food item removed successfully");
            } else {
                toast.error("Error removing food item");
            }
        } catch (error) {
            toast.error("Error removing food item");
            console.error(error);  // Log the error to the console for debugging
        }
    }
    
    
    


    useEffect (()=>{
        fetchList();
    },[])
    return (
        <>
         <div>
      <ToastContainer />
      
      <hr />
      <div className="app-content">
        <Sidebar />
        
        <div className='list add flex-col'>
        <p>All Foods List</p>
        <div className="list-table">
            <div className="list-table-format title">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>
            {list.map((item,index)=>{
                return (
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images`+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p onClick={()=>removeFood(item.id)} className='cursor'>X</p>
                    </div>
                )
            })}
        </div>        
    </div>
    </div>
    </div>
    </>
    )
  
}

export default List