import React, { useState, useEffect } from 'react';
import { getGames } from '../utils/api';
import Auth from '../utils/auth';

function Homepage(){
  const [renderReady, setRenderReady] = useState(false);
  const [userData, setUserData] = useState([]);
  const [savedGames, setSavedGames] = useState([]);
  const [wishList, setWishList] = useState([]);

  const getUserData = async() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if(!token) {
      return setRenderReady(true);
    }

    const response = await Auth.getProfile(token)

    const user = await response;
    setUserData(user.data)
    console.log(userData)
  }

  const getUserGames = async() => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if(!token) {
        setSavedGames(null);
        setWishList(null);
        return setRenderReady(true);
      }

      const response = await getGames(token);
      if(!response.ok) {
        setUserData(null);
        return setRenderReady(true);
      }

      const games = await response.json();
      console.log(games)
      setSavedGames(games.savedGames);
      setWishList(games.wishList);
      setRenderReady(true);
      console.log(savedGames)
      console.log(wishList)

    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    // getUserGames()
    getUserData()
  }, [])

  return(
    <>
      {renderReady && (
        <>
        { userData ? (
          <>
          <h3>You arent Logged in</h3>
          </>
        ) : (
          <>
          <h3> you are logged in</h3>
          <p>Hello, {userData.username}</p>
          </>
        )}
        </>
      )}
    </>
  )
};
export default Homepage;