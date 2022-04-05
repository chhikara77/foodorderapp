import React from 'react';
import logo from '../assets/logo_home2.png';
import '../styles/ContentHeader.css';

const ContentHeader = () => {
  return (
    <div className='content-header' >
        <div className="logo-search-bar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="search">
                <div className="search-dropdown"><a href='#' >ALL CATEGORIES <span class="lnr lnr-chevron-down"></span></a></div>
                <input type="search" placeholder='Search recipes...' />
                <span class="lnr lnr-magnifier"></span>
            </div>
            <div className="cart">
                <a href="#"><span class="lnr lnr-bookmark"></span>Favorites</a>
                <a href="#">Cart(0.00)</a>
            </div>
        </div>
        <div className="secondary-nav">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">recipes</a></li>
                <li><a href="#">forum</a></li>
                <li><a href="#">shop</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            <div className="social-icon">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-solid fa-rss"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    </div>
  )
}

export default ContentHeader