import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function WishList() {
  return (
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Game Title</Card.Title>
      <Card.Text>
       This game is heckin cool!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Release Date!</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Game Title</Card.Title>
      <Card.Text>
      This game is heckin cool!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Release Date!</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Game Title</Card.Title>
      <Card.Text>
      This game is heckin cool!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Release Date!</small>
    </Card.Footer>
  </Card>
</CardGroup>

  )
}

export default WishList;
