import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Profile from './components/Profile'
import Todos from "./pages/todos"
import "./App.css"
import PracticeTodoapp from './pages/PracticeTodoapp'

const App = () => {
  return (
    // <div className='dashboard'>
    //   <Sidebar />
    //   <div className="dashboard-content">
    //     <Content />
    //     <Profile />
    //   </div>
    // </div>
    // <Todos />
    <PracticeTodoapp />
  )
}

export default App
