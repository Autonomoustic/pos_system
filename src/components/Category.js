import React from 'react'

export default class Category extends React.Component {

  render() {
    const { category, removeDuplicate } = this.props
    return (
    <div className='category-card'> <h1>{ category.name }</h1>
    <img src= { category.image_url } className="category-image" onClick={() => this.props.categoryItems(category)}/>
    <h4> { removeDuplicate(category.items).length } item(s) in this category </h4>
     </div>
  )}


}
