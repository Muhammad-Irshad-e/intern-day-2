
import './App.css'
import Api from './components/Api'
import Counter from './components/Counter'
import Name from './components/Name'
import Navbar from './components/Navbar'
import Set from './components/Set'

import { Route, Routes } from 'react-router-dom'
import Table2 from './components/Table2jsx'



function App() {
  
  return (
    <>
      <Navbar />\<br /><br /><br />
      <Routes>
        <Route path='/name' element={<Name/>} />
      
        <Route path='/counter' element={<Counter />} />
      
        <Route path='/set' element={<Set />} />
  
        <Route path='/api' element={<Api />} />
        <Route path='/table' element={<Table2 />} />

      </Routes>

    </>
  )
}

export default App
