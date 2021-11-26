import React from "react";
import {Link} from 'react-router-dom';
import "../css/header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to GamerShelf </h1>
      <Link className="headerLink" to="MyGames">My Games</Link>
      <Link className="headerLink" to="WishList">Wish List</Link>
      <Link className="headerLink" to="Login">Login</Link>
      <Link className="headerLink" to="SignUp">SignUp</Link>
    </div>
  )
};
  
  export default Header;