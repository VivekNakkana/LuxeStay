import React,{useState} from 'react'
import {useLocation} from 'react-router-dom'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range'

const SearchBox = () => {
  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate,setOpenDate] = useState(false)
  const [options,setOptions] = useState(location.state.options)
  return (
    <div className=' basis-1/4 sticky p-4 top-8 bg-[#9DC08B] rounded-lg h-[max-content] ' >
        <p className='text-2xl font-logo text-center font-semibold' >Search</p>
        <div className='flex flex-col mt-3 ' >
          <label className='text-sm font-medium '>Destination: </label>
          <input type='text' className='px-3 py-2 text-lg rounded-lg ' placeholder={destination}></input>
        </div>
        <div className='flex flex-col mt-3 '>
          <label className='text-sm font-medium '>Check-in Date</label>
          <span onClick={() =>setOpenDate(!openDate) } className ='cursor-pointer bg-white p-2 rounded-lg' >{`${format(date[0].startDate,'dd-MM-yy')} to ${format(date[0].endDate,'dd-MM-yy')} `} </span> 

          {openDate && <DateRange 
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />}
          
        </div>
        <div className='px-3 mt-4' >
          <label>Options</label>
          <div className='flex justify-between mt-2 text-[#555] ' >
            <span>Min Price</span>
            <input className='w-20 rounded-md' type='number' />
          </div>
          <div className='flex justify-between mt-2 text-[#555] '>
            <span>Max Price</span>
            <input className='w-20 rounded-md' type='number' />
          </div>
          <div className='flex justify-between mt-2 text-[#555] '>
            <span>Adult</span>
            <input className='w-20 px-2 rounded-md' type='number' min={1} placeholder={options.adult} />
          </div>
          <div className='flex justify-between mt-2 text-[#555] '>
            <span>Children</span>
            <input className='w-20 px-2 rounded-md' type='number' min={0} placeholder={options.children} />
          </div>
          <div className='flex justify-between mt-2 text-[#555] '>
            <span>No. of Rooms</span>
            <input className='w-20 px-2 rounded-md' type='number' min={1} placeholder={options.room} />
          </div>
        </div>
        <button className='px-4 py-2 mt-4 w-full rounded-md text-white bg-[#40513B] text-xl  ' >Search</button>

    </div>
  )
}

export default SearchBox