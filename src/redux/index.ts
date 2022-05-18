import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from './coinsSlice'

const store = configureStore({
	reducer: coinsReducer,
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
