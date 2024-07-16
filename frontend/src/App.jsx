import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Workout from './components/Workout/Workout'
import Arms from './components/Workout/Arms'
import Push from './components/Workout/Push'
import Pull from './components/Workout/Pull'
import Addwork from './components/Addwork/Addwork'


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin />} />
          <Route path="/workouts" element={<Workout />} />
          <Route path="/workouts/arms" element={<Arms/>} />
          <Route path="/workouts/push" element={<Push/>} />
          <Route path="/workouts/pull" element={<Pull />} />
          <Route path="/workout" element={<Addwork/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App