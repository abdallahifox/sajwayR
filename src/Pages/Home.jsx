import React from 'react'

//TODO: Import Components
import Hero from './../Components/HomeComponents/Hero'
import Special from './../Components/HomeComponents/Special'
import ChoseFoodSection from './../Components/HomeComponents/ChoseFoodSection'
import RegularMenu from './../Components/HomeComponents/RegularMenu'
import CTA from './../Components/HomeComponents/CTA'
function Home () {
  return (
    <div className='home h-screen'>
      <Hero />
      <Special />
      <ChoseFoodSection/>
      <RegularMenu/>
      <CTA/>
    </div>
  )
}

export default Home
