import Data from './data/data.json'
import Table from './components/Table'
import './App.css'

function App() {
  const data = Data;
  return (
    <>
      <Table data={data}/>
    </>
  )
}

export default App
