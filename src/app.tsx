import React from 'react'
import { Provider } from 'react-redux'
import Counter from './components/counter'
import store from './store/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
