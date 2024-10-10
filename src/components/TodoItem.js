import React from 'react';

const TodoItem = ({id, title, completed }) => {
    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <input
                    type='checkbox'
                    id={id}
                    // checked={completed}
                    className="todo-checkbox"
                />
                <label htmlFor={id} className="todo-title">{title}</label>
            </div>
        </li>
    );
};

export default TodoItem;
