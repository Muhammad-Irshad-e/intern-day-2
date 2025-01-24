
import './App.css'
import Navbar from './components/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Tables from './components/Tables'
import Signup from './components/Signup'

function App() {


  return (
    <>
      <Navbar /><br /><br /><br /><br />
      <Routes>
        <Route path="/form" element={<Signup/>} />
        <Route path="/table" element={<Tables />} />

      </Routes>

    </>
  )
}

export default App
