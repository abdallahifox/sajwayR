import React, { useState } from 'react'

import { aboutUs } from './../../Constant/index'
function OurStory () {
  const [btn, setBtn] = useState('Our Story')
  const buttons = ['Our Story', 'Our Mission', 'Our Vission']

  const filters = aboutUs.filter(item => item.id === btn)

  return (
    <div className='layout py-10 my-10'>
      <div className='container mx-auto grid xl:grid-cols-2 place-items-center gap-4'>
        <div className='flex flex-col items-center justify-center bg-orange-200 rounded-md p-8'>
          <div className='flex flex-col md:flex-row items-center gap-2 bg-base-200 p-4 rounded-md  mb-4'>
            {buttons.map((item, i) => {
              return (
                <button
                  onClick={() => setBtn(prev => item)}
                  key={i}
                  className={`${
                    btn === item ? 'bg-orange-600' : 'bg-orange-300'
                  } border-none btn hover:bg-orange-400`}
                >
                  {item}
                </button>
              )
            })}
          </div>
          <div className='flex flex-col'>
            {filters.map(item => {
              return (
                <div key={item.id}>
                  <h1
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className='text-3xl font-bold text-center mb-4'
                  />

                  <p
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                    className='text-sm tracking-tight leading-relaxed text-center'
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className='bg-orange-200'>
          <img
            src={filters[0].image}
            alt={filters[0].title}
            className=' h-[560px]'
          />
        </div>
      </div>
    </div>
  )
}

export default OurStory
