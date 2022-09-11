import React from 'react'

import PlayIcon from './../../assets/playIcon.png'

function CTA () {
  return (
    <div className='bg-orange-600 phone-6 my-10 py-10 '>
      <div className='container layout mx-auto grid xl:grid-cols-2 place-items-center gap-4 h-full text-white'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold mb-2 text-center xl:text-left'>
            We Make Testy Food <br /> Everyday.
          </h1>
          <p class='text-md text-center xl:text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            eum, laudantium pariatur perferendis consequuntur officiis unde
            error reiciendis iusto nam, similique accusamus totam exercitationem
            quidem cumque dolorem debitis qui quasi.
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <img src={PlayIcon} alt='ICONS' />
          <p className='text-xl'>
            <a href='https://www.github.com/abdallahifox' target='_blank'>20 Min Intro .</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CTA
