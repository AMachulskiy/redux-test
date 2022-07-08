import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filmsSlice from './films/filmsSlice'

const rootReducer = combineReducers({
  films: filmsSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
