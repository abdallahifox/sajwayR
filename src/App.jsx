import React from 'react'

//TODO: React Router
import { Routes, Route } from 'react-router-dom'

//TODO: React Components and Pages
import Navigation from './Components/Navigation/Navigation'
import Home from './Pages/Home'
function App () {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
