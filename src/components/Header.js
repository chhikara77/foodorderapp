import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='main-header'>
      <div className="main-nav-container">
      <ul className='main-nav-left'>
        <li><a href='#'>categories</a></li>
        <li><a href='#'>forum</a></li>
        <li><a href='#'>books</a></li>
        <li><a id='selected' href='#'>recipe index</a></li>
        <li><a href='#'>popular</a></li>
      </ul>
      <ul className='main-nav-right'>
        <li><a href="#"><span class="lnr lnr-smile"></span>register</a></li>
        <li><a href="#"><span class="lnr lnr-user"></span>login</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Header