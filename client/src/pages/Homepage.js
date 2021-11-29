import React, { useState, useEffect } from 'react';
import { getGames } from '../utils/api';
import Auth from '../utils/auth';

function Homepage(){
  const [renderReady, setRenderReady] = useState(false);
  const [successfullLogin, setSuccessfullLogin] = useState(false);
  const [userData, setUserData] = useState({});
 
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

  
  useEffect(() => {
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