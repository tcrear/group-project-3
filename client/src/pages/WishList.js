import react, {useState, useEffect} from 'react';
import { getGames } from '../utils/api';
import { updateGame } from '../utils/api';
import { deleteGame } from '../utils/api'
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


  const setGameToPlayed = (wish) => {
    const userId = Auth.getProfile().data._id
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    wish = {...wish, onWishList: true}
    console.log(token)
    updateGame(token, wish, userId)

    console.log("id")
  };

  // Removes a game from the wishlist
  const removeWishListItem = (wish) => {
    const userId = Auth.getProfile().data._id
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(wish.rawgId)
    wish = {rawgId: wish.rawgId, onWishList: true}
    console.log(token)
    deleteGame(token, wish, userId)

    console.log("id")
  };
  
  const style = {
    form:{
      outline: "black 1px solid"
    }
  }
// how card aligns with page
  return (
    <div>
      <h1>Video game wishlist</h1>
      <CardGroup>
        { wishItems.map( wish =>
        (
          <WishListCard
            key={wish._id}
            wish={wish}
            setGameToPlayed={setGameToPlayed}
            removeWishListItem={removeWishListItem}
          />
        )
        )} 
      </CardGroup>
    </div>
  );
}

export default WishList;