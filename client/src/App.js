import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './features/todoSlice';

function App() {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  // Load todos from backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/todos`);
        response.data.forEach((todo) => {
          dispatch(addTodo(todo.text));
        });
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, [dispatch, BACKEND_URL]);

  const handleAddTodo = async () => {
    if (todoText.trim()) {
      try {
        // Send new todo to backend
        const response = await axios.post(`${BACKEND_URL}/todos`, {
          text: todoText,
        });
        dispatch(addTodo(response.data.text));
        setTodoText('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Redux To-Do App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
