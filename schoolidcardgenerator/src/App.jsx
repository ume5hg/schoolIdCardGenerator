import {Routes,Route} from 'react-router-dom'
import Data from './data/data.json'
import Table from './pages/Table'
import CardLayouts from './pages/CardLayouts'
import {useState} from 'react'
import './App.css'

function App() {
  const data = Data;//loads the mock data which is imported from data.json file above
  const [selectedPerson, setSelectedPerson] = useState(null);//this stores the currently selected person(an object from data.json)
  return (
    <Routes>
      <Route path='/' element={<Table data={Data} setSelectedPerson={setSelectedPerson}/>} /> {/*displays the data in table*/}
      <Route path='/templates' element={<CardLayouts selectedPerson={selectedPerson}/>} /> {/*displays CardLayouts.jsx which shows the templates with details of selected person*/}
    </Routes>
  )
}

export default App
