import React from 'react'

import { Link } from 'react-router-dom'

const Nav = props =>
  <div>
    <div className='nav'>
      <div className='nav_logo'>
        <img src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png' alt='Flatiron School Logo' />
      </div>
      <ul className='nav_list'>
        <li className='nav_list_item'><Link to='/'>Store</Link></li>
        <li className='nav_list_item'><Link to='/'>Admin</Link></li>
        <li className='nav_list_item'><Link to='/'>Analytics</Link></li>
      </ul>

      <div className='nav_button'>
        <Link to='/signin' >
          Sign in
        </Link>
      </div>
    </div>
  </div>

export default Nav
