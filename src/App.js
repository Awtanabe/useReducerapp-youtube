import logo from './logo.svg';
import React, {useState, useReducer} from 'react'
import './App.css';

function reducer(state, action) {
  return { count: state.count + 1}
}

function App() {
  // reducerはコールバック
  const [state, dispatch] = useReducer(reducer, {count:0})
  const [count, setCount] = useState(0)

  const increment = () => {
    dispatch()
    // setCount(prevCount => prevCount + 1)
  } 
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
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
