import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../contex/StoreContext'

const FoodItem = ({id,name,description,image,price}) => {
    //const [itemCount,setItemCount]= useState(0)
    
    const{cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img   className='food-item-image' src={image} alt='foodImage'/>
            {
                !cartItems[id]// 
                ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt='icon' />
                // changed setItemCount(prev=>prev+1) to
                : <div className="food-item-counter"> 
                    <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='remove-icon'/>
                    <p>{cartItems[id]}</p>
                    <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='icon'/>
                  </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='rating'/>
            </div>
            <p className="food-item-desc"> {description}</p>
            <p className="food-item-price"> ${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
