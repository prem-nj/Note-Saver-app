import { createSlice } from '@reduxjs/toolkit'

export const PageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 0,
  },
  reducers: {
    updatePage: (state,action) => {
      
    
    },
    removeFromPaste: (state,action) => {
    },
    resetAllPaste: (state, action) => {

    },
    addToPaste:(state,action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { updatePage, removeFromPaste,resetAllPaste ,addToPaste} = PageSlice.actions

export default PageSlice.reducer