import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer'
import ItemsContainer from './containers/ItemsContainer'
import API from './API'
import './App.css';


class App extends Component {


  state = {
    categories: null
  }


  componentDidMount() {
    API.getCategories()
    .then(resp => {
      this.setState({
        categories: resp
      })})
  }


  render() {
    return (
      <div className="App">
      <p> Welcome to the POS system! </p>
      <CategoriesContainer categories={this.state.categories}/>

      </div>
    );
  }
}

export default App;
