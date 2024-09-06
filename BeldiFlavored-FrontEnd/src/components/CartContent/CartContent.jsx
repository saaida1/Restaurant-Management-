import React, { useState, useEffect } from 'react';
import './CartContent.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CartContent = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
      let ans = 0;
      cart.map((item)=>(
          ans += item.amount * item.price
      ))
      setPrice(ans);
  }

  const handleRemove = (id) =>{
      const arr = cart.filter((item)=>item.id !== id);
      setCart(arr);
  }

  useEffect(()=>{
      handlePrice();
  })

  const initialOptions = {
    clientId: "AUMWRX4IDg5vJcHvwOEMVZ1dAj6LfgroA8gWz4T-HqE_2_X4H4Djvxkatrwe0YNvruOI3HBHDsUA0u45",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className='container'>
      <div className="sec1">
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                    <img src={`http://localhost:8081/${item.cover}`} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}DH</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}</div>
        <div className='sec2'>
          <h2>Total Price of your Cart</h2>
          <hr />
          <div className="subtotal">
            <span>Subtotal :</span>
            <div className="pricet">{price} DH</div>
          </div>
          <label htmlFor="delivery">Select Delivery Option:</label>
          <select id="delivery" name="delivery">
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
          <div className="checkout">
            
              <h3>Check out</h3>
              </div>
            <PayPalButtons style={{
              color: "gold",
              shape: "rect",
              label: "pay",
              height: 40,
            }} 
            />
          
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default CartContent;