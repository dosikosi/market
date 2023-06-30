import { FavoriteBorderOutlined, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import"./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className="left">
            <div className="item">
                <Link className="link" to="/products/1">НОВИНКИ</Link>
            </div>
        </div>
        <div className="center">
            <Link className="link" to= "/">ELEAN</Link>
        </div>
        <div className="right1">    
            <div className="icons">
                <FavoriteBorderOutlined/>
                <div className="carticon">
                    <ShoppingCartOutlined/>
                    <span>2</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar