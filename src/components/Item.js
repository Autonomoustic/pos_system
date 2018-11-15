import React from 'react'

export default class Item extends React.Component {

  state = {
    quantity: 0
  }



  render() {
    const { item, addToPurchase } = this.props
    return (
    <div> <h2>{ item.name }</h2>
    <h4> ID: { item.id }</h4>
    <h4> £{ item.price } </h4>
    <h4> Quantity: { this.state.quantity } </h4>
    <button className="quantity-button" onClick={() => addToPurchase(item)}> +1 </button>
    </div>
  )}



}
