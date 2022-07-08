import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import getFilmsAction from './actions'

interface Film {
  kinopoiskId: 1252447
  imdbId: string
  nameRu: string
  nameEn: string
  nameOriginal: string
  countries: { country: string }[]
  genres: { genre: string }[]
  ratingKinopoisk: number
  ratingImdb: number
  year: number
  type: string
  posterUrl: string
  posterUrlPreview: string
}

interface FilmsState {
  data: Film[]
  isLoading: boolean
  error: string
}

const initialState: FilmsState = {
  data: null,
  isLoading: true,
  error: null,
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    /* getFilms(state) {
      state.isLoading = true
    },
    getFilmsSaccess(state, action: PayloadAction<Film[]>) {
      state.data = action.payload
      state.isLoading = false
    },
    getFilmsError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
    }, */
  },
  extraReducers: {
    [getFilmsAction.pending.type](state) {
      state.isLoading = true
    },
    [getFilmsAction.fulfilled.type](state, action: PayloadAction<Film[]>) {
      state.data = action.payload
      state.isLoading = false
    },
    [getFilmsAction.rejected.type](state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export default filmsSlice
