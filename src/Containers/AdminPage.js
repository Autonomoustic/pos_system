import React from 'react'

import AdminMain from '../Components/AdminMain'

import API from '../API'

class AdminPage extends React.Component {
  state = {
    soldItems: []
  }

  componentDidMount () {
    API.getSoldItems()
    .then(soldItems => this.setState({soldItems: soldItems}))
  }

  unitsSold = (item) => {
    const unitsSold = this.state.soldItems.filter(soldItem => soldItem.item_id === item.id).length
    return unitsSold
  }

  render () {
    return (
      <div>
        <AdminMain unitsSold={this.unitsSold} currentUser={this.props.currentUser} />
      </div>
    )
  }
}

export default AdminPage
