import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function SingleGame(props) {

  const title = 'Game Title'
  const rating = '3.75'
  const genres = [1,2,4]
  const released = '2021-12-08'
  const esrb_rating = 'E'


  return (
    <CardGroup>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          {/* needs to be props */}
          <Card.Text>
            {genres}
            {rating}
            {released}
            {esrb_rating}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default SingleGame;