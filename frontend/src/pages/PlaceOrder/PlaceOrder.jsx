import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const {getTotalCartAmount,token,food_list,cartItems,url}= useContext(StoreContext);
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems =[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo)
      }
    })
    console.log(orderItems);
    let orderData ={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
        const {session_url} = response.data; 
        window.location.replace(session_url);
    }else{
      alert("Error")
    }
    
  }
  
  // Not allowing user to navigate >> Proceed To checkout payment Gateway >> without login
  useEffect(()=>{
    console.log(data);
    if(!token){
      navigate('/cart')
    }else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }

  },[token])

  return (
      <form className="place-order" onSubmit={placeOrder}>
          <div className="place-order-left">
              <p className="title">Delivery Information</p>
              <div className="multi-fields">
                <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' id="" />
                <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name'  id="" />
              </div>
              <input required name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder='Email Address'  id="" />
              <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder='Steet'  id="" />
              <div className="multi-fields">
                <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City' id="" />
                <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder='State' id="" />
              </div>
              <div className="multi-fields">
                <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code'  id="" />
                <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'  id="" />
              </div>
              <input  required name="phone" onChange={onChangeHandler} value={data.phone} type="number" placeholder='Phone'  id="" />
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
              <button type='submit' onClick={()=>navigate('')}>PROCEED TO PAYMENT</button>
            </div>
          </div>

      </form>
  )
}

export default PlaceOrder