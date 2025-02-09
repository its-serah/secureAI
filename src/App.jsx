import {
  Routes, Route
} from 'react-router'

import Dashboard from './Components/Dashboard'
import People from './Components/People'
import AddPerson from './Components/AddPerson'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Logs from './Components/Logs'

function App() {

  return (
    <div className='w-full ease-in-out h-screen flex flex-col'>
    <Navbar/>
    <div className='flex flex-col basis-full'>
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/people" element={<People />} />
        <Route path="/addperson" element={<AddPerson/>} />
        <Route path="/logs" element={<Logs/>} />
    </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App
