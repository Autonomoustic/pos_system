import React from 'react'

import AdminItemList from './AdminItemList'
import AdminNav from './AdminNav'

const AdminMain = props =>
  <div className='admin-container'>
    <AdminNav />
    <AdminItemList unitsSold={props.unitsSold} currentUser={props.currentUser} />
  </div>

export default AdminMain
