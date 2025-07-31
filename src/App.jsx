import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Layouts/HomePage'
import Home from './Page/Home'

function App() {

  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home/>} />
          <Route path="profile" element={<h1>A2</h1>} />
          <Route path="settings" element={<h1>A3</h1>} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
