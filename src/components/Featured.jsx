import React from 'react'

const Featured = () => {
  return (
    <div className='w-full max-w-5xl text-white flex justify-between gap-5 z-10 ' >
     <div className='relative ' >
      <img className='w-full object-cover rounded-md ' src ='https://images.unsplash.com/photo-1551161242-b5af797b7233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80'  alt='' /> 
      <div className='absolute bottom-6 bg-[#609966] px-6 py-2 ' >
        <h2 className='text-xl' >Hyderabad</h2>
        <p>616 Properties</p>
      </div>
     </div> 
     <div className='relative '>
      <img className='w-full object-cover rounded-md ' src ='https://images.unsplash.com/photo-1588416936097-41850ab3d86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='' /> 
      <div className='absolute bottom-6 bg-[#609966] px-6 py-2 '>
        <h2 className='text-xl'>Bengaluru</h2>
        <p>916 Properties</p>
      </div>
     </div> 
     <div className='relative '>
      <img className='w-full object-cover rounded-md ' src ='https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='' /> 
      <div className='absolute bottom-6 bg-[#609966] px-6 py-2 '>
        <h2 className='text-xl'>Goa</h2>
        <p>516 Properties</p>
      </div>
     </div> 
    </div>
  )
}

export default Featured