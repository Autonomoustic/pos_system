import React from 'react'
import CategoriesContainer from './CategoriesContainer'
import Purchase from '../Components/Purchase'
import API from '../API'

export default class Store extends React.Component {

  state = {
    currentPurchase: []
  }
  
  addToPurchase = (newItem) => {
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

  handleDeleteAllButton = () => {
    this.setState({currentPurchase: []})
  }

  createTransaktion = (event, currentTotal) => {
    if(this.state.currentPurchase.length > 0){
      const newPur = {
        total: currentTotal,
        store_id: this.props.currentUser.id
      }
      API.postNewTransaktion(newPur).then(resp => {this.state.currentPurchase.map(item =>{
        let soldItem = {
          item_id: item.id,
          transaktion_id: resp.id
        };
        API.postSoldItem(soldItem).then(this.handleDeleteAllButton())
        })})
    } else {
      event.preventDefault()
      console.log("we should add a error message or something")
    }
  }

  render() {
    return(
    <div className="store-welcome">
    <h1>Welcome back, {this.props.currentUser.name}</h1>

    <Purchase purchase={this.state.currentPurchase} 
    removefromPurchase={this.removefromPurchase} 
    handleDeleteAllButton={this.handleDeleteAllButton} 
    createTransaktion={this.createTransaktion}/>

      <CategoriesContainer categories={this.props.currentUser.categories} addToPurchase={this.addToPurchase} />
    </div>
  )}

}
