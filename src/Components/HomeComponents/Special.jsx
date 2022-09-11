import React from 'react'
//TODO:Resources
import SpecialImage from './../../assets/specialimage.png'
import SpecialIcon from './../../assets/specialicon.png'
import Time from './../../assets/time.png'

//TODO: Constant
import { menus } from './../../Constant/index'

function Special () {
  const specialOffer = menus.find(item => item.special === true)

  return (
    <section className='layout py-20'>
      <div className='container mx-auto grid xl:grid-cols-2 gap-4 place-items-center'>
        <div className='flex items-center justify-center relative p-4 bg-orange-200 w-[320px] xl:w-[420px] h-[440px] hover:translate-y-3 ease-in-out duration-300'>
        <div className='w-[90px] h-[90px]  absolute -right-10 bottom-20  hidden xl:block'>
            <img src={SpecialImage} alt='Image' className='rounded-md' />
          </div>
          <img
            src={specialOffer.image}
            alt='Special Image'
            className='rounded-md'
          />
        </div>
        <div className='flex flex-col items-center  p-8 bg-orange-200 w-[320px] xl:w-[420px] hover:translate-y-3 ease-in-out duration-300'>
          <div className='flex items-center justify-center text-center'>
            <img src={SpecialIcon} alt='ICONS' />
          </div>
          <h2 className='text-2xl xl:text-5xl mb-4 font-bold text-center'>
            Today’s Special <br /> Surprise For You
          </h2>
          <p className='text-md font-semibold text-center mb-4 '>
            It is a long established fact that a will distracted
            <br /> readable content of a page when looking at. <br /> its the
            layout using Lorem Ipsum is that it has a normal distributionas
            <br /> opposed to using making it look like.
          </p>
          <div className='bg-white p-8 rounded-md flex flex-col xl:flex-row justify-between items-center w-full'>
            <div className='price flex flex-col items-center'>
              <p className='text-orange-600 font-bold text-3xl'>
                <span className='text-sm'>$</span> {specialOffer.price}
              </p>
              <p className='flex text-center text-xs mb-2'>
                <img src={Time} alt='Time ICON' className='rounded-md mr-1' />
                25 min away
              </p>
            </div>
            <button className='btn button'>order Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Special
