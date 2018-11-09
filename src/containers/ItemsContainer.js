import React from 'react';
import Item from '../Components/Item'

 class ItemsContainer extends React.Component {


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
     });
   }
 }

  render() {
  const { categoryItems } = this.props
  return (
    <div>
      { categoryItems.map( item => <Item item={item} add={this.addToTransaction} remove={this.removefromTransaction} addToPurchase={this.props.addToPurchase} /> ) }
    </div>
    )
  }
}

export default ItemsContainer
