import logo from './logo.svg';
import React, {useState, useReducer} from 'react'
import './App.css';

// state.countでアクセスできる

// function reducer(state, action) {
//   return { count: state.count + 1}
// }

const ACTIONS = {
  ICREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  // action = {type: 'decrement'}
  switch(action.type) {
    case ACTIONS.ICREMENT:
      return { count: state.count + 1}
    case ACTIONS.DECREMENT:
      return { count: state.count - 1}
    default:
      return state;
  }   
}

function App() {
  // reducerはコールバック
  const [state, dispatch] = useReducer(reducer, {count:0})
  const [count, setCount] = useState(0)

  const increment = () => {
    dispatch({type: ACTIONS.ICREMENT})
    // setCount(prevCount => prevCount + 1)
  } 
  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT})
    // setCount(prevCount => prevCount - 1)
  } 
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
        {state.count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
