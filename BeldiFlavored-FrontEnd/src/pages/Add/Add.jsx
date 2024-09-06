import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from '../../components/AdminSidebar/Sidebar'
import { ToastContainer } from 'react-toastify';


const Add = () => {
    const url = "http://localhost:8080"; // Ensure this matches your Spring Boot backend URL

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Soup"
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("foodItem", JSON.stringify(data)); // Convert data object to JSON string
        formData.append("image", image);
        try {
            const response = await axios.post(`${url}/api/food/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) { // Check for successful status
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Soup"
                });
                setImage(null);
                toast.success("Product added successfully");
            } else {
                toast.error("Failed to add product");
            }
        } catch (error) {
            toast.error("Error adding product: " + error.message);
        }
    };

    return (
        <>
        <div>
      <ToastContainer />
      
      <hr />
      <div className="app-content">
        <Sidebar />
        
        <div className='add'>
            
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' required />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write Content Here' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category" value={data.category}>
                            <option value="Soup">Soup</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Juices">Juices</option>
                            <option value="Kids-menu">Kids-menu</option>
                            <option value="Tajine">Tajine</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='100DH' required />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    </div>
    </div>
        </>
           );
}

export default Add;
