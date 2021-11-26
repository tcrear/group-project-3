import React from "react";
import {Link} from 'react-router-dom';
import "../css/header.css";
import logo from "./images/bookshelf128.png";

const Header = () => {
  return (
    <div className="header">
      <Link className="homeLink" to="/">
        <img className="logoImage" src={logo}/>
        <h1>GamerShelf </h1>
        </Link>
      <div className="headerLinks">
        <Link className="headerLink" to="MyGames">My Games</Link>
        <Link className="headerLink" to="WishList">Wish List</Link>
        <Link className="headerLink" to="Login">Login</Link>
        <Link className="headerLink" to="SignUp">SignUp</Link>
      </div>
    </div>
  )
};
  
  export default Header;