import React, { useState } from 'react';

import "./App.css";
import InputField from './components/inputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

function App() {
  const [Todo, setTodo] = useState<string>("")
  const [state, setState] = useState<Todo[]>([])  // imported interfece Todo from model

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (Todo) {
      setState([...state, { id: Date.now(), todo: Todo, isDone: false }])
      setTodo("")
    }
  }
  return (
    <>
      <div className="container">
        <div className='heading'>TASK  APP </div>
        <InputField Todo={Todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList state={state} setState={setState} />
      </div>
    </>
  );

}

export default App;
