import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BiBed, BiCalendar} from 'react-icons/bi'
import {IoPersonOutline} from 'react-icons/io5'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

const HearderSearch = () => {
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions, setOpenOptions] = useState(false)
      const [options, setOptions] = useState({
        adult: 1,
        children:0,
        room:1        
      })

      const handleOption = (name,operation) =>{
        setOptions((prev) =>{
          return {
            ...prev,
            [name]: operation === 'i'? options[name] + 1 : options[name] - 1
          }
        } )
      }

      const navigate = useNavigate()
      const handleSearch = () =>{
        navigate("/hotels",{state:{destination, date, options}})
      }
 

  return (
    <div className='flex items-center bg-white p-3 max-w-5xl mx-auto mt-8 text-[#40513bf1] justify-around '  >
        <div className='flex gap-2 items-center'>
            <BiBed/>
            <input className='' type='text'
            onChange={e => setDestination(e.target.value)}
            placeholder='Where are you going?'/>
            
        </div>
        <div className='flex gap-2 items-center relative'>
            <BiCalendar/>
            <span className ='cursor-pointer'  onClick={() =>setOpenDate(!openDate)} >{`${format(date[0].startDate,'dd-MM-yy')} to ${format(date[0].endDate,'dd-MM-yy')} `} </span> 
            { openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='absolute top-12 z-20 right-[-70px] '
                minDate={new Date()}
                />}  
        </div>

         
        <div className='flex gap-2 items-center relative'>
            <IoPersonOutline/>
            <span className='cursor-pointer' onClick={() =>setOpenOptions(!openOptions) } > {`${options.adult} adult - ${options.children} children - ${options.room} room `} </span> 
            
            {openOptions &&
            <div className='absolute top-12 border-blue-400 border bg-white px-3 text-gray-700 shadow-xl rounded-md z-20 ' >
              <div className = 'w-44 flex justify-between my-2 ' >
                <span>Adult</span>
                <div className='flex items-center gap-2' >
                  <button disabled={options.adult <= 1} className='border border-blue-700 w-[25px]' onClick={() => handleOption("adult","d") } >-</button>
                  <span>{options.adult} </span>
                  <button className='border border-blue-700 w-[25px]' onClick={() => handleOption("adult","i") } >+</button>
                </div>
              </div>
              <div className = 'w-44 flex justify-between my-2' >
                <span>Children</span>
                <div className='flex items-center gap-2' >
                  <button disabled={options.children <= 0} className='border border-blue-700 w-[25px] ' onClick={() => handleOption("children","d") }>-</button>
                  <span>{options.children} </span>
                  <button className='border border-blue-700 w-[25px]' onClick={() => handleOption("children","i") }>+</button>
                </div>
              </div>
              
              <div className = 'w-44 flex justify-between my-2' >
                <span>Room</span>
                <div className='flex items-center gap-2' >
                  <button disabled={options.room <= 1} className='border border-blue-700 w-[25px]' onClick={() => handleOption("room","d") }>-</button>
                  <span>{options.room} </span>
                  <button className='border border-blue-700 w-[25px]' onClick={() => handleOption("room","i") }>+</button>
                </div>
                
              </div>
            </div>
            }

        </div>
        <div>
            <button className='px-4 py-2 bg-[#40513bf1] text-white rounded-md ' onClick={handleSearch} >Search</button>  
        </div>
    </div>
  )
}

export default HearderSearch