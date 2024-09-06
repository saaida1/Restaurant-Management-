import React from 'react'
import './SaisonIngr.css'
import { saison_Ingr } from '../../assets/assets'

const SaisonIngr = ({category,setCategory}) => {
  return (
    <div className='saison-ingr' id='saison-ingr'>
         <hr />
        <h1>Seasonal Ingredients</h1>
        <p className='saison-ingr-text'>
        Indulge in the vibrant flavors of the season with our handpicked selection of fresh, irresistible ingredients.
        </p>
        <div className="saison-menu-list">
            {saison_Ingr.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)} key={index} className="saison-menu-list-items">
                        <div className="img-container">
                        <img className={category===item.name?"active":""} src={item.image} alt="" />
                        </div>
                        <p>{item.name}</p>

                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default SaisonIngr
