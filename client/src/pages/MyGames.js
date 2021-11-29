import react, {useState, useEffect} from 'react';
import MyGamesCard from '../components/MyGamesCard'
import {getGames} from '../utils/api';

function GameList() {
  const [game, setGame] = useState([]);
  useEffect(() => {
    const getGame = getGames();
    console.log(getGame)
  })
  const addGameListItem = (item) => {
    console.log(
      'added item I think??',
      item
    );

    if (!item.text) {
      return;
    }

    const newGame = [item, ...game];
    console.log(newGame);

    setGame(newGame);
  };

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
      {/* <h1>My Games List</h1>
      <div
        game={game}
        onSubmit={addGameListItem}
        playedGameItem={playedGameItem}
        removeGameListItem={removeGameListItem}
      ></div> */}
    </div>
  );
}

export default GameList;