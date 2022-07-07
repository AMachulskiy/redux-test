import React from 'react'
import './counter.scss'
import { counterSlice } from '@src/store/reducer'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'

const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { counter } = useAppSelector((state) => state.counter)
  const { increment, decrement, random } = counterSlice.actions

  const handleInc = () => dispatch(increment(counter))
  const handleDec = () => dispatch(decrement(counter))
  const handleRnd = () => dispatch(random(Math.floor(Math.random() * 138)))

  return (
    <div className='counter'>
      <h2>{counter}</h2>
      <div className='buttons'>
        <div className='button' onClick={handleInc}>
          _inc
        </div>
        <div className='button' onClick={handleDec}>
          _dec
        </div>
        <div className='button' onClick={handleRnd}>
          _rnd
        </div>
      </div>
    </div>
  )
}

export default Counter
