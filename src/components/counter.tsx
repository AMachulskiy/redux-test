import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import getFilmsAction from '@src/store/films/actions'
import './counter.scss'

const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector((state) => state.films)
  console.log(error)

  useEffect(() => {
    dispatch(getFilmsAction())
  }, [])

  /* useEffect(() => {
    console.log(data)
  }, [data]) */

  const render = (id: number) => {
    const { nameRu, nameOriginal, genres, ratingKinopoisk } = data[id]
    return (
      <div className='counter'>
        <p>{nameRu}</p>
        <p>{nameOriginal}</p>
        <p>{genres[0].genre}</p>
        <p>{ratingKinopoisk}</p>
      </div>
    )
  }
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>The request failed...</h1>
  return render(8)
}

export default Counter
