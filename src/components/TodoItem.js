import React from 'react';

const TodoItem = ({id, title, completed, onToggle, onDelete}) => {
    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <input
                    type='checkbox'
                    id={id}
                    checked={completed}
                    onChange={() => onToggle({variables: {id, completed: !completed}})}
                    className="todo-checkbox"
                />
                <label htmlFor={id} className="todo-title">{title}</label>
            </div>
            <button onClick={() => onDelete({variables: {id}}) }> Delete < /button>
                </li>
                );
            };

export default TodoItem;
