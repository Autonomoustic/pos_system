import React from 'react'

export default class Purchase extends React.Component {


  calculateTotalCost() {
    let counter = 0;
    this.props.purchase.map(purchaseItem => counter += purchaseItem.price)
    return counter
  }



  render() {
    return (
     <div>
     { console.log(this.props.purchase.length),
       this.props.purchase.map(purchaseItem => <p> { purchaseItem.name + this.props.purchase.filter(item => item.name === purchaseItem.name).length} </p> ) }
     <p> Total : £ { this.calculateTotalCost() } </p>
     </div>
  )
  }

}
