import { useState } from 'react'
import Navbar from './components/webUi/navbar/Navbar';
import Sidebar from './components/webUi/sidebar/Sidebar';
import Middle from './components/webUi/middle/Middle';
import RecentList from './components/webUi/right/RecentList';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <div className="App">
      <Navbar />
        <div className='main'>
          <Sidebar />
          <Middle />
          <RecentList />
        </div>
    </div>
    </>
  )
}

export default App
