import {Link} from 'react-router-dom';
import "../css/header.css";
import logo from "./images/bookshelf128.png";
import Auth from '../utils/auth';

const Header = () => {
  return (
    <div className="header">
      <Link className="homeLink" to="/">
        <img className="logoImage" src={logo} alt="Bookshelf Logo"/>
        <h1>GamerShelf </h1>
        </Link>
      <div className="headerLinks">
        {Auth.loggedIn() ? (
          <>
            <Link className="headerLink" to="MyGames">My Games</Link>
            <Link className="headerLink" to="WishList">Wish List</Link>
            <Link className="headerLink" to="/" onClick={Auth.logout}>LogOut</Link>
          </>
        ) : (
          <>
            <Link className="headerLink" to="Login">Login</Link>
            <Link className="headerLink" to="SignUp">SignUp</Link>
          </>
        )}
        
      </div>
    </div>
  )
};
  
  export default Header;