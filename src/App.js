import logo from './logo.svg';
import React, {useState, useReducer} from 'react'
import './App.css';

// state.countでアクセスできる

// function reducer(state, action) {
//   return { count: state.count + 1}
// }

function reducer(state, action) {
  // action = {type: 'decrement'}
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1}
    case 'decrement':
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
    dispatch({type: 'increment'})
    // setCount(prevCount => prevCount + 1)
  } 
  const decrement = () => {
    dispatch({type: 'decrement'})
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
