import React from 'react'

import AdminMain from '../Components/AdminMain'

import API from '../API'

class AdminPage extends React.Component {
  state = {
    soldItems: []
  }

  componentDidMount () {
    API.getSoldItems(this.props.currentUser)
    .then(soldItems => this.setState({soldItems: soldItems}))
  }

  unitsSold = (item) => {
    return 
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
