import react, {useState, useEffect} from 'react';
import MyGamesCard from '../components/MyGamesCard'

function GameList() {
  const [game, setGame] = useState([]);
  useEffect(() => {
    console.log(JSON.stringify(getGames()))
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

  const editGameListItem = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setGame((prev) =>
    prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>My Games List</h1>
      <div
        game={game}
        onSubmit={addGameListItem}
        playedGameItem={playedGameItem}
        removeGameListItem={removeGameListItem}
        editGameListItem={editGameListItem}
      ></div>
    </div>
  );
}

export default GameList;