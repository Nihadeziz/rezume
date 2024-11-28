import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <>
    <div className={style.navbar}>
        <nav>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">PORTOFILO</a></li>
                <li><a href="">RESUME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </nav>
    </div>
    
    </>
  )
}

export default Header