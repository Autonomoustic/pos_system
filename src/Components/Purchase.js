import React from 'react'
import Payment from './Payment'

export default class Purchase extends React.Component {
    calculateTotalCost() {
     let counter = 0;
     this.props.purchase.map(purchaseItem => counter += purchaseItem.price)
     return counter
   }
    render() {
     return (
      <div>
      {this.props.purchase.map(purchaseItem => <p> { purchaseItem.name + this.props.purchase.filter(item => item.name === purchaseItem.name).length} </p> ) }
      <p> Total : £ { this.calculateTotalCost() } </p>
        {<Payment total={ this.calculateTotalCost() } purchase={this.props.purchase} handleDeleteAllButton={this.props.handleDeleteAllButton}/>}
      </div>
   )
   }
  }
