import React from 'react'
import logo from '../images/logo.jpg'
import { useState } from 'react'


export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    function toggling(){
        const element = document.getElementById("toggle")
        element.classList.toggle("active")
        setToggle(prevToggle => !prevToggle)
    }
  return (
    <div>

            <nav className='navbar'>
                <div className='image--container'>
                    <img src={logo} alt="logo" className='navbar--logo'/>
                </div>            
                <ul className='menu'>
                    <a href="/"><li className='menu--item'>Home</li></a>
                    <a href="/about"><li className='menu--item'>About us</li></a>
                    <a href="/media"><li className='menu--item'>Media</li></a>
                    <a href="/contact"><li className='menu--item'>Contact us</li></a>
                    <a href="/contact"><button className='donate'>Donate </button></a>
                </ul>
                <div className="toggle" id='toggle' onClick={toggling}>
                    <span></span>
                    <span></span>
                </div>            
            </nav>
        
            <div className={toggle ? 'dropdown' : 'hidden'}>
                <ul className='toggle--menu'>
                    <a href="/"><li className='menu--item'>Home</li></a>
                    <a href="/about"><li className='menu--item'>About us</li></a>
                    <a href="/media"><li className='menu--item'>Media</li></a>
                    <a href="/contact"><li className='menu--item'>Contact us</li></a>
                    <a href="/contact"><button className='donate'>Donate </button></a>
                </ul>
            </div>
    </div>
  )
}
