import React from 'react'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import '../styles/home.scss'

import createGroupIcon from '../assets/icons/create_group_icon.png'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Sidebar />
      <div className='home-container'>
        <div>
          <div className='page-title'>Groups</div>
          <div className='page-title-sub'>Here is a list of groups you have created:</div>
        </div>
        <button className='create-group' type='button'>
          <img alt='create-group' src={createGroupIcon} />
          Create Group
        </button>
    
        <List />
      </div>
    </div>
  )
}

export default HomePage