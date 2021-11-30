
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import {useParams} from 'react-router-dom'
import { addGame } from '../utils/api';
import Auth from '../utils/auth';

function SingleGame(props) {
 const [rawgDetails, setRawgDetails]= useState();
  // const title = 'Game Title'
  // const rating = '3.75'
  // const genres = [1,2,4]
  // const released = '2021-12-08'
  // const esrb_rating = 'E'
// console.log(props)
  const {id}= useParams()
  console.log(id)

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
    }
  }

  return(
    <>
      {rawgDetails ? (
        <div style={style.singleGame}>
          <img src={rawgDetails.background_image} style={style.image}/>
          {console.log(rawgDetails)}
          <h2>{rawgDetails.name}</h2>

          <button onClick={() => addToWishList(rawgDetails.id, rawgDetails.name, rawgDetails.background_image)}>Add to Wish List</button>
        </div>
      ) : <p>not ready my dude</p>}
    </>
  )
}

export default SingleGame;