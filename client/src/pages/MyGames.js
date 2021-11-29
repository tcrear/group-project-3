import react, {useState, useEffect} from 'react';
import MyGamesCard from '../components/MyGamesCard'
import {getGames} from '../utils/api';
import Auth from '../utils/auth';

function GameList() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    savedGamesData()
  })
  
  const savedGamesData = async() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const response = await getGames(token)
    const {savedGames} = await response.json()
    setGame(savedGames)

  }

  const playedGameItem = (id) => {
    // update API and my games page
    // games are currently playing too
    // once click, add review. Maybe add checkmark

    // let updatedGameList = game.map((item) => {
    //   if (item.id === id) {
    //     item.isComplete - !item.isComplete;
    //   }
    //   return item;
    // });

    // console.log(updatedGameList);
    // setGame(updatedGameList);
  };

  const removeGameListItem = (id) => {
    const updatedGameList = [...game].filter((item) => item.id !== id);

    setGame(updatedGameList);
  };

  return (
    <div>
      <h1>My Games List</h1>
      <MyGamesCard
        game={game}
        // onSubmit={addGameListItem}
        // playedGameItem={playedGameItem}
        // removeGameListItem={removeGameListItem}
      ></MyGamesCard>
    </div>
  );
}

export default GameList;