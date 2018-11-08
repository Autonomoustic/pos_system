import React from 'react'

export default class Item extends React.Component {


  render() {
    const { item } = this.props
    return (
    <div> <h1>{ item.name }</h1>
    <h4> ID: { item.id }</h4>
    <h4> £{ item.price } </h4>
     </div>
  )}



}
