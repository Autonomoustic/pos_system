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


  render() {
  return (
    <div className='page-container'>
    <div className='category-box'>
    { this.props.categories &&
      this.props.categories.map(category => <Category category={category} categoryItems={this.showCategoryItems}/>)
    }
    </div>

    <div className='item-box'>
    { this.state.categoryItems &&
      <ItemsContainer categoryItems={this.state.categoryItems}/>
    }
    </div>
    </div>

    )}

}

export default CategoriesContainer
