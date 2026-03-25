import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  // add task
  const addTask = () => {
    if (task !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  // delete task
  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Task List App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;