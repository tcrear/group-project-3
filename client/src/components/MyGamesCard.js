import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function GameCards(props) {
  const [edit, setEdit] = useState({
    title: '',
    rating: ''
  });
  return (
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      {/* needs to be props */}
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
       {props.rating}
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

  )
}
export default GameCards;