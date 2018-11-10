import React from 'react'
import CategoriesContainer from './CategoriesContainer'
import Purchase from '../Components/Purchase'


export default class Store extends React.Component {

  state = {
    currentPurchase: []
  }


  addToPurchase = (newItem) => {
    let itemChange = 0

    if (this.state.currentPurchase[newItem]){

    }else {
      this.setState({currentPurchase: [...this.state.currentPurchase, newItem]})
    }
  }


  removefromPurchase = (item) => {
    this.setState({
      currentPurchase: this.state.currentPurchase.filter(purchaseItem => purchaseItem !== item)
    })
  }



  render() {
    return(
    <div className="store-welcome">

    <h1>Welcome back, {this.props.currentUser.name}</h1>
    <Purchase purchase={this.state.currentPurchase} removefromPurchase={this.removefromPurchase}/>
      <CategoriesContainer categories={this.props.currentUser.categories} addToPurchase={this.addToPurchase} />
    </div>
  )}

}
