import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    //http://localhost:5173/verify?success=true&orderId=6654a4e3701ef5225a821b9d
    // verify page:  /verify
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }else{
            navigate("/") 
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])


  return (
     <div className="verify">
        <div className="spinner">

        </div>
     </div>
  )
}

export default Verify