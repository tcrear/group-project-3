import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'

function WishListCard(props) {
  // const [ mode, setMode ] = useState("view")
  const [ wishData, setWishData ] = useState({
    title: '',
    text: '',
    date: ''
  });

  // const toggleMode = () => {
  //   if( mode === "view" ){
  //     setMode("edit")
  //   } else {
  //     setMode("view")
  //   }
  // }

  useEffect( () => {
    setWishData(props.wish)
  }, [])

  return (
    <Card>
      {/* <form className="form"> */}
        {/* <Card.Header>
          <button className="btn btn-sm" onClick={toggleMode}>
            { (mode === "view") ? "Edit" : "View" } 
            Game
          </button>
        </Card.Header> */}
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>
            {/* you can style the readonly class so that it doesn't look like a form field */}
            <input 
              type="text" 
              // className={ (mode === "view") ? "form-control readonly" : "form-control" }
              name="title" 
              value={wishData.title} 
              placeholder="Game Title" 
              // readOnly={ mode === "view"}
              // onChange={ (e) => { setWishData({...wishData, [e.target.name]: e.target.value}) }}
            />
          </Card.Title>
          <Card.Text>
            {wishData.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{wishData.date}</small>
          <button className="btn btn-sm" onClick={() => props.setGameToPlayed(wishData._id)}>Mark This Game As Played</button>
          <button className="btn btn-sm" onClick={() => props.removeWishListItem(wishData._id)}>Remove This Game</button>
        </Card.Footer>
      {/* </form> */}
    </Card>
    
  )
}

export default WishListCard;

