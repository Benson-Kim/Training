import React from 'react'
import { Link } from "react-router-dom";
import logo from './images/logo.svg'
import cart from './images/icon-cart.svg'
import usericon from './images/image-avatar.png'
import './header.css'

const Header = () => {
    return (
        <div>
            <nav className='d_flex' >
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='d_flex middle'>
                    <Link to='/'>Collections</Link>
                    <Link to='about'>Men</Link>
                    <Link to='/'>Women</Link>
                    <Link to='about'>About</Link>
                    <Link to='/'>Contact</Link>
                </div>
                <div className='d_flex right'>
                    <div className='cart' >
                        <Link to='cart'>
                            <img src={cart} alt="" />
                            <span>0</span>
                        </Link>
                        
                    </div>
                    <div class="d_flex account">
                        <img src={usericon} alt="" />
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default Header