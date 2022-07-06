import React from 'react'
import './counter.scss'

const Counter = (props) => {
  return (
    <div className='counter'>
      <h2>0</h2>
      <div className='buttons'>
        <div className='button'>inc</div>
        <div className='button'>dec</div>
        <div className='button'>rnd</div>
      </div>
    </div>
  )
}

export default Counter
