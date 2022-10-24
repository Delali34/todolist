import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Addtodo = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Submit</button>
      </div>
      <div className="edittext">
        <h1>click on task to edit</h1>
      </div>
    </form>
  );
};

export default Addtodo;
