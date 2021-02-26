class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Some error')
  }


  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }


  saveNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkServerResponse);
  }


  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }


  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }


  saveUserData(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkServerResponse);
  }


  saveAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkServerResponse);
  }


  saveLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._checkServerResponse);
  }


  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkServerResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.saveLike(cardId) : this.deleteLike(cardId);
  }

}


/* const api = new Api ({
  url: 'http://api.ntitov.students.nomoreparties.space',
  headers: {
    //"Authorization": `Bearer ${token}`,
    'content-type': 'application/json'
  }
}); */

export default Api
