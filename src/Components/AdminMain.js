import React from 'react'

import AdminItemList from './AdminItemList'
import AdminNav from './AdminNav'
import AddItem from './AddItem'
import { Route } from 'react-router-dom'

const AdminMain = props =>
  <div className='admin-container'>
    <Route exact path={`${props.match.path}/additem`} render={() => <AddItem />}/>
    <AdminNav match={props.match}/>
    <AdminItemList unitsSold={props.unitsSold} currentUser={props.currentUser} />
  </div>

export default AdminMain
