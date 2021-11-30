import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import xmark from './images/x-mark.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function GameCards(props) {

  const style = {
    CardComponent:{
      margin: "10px",
      minWidth: "500px",
      height: "450px",
      background: "#d7d7d7",
      color: "#0a58ca"
    },
    ImgComponent:{
      height: "50%",
      width: "50%",
      margin: "0 auto"
    },
    textTitle:{
      textAlign: "center"
    }
  }

  
  
  return (
    <Card style={style.CardComponent}>
      <Card.Img variant="top" src={props.gameItem.background_image} style={style.ImgComponent}/>
      <Card.Body>
        <Card.Title style={style.textTitle}>{props.gameItem.title}</Card.Title>
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