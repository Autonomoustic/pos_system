import React from 'react'

export default class Purchase extends React.Component {


  calculateTotalCost() {

    const { purchase } = this.props
      return (
      let arr = []
      for (let price in purchase) {
       if (purchase.hasOwnProperty(price)) {
         arr.push( [ price, purchase[price] ] );
           }
        }
    return <p>Your total is { totalCost } </p>
    )
  }



  render() {
    return (
     <div>{ this.props.purchase.map(purchaseItem => <p> { purchaseItem.name } </p> ) } </div>
  )
  }

}
