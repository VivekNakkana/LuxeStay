import Featured from '../components/Featured'
import GuestsLove from '../components/GuestsLove'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropertyList from '../components/PropertyList'
import SubscribeEmail from '../components/SubscribeEmail'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className='flex flex-col items-center mt-8 gap-8 ' >
        <Featured/>
        <h2 className='font-semibold text-2xl' >Browse by Property type</h2>
        <PropertyList/>
        <h2 className='font-semibold text-2xl'>Homes guests love</h2>
        <GuestsLove/>
      </div>
      
      <SubscribeEmail />
      <Footer/>
    </>
    
  )
}

export default Home