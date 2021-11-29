import react, {useState, useEffect} from 'react';
import { getGames } from '../utils/api';
import { updateGame } from '../utils/api';
import CardGroup from 'react-bootstrap/CardGroup'
import WishListCard from '../components/WishListCard';
import Auth from '../utils/auth';

function WishList() {
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    getWishListData()
  })
  
  const getWishListData = async() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const response = await getGames(token)
    const {wishList} = await response.json()
    setWishItems(wishList)

  }

  // const addWishListItem = (item) => {
  //   console.log(
  //     'added item I think??',
  //     item
  //   );

  //   if (!item.text) {
  //     return;
  //   }

  //   const newWishItems = [item, ...wishItems];
  //   console.log(newWishItems);

  //   setWish(newWishItems);
  // };

  // Moves a game from wished to played
  // remove from wish and add to games
  const setGameToPlayed = (wish) => {
    const userId = Auth.getProfile().data._id
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    wish = {...wish, onWishList: true}
    console.log(token)
    updateGame(token, wish, userId)
    // let updatedWishList = wishItems.map((item) => {
    //   if (item._id === id) {
    //     item.isComplete - !item.isComplete;
    //     // item.status = "owned"
    //   }
    //   return item;
    // });

    // console.log(updatedWishList);
    // setWishItems(updatedWishList);
    console.log("id")
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
        { wishItems.map( wish =>
        (
          <WishListCard
            key={wish._id}
            wish={wish}
            // onSubmit={addWishListItem}
            setGameToPlayed={setGameToPlayed}
            // removeWishListItem={removeWishListItem}
          />
        )
        )}
      </CardGroup>
    </div>
  );
}

export default WishList;