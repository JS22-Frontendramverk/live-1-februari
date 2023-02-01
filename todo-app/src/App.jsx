import './App.css';
import { useState } from 'react';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "Köp kaffe", done: true },
    { id: 1, task: "Köp kaka", done: false },
    { id: 2, task: "Brygg kaffe", done: false },
    { id: 3, task: "Drick kaffe", done: false },
  ]);

  function newTodo(todo) {
    const newTodo = {
      id: todos.length,
      task: todo,
      done: false
    }
    // const tempTodos = [...todos]; // Gör en kopia på vår todos-array
    // tempTodos.push(newTodo); // Uppdaterar kopian med senaste todon
    // setTodos(tempTodos); // Uppdaterar vårt state med kopian

    // 
    setTodos((currentTodos) => {
      return [...currentTodos, newTodo];
    });
  }

  const todosComponents = todos.map((todo) => {
    return <TodoItem task={ todo.task } done={ todo.done } key={ todo.id } />
  });

  console.log(todosComponents);

  return (
    <div className="App">
      <ul className='todos'>
        { todosComponents.length > 0 ? todosComponents : <h2>Inga todos</h2> }
      </ul>
      <AddTodo newTodo={ newTodo } />
    </div>
  )
}

export default App
