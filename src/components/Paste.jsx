import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'





const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState('');
  const fileterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>

      <input type="search"
        name=""

        placeholder='Search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border rounded-2xl text-amber-50 py-1 px-2  w-1/3' />
        
<div className='text-white'>
  {
    fileterData.length > 0 &&
    fileterData.map((paste) => (
      <div key={paste?._id}>
        {paste.title}
      </div>
    ))
  }
</div>


    </div>
  )
}

export default Paste