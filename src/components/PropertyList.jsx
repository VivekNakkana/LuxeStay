import React from 'react'

const PropertyList = () => {
  return (
    <div className='flex max-w-5xl gap-4' >
        <div className='rounded-md overflow-hidden cursor-pointer flex-1 shadow-xl '>
            <img className='w-full h-[150px] object-cover' src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt=''/>
            <h2 className='ml-4 py-1 text-lg font-medium ' >Hotels</h2>
        </div>
        <div className='rounded-md overflow-hidden cursor-pointer flex-1 shadow-xl'>
            <img className='w-full h-[150px] object-cover' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt=''/>
            <h2 className='ml-4 py-1 text-lg font-medium '>Appartments</h2>
        </div>
        <div className='rounded-md overflow-hidden cursor-pointer flex-1 shadow-xl'>
            <img className='w-full h-[150px] object-cover' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt=''/>
            <h2 className='ml-4 py-1 text-lg font-medium '>Resorts</h2>
        </div>
        <div className='rounded-md overflow-hidden cursor-pointer flex-1 shadow-xl'>
            <img className='w-full h-[150px] object-cover' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt=''/>
            <h2 className='ml-4 py-1 text-lg font-medium '>Villas</h2>
        </div>
        <div className='rounded-md overflow-hidden cursor-pointer flex-1 shadow-xl'>
            <img className='w-full h-[150px] object-cover' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt=''/>
            <h2 className='ml-4 py-1 text-lg font-medium '>Cabins</h2>
        </div>
    </div>
  )
}

export default PropertyList