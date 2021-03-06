import React, { useState, useEffect } from 'react';
import { addGame } from '../utils/api';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  search: {
    margin: "auto",
    textAlign: "center",
    padding: "20px",
    width: "100vh",
  },
  noResults: {
    textAlign: "center",
    fontFamily: '"Bungee", cursive',
  },
  list: {
    paddingBottom: "10px",
  },
  side: {
    marginLeft: "center",
  },
  CardComponent:{
    margin: "10px",
    width: "400px",
    background: "#E38185",
    color: "#0a58ca",
    boxShadow: "rgba(49, 49, 49, 49) 4px 4px 4px 4px",
  },
  ImgComponent:{
    height: "50%",
    width: "50%",
  },
  textTitle:{
    textAlign: "center",
  },
  searchButton: {
    textDecoration: 'none',
    background: "rgb(129, 133, 227)",
    color: 'rgb(215, 215, 215)',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '3px',
    boxShadow: 'rgb(49, 49, 49) 4px 4px 4px',
    margin: '0 10px'
  },
  button: {
    textDecoration: 'none',
    background: "rgb(215, 215, 215)",
    color: 'rgb(129, 133, 227)',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '3px',
    boxShadow: 'rgb(49, 49, 49) 4px 4px 4px',
    margin: '0 10px',
    margin: '0 auto', 
    display: 'flex', 
    justifyContent: 'center'
  },
  centering: {
    margin: '0 auto', 
    display: 'flex', 
    justifyContent: 'center'
  }
}


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
    setUserData(response.data)
    setRenderReady(true)
    setSuccessfullLogin(true)
  }

  useEffect(() => {
    getUserData()
  }, [])

  let getRawgGames = function (user) {
    let apiUrl = `https://api.rawg.io/api/games?key=1cbc00cd5769401bbb4edd748b66b08c&dates=2019-09-01,2019-09-30&search=${search}`;
  
    fetch(apiUrl)
        .then(function(res){
            if (res.ok){
                res.json().then(function(data){
                    setRawgData(data)
                })
            }
        })
  };
  
  const[search, setSearch]= useState('')

  const handleInputChange= (e)=>{
    const {name, value}= e.target;
    setSearch(value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    getRawgGames()
    console.log(search)
  }
  const renderSinglePage= (rawgId)=>{
    window.location.assign(`/SingleGame/${rawgId}`)

  }

  const addToWishList = (rawgId, gameName, background_image) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const gameData = {
      rawgId,
      title: gameName,
      background_image,
      onWishList: true
    };
    const userId = Auth.getProfile().data._id;

    addGame(token, gameData, userId)
    //add style change to show it is added
    console.log('added to wishlist')
  }

  return(
    <>
      {renderReady && (
        <>
        { successfullLogin ? (
          <>
          <h3 style={{fontFamily: '"Bungee", cursive'}}>Hello, {userData.username}</h3>
          </>
        ) : (
          <>
          <h3>You aren't Logged in</h3>
          </>
        )}
        </>
      )}
       <div className='search'>
            <form style={style.search}>
                <input type='text' value={search} placeholder='search for games' onChange={handleInputChange} name='searchGames'/>
                <button type='submit' style={style.searchButton} onClick={handleSubmit}>Search</button>
            </form>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {rawgData.results ? (
            <>{rawgData.results.map(game =>{
                return(
                  <div key={game.id} style={style.side} style={style.CardComponent}>
                    <div onClick={()=>renderSinglePage(game.id)}>
                      <div style={style.centering}>
                        <img style={style.ImgComponent} src={game.background_image} height='100px'/>
                      </div>
                      <h3 style={{textAlign: 'center', fontFamily: '"Bungee", cursive', color: 'rgb(129, 133, 227)'}}>{game.name} </h3>
                      <p style={style.centering}>Metacritic score: {game.metacritic || "none"}</p>
                    </div>
                    {successfullLogin ? (
                    <button style={style.button} onClick={() => addToWishList(game.id, game.name, game.background_image)}>Add to Wish List</button>
                    ) : (
                    <p style={style.button}>Login to add to your WishList</p>
                    )}
                    <p style={style.list}></p>
                  </div>
              )
            })
          }
            </>
          ) : <p style={style.noResults}>no results...yet</p>
          }
        </div>
      
    </>
  )
};
export default Homepage;