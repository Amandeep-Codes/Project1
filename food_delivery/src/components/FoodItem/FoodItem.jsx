import React from 'react'
import "./FoodItem.css"

const FoodItem = ({id,name,discription,image}) => {
  return (
    <div className='food-tem'>
        <div className="food-item-img-conatiner">
            <img  src={image} alt='foodImage'/>
             <h2>{name}</h2>
        </div>
      
    </div>
  )
}

export default FoodItem
