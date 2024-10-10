import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from "./components/AddTodo";
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <h1>Todo List Application</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;