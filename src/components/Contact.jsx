import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-15'>
        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by:</p>
        <div className='grid md:grid-cols-2'>
            <img src="images/paolo.jpg" alt="" className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type="text" placeholder='First Name' />
                    <input className='border m-2 p-2' type="text" placeholder='Second Name' />
                    <input className='border m-2 p-2' type="text" placeholder='Email Address' />
                    <input className='border m-2 p-2' type="text" placeholder='Phone' />
                    <input className='border m-2 p-2 col-span-2' type="text" placeholder='Home Address' />
                    <textarea className='border m-2 p-2 col-span-2' cols="30" rows="10"></textarea>
                    <button className='col-span-2 m-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact