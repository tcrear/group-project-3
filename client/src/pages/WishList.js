import react, {useState, useEffect} from 'react';
import { getGames } from '../utils/api';
import CardGroup from 'react-bootstrap/CardGroup'
import WishListCard from '../components/WishListCard';

function WishList() {
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    console.log(JSON.stringify(getGames()))
  })
  
  const addWishListItem = (item) => {
    console.log(
      'added item I think??',
      item
    );

    if (!item.text) {
      return;
    }

    const newWish = [item, ...wish];
    console.log(newWish);

    setWish(newWish);
  };

  // Moves a game from wished to played
  // remove from wish and add to games
  const setGameToPlayed = (id) => {
    let updatedWishList = wish.map((item) => {
      if (item._id === id) {
        item.isComplete - !item.isComplete;
        // item.status = "owned"
      }
      return item;
    });

    console.log(updatedWishList);
    setWishItems(updatedWishList);
  };

  // Removes a game from the wishlist
  const removeWishListItem = (id) => {
    const updatedWishList = wishItems.filter((item) => item._id !== id);
    setWishItems(updatedWishList);
  };

  return (
    <div>
      <h1>Video game wishlist</h1>
      <CardGroup>
        { wishItems.map( wish => (
          <WishListCard
            key={wish._id}
            wish={wish}
            onSubmit={addWishListItem}
            setGameToPlayed={setGameToPlayed}
            removeWishListItem={removeWishListItem}
            editWishListItem={editWishListItem}
          />
        ))}
        <WishListCard 
          mode="edit"
          onSubmit={addWishListItem}
          setGameToPlayed={setGameToPlayed}
          removeWishListItem={removeWishListItem}
          editWishListItem={editWishListItem}
        />
      </CardGroup>
    </div>
  );
}

export default WishList;