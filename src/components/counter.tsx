import React, { useEffect } from 'react'
import './counter.scss'

import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import getFilmsAction from '@src/store/films/actions'

const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector((state) => state.films)

  useEffect(() => {
    dispatch(getFilmsAction)
  }, [])

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
  return render(8)
}

export default Counter
