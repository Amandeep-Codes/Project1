import React, { useContext } from "react";
import { StoreContext } from "../../components/contex/StoreContext";
import { food_list } from "../../assets/assets";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="order" />
                  <p>{item.name} </p>
                  <p> INR{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>INR{cartItems[item._id] * item.price}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="remove"
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2> Cart total </h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>INR{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>INR{getTotalCartAmount()===0?0 :20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>INR{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p> Enter Promocode to avail offer.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
