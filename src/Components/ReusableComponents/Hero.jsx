import React from 'react'

//TODO: React Router
import { Link } from 'react-router-dom'

//TODO: Resources

import HeroIamge from './../../assets/Image.png'
import Bubble from './../../assets/Bubble.png'

function Hero () {
  return (
    <div className='home h-[650px] relative'>
      <img
        src={Bubble}
        alt='Bubble'
        className='absolute bottom-10 z-[56] hidden md:block'
      />
      <div className='absolute w-full h-full bg-black/75 left-0 top-0 z-1 '></div>
      <section className=' layout h-full'>
        <div className='container mx-auto grid  xl:grid-cols-2 gap-4 place-items-center text-white w-full h-full relative z-[88]'>
          <div className='ml-4'>
            <h1 className='font-bold text-6xl mb-2'>
              Take Food
              <br /> & Let’s Go.
            </h1>
            <p className='text-md mb-2'>
              Have any food on your mind? Just order now!
            </p>

            <button className='btn gap-2 bg-orange-700 border-none outline-none hover:bg-orange-600 rounded-full px-10'>
              <Link to='/menus'>
                <span className='text-xs inline-block'>Today's Menu</span>
                <img
                  src='https://api.iconify.design/eva:arrowhead-right-outline.svg?color=%23ffffff'
                  alt='ICON'
                  className="inline-block ml-4 w-5 h-5'"
                />
              </Link>
            </button>
          </div>
          <div className='hidden xl:block'>
            <img
              src={HeroIamge}
              alt='Hero Iamge'
              className='w-[90%] hover:translate-y-2 ease-in-out duration-300'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
