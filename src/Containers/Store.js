import React from 'react'
import CategoriesContainer from './CategoriesContainer'
import Purchase from '../Components/Purchase'


export default class Store extends React.Component {

  state = {
    currentPurchase: []
  }


  addToPurchase = (item) => {
    this.setState({currentPurchase: [...this.state.currentPurchase, item]})
  }

  handleDeleteAllButton = () => {
    this.setState({currentPurchase: []})
  }

  render() {
    return(
    <div className="store-welcome">
    <h1>Welcome back, (store name)</h1>
    <Purchase purchase={this.state.currentPurchase} handleDeleteAllButton={this.handleDeleteAllButton}/>
      <CategoriesContainer categories={this.props.categories} addToPurchase={this.addToPurchase}/>
    </div>
  )}

}
