import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromPaste } from '../redux/PageSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState('');
  const fileterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDelete(pasteid) {
    dispatch(removeFromPaste(pasteid))
  }

  function handleEdit(pasteid) {
    navigate(`/?id=${pasteid}`)
  }

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <input 
        type="search"
        placeholder='Search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border rounded-2xl text-amber-50 py-1 px-2 w-1/3' 
      />

      {/* Removed 'relative' from here so it doesn't anchor the buttons */}
      <div className='text-white flex flex-col gap-6 justify-center items-center mt-5' style={{ width: 720 }}>
        {
          fileterData.length > 0 &&
          fileterData.map((paste) => {
            return (
              /* ADDED 'relative' HERE: This treats this specific box as the boundary anchor */
              <div key={paste?._id} className='border-2 w-[700px] rounded-2xl relative p-4 min-h-[150px] flex flex-col justify-between'>
                
                {/* Left Side Content Area (Gives 180px right-padding so text never goes under buttons) */}
                <div className='pr-[180px] w-full'>
                  <div className='text-xl font-bold mb-2'>
                    {paste.title}
                  </div>
                  <div className='break-words whitespace-pre-wrap text-zinc-300'>
                    {paste.content}
                  </div>
                </div>

                {/* Bottom Left Timestamp */}
                <div className='created text-xs text-gray-400 mt-4 text-center'>
                  {paste.createdAt}
                </div>

                {/* ACTION BUTTONS: Positioned absolutely at the Top-Right corner of THIS box */}
                <div className='absolute top-4 right-4 flex  gap-2 max-w-[160px] justify-end'>
                  <Link to={`/pastes/${paste?._id}`}>
                    <button className='p-2 rounded-full bg-blue-500 text-sm font-medium rounded uppercase hover:bg-green-600'>
                      view
                    </button>
                  </Link>
                  
                  <button className='p-2 bg-blue-500 text-sm font-medium rounded-full uppercase hover:bg-blue-300' onClick={() => handleEdit(paste?._id)}>Edit</button>

                  <button className='p-1 bg-blue-500 text-sm font-medium rounded-full uppercase hover:bg-blue-600'>share</button>
                  
                  <button className='p-1 bg-blue-500 text-sm font-medium rounded-full uppercase hover:bg-blue-600' onClick={() => {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("copied to clipboard")
                  }}>Copy</button>
                  
                  <button className='p-2 bg-red-500 text-sm font-medium rounded-full uppercase hover:bg-red-600' onClick={() => handleDelete(paste?._id)}>Delete</button>
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