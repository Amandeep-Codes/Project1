import React, { useContext } from 'react'
import { StoreContext } from '../contex/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ( category) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div>
        <div id='food-display' className="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {
                    food_list.map((item,index)=>{
                        return(
                            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                        )

                    })
                }
            </div>

        </div>
      
    </div>
  )
}

export default FoodDisplay
