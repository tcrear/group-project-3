import Card from 'react-bootstrap/Card';
import noImage from './images/no_image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import xmark from './images/x-mark.png';
import checkoff from './images/check-mark.png';

function WishListCard(props) {

  const style = {
    CardComponent:{
      margin: "10px",
      minWidth: "500px",
      height: "450px",
      background: "#E38185",
      color: "#0a58ca",
      boxShadow: "rgba(49, 49, 49, 49) 4px 4px 4px 4px"
    },
    ImgComponent:{
      height: "50%",
      width: "50%",
      margin: "0 auto"
    },
    textTitle:{
      textAlign: "center",
      fontFamily: '"Bungee", cursive',
    },
    button: {
      textDecoration: 'none',
      background: "rgb(215, 215, 215)",
      color: 'rgb(129, 133, 227)',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '3px',
      boxShadow: 'rgb(49, 49, 49) 4px 4px 4px',
      margin: '0 10px'
    }
  }

  return (
    <Card style={style.CardComponent}>
      <Card.Img variant="top" src={props.wish.background_image || noImage} height='100px' style={style.ImgComponent}/>
      <Card.Body>
        <Card.Title style={style.textTitle}>{props.wish.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <a style={style.button} className="btn btn-sm" onClick={() => props.setGameToPlayed(props.wish)}>
          <img src={checkoff} height="20px" alt="move to mygames"/>
          </a>
        <a style={style.button} className="btn btn-sm" onClick={() => props.removeWishListItem(props.wish)}>
          <img src={xmark} height='20px' alt="remove item"/>
          </a>
      </Card.Footer>
    </Card>
  );
}
export default WishListCard;