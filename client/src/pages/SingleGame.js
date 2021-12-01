
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import {useParams} from 'react-router-dom'
import { addGame } from '../utils/api';
import Auth from '../utils/auth';

function SingleGame(props) {
  const [rawgDetails, setRawgDetails]= useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const {id}= useParams()

  const getLoggedIn = () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if(token){
      setLoggedIn(true)
    }
  }

  let getDetails = function (rawgId) {
    
    let apiUrl = `https://api.rawg.io/api/games/${rawgId}?key=1cbc00cd5769401bbb4edd748b66b08c&dates=2019-09-01,2019-09-30`;
    
    fetch(apiUrl)
      .then(function(res){
        if (res.ok){
          res.json().then(function(data){
            console.log(data)
            setRawgDetails(data)
          })
        }
      })
  };
  
  console.log(rawgDetails)
  useEffect(() => {
    getDetails(id)
    getLoggedIn()
  }, [])

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

  const style = {
    singleGame : {
      paddingTop:"100px",
      height: "100vh",
      textAlign:"center",
      backgroundColor: "lightGrey"
    },
    image : {
      height: "400px",
      width: "auto"
    },
    submitBtn:{
      margin: "20px 10px",
      boxShadow: "rgb(49, 49, 49) 4px 4px 4px 4px",
      textDecoration: 'none',
      background: "rgb(129, 133, 227)",
      color: 'rgb(215, 215, 215)',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '3px',
      boxShadow: 'rgb(49, 49, 49) 4px 4px 4px',
      fontFamily: '"Bungee", cursive',
      border: "black 2px"
    },
    genreContainer:{
      display: "flex",
      justifyContent: "center"
    },
    genreWords:{
      padding: "10px"
    }

  }

  return(
    <>
      {rawgDetails ? (
        <div style={style.singleGame}>
          <img src={rawgDetails.background_image} style={style.image}/>
          <h2 style={{fontFamily: '"Bungee", cursive',}}>{rawgDetails.name}</h2>
          <p>{rawgDetails.description_raw}</p>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
              <h5>Genres</h5>
              <div style={style.genreContainer}>
                {rawgDetails.genres.map((genre)=>{
                  return(
                  <p style={style.genreWords}>{genre.name}</p>
                  )
                })}
              </div>
            </div>
            <div>
                <p>Release Date: {rawgDetails.released}</p>
                <p>Metacritic Score kind of: {rawgDetails.metacritic || "none"}</p>
            </div>
          </div>
          <a href={rawgDetails.metacritic_url}><button style={style.submitBtn}>More Information</button></a>
          {loggedIn ? (
            <button style={style.submitBtn} onClick={() => addToWishList(rawgDetails.id, rawgDetails.name, rawgDetails.background_image)}>Add to Wish List</button>
          ) : (
            <p></p>
          )}
        </div>
      ) : <p style={{fontFamily: '"Bungee", cursive',}}>not ready my dude</p>}
    </>
  )
}

export default SingleGame;