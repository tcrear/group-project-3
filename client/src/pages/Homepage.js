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

  let getGames = function (user) {
    let apiUrl = `https://api.rawg.io/api/games?key=1cbc00cd5769401bbb4edd748b66b08c&dates=2019-09-01,2019-09-30&search=${search}`;
  
    fetch(apiUrl)
        .then(function(res){
            if (res.ok){
                res.json().then(function(data){
                    console.log(data)
                })
            }
        })
  };
  
  const[search, setSearch]= useState('')

  const handleInputChange= (e)=>{
    const {name, value}= e.target;
    setSearch(value)
    console.log(search)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    getGames()
    console.log(search)
  }

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
       <div className='search'>
            <form>
                <input type='text' value={search} placeholder='search for games' onChange={handleInputChange} name='searchGames'/>
                <button type='submit' onClick={handleSubmit}>Search</button>
            </form>
        </div>
    </>
  )
};
export default Homepage;