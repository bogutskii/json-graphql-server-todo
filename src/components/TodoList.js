import React from 'react';
import TodoItem from "./TodoItem";
import {ALL_TODO, UPDATE_TODO, DELETE_TODO} from "../apollo/todos";
import {useQuery, useMutation} from "@apollo/client";
import TotalCount from "./TotalCount";

const TodoList = () => {
    const todos = []
    const {loading, error, data} = useQuery(ALL_TODO)
    const [toggleTodo, {error: updateError}] = useMutation(UPDATE_TODO)
    const [removeTodo, {error: deleteError}] = useMutation(DELETE_TODO, {
        update(cache, {data: {removeTodo}}) {
            cache.modify({
                fields: {
                    allTodos(currentTodos = []) {
                        return currentTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`)
                    }
                }
            })
        }
    })
    if
    (loading) {
        return <div>Loading...</div>
    }
    if (error || updateError || deleteError) {
        return <div>Error: {error.message}</div>
    }
    return <div>
        <ul>
            {data.todos.map((todo) => (
                <TodoItem key={todo.id} onToggle={toggleTodo} onDelete={removeTodo} {...todo} />
            ))}
        </ul>

        <TotalCount/>
    </div>
};

export default TodoList;
