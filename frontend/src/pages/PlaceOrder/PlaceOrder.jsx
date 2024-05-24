import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount}= useContext(StoreContext);
  return (
      <form className="place-order">
          <div className="place-order-left">
              <p className="title">Delivery Information</p>
              <div className="multi-fields">
                <input type="text" placeholder='First name' name="" id="" />
                <input type="text" placeholder='Last name' name="" id="" />
              </div>
              <input type="text" placeholder='Email Address' name="" id="" />
              <input type="text" placeholder='Steet' name="" id="" />
              <div className="multi-fields">
                <input type="text" placeholder='Zip Code' name="" id="" />
                <input type="text" placeholder='Country' name="" id="" />
              </div>
              <input type="text" placeholder='Phone' name="" id="" />
          </div>
          <div className="place-order-right">
          <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
              <div className="cart-total-details">
                      <p>Subtotal</p>
                      <p>{getTotalCartAmount()}</p>
                  </div>
                  <hr/>
                  <div className="cart-total-details">
                      <p>Delivery Fee</p>
                      <p>${getTotalCartAmount()===0?0:2}</p>
                  </div>
                  <hr/>
                  <div className="cart-total-details">
                      <p>Total</p>
                      <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                  </div>
                  <hr/>
              </div>
              <button onClick={()=>navigate('')}>PROCEED TO PAYMENT</button>
            </div>
          </div>

      </form>
  )
}

export default PlaceOrder