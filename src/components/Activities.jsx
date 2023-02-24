import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='abosolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img src="images/resort.jpg" alt="/" />
        </div>
        <div className='relative p-4 '>
            <h3 className='abosolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruise</h3>
            <img src="images/cruise.jpg" alt="/" />
        </div>
        <div className='relative p-4 '>
            <h3 className='abosolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img src="images/diving.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Activities