import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePage, addToPaste, removeFromPaste, resetAllPaste } from '../redux/PageSlice'
import { useSearchParams } from 'react-router-dom'


const Home = () => {
const [title, settitle] = useState('')
const [SearchParams,setSearchParams]=useSearchParams()
const Pasteid=SearchParams.get('id')
  return (

    <div className='bg-gray flex flex-col justify-center items-center'>
      <section className='flex justify-center item-center gap-48 mt-5 '>

      <input type="text"
       name=""
       
       placeholder='Enter title here'
       value={title}
       onCahnge={(e)=>settitle(e.target.value)}
      className='border-1 rounded-2xl text-amber-50 py-1 px-2  w-1/3' />

      <button className='border-1 bg-[#22242A] rounded-2xl text-amber-50 p-2 ml-2' >
{Pasteid ? "Update my Notes":"Create my Paste"}
      </button>


      </section>
      <main className='mt-4'>
        <textarea name="" id="" cols="50"   rows="20" placeholder='Enter content here'  className='border-1 bg-[#22242A] rounded-2xl text-amber-50 p-2 ml-2'>




        </textarea>

      </main>

    </div>

  )
}

export default Home