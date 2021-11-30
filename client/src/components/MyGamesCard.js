import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import xmark from './images/x-mark.png'

function GameCards(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.gameItem.background_image} />
      <Card.Body>
        <Card.Title>{props.gameItem.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        {/* <button className="btn btn-sm" onClick={() => props.setGameToPlayed(props.wish)}>Mark This Game As Played</button> */}
        <a
          className="btn btn-sm"
          onClick={() => props.removeGameListItem(props.gameItem.rawgId)}
        >
          <img src={xmark} height='10px' alt="remove item"/>
        </a>
      </Card.Footer>
    </Card>
  );
}
export default GameCards;