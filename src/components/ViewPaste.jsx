import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams, useParams } from 'react-router-dom'

const ViewPaste = () => {

  const [title, settitle] = useState('')
  const [value, setvalue] = useState("")

  const [SearchParams, setSearchParams] = useSearchParams()
  const params = useParams()

  const Pasteid = params.id || SearchParams.get('id')

  const dispatch = useDispatch()

  const pastes = useSelector(
    (state) => state.paste.pastes
  )

  function createPaste() {

    const paste = {
      content: value,
      title: title,
      _id: Pasteid || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }

    if (Pasteid) {
      dispatch(updatePaste(paste))
    }
    else {
      dispatch(addToPaste(paste))
    }

    settitle('')
    setvalue('')
    setSearchParams({})
  }

  useEffect(() => {

    if (Pasteid) {

      const found = pastes.find(
        (p) => p._id === Pasteid
      )

      if (found) {
        settitle(found.title || '')
        setvalue(found.content || '')
      }

    } else {
      settitle('')
      setvalue('')
    }

  }, [Pasteid, pastes])

  return (

    <div className='bg-gray flex flex-col justify-center items-center'>

      <section className='flex justify-center items-center gap-48 mt-5'>

        <input
          type="text"
          placeholder='Enter title here'
          value={title}
          disabled
          onChange={(e) => settitle(e.target.value)}
          className='border rounded-2xl text-amber-50 py-1 px-2 w-1/3'
        />

        <button
          className='border bg-[#22242A] rounded-2xl text-amber-50 p-2 ml-2'
          onClick={createPaste}
        >
          {Pasteid
            ? "Update my Notes"
            : "Create my Paste"}
        </button>

      </section>

      <main className='mt-4'>

        <textarea
          cols="50"
          rows="20"
          placeholder='Enter content here'
          value={value}
          disabled
          onChange={(e) => setvalue(e.target.value)}
          className='border bg-[#22242A] rounded-2xl text-amber-50 p-2 ml-2'
        >
        </textarea>

      </main>

    </div>
  )
}

export default ViewPaste