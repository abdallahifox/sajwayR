import React from 'react'
//TODO: React Router
import { Link } from 'react-router-dom'

//TODO: Resources
import Error404 from './../../assets/404.png'
function Error () {
  return (
    <div className='layout py-10 '>
      <div className='container mx-auto grid grid-cols-1 place-items-center '>
        <div className='flex flex-col items-center justify-center'>
          <img src={Error404} alt='Error' className='mb-4' />
          <Link to='/'>
            <div className='btn button'>Go To Home</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
