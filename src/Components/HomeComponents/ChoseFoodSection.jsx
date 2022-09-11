import React from 'react'

//TODO: Constant
import { choseFoodSection } from './../../Constant/index'

function ChoseFoodSection () {
  return (
    <section className='layout py-20'>
      <div className='container mx-auto p-4 bg-orange-600 w-[320px] xl:w-full rounded-md'>
        <div className='flex items-center flex-col xl:flex-row  p-4 text-white gap-8'>
          {choseFoodSection.map(item => {
            return (
              <div
                className='flex flex-col items-center justify-center xl:items-start xl:justify-start xl:flex-row gap-4'
                key={item.id}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='xl:w-[93px] xl-h-[93px]'
                  />
                </div>
                <div>
                  <h1 className='text-3xl font-bold mb-2'>{item.title}</h1>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                    className='text-md mb-2 text-center xl:text-left'
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ChoseFoodSection
