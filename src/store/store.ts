import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
