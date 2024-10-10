import React, { useState } from 'react';
import {useMutation} from "@apollo/client";
import {ALL_TODO, ADD_TODO} from "../apollo/todos";

const AddTodo = () => {
    const [input, setInput] = useState('');
    const [addTodo, {error}] = useMutation(ADD_TODO)

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (input.trim()) {
            addTodo({
                variables: {
                    title: input,
                    completed: false,
                    userId: 123
                }
            })
            setInput('');
        }
    };

    const handleKey = (event) => {
        if(event.key === "Enter") {
            handleAddTodo()
        }
    }

    if(error) return <div>Error: {error.message}</div>;
    return (
        <form onSubmit={handleAddTodo}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
