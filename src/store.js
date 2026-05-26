import { configureStore } from '@reduxjs/toolkit'
import PageReducer from './redux/PageSlice'

export default configureStore({
  reducer: {
    Page: PageReducer,
  },
})