import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import SearchResultItem from '../components/SearchResultItem'

const List = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className='flex justify-center mt-12' >
        <div className='flex justify-center gap-12 w-[1080px]' >
        <SearchBox />
        <div >
          <SearchResultItem/>
          <SearchResultItem/>
          <SearchResultItem/>
          <SearchResultItem/>
          <SearchResultItem/>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default List