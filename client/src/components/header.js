import {Link} from 'react-router-dom';
import "../css/header.css";
import logo from "./images/videogames.png";
import Auth from '../utils/auth';

const Header = () => {
  const style = {
    link: {
      textDecoration: 'none',
      background: "rgb(215, 215, 215)",
      color: 'rgb(129, 133, 227)',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '3px',
      boxShadow: 'rgb(49, 49, 49) 4px 4px 4px',
      fontFamily: '"Bungee", cursive'

    },
    logoLink: {
      textDecoration: 'none',
      fontFamily: '"Bungee", cursive'
    },
    header: {
      backgroundColor: 'rgb(129, 133, 227)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5px'
    },
    appName: {
      color: 'rgb(215, 215, 215)',
    }
  }
  return (
    <div style={style.header}>
      <Link style={style.logoLink} className="homeLink" to="/">
        <img className="logoImage" src={logo} alt="Bookshelf Logo"/>
        <h1 style={style.appName}>GamerShelf </h1>
        </Link>
      <div className="headerLinks">
        {Auth.loggedIn() ? (
          <>
            <Link style={style.link} className="headerLink" to="MyGames">My Games</Link>
            <Link style={style.link} className="headerLink" to="WishList">Wish List</Link>
            <Link style={style.link} className="headerLink" to="/" onClick={Auth.logout}>LogOut</Link>
          </>
        ) : (
          <>
            <Link style={style.link} className="headerLink" to="Login">Login</Link>
            <Link style={style.link} className="headerLink" to="SignUp">SignUp</Link>
          </>
        )}
        
      </div>
    </div>
  )
};
  
  export default Header;