import filmsSlice from './filmsSlice'

const { getFilms, getFilmsSaccess, getFilmsError } = filmsSlice.actions

const getFilmsAction = (dispatch) => {
  console.log(getFilmsAction)
  dispatch(getFilms)
  fetch(
    'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': '5723891f-c9c2-4da6-9868-b9ed3ef386de',
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => dispatch(getFilmsSaccess(data.items)))
    .catch((err) => dispatch(getFilmsError(err)))
}

export default getFilmsAction
