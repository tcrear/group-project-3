import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'

function GameCards(props) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{props.gameItem.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        {/* <button className="btn btn-sm" onClick={() => props.setGameToPlayed(props.wish)}>Mark This Game As Played</button> */}
        <button
          className="btn btn-sm"
          onClick={() => props.removeGameListItem(props.gameItem.rawgId)}
        >
          Remove This Game
        </button>
      </Card.Footer>
    </Card>
  );
}
export default GameCards;