import React from 'react';
import Popup from "reactjs-popup";
import Payment from './Payment'

export default class Purchase extends React.Component {

  calculateTotalCost () {
    let counter = 0
    this.props.purchase.map(purchaseItem => counter += purchaseItem.price)
    return counter
  }

  removeDuplication () {
    let newArr = this.props.purchase.filter((q, idx) => this.props.purchase.indexOf(q) === idx)
    return newArr
  }

  listAllItems (arr) {
    let newArr = this.removeDuplication(arr)
    let itemList = newArr.map(purchaseItem => <p> {purchaseItem.name}  x {this.props.purchase.filter(item => item.name === purchaseItem.name).length} <button onClick={() => this.props.removefromPurchase(purchaseItem)}>X</button></p>)
    return itemList
  }

  render () {
    return (
      <div className='purchase'>
        { this.listAllItems() }
        <p> Total : £ <strong>{ this.calculateTotalCost() }</strong> </p>
        <button className='btn-purchace-box' onClick={() => this.props.handleDeleteAllButton()}>Delete All!!</button>

        <Popup trigger={<button className='btn-purchace-box'> Proceed to payment</button>} position="right center" background="00000066">
         <div className="popup">{<Payment total={this.calculateTotalCost()} purchase={this.listAllItems()} 
            handleDeleteAllButton={this.props.handleDeleteAllButton} 
            createTransaktion={this.props.createTransaktion}/>}</div>
        </Popup>
      </div>
    )
  }
}
