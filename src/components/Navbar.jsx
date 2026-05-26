import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='text-xl mt-2 justify-center'>
      
      

    


      <div>
        <ul className='flex gap-110  text-amber-50 uppercase justify-center items-center'>
          
          <li>
            <NavLink to='/' >
              <div className=' bg-[#181A1B] p-3 rounded-full'>Home</div>
            </NavLink>
          </li>

          <li>
            <NavLink to='/pastes'>
              <div className=' bg-[#181A1B] p-3 rounded-full'>Paste</div>



            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar