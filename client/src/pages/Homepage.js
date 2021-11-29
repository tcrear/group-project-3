import React, { useState, useEffect } from 'react';
import { getGames } from '../utils/api';
import Auth from '../utils/auth';

function Homepage(){
  const [renderReady, setRenderReady] = useState(false);
  const [successfullLogin, setSuccessfullLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [savedGames, setSavedGames] = useState([]);
  const [wishList, setWishList] = useState([]);

  const getUserData = async() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if(!token) {
      return setRenderReady(true);
    }

    const response = await Auth.getProfile(token)
    setUserData(response)
    setRenderReady(true)
    setSuccessfullLogin(true)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return(
    <>
      {renderReady && (
        <>
        { successfullLogin ? (
          <>
          <h3> you are logged in</h3>
          <p>Hello, {userData.data.username}</p>
          
          </>
        ) : (
          <>
          <h3>You arent Logged in</h3>
          </>
        )}
        </>
      )}
    </>
  )
};
export default Homepage;