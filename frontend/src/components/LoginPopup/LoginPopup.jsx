import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

export const LoginPopup = ({setShowLogin}) => {
    const {url,setToken} = useContext(StoreContext);
    const [currState,setCurrState] = useState("Login");
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler = (event) =>{
            const name = event.target.name;
            const value = event.target.value;
            setData(data=>({...data,[name]:value}))
    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    const onLogin = async (event) =>{
            event.preventDefault();
            let newUrl = url;
            if(currState ==="Login"){
                newUrl+="/api/user/login"
            }else{
                newUrl+="/api/user/register"
            }
            const response = await axios.post(newUrl,data);
            if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token);
                setShowLogin(false)
            }else{
                alert(response.data.message)
            }
    }
  

  return (
    <div className="login-popup">
        <form className="login-form-container" onSubmit={onLogin}>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}              
                <input type="email" name="email" onChange={onChangeHandler} value={data.email} id="" placeholder='Your Email' required/>
                <input type="password" name="password" onChange={onChangeHandler} value={data.password} id="" placeholder='Password' required/>
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required />
                <p>By Continuing, I agree to the terms of use & privacy Policy.</p>
            </div>
            {currState==="Login"
             ?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
             :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}
