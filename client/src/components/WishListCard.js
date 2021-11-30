import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import noImage from './images/No_image_available.svg'

function WishListCard(props) {
  return (
    <Card>
        <Card.Img variant="top" src={noImage}/>
        <Card.Body>
          <Card.Title>
           {props.wish.title}
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-sm" onClick={() => props.setGameToPlayed(props.wish)}>Mark This Game As Played</button>
          <button className="btn btn-sm" onClick={() => props.removeWishListItem(props.wish)}>Remove This Game</button>
        </Card.Footer>

    </Card>
    
  )
}

export default WishListCard;

