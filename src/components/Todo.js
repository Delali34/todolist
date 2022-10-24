import React, { useState } from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="whole">
      <div className="todo">
        <input
          style={{ textDecoration: todo.completed && "line-through" }}
          type="text"
          value={todo.title === "" ? newTitle : todo.title}
          className="list"
          onChange={handleChange}
        />
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          Done
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          Save
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
