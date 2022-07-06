import { actionType } from './actions'

const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMEIN:
      return { counter: state.counter + 1 }
    case actionType.DECREMENT:
      return { counter: state.counter - 1 }
    case actionType.RANDOM:
      return { counter: action.payload }
    default:
      return state
  }
}

export default reducer
