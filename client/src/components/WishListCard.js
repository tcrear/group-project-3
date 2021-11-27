import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function WishListCard(props) {
  const title = 'Game Title'
  const text = 'This game is heckin cool!'
  const date = 'Release date'
  return (
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {text}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{date}</small>
    </Card.Footer>
  </Card>
</CardGroup>
  )
}

export default WishListCard;

