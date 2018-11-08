class API {

  static init () {
    this.baseUrl = 'http://localhost:3001'

  }

  static getCategories() {
    return fetch('http://localhost:3001/categories')
  .then(resp => resp.json())
  }

}

API.init()

window.API = API

export default API
