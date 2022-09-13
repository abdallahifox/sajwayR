import React from 'react'

import { motion } from 'framer-motion'

//TODO: Import Components
import Hero from './../Components/ReusableComponents/Hero'
import Special from './../Components/ReusableComponents/Special'
import ChoseFoodSection from './../Components/ReusableComponents/ChoseFoodSection'
import RegularMenu from './../Components/ReusableComponents/RegularMenu'
import CTA from './../Components/ReusableComponents/CTA'
function Home () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: '-100vw' }}
    >
      <Hero />
      <Special />
      <ChoseFoodSection />
      <RegularMenu />
      <CTA />
    </motion.div>
  )
}

export default Home
