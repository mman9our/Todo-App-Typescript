import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Middle from './components/middle/Middle';
import RecentList from './components/right/RecentList';
import './App.css'

function App() {

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
