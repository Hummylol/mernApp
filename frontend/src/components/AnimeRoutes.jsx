import React from 'react'
import { Routes, Route,useLocation } from 'react-router-dom'
import Signin from './Signin/Signin'
import Signup from './Signup/Signup'
import Workout from './Workout/Workout'
import Arms from './Workout/Arms'
import Push from './Workout/Push'
import Pull from './Workout/Pull'
import Addwork from './Addwork/Addwork'
import HomePage from './Home/Home'
import { AnimatePresence } from 'framer-motion'

const AnimeRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname} >
            <Route path='/' element={<HomePage/>    } />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path="/workouts" element={<Workout />} />
            <Route path="/workouts/arms" element={<Arms />} />
            <Route path="/workouts/push" element={<Push />} />
            <Route path="/workouts/pull" element={<Pull />} />
            <Route path="/workout" element={<Addwork />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimeRoutes