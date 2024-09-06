
import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './pages/Menu/menu'
import Cart from './pages/Cart/Cart'
import './components/menu-components/section/section.css'
import About from './pages/About/About'
import Sign_up from './pages/Sign_up/Sign_up'
import Sign from './pages/Sign/Sign'
import ReservationTable from './pages/ReservationTable/ReservationTable'
import ReservationConfirmation from '../src/components/ReservationConfirmation/ReservationConfirmation'
import { AuthProvider } from './Context/AuthContext'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UserDashboard from './pages/UserDashboard/UserDashboard'

// const App = () => {
//   const [cart,setCart] = useState([])
//   const [warning, setWarning] = useState(false);


  
//   const handleClick = (item)=>{
//     let isPresent = false;
// 		cart.forEach((product)=>{
// 			if (item.id === product.id)
// 			isPresent = true;
// 		})
// 		if (isPresent){
// 			setWarning(true);
// 			setTimeout(()=>{
// 				setWarning(false);
// 			}, 2000);
// 			return ;
// 		}
// 		setCart([...cart, item]);
//   } 


// const handleChange = (item, change) => {
//     const updatedCart = cart.map(cartItem => {
//         if (cartItem.id === item.id) {
           
//             const newAmount = Math.max(cartItem.amount + change, 1);
//             return { ...cartItem, amount: newAmount };
//         }
//         return cartItem;
//     });
//     setCart(updatedCart);
// };
const App = () => {
  const [cart,setCart] = useState([])
  const [warning, setWarning] = useState(false);


  
  const handleClick = (item)=>{
    let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
    setCart([...cart, { ...item, amount: 1 }]);
  } 

  const handleChange = (item, change) => {
    const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
           
            const newAmount = Math.max(cartItem.amount + change, 1);
            return { ...cartItem, amount: newAmount };
        }
        return cartItem;
    });
    setCart(updatedCart);
};


  return (
    <>
    <AuthProvider>
    
        <div className='app'>
            <NavBar size={cart.length}/>
            {warning && <div className='warning'>Item is already added to your cart</div>}
            <div className='main-layout'>
              
            <Routes>
                < Route path='/' element={<Home/>} />


                < Route path='/menu' element={<Menu handleClick={handleClick}/>}/>
                < Route path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
			        	
                
                < Route path='/About' element={<About/>} />


                < Route path='/ReservationTable' element={<ReservationTable/>}/>   
                < Route path="/reservation-confirmation" element={<ReservationConfirmation/>} />
                

                < Route path='/Sign_up' element={<Sign_up/>} />
                < Route path='/Sign' element={<Sign/>} />
                

                <Route path="/Add" element={<Add/>} />
                <Route path="/List" element={<List/>} />
                <Route path="/Orders" element={<Orders/>} />


                  < Route path='/UserDashboard' element={<UserDashboard/>}/>


            </Routes>
              </div>
        </div>
        
      
        <Footer/>
        
    </AuthProvider>
    </>
  )
}

export default App
