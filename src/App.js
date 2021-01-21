import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  } 
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  } 
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
        {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
