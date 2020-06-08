import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    fetchTodos();
    fetchUsers();
  },[]);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8080/users')
    const json = await res.json();
    console.log('json: ', json);
    setUsers(json)
  }

  const fetchTodos = async () => {
    const res = await fetch('http://localhost:8080/todos')
    const json = await res.json();
    setTodos(json)
  }


  return (
    <div>

      <div>
        <h1>users</h1>
        <ul>{users.map(user => <li>{user.name}</li>)}</ul>
      </div>

      <div>
        <h1>todos</h1>
        <ul>{todos.map(todo => <li>{todo.title}</li>)}</ul>
      </div>

    </div>
  );
}

export default App;
