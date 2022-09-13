import React from 'react'
import { motion } from 'framer-motion'

import Bubble from './../../assets/Bubble.png'
function HeroBanner ({ title }) {
  return (
    <div className='home h-[400px] relative'>
      <div className='absolute w-full h-full bg-black/75 left-0 top-0 z-1 '></div>
      <img src={Bubble} alt='Bubble' className='absolute bottom-10' />
      <section className='layout h-full '>
        <div className='container mx-auto grid grid-cols-1 place-items-center text-white w-full h-full'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='ml-4'
          >
            <h1 className='font-bold text-6xl mb-2 relative'>{title}</h1>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HeroBanner
