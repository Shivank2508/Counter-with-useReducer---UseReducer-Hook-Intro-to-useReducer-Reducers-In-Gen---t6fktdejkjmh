import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { value: 0 })
  return (
    <div id="main">
      <span id='counter'>{state.value}</span>
      <button id='increment-btn' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button id='decrement-btn' onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </div>
  )
}


export default App;
