import React from 'react'
import ContentHeader from './ContentHeader'
import "../styles/content.css"
import Card from './Card'

function Content() {
  return (
    <div className='content'>
      <ContentHeader />
      <Card />
    </div>
  )
}

export default Content
