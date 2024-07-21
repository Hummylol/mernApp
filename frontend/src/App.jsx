import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import AnimeRoutes from './components/AnimeRoutes'


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimeRoutes />
      </Router>
    </>
  )
}

export default App