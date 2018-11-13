import React from 'react'

import AdminMain from '../Components/AdminMain'

class AdminPage extends React.Component {
  render () {
    return (
      <div>
        <AdminMain currentUser={this.props.currentUser} />
      </div>
    )
  }
}

export default AdminPage
