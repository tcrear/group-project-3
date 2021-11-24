import React from "react";
import {Link} from 'react-router-dom';
import "../css/header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to GamerShelf </h1>
      <Link to="MyGames">MyGames</Link>
    </div>
  )
};
  
  export default Header;
