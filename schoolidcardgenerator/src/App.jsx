import {Routes,Route} from 'react-router-dom'
import Data from './data/data.json'
import Table from './pages/Table'
import CardLayouts from './pages/CardLayouts'
import {useState} from 'react'
import './App.css'

function App() {
  const data = Data;
  const [selectedPerson, setSelectedPerson] = useState(null);
  return (
    <Routes>
      <Route path='/' element={<Table data={Data} setSelectedPerson={setSelectedPerson}/>} />
      <Route path='/templates' element={<CardLayouts selectedPerson={selectedPerson}/>} />
    </Routes>
  )
}

export default App
