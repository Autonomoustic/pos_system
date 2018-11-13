import React from 'react'

import AdminItem from './AdminItem'

const AdminItemList = props =>
  <div className='admin-item-list'>
    <table>
      <caption>All Items</caption>
      <thead>
        <tr>
          <th scope='col'>Item</th>
          <th scope='col'>Category</th>
          <th scope='col'>Price</th>
          <th scope='col'>Units Sold</th>
        </tr>
      </thead>
      <tbody>
        {
            props.currentUser ?
            props.currentUser.categories.map(category => {
              return category.items.map(item => {
                return <AdminItem unitsSold={props.unitsSold(item)} item={item} />
              })
            })
            :
             null
        }
      </tbody>
      <tfoot>
        <tr>
          <th scope='row' colspan='2'>Total Items:</th>
          <td colspan='2'>{props.currentUser ? props.currentUser.categories.map(category => category.items.length).reduce((a, b) => a + b) : null}</td>
        </tr>
      </tfoot>
    </table>
  </div>

export default AdminItemList
