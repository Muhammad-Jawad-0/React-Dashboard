import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Profile from './components/Profile'
import Todos from "./pages/todos"
import "./App.css"

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard-content">
        <Content />
        <Profile />
      </div>
    </div>
    // <Todos />
  )
}

export default App
