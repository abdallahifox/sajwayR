import React from 'react'

//TODO: React Router
import { Routes, Route } from 'react-router-dom'

//TODO: React Components and Pages
import Layout from './Components/UI_Helper/Layout'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error404'
function App () {
  return (
    <Layout>
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='*' element={<Error to='/404' />} />
      </Routes>
      <Footer />
    </Layout>
  )
}

export default App
