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
      fontFamily: '"Bungee", cursive'
    }
  }

  return (
    <Card style={style.CardComponent}>
      <Card.Img variant="top" src={props.gameItem.background_image} style={style.ImgComponent}/>
      <Card.Body>
        <Card.Title style={style.textTitle}>{props.gameItem.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <a
          style={style.button}
          className="btn btn-sm"
          onClick={() => props.removeGameListItem(props.gameItem.rawgId)}
        >
          <img src={xmark} height='20px' alt="remove item"/>
        </a>
      </Card.Footer>
    </Card>
  );
}
export default GameCards;