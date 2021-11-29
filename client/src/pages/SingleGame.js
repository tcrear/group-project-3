import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function SingleGame(props) {

  const title = 'Game Title'
  const rating = '3.75'
  const genres = [1,2,4]
  const released = '2021-12-08'
  const esrb_rating = 'E'

  let getDetails = function (rawgId) {
    let apiUrl = `https://api.rawg.io/api/games?key=1cbc00cd5769401bbb4edd748b66b08c&dates=2019-09-01,2019-09-30&id=${rawgId}`;
  
    fetch(apiUrl)
        .then(function(res){
            if (res.ok){
                res.json().then(function(data){
                    console.log(data)
                    setRawgDetails(res.json())
                })
            }
        })
  };
  getDetails(rawgId)
  

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