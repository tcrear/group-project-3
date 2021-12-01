export const loginUser = (userData) => { //userData -> email, password
  return fetch('/api/user/login', {
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
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
};

export const getGames = (token, userId) => {  
  return fetch(`/api/game/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'authorization': `Bearer ${token}`,
    }
  })
};

export const addGame = (token, gameData, userId) => {  //gameData -> rawgId, title, onWishList
  return fetch(`/api/game/${userId}`, {
    method: 'POST',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'authorization': `Bearer ${token}`,
    }
  })
};

export const updateGame = (token, gameData, userId) => {  //gameData -> rawgId, title, onWishList
  return fetch(`/api/game/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      authorization: `Bearer ${token}`,
    }
  })
};

export const deleteGame = (token, gameData, userId) => {  //gameData -> rawgId, onWishList
  return fetch(`/api/game/${userId}`, {
    method: 'DELETE',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      authorization: `Bearer ${token}`,
    }
  })
};