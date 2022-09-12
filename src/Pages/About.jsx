import React from 'react'

import HeroBanner from './../Components/HeroBanner/HeroBanner'
import ChooseFood from './../Components/ReusableComponents/ChoseFoodSection'
import CTA from './../Components/ReusableComponents/CTA'
import OurStory from './../Components/OurStory/OurStory'

function About () {
  return (
    <div>
      <HeroBanner title='About Us' />
      <ChooseFood layout={true} />
      <OurStory />
      <CTA />
    </div>
  )
}

export default About