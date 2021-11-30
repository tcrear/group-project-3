import react, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getGames } from '../utils/api';
import { updateGame } from '../utils/api';
import { deleteGame } from '../utils/api'
import CardGroup from 'react-bootstrap/CardGroup'
import MyGamesCard from '../components/MyGamesCard'
import Auth from '../utils/auth';


function GameList() {
  const [gameItems, setGame] = useState([]);

  useEffect(() => {
    getSavedGamesData()
  })
  
  const getSavedGamesData = async() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const response = await getGames(token)
    const {savedGames} = await response.json()
    setGame(savedGames)

  }

  const playedGameItem = (id) => {
    // Played games to set a different background to signify

  };

  const removeGameListItem = (savedGame) => {
    const userId = Auth.getProfile().data._id
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(savedGame)
    savedGame = {rawgId: savedGame, onWishList: false}
    console.log(token)
    deleteGame(token, savedGame, userId)

    console.log("id")
  };

  return (
    <div>
      <h1>My Games List</h1>
      <CardGroup>
        { gameItems.map( gameItem => 
        (
          <MyGamesCard
            key={gameItem._id}
            gameItem={gameItem}
            // playedGameItem={playedGameItem}
            removeGameListItem={removeGameListItem}
          />
        )
        )}
      </CardGroup>
    </div>
  );
}

export default GameList;

