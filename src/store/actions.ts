export const actionType = {
  INCREMEIN: 'INCREMEIN',
  DECREMENT: 'DECREMENT',
  RANDOM: 'RANDOM',
}

export const increment = () => ({ type: actionType.INCREMEIN })
export const decrement = () => ({ type: actionType.DECREMENT })
export const random = () => ({
  type: actionType.RANDOM,
  payload: Math.floor(Math.random() * 10),
})
