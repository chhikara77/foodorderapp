import React from 'react'
import '../styles/Content.css'
import ContentHeader from './ContentHeader'
import ContentPage from './ContentPage'
const Content = () => {
  return (
    <div className='content-container'>
      <ContentHeader />
      <ContentPage/>
    </div>
  )
}

export default Content