class API {

  static init () {
    this.baseUrl = 'http://localhost:3001'
  }

  static getCategories () {
    return fetch('http://localhost:3001/categories')
  .then(resp => resp.json())
  }

  static getStores (event) {
    return fetch('http://localhost:3001/stores')
      .then(resp => { return {resp: resp.json(), event: event} })
  }

  static postNewUser (newUser) {
    return fetch('http://localhost:3001/stores', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }).then(resp => resp.json())
  }

}

API.init()

window.API = API

export default API
