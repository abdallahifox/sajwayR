import React from 'react'

//TODO: Components
import Error from './../Components/404/Error'
import HeroBanner from './../Components/HeroBanner/HeroBanner'
function Error404 () {
  return (
    <div>
      <HeroBanner title='404_Error' />
      <Error />
    </div>
  )
}

export default Error404
