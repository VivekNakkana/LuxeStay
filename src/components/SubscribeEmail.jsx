import React from 'react'

const SubscribeEmail = () => {
  return (
    <div className=' w-full mt-12 bg-[#40513bf1] text-white flex flex-col items-center gap-1 py-16 ' >
        <h3 className='text-3xl font-normal ' >Save Time, Save Money</h3>
        <p className='text-lg font-light' >Sign up and we'll send the best deals to you</p>
        <div  >
            <input className='w-96 h-16 mt-4 mr-1 rounded-sm p-6' placeholder='Enter your email' type='email' />
            <button className='h-16 px-4 text-xl text-white font-semibold rounded-sm bg-[#609966] ' >Subscribe</button>
        </div>
    </div>
  )
}

export default SubscribeEmail