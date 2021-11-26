export const loginUser = (userData) => { //userData -> email, password
  return fetch('/api/user/login', {
    method: 'GET',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const logoutUser = (userData) => {
  // return fetch('/api/user/logout', {
  //   method: 'GET',
  //   body: JSON.stringify(userData),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // })
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

export const addGame = (gameData) => {  //gameData -> rawgId, title, onWishList
  return fetch('/api/user/:id', {
    method: 'POST',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const updateGame = (gameData) => {  //gameData -> rawgId, title, onWishList
  return fetch('/api/user/:id', {
    method: 'PUT',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
};

export const deleteGame = (gameData) => {  //gameData -> rawgId, onWishList
  return fetch('/api/user/:id', {
    method: 'DELETE',
    body: JSON.stringify(gameData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
};