import React from 'react'

const AdminItem = props =>
  <tr>
    <th scope='row'>{props.item.name}</th>
    <td>{props.item.category_id}</td>
    <td>£{props.item.price}</td>
    <td>{props.unitsSold}</td>
  </tr>

export default AdminItem
