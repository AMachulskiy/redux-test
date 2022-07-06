import { connect, ConnectedProps } from 'react-redux'
import { decrement, increment, random } from '@src/store/actions'
import React from 'react'
import './counter.scss'

const mapStateToProps = (state) => state
const connector = connect(mapStateToProps)

const Counter: React.FC<ConnectedProps<typeof connector>> = ({
  counter,
  dispatch,
}) => {
  const handleInc = () => dispatch(increment())
  const handleDec = () => dispatch(decrement())
  const handleRnd = () => dispatch(random())
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

export default connector(Counter)
