/* eslint-disable react/prop-types */


const Navbar=({username})=>{
    
  return(
    <div className="flex bg-amber-400 px-4 py-7 justify-between flex-wrap">
        <h1 className="font-bold text-2xl">Productivity Dashboard</h1>
        <h1 className="font-bold">Welcome <span className="text-blue-500">{username||"john"}</span></h1>

    </div>
  )
}

export default Navbar;