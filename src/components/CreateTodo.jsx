import React from "react";
import Button from "./Button";
const CreateTodo = ({
  name,
  description,
  onNameChange,
  onDescriptionChange,
  onCreate,
}) => (
  <div>
    <input
      onChange={(event) => onNameChange("name", event.target.value)}
      value={name}
      placeholder="Name"
    />
    <input
      onChange={(event) =>
        onDescriptionChange("description", event.target.value)
      }
      value={description}
      placeholder="Description"
    />
    <Button onClick={onCreate}>Create</Button>
  </div>
);

export default CreateTodo;
