import React, { useState, useEffect } from 'react';
import { getGames } from '../utils/api';
import Auth from '../utils/auth';

function Homepage(){
  const [renderReady, setRenderReady] = useState(false);
  const [successfullLogin, setSuccessfullLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [ rawgData, setRawgData ] = useState([]);
 
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

  let getGames = function (user) {
    let apiUrl = `https://api.rawg.io/api/games?key=1cbc00cd5769401bbb4edd748b66b08c&dates=2019-09-01,2019-09-30&search=${search}`;
  
    fetch(apiUrl)
        .then(function(res){
            if (res.ok){
                res.json().then(function(data){
                    console.log(data)
                    setRawgData(data)
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
  const renderSinglePage= (rawgId)=>{
    window.location.assign(`/SingleGame/${rawgId}`)

  }

  return(
    <>
      {renderReady && (
        <>
        { successfullLogin ? (
         <>
         <h3>Hello, {userData.data.username}</h3>
         </>
        ) : (
          <>
          <h3>You are not Logged in</h3>
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
        {rawgData.results ? (
        <>{rawgData.results.map(game =>{
          return(
          <div key={game.id} onClick={()=>renderSinglePage(game.id)}>
            <img src={game.background_image} height='100px'/>
            <h3>{game.name}</h3>
            <p>metacritic score:{game.metacritic}</p>


          </div>)
        })}
        </>)
        : <p>no results...yet</p>
      }
        
      
    </>
  )
};
export default Homepage;