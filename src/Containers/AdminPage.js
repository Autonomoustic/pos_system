import React from 'react'

import AdminMain from '../Components/AdminMain'

import API from '../API'

class AdminPage extends React.Component {
  state = {
    soldItems: []
  }

  componentDidMount () {
    if (this.props.currentUser){
      API.getSoldItems(this.props.currentUser.name)
      .then(soldItems => this.setState({soldItems: soldItems.sold_items_data}))
    }
  }

  unitsSold = (item) => {
    return this.state.soldItems.filter(itemSold => itemSold.itemName === item.name).length
  }

  render () {
    return (
      <div>
        <AdminMain match={this.props.match} unitsSold={this.unitsSold} currentUser={this.props.currentUser} />
      </div>
    )
  }
}

export default AdminPage
