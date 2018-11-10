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
    /*this.state.currentPurchase.map(item => {
      if (item.name === newItem.name) {
        this.setState({currentPurchase: [...this.state.currentPurchase, {name: item.name, price: item.price, quantity: item.quantity+1}]})
      } else {
         this.setState({currentPurchase: [...this.state.currentPurchase, {name: newItem.name, price: newItem.price, quantity: 1}]})
      }
    })*/
  }





  render() {
    return(
    <div className="store-welcome">
    <h1>Welcome back, {this.props.currentUser.name}</h1>
    <Purchase purchase={this.state.currentPurchase}/>
      <CategoriesContainer categories={this.props.currentUser.categories} addToPurchase={this.addToPurchase}/>
    </div>
  )}

}
