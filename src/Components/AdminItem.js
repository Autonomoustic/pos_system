import React from 'react'

const AdminItem = props =>
  <tr>
    <th scope='row'>{props.item.name}</th>
    <td>{props.item.category_id}</td>
    <td>£{props.item.price}</td>
  </tr>

export default AdminItem
