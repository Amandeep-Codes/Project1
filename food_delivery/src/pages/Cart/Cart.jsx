import React, { useContext } from 'react'
import { StoreContext } from '../../components/contex/StoreContext'
import { food_list } from '../../assets/assets';

const Cart = () => {
  const {cartItems,food_items,removeFromCart}=useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br/>
      <hr/>
      {food_list.map((item,index)=>{
        if(cartItems[item._id]>0)
        {
          return( <div className="cart-tems-title cart-items-item">
            <p>{item.name}</p>
            <img  src={item.image} alt='image'/>
            <p>{item.name} </p>
            <p> {item.price}</p> 
            <p>{cartItems[item._id]}</p>
            <p>{cartItems[item._id]*item.price}</p>
            <p>X</p>

        

          </div> 

          )
        }

      })}
      
    </div>
  )
}

export default Cart
