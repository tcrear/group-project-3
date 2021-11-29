import react, {useState, useEffect} from 'react';
import { getGames } from '../utils/api';
import WishListCard from '../components/WishListCard';
import Auth from '../utils/auth'

function WishList() {
  const [wish, setWish] = useState([]);
  useEffect(() => {
    getGetGameData()
  })

  const getGetGameData = async() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const response = await getGames(token)
    const {wishList} = await response.json()
    setWish(wishList)

  }

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

  const playedGameItem = (id) => {
    // let updatedWishList = wish.map((item) => {
    //   if (item.id === id) {
    //     item.isComplete - !item.isComplete;
    //   }
    //   return item;
    // });

    // console.log(updatedWishList);
    // setWish(updatedWishList);
  };

  const removeWishListItem = (id) => {
    const updatedWishList = [...wish].filter((item) => item.id !== id);

    setWish(updatedWishList);
  };

  return (
    <div>
      <h1>Video game wishlist</h1>
      <WishListCard
        wish={wish}
        onSubmit={addWishListItem}
        playedGameItem={playedGameItem}
        removeWishListItem={removeWishListItem}
      ></WishListCard>
    </div>
  );
}

export default WishList;