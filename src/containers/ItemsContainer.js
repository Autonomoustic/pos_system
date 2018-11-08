import React from 'react';
import Item from '../components/Item'

 class ItemsContainer extends React.Component {


  render() {
  const { categoryItems } = this.props
  return (
    <div>
      { categoryItems.map( item => <Item item={item}/> ) }
      </div>
    )
  }
}

export default ItemsContainer
