import React from 'react'

const Nav = props =>
  <div>
    <div className='nav'>
      <div className='nav_logo'>
        <img src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png' alt='Flatiron School Logo' />
      </div>
      <ul className='nav_list'>
        <li className='nav_list_item'><a >Store</a></li>
        <li className='nav_list_item'><a >Admin</a></li>
        <li className='nav_list_item'><a >Analytics</a></li>
      </ul>
      <div className='nav_button'><a href='#'>Sign in</a></div>
    </div>
  </div>

export default Nav
