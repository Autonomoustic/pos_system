import React from 'react'
import Category from '../Components/Category'
import ItemsContainer from '../Containers/ItemsContainer'
import '../App.css'


class CategoriesContainer extends React.Component {

  state = {
    categoryItems: []
  }

  showCategoryItems = (cat) => {
    this.setState({
      categoryItems: cat.items
    })
  }

  removeDuplicate (arr) {
    let newArr = []
    arr.filter((item) =>{
      let i = newArr.findIndex(x => x.name === item.name);
      if (i <= -1){
        newArr.push(item)
      } 
    })
    return newArr
   }


  render() {
  return (
    <div className='page-container'>
    <div className='category-box'>
    { this.props.categories &&
      this.props.categories.map(category => <Category 
        removeDuplicate={this.removeDuplicate}
        category={category} 
        categoryItems={this.showCategoryItems} 
        addToPurchase={this.addToPurchase}/>)
    }
    </div>

    <div className='item-box'>
    { this.state.categoryItems &&
      <ItemsContainer categoryItems={this.removeDuplicate(this.state.categoryItems)} addToPurchase={this.props.addToPurchase}/>
    }
    </div>
    </div>
    )}

}

export default CategoriesContainer
