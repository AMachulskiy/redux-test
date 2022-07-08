import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Film {
  kinopoiskId: number
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
    getFilms(state) {
      state.isLoading = true
    },
    getFilmsSaccess(state, action: PayloadAction<Film[]>) {
      state.data = action.payload
      state.isLoading = false
    },
    getFilmsError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export default filmsSlice
