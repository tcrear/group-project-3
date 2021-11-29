import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function WishListCard(props) {
  const [edit, setEdit] = useState({
    title: '',
    text: '',
    date: ''
  });
  return (
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
       {props.wishList.text}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.date}</small>
    </Card.Footer>
  </Card>
</CardGroup>
  )
}

export default WishListCard;

