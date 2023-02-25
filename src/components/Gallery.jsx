import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center tect-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4 '>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img src="images/ahmed.jpg" alt="" className='w-full h-full object-cover ' />
            </div>
            <div>
                <img src="images/an.jpg" alt="" className='w-full h-full object-cover '/>
            </div>
            <div>
                <img src="images/gerardo.jpg" alt="" className='w-full h-full object-cover ' />
            </div>
            <div>
                <img src="images/paolo.jpg" alt="" className='w-full h-full object-cover '/>
            </div>
            <div>
                <img src="images/cris.jpg" alt="" className='w-full h-full ' />
            </div>
        </div>
    </div>
  )
}

export default Gallery