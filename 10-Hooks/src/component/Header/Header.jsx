import React from 'react'
import  style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.parent}>
      <h1>ziaKhan</h1>
     <ul>
       <a href="#">home</a>
       <a href="#">about</a>
       <a href="#">contact</a>
       <a href="#">projects</a>
     </ul>
     <button>Sign in</button>
    </div>
  )
}

export default Header
