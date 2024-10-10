import React from 'react';
import TodoItem from "./TodoItem";
import {ALL_TODO} from "../apollo/todos";
import {useQuery} from "@apollo/client";
import TotalCount from "./TotalCount";

const TodoList = () => {
    const todos = []
    const {loading, error, data } = useQuery(ALL_TODO)

    if (loading) {
    return <div>Loading...</div>
}
if(error){
    return <div>Error: {error.message}</div>
}
    return <div>
        <ul>
            {data.todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>

        <TotalCount />
    </div>
};

export default TodoList;
