import React from 'react'

//TODO: Import Components
import Hero from './../Components/ReusableComponents/Hero'
import Special from './../Components/ReusableComponents/Special'
import ChoseFoodSection from './../Components/ReusableComponents/ChoseFoodSection'
import RegularMenu from './../Components/ReusableComponents/RegularMenu'
import CTA from './../Components/ReusableComponents/CTA'
function Home () {
  return (
    <>
      <Hero />
      <Special />
      <ChoseFoodSection />
      <RegularMenu />
      <CTA />
    </>
  )
}

export default Home
