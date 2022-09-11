import React from 'react'

//TODO: React Router
import { Routes, Route } from 'react-router-dom'

//TODO: React Components and Pages
import Layout from './Components/UI_Helper/Layout'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
function App () {
  return (
    <>
      <Layout>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  )
}

export default App
