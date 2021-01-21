import logo from './logo.svg';
import React, {useState, useReducer} from 'react'
import './App.css';
import Todo from './Todo'

// state.countでアクセスできる

// function reducer(state, action) {
//   return { count: state.count + 1}
// }

const ACTIONS = {
  ICREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, {id: new Date, name: action.payload.name, is_complete: false}]
    case 'toggle-todo':
      return todos.map((todo) => {
        debugger
        if (todo.id === action.payload.id) {
          debugger
          return {...todo, is_complete: !todo.is_complete}
        }
        return todo
      })
    case 'delete-todo':
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
     return todos
  }
}

function toggleTodo(todos,newtodo) {
   const newTodos = [...todos]
   const target_todo = newTodos.find((todo) => todo.id === newtodo.id)
   target_todo.is_complete = target_todo.is_complete
   return target_todo
}

function App() {
  // reducerはコールバック
  const [todos, dispatch] = useReducer(reducer,[])
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(name)

    dispatch({type: 'add-todo', payload: { name: name}})
    setName('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input type="submit"/>
      </form>
  {todos.map((todo) => {
    return <Todo todo={todo} dispatch={dispatch}/>
  })}
    </div>
  );
}

export default App;
