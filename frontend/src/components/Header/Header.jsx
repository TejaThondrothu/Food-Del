import React from 'react'
import './Header.css'
import ExploreMenu from '../ExploreMenu/ExploreMenu'

const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Oder you favourite food here</h2>
            <p>Choose from a diverse food chamber to order your food. We offer a wide variety of delicious meals delivered fast and fresh to your doorstep.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header