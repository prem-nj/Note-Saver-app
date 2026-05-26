import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';


const getInitialPastes = () => {
  try {
    const pastes = localStorage.getItem('pastes');
    return pastes ? JSON.parse(pastes) : [];
  } catch (error) {
    console.error("Error parsing pastes from localStorage", error);
    return [];
  }
};

export const PageSlice = createSlice({
  name: 'paste',
  initialState: {
  pastes: getInitialPastes()
  },
  reducers: {
    updatePaste: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated");
      }
    },
    removeFromPaste: (state,action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste removed");
      }
    },
    resetAllPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes removed");
    },
    addToPaste:(state,action)=>{
      const paste=action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes) )
      toast.success("Paste created successfully")

    }
  },
})

// Action creators are generated for each case reducer function
export const { updatePaste, removeFromPaste,resetAllPaste ,addToPaste} = PageSlice.actions

export default PageSlice.reducer