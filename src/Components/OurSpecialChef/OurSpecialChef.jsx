import React from 'react'

import { ourChefs } from './../../Constant/index'
function OurSpecialChef () {
  return (
    <div className='layout py-10'>
      <div className='container mx-auto grid md:grid-cols-2 place-items-center p-4 gap-4'>
        {ourChefs.map(chef => {
          return (
            <div className='flex flex-col xl:flex-row  p-8 bg-orange-200 rounded-md hover:translate-y-3 ease-in-out duration-300'>
              <div className='flex flex-col items-center '>
                <div className='w-[200px] h-[218px] '>
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className='w-full h-full'
                  />
                </div>
                <div className='flex flex-col gap-2 text-center'>
                  <h1 className='font-bold text-lg mb-4'>{chef.name}</h1>
                  <p className='text-sm font-semibold mb-4'>{chef.position}</p>
                </div>
              </div>
              <div className='ml-4'>
                <p
                  dangerouslySetInnerHTML={{ __html: chef.desc }}
                  className='text-sm'
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurSpecialChef
