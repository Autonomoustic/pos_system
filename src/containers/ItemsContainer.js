import React from 'react';
import Item from '../Components/Item'
import SearchItem from '../Components/SearchItem'

 class ItemsContainer extends React.Component {
  state = {
    filter: ''
  }

  addToTransaction = () => {
    const { item } = this.props
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  removefromTransaction = () => {
    const { item } = this.props
    if(this.state.quantity === 0){
      return;
    } else {
    this.setState({
      quantity: this.state.quantity - 1
    })}
  }

  updateFilter = event => {
    this.setState({
      filter: event.target.value
    })
  }

  filteredItems = () => {
    return this.props.categoryItems.filter(item =>{
      return item.name.toLowerCase().includes(this.state.filter.toLowerCase())})
  }


  render() {
  const { categoryItems } = this.props
  return (
    <div>
      {categoryItems.length > 0 ? <SearchItem updateFilter={this.updateFilter} filter={this.state.filter}/>: null}
      <div className='item-box'>{ this.filteredItems().map( item =>
      <Item item={item} 
      add={this.addToPurchase} 
      remove={this.removefromTransaction} 
      addToPurchase={this.props.addToPurchase} 
      />)}</div>
    </div>
    )
  }
}

export default ItemsContainer
