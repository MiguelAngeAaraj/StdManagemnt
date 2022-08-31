import { Box } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'

import { Routes, Route } from 'react-router-dom'
import AllStudent from './Pages/AllStudent'
import AddStudent from './Pages/AddStudent'
import EditStudent from './Pages/EditStudent'

function App() {
  return (
    <Box>
      <Navbar />
      <Box style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<AllStudent />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/Edit/:id" element={<EditStudent />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
