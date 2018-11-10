import React from 'react'
import Payment from './Payment'

export default class Purchase extends React.Component {

  calculateTotalCost() {
    let counter = 0;
    this.props.purchase.map(purchaseItem => counter += purchaseItem.price)
    return counter
  }

  removeDuplication() {
    let newArr = this.props.purchase.filter((q, idx) => this.props.purchase.indexOf(q) === idx) 
    return newArr
  }

  listAllItems(arr) {
    let newArr = this.removeDuplication(arr)
    let itemList = newArr.map(purchaseItem => <p> {purchaseItem.name}  x {this.props.purchase.filter(item => item.name === purchaseItem.name).length} <button onClick={() => this.props.removefromPurchase(purchaseItem)}>X</button></p> )
    console.log(this.props)
    return itemList
  }


  render() {
    return (
     <div className="purchase">
       { this.listAllItems() }
     <p> Total : £ <strong>{ this.calculateTotalCost() }</strong> </p>
        {<Payment total={ this.calculateTotalCost() } purchase={this.props.purchase} handleDeleteAllButton={this.props.handleDeleteAllButton}/>}
     </div>
  )
  }
