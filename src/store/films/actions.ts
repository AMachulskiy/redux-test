import { createAsyncThunk } from '@reduxjs/toolkit'

// const { getFilms, getFilmsSaccess, getFilmsError } = filmsSlice.actions

/* const getFilmsAction = (dispatch) => {
  dispatch(getFilms)
  setTimeout(() => {
    fetch(
      'https://ggg.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1',
      {
        method: 'GET',
        headers: {
          'X-API-KEY': '36cdb2e0-8cf8-41a7-9b0f-00a092ca2154',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => dispatch(getFilmsSaccess(data.items)))
      .catch((err) => dispatch(getFilmsError(err.message)))
  }, 2000)
} */
const getFilmsAction = createAsyncThunk('films', (arg, thunkApi) => {
  return fetch(
    'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': '36cdb2e0-8cf8-41a7-9b0f-00a092ca2154',
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.items)
    .catch((err) => thunkApi.rejectWithValue('The request failed...'))
})
export default getFilmsAction
