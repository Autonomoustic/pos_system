import React from 'react'

export default class Item extends React.Component {

  state = {
    quantity: 0
  }



  render() {
    const { item } = this.props
    return (
    <div> <h1>{ item.name }</h1>
    <h4> ID: { item.id }</h4>
    <h4> £{ item.price } </h4>
    <h4> Quantity: { this.state.quantity } </h4>
    <button className="quantity-button" onClick={this.props.add}> +1 </button>
    <button className="quantity-button" onClick={this.props.remove}> -1 </button>
    </div>
  )}



}
