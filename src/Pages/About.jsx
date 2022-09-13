import React from 'react'

import HeroBanner from './../Components/HeroBanner/HeroBanner'
import ChooseFood from './../Components/ReusableComponents/ChoseFoodSection'
import CTA from './../Components/ReusableComponents/CTA'
import OurStory from './../Components/OurStory/OurStory'
import OurSpecialChef from './../Components/OurSpecialChef/OurSpecialChef'
import { motion } from 'framer-motion'

function About () {
  return (
    <motion.div
      initial={{ opacity: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
    >
      <HeroBanner title='About Us' />
      <ChooseFood layout={true} />
      <OurStory />
      <OurSpecialChef />
      <CTA />
    </motion.div>
  )
}

export default About
