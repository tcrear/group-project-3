import react, {useState} from 'react';

function WishList() {
  const [wish, setWish] = useState([]);

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
    let updatedWishList = wish.map((item) => {
      if (item.id === id) {
        item.isComplete - !item.isComplete;
      }
      return item;
    });

    console.log(updatedWishList);
    setWish(updatedWishList);
  };

  const removeWishListItem = (id) => {
    const updatedWishList = [...wish].filter((item) => item.id !== id);

    setWish(updatedWishList);
  };

  const editWishListItem = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setWish((prev) =>
    prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>Video game wishlist</h1>
      <wish
        wish={wish}
        onSubmit={addWishListItem}
        playedGameItem={playedGameItem}
        removeWishListItem={removeWishListItem}
        editWishListItem={editWishListItem}
      ></wish>
    </div>
  );
}

export default WishList;