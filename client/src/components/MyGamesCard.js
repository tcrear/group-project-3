import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function GameCards(props) {
  return (
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Game Title :D</Card.Title>
      <Card.Text>
       User rating
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Game Title :D</Card.Title>
      <Card.Text>
      User rating
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Game Title :D</Card.Title>
      <Card.Text>
      User rating
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

  )
}
export default GameCards;