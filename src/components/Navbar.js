

const Navbar = () => {
  return (
    <div className="pt-6 bg-[#40513bf1] flex justify-between  items-center " >
      <span className="font-logo text-white
       ml-16 text-5xl font-medium" >LuxeStay</span>
      <div className="mr-20 flex gap-4 " > 
        <button className="px-4  py-1 rounded-md font-medium text-[#40513bf1] bg-white " >Login</button>
        <button className="px-4  py-1 rounded-md font-medium text-[#40513bf1] bg-white " >Register</button>
      </div>
    </div>
  )
}

export default Navbar