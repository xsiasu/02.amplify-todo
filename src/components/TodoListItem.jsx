import Button from "./Button";
import React, { useState } from "react";

const TodoListItem = ({ todo, onRemoveTodo, onItemUpdate }) => {
  const { name: todoName, description: todoDescription, id } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todoName);
  const [description, setDescription] = useState(todoDescription);

  const onEditButtonClick = () => {
    if (isEditing) {
      const updataTodo = { ...todo, name, description };
      onItemUpdate(updataTodo);
    }
    setIsEditing(!isEditing);
  };
  return (
    <div>
      {isEditing ? (
        <input value={name} onChange={(event) => setName(event.target.value)} />
      ) : (
        <span>{name}</span>
      )}
      {isEditing ? (
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      ) : (
        <span>{description}</span>
      )}

      <div>
        <Button onClick={onEditButtonClick}>
          {isEditing ? "Save" : "Edit"}
        </Button>
        {!isEditing && <Button onClick={() => onRemoveTodo(id)}>Delete</Button>}
      </div>
    </div>
  );
};

export default TodoListItem;
