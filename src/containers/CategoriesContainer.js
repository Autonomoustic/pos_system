import React from 'react'
import Category from '../components/Category'
import ItemsContainer from '../containers/ItemsContainer'


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
    <div>
    <p>CategoriesContainer</p>
    { this.props.categories &&
      this.props.categories.map(category => <Category category={category} categoryItems={this.showCategoryItems}/>)
    }
    { this.state.categoryItems &&
      <ItemsContainer categoryItems={this.state.categoryItems}/>
    }
    </div>
    )}

}

export default CategoriesContainer
