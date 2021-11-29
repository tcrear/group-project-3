export const loginUser = (userData) => { //userData -> email, password
  return fetch('http://localhost:3001/api/user/login', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
};

export const createUser = (userData) => { //userData -> username, email, password
  return fetch('/api/user/', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const getGames = (token) => {  
  return fetch('/api/game/:id', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
};

export const addGame = (token, gameData) => {  //gameData -> rawgId, title, onWishList
  return fetch('/api/game/:id', {
    method: 'POST',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
};

export const updateGame = (token, gameData) => {  //gameData -> rawgId, title, onWishList
  return fetch('/api/game/:id', {
    method: 'PUT',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
};

export const deleteGame = (token, gameData) => {  //gameData -> rawgId, onWishList
  return fetch('/api/game/:id', {
    method: 'DELETE',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
};