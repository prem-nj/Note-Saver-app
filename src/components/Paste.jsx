import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromPaste } from '../redux/PageSlice'

import toast from 'react-hot-toast'




const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState('');
  const fileterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const dispatch = useDispatch();

  function handleDelete(pasteid) {
    dispatch(removeFromPaste(pasteid))
  }


  return (
    <div className='  flex flex-col justify-center items-center mt-5'>

      <input type="search"
        name=""

        placeholder='Search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border rounded-2xl text-amber-50 py-1 px-2  w-1/3' />


      <div className='text-white flex flex-col gap-2   w-[720px] justify-center items-center' >
        {
          fileterData.length > 0 &&
          fileterData.map((paste) => {
            return (
              <div key={paste?._id} className='border-2 rounded-2xl' >
                <div className='text-center'>

                  {paste.title}
                </div>
                <div className='flex flex-col p-4'>
                  {paste.content}
                </div>

                <div className=''>
                  <button className='p-2 bg-blue-400 ml-3  uppercase'>Edit</button>
                  <button className='p-2 bg-blue-400 ml-3 uppercase'>view</button>
                  <button className='p-2 bg-blue-400 ml-3 uppercase'>share</button>
                  <button className='p-2 bg-blue-400 ml-3 uppercase ' onClick={() => {
                    navigator.clipboard.writeText(paste?.content)

                    toast.success("copied to clipboard")
                  }


                  }>copy</button>
                  <button className='p-2 bg-blue-400 ml-3 uppercase' onClick={() => handleDelete(paste?._id)}>Delete</button>
                  <div className='created'>
                    {paste.createdAt}
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>


  )
}

export default Paste