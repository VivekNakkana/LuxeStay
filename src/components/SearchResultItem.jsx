import React from 'react'

const SearchResultItem = () => {
  return (
    <div className='basis-3/4 flex mb-4 bg-[#edf1d6] p-2 pr-4 rounded-md gap-6 items-center ' >
      <img className='w-48 h-48 object-cover' src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1' alt='hotel image' />

      <div className='flex flex-col basis-1/2 gap-1 '>
        <h3 className='text-xl text-[#609966] ' >Tower Street Apartments</h3>
        <p className='text-sm' >500m from Airport</p>
        <p className='text-sm text-white bg-[#008009] w-[max-content] px-2 py-1 rounded-md ' >Free Airport Taxi</p>
        <p className='text-sm font-bold'>Studio Apartment with Air Conditioning</p>
        <p className='text-sm'>Entire studio + 1 bathroom + King Size Bed </p>
        <p className='text-sm text-[#008009] font-bold '>Free Cancellation</p>
        <p className='text-sm text-[#008009]'>So,book now, cancel later</p>
      </div>
      <div className='basis-1/4 flex flex-col gap-3 '>
        <div className='flex justify-end gap-2 items-center ' >
          <span  className='font-medium'>Excellent</span>
          <span  className='bg-[#40513b] text-white p-1 rounded-sm font-bold'>8.9</span>
        </div>
        <div className='text-right flex flex-col gap-1 ' >
          <span className='text-2xl'>$112</span>
          <span className='text-sm text-gray-500'>Includes all Taxes</span>
          <button className='bg-[#609966]  text-white font-medium px-2 py-1 rounded-md '>See Availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem