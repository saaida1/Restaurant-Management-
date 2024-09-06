import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    
    const {food_list} = useContext(StoreContext) //this list is the one that contains best sells
  return (
    <div className='food-display' id='food-display'>
        <h1>Our best sales</h1>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>
        
      
    </div>
  )
}

export default FoodDisplay
