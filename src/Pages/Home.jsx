import React from 'react'

//TODO: Import Components
import Hero from './../Components/HomeComponents/Hero'
import Special from './../Components/HomeComponents/Special'
import ChoseFoodSection from './../Components/HomeComponents/ChoseFoodSection'
function Home () {
  return (
    <div className='home h-screen'>
      <Hero />
      <Special />
      <ChoseFoodSection/>
    </div>
  )
}

export default Home
