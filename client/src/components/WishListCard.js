import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import noImage from './images/no_image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <button className="btn btn-sm" onClick={() => props.setGameToPlayed(props.wish)}>Mark This Game As Played</button>
          <button className="btn btn-sm" onClick={() => props.removeWishListItem(props.wish)}>Remove This Game</button>
      </Card.Footer>
    </Card>
  );
}
export default WishListCard;

