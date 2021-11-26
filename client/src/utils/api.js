export const loginUser = (userData) => { //userData -> email, password
  return fetch('/api/user/login', {
    method: 'GET',
    body: userData,
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const logoutUser = (userData) => {
  // return fetch('/api/user/logout', {
  //   method: 'GET',
  //   body: userData,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // })
};

export const createUser = (userData) => { //userData -> username, email, password
  return fetch('/api/user/', {
    method: 'POST',
    body: userData,
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const addGame = (gameData) => {  //gameData -> rawgId, title, onWishList
  return fetch('/api/user/:id', {
    method: 'POST',
    body: gameData,
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const updateGame = (gameData) => {  //gameData -> rawgId, title, onWishList
  return fetch('/api/user/:id', {
    method: 'PUT',
    body: gameData,
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const deleteGame = (gameData) => {  //gameData -> rawgId, onWishList
  return fetch('/api/user/:id', {
    method: 'DELETE',
    body: gameData,
    headers: {
      'Content-Type': 'application/json',
    }
  })
};