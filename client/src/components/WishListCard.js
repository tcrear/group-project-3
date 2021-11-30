import Card from 'react-bootstrap/Card';
import noImage from './images/no_image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import xmark from './images/x-mark.png';
import checkoff from './images/check-mark.png';


function WishListCard(props) {

  const style = {
    body:{
      color: "blue"
    }
  }
  // individual card look

  return (
    <Card>
      <Card.Img variant="top" src={props.wish.background_image || noImage} height='100px' />
      <Card.Body>
        <Card.Title>{props.wish.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <a onClick={() => props.setGameToPlayed(props.wish)}><img src={checkoff} height="10px" alt="move to mygames"/></a>
        <a onClick={() => props.removeWishListItem(props.wish)}><img src={xmark} height='10px' alt="remove item"/></a>
      </Card.Footer>
    </Card>
  );
}
export default WishListCard;

