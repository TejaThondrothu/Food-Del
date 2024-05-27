import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

export const FoodItem = ({id,name,description,price,image}) => {
    //const [itemCount,setItemCount] =useState(0);
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <div className="food-item">
        <div className="food-tem-image-container">
            {/* <img src={image} alt="" className="food-item-image" /> */}
            {/* the above is for loading images from local staorage,the below is from database */}
            <img src={url+"/images/"+image} alt="" className="food-item-image" />
            {/* for understanding purpose */}
            {/* {!itemCount
                ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white}/>
                :<div className="food-item-counter">
                    <img src={assets.remove_icon_red} onClick={()=>setItemCount(prev=>prev-1)} alt="" />
                    <p>{itemCount}</p>
                    <img src={assets.add_icon_green} onClick={()=>setItemCount(prev=>prev+1)} alt="" />
                </div>
            } */}
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :<div className="food-item-counter">
                    <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-tem-desc">{description}</p>
            <p className="food-tem-price">{price}</p>
        </div>
    </div>
  )
}
