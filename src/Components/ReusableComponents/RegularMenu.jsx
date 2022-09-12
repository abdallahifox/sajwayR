import React from 'react'
//TODO: Resources
import Time from './../../assets/time.png'

//TODO: Constant

import { menus } from './../../Constant/index'

function RegularMenu () {
  return (
    <section className='layout py-20'>
      <div className='container mx-auto grid grid-rows-1 place-items-center gap-8'>
        <div className='flex items-center justify-center flex-col mb-4'>
          <h1 className='font-bold text-5xl mb-4 text-center'>
            Regular Menu's
            <br /> Of Sajway
          </h1>
          <p className='text-md text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Ipsam quis aliquid ex, similique
          </p>
        </div>
        <div className='grid xl:grid-cols-4 gap-4'>
          {menus.map(item => {
            return (
              <div key={item.id}>
                <div className='card max-w-[320px] bg-orange-100 shadow-xl hover:translate-y-3 ease-out duration-300 cursor-pointer'>
                  <figure className='relative '>
                    <div className=' translate-x-[100%] ingrediant absolute top-0 left-0 w-full h-full bg-orange-600/75 px-4 py-2 text-white ease-out duration-500'>
                      <h1 className='text-xl font-bold mb-2'>Ingrediantes</h1>
                      <div className='flex flex-col space-y-2 w-full'>
                        {item.ingrediants.map((ingrediant, index) => {
                          return <p key={index}>{ingrediant}</p>
                        })}
                      </div>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-[183px] h-[183px]'
                    />
                  </figure>
                  <div className='card-body bg-base-100 m-1 rounded-md'>
                    <h2 className='card-title'>{item.name}</h2>
                    <p className='flex text-center text-xs mb-2'>
                      <img
                        src={Time}
                        alt='Time ICON'
                        className='rounded-md mr-1'
                      />
                      25 min away
                    </p>

                    <div className='card-actions justify-end'>
                      <div className='bg-white rounded-md flex flex-col xl:flex-row justify-between items-center w-full'>
                        <div className='price flex flex-col items-center'>
                          <p className='text-orange-600 font-bold text-3xl flex'>
                            <span className='text-sm'>$</span> {item.price}
                          </p>
                        </div>
                        <button className='btn button ml-2 btn-sm'>
                          order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RegularMenu
