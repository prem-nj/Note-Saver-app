import { configureStore } from '@reduxjs/toolkit'
import PageReducer from './redux/PageSlice'

export default configureStore({
  reducer: {
    paste: PageReducer,
  },
})