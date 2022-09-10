import React from 'react'

//TODO: Import Components
import Hero from './../Components/HomeComponents/Hero'
import Special from './../Components/HomeComponents/Special'
function Home () {
  return (
    <div className='home h-screen'>
      <Hero />
      <Special />
    </div>
  )
}

export default Home
