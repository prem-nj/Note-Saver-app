import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePaste, addToPaste, removeFromPaste, resetAllPaste } from '../redux/PageSlice'
import { useSearchParams } from 'react-router-dom'


const Home = () => {
  const [title, settitle] = useState('')
  const [value, setvalue] = useState("")
  const [SearchParams, setSearchParams] = useSearchParams()
  const Pasteid = SearchParams.get('id')
  const dispatch = useDispatch();
  const pastes = useSelector((state) => state.paste.pastes)

  useEffect(() => {
    if (Pasteid) {
      const found = pastes.find((p) => p._id === Pasteid)
      if (found) {
        settitle(found.title || '')
        setvalue(found.content || '')
      }
    } else {
      settitle('')
      setvalue('')
    }
  }, [Pasteid, pastes])


  function createPaste() {
    const paste = {
      content: value,
      title: title,
      _id: Pasteid || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }
    if (Pasteid) {
      //update;
      dispatch(updatePaste(paste));
    } else {
      //store
      dispatch(addToPaste(paste));
    }
    //after creation and updation
    settitle('');
    setvalue('');
    setSearchParams({});

  }

  return (

    <div className='bg-gray flex flex-col justify-center items-center'>
      <section className='flex justify-center item-center gap-48 mt-5 '>

        <input type="text"
          name=""

          placeholder='Enter title here'
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className='border rounded-2xl text-amber-50 py-1 px-2  w-1/3' />

        <button className='border bg-[#22242A] rounded-2xl text-amber-50 p-2 ml-2'
          onClick={createPaste}
        >
          {Pasteid ? "Update my Notes" : "Create my Paste"}
        </button>


      </section>
      <main className='mt-4'>
        <textarea name="" id="" cols="50" rows="20"
          placeholder='Enter content here'
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          className='border bg-[#22242A]
                  rounded-2xl text-amber-50 p-2 ml-2'>




        </textarea>

      </main>

    </div>

  )
}

export default Home