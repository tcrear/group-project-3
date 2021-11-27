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

    const newWish = [item, ...game];
    console.log(newWish);

    setGame(newWish);
  };

  const playedGameItem = (id) => {
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
      <h1>Video game wishlist</h1>
      <GameListCard
        game={game}
        onSubmit={addGameListItem}
        playedGameItem={playedGameItem}
        removeGameListItem={removeGameListItem}
        editGameListItem={editGameListItem}
      ></GameListCard>
    </div>
  );
}

export default GameList;