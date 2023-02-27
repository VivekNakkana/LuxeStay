import React from 'react'
import { FaBicycle, FaCar} from 'react-icons/fa'
import {BiBed} from 'react-icons/bi'
import {SlPlane} from 'react-icons/sl'
import {MdAttractions} from 'react-icons/md'
import HearderSearch from './HearderSearch'

const Header = ({type} ) => {
  return (
    <header className='bg-[#40513bf1] text-white pt-4 pb-8  ' >
    <div className=' flex justify-center gap-8  text-md font-light ' >
        <div className='flex items-center gap-1 border border-1 rounded-3xl bg-white/10 border-white px-3 py-2 ' >
            <BiBed className='text-xl' />
            <span>Stays</span>
        </div>
        <div className='flex items-center px-3 py-2 rounded-3xl hover:bg-white/10 cursor-pointer gap-1'>
            <FaCar className='text-xl'/>
            <span>Cabs</span>
        </div>
        <div className='flex items-center px-3 py-2 rounded-3xl hover:bg-white/10 cursor-pointer gap-1'>
            <SlPlane className='text-xl'/>
            <span>Flights</span>
        </div>
        <div className='flex items-center px-3 py-2 rounded-3xl hover:bg-white/10 cursor-pointer gap-1'>
            <MdAttractions className='text-xl'/>
            <span>Attractions</span>
        </div>
        <div className='flex items-center px-3 py-2 rounded-3xl hover:bg-white/10 cursor-pointer gap-1'>
            <FaBicycle className='text-xl'/>
            <span>Bikes</span>
        </div>
    </div>
    { type !== "list" &&
        <>
        <div className='ml-20 mt-10' >
            <h1 className='text-5xl font-semibold mb-2 ' >Find your next stay</h1>
            <p className='text-2xl ' >Search deals on hotels, homes, and much more...</p>
        </div>
        <HearderSearch  />
        </>
    }
    

    </header>
  )
}

export default Header