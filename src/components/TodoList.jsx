import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemoveTodo, onItemUpdate }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index}>
            {index}
            <TodoListItem
              todo={todo}
              onRemoveTodo={onRemoveTodo}
              onItemUpdate={onItemUpdate}
            />
          </div>
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default TodoList;
